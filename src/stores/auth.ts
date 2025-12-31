import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { SSOService } from '@/services/sso';

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  name: string;
  provider?: string;
  roles?: string[];
  createdAt?: string;
}

export const useAuthStore = defineStore('auth', () => {
  // 状态
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const isLoading = ref(false);
  const loginRedirect = ref<string>('/');

  // 计算属性
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const userInitials = computed(() => {
    if (!user.value) return '';
    const name = user.value.name || user.value.username;
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  });

  // 初始化 - 从localStorage恢复状态
  const initAuth = () => {
    const storedToken = localStorage.getItem('access_token');
    const storedUser = localStorage.getItem('user_info');

    if (storedToken && storedUser) {
      try {
        token.value = storedToken;
        user.value = JSON.parse(storedUser);
      } catch (error) {
        console.error('恢复用户状态失败:', error);
        clearAuth();
      }
    }
  };

  // 传统登录
  const login = async (credentials: { username: string; password: string; remember?: boolean }) => {
    try {
      isLoading.value = true;

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '登录失败');
      }

      const data = await response.json();
      await setAuthData(data);

      return data;
    } catch (error) {
      console.error('登录失败:', error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  // SSO登录
  const ssoLogin = async (provider: string) => {
    try {
      isLoading.value = true;

      // 保存登录重定向地址
      if (loginRedirect.value && loginRedirect.value !== '/') {
        sessionStorage.setItem('login_redirect', loginRedirect.value);
      }

      await SSOService.handleSSOLogin(provider);
    } catch (error) {
      isLoading.value = false;
      throw error;
    }
  };

  // 处理SSO回调
  const handleSSOCallback = async (code: string, state: string, provider: string) => {
    try {
      isLoading.value = true;

      const data = await SSOService.handleSSOCallback(code, state, provider);
      await setAuthData(data);

      return data;
    } catch (error) {
      console.error('SSO回调处理失败:', error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  // 设置认证数据
  const setAuthData = async (data: { access_token: string; user: User }) => {
    token.value = data.access_token;
    user.value = data.user;

    // 持久化存储
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user_info', JSON.stringify(data.user));

    console.log('用户登录成功:', data.user);
  };

  // 退出登录
  const logout = async (silent = false) => {
    try {
      if (!silent) {
        isLoading.value = true;
      }

      // 调用后端登出接口
      if (token.value) {
        try {
          await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token.value}`,
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.warn('后端登出失败:', error);
        }
      }

      // 清理状态和存储
      clearAuth();

      if (!silent) {
        // 可以显示退出成功消息
        console.log('用户已退出登录');
      }
    } catch (error) {
      console.error('退出登录失败:', error);
      throw error;
    } finally {
      if (!silent) {
        isLoading.value = false;
      }
    }
  };

  // 清理认证状态
  const clearAuth = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    sessionStorage.removeItem('sso_provider');
    sessionStorage.removeItem('sso_timestamp');
  };

  // 刷新用户信息
  const refreshUser = async () => {
    if (!token.value) return;

    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          // token已过期，清理状态
          clearAuth();
          return;
        }
        throw new Error('获取用户信息失败');
      }

      const userData = await response.json();
      user.value = userData;
      localStorage.setItem('user_info', JSON.stringify(userData));
    } catch (error) {
      console.error('刷新用户信息失败:', error);
    }
  };

  // 设置登录重定向地址
  const setLoginRedirect = (path: string) => {
    loginRedirect.value = path;
  };

  // 检查token是否有效
  const validateToken = async () => {
    if (!token.value) return false;

    try {
      const response = await fetch('/api/auth/validate', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (!response.ok) {
        clearAuth();
        return false;
      }

      return true;
    } catch (error) {
      console.error('Token验证失败:', error);
      clearAuth();
      return false;
    }
  };

  return {
    // 状态
    user,
    token,
    isLoading,
    loginRedirect,

    // 计算属性
    isAuthenticated,
    userInitials,

    // 方法
    initAuth,
    login,
    ssoLogin,
    handleSSOCallback,
    logout,
    clearAuth,
    refreshUser,
    setLoginRedirect,
    validateToken,
  };
});
