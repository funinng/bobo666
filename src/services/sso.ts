// SSO登录服务
import { ssoConfig } from '@/config';

export interface SSOProvider {
  name: string;
  icon: string;
  color: string;
  hoverColor: string;
  clientId?: string;
  redirectUri?: string;
}

export const ssoProviders: Record<string, SSOProvider> = {
  wechat: {
    name: '微信登录',
    icon: 'mdi-wechat',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    clientId: ssoConfig.wechat.clientId,
    redirectUri: `${window.location.origin}/auth/wechat/callback`,
  },
  alipay: {
    name: '支付宝登录',
    icon: 'mdi-alipay',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    clientId: ssoConfig.alipay.clientId,
    redirectUri: `${window.location.origin}/auth/alipay/callback`,
  },
  qq: {
    name: 'QQ登录',
    icon: 'mdi-qqchat',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    clientId: ssoConfig.qq.clientId,
    redirectUri: `${window.location.origin}/auth/qq/callback`,
  },
  github: {
    name: 'GitHub登录',
    icon: 'mdi-github',
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900',
    clientId: ssoConfig.github.clientId,
    redirectUri: `${window.location.origin}/auth/github/callback`,
  },
  google: {
    name: 'Google登录',
    icon: 'mdi-google',
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    clientId: ssoConfig.google.clientId,
    redirectUri: `${window.location.origin}/auth/google/callback`,
  },
  microsoft: {
    name: 'Microsoft登录',
    icon: 'mdi-microsoft',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    clientId: ssoConfig.microsoft.clientId,
    redirectUri: `${window.location.origin}/auth/microsoft/callback`,
  },
};

export class SSOService {
  /**
   * 获取SSO登录URL
   */
  static getAuthUrl(provider: string): string {
    const config = ssoProviders[provider];
    if (!config) {
      throw new Error(`不支持的SSO提供商: ${provider}`);
    }

    const baseUrls: Record<string, string> = {
      wechat: 'https://open.weixin.qq.com/connect/qrconnect',
      alipay: 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm',
      qq: 'https://graph.qq.com/oauth2.0/authorize',
      github: 'https://github.com/login/oauth/authorize',
      google: 'https://accounts.google.com/oauth2/v2/auth',
      microsoft: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    };

    const scopes: Record<string, string> = {
      wechat: 'snsapi_login',
      alipay: 'auth_user',
      qq: 'get_user_info',
      github: 'user:email',
      google: 'openid email profile',
      microsoft: 'openid email profile',
    };

    const params = new URLSearchParams({
      client_id: config.clientId || '',
      redirect_uri: config.redirectUri || '',
      scope: scopes[provider] || '',
      response_type: 'code',
      state: this.generateState(),
    });

    return `${baseUrls[provider]}?${params.toString()}`;
  }

  /**
   * 处理SSO登录
   */
  static async handleSSOLogin(provider: string): Promise<void> {
    try {
      const authUrl = this.getAuthUrl(provider);

      // 保存登录状态
      sessionStorage.setItem('sso_provider', provider);
      sessionStorage.setItem('sso_timestamp', Date.now().toString());

      // 跳转到SSO提供商
      window.location.href = authUrl;
    } catch (error) {
      console.error(`${provider} 登录失败:`, error);
      throw error;
    }
  }

  /**
   * 处理SSO回调
   */
  static async handleSSOCallback(code: string, state: string, provider: string): Promise<any> {
    try {
      // 验证state参数
      if (!this.validateState(state)) {
        throw new Error('无效的state参数');
      }

      // 调用后端API交换token
      const response = await fetch('/api/auth/sso/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider,
          code,
          state,
        }),
      });

      if (!response.ok) {
        throw new Error('SSO登录失败');
      }

      const data = await response.json();

      // 保存用户信息和token
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user_info', JSON.stringify(data.user));

      // 清理临时状态
      sessionStorage.removeItem('sso_provider');
      sessionStorage.removeItem('sso_timestamp');

      return data;
    } catch (error) {
      console.error('SSO回调处理失败:', error);
      throw error;
    }
  }

  /**
   * 生成随机state参数
   */
  private static generateState(): string {
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    // 存储state到sessionStorage用于验证
    sessionStorage.setItem('sso_state', state);
    sessionStorage.setItem('sso_state_timestamp', Date.now().toString());
    return state;
  }

  /**
   * 验证state参数
   */
  private static validateState(state: string): boolean {
    const storedState = sessionStorage.getItem('sso_state');
    const stateTimestamp = sessionStorage.getItem('sso_state_timestamp');
    
    // 验证state是否匹配
    if (!storedState || storedState !== state) {
      console.error('State参数不匹配');
      return false;
    }
    
    // 验证state是否过期 (5分钟)
    if (stateTimestamp) {
      const timestamp = parseInt(stateTimestamp);
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;
      
      if (now - timestamp > fiveMinutes) {
        console.error('State参数已过期');
        this.clearStateData();
        return false;
      }
    }
    
    // 验证成功后清理state数据
    this.clearStateData();
    return true;
  }

  /**
   * 清理state相关数据
   */
  private static clearStateData(): void {
    sessionStorage.removeItem('sso_state');
    sessionStorage.removeItem('sso_state_timestamp');
  }

  /**
   * 检查是否已登录
   */
  static isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  /**
   * 获取用户信息
   */
  static getUserInfo(): any {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  /**
   * 退出登录
   */
  static logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    sessionStorage.removeItem('sso_provider');
    sessionStorage.removeItem('sso_timestamp');
    this.clearStateData();
  }
}

export default SSOService;
