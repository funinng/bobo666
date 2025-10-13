// SSO配置文件
export const ssoConfig = {
  // 微信登录配置
  wechat: {
    clientId: import.meta.env.VITE_WECHAT_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_WECHAT_CLIENT_ID,
  },

  // 支付宝登录配置
  alipay: {
    clientId: import.meta.env.VITE_ALIPAY_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_ALIPAY_CLIENT_ID,
  },

  // QQ登录配置
  qq: {
    clientId: import.meta.env.VITE_QQ_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_QQ_CLIENT_ID,
  },

  // GitHub登录配置
  github: {
    clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_GITHUB_CLIENT_ID,
  },

  // Google登录配置
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_GOOGLE_CLIENT_ID,
  },

  // Microsoft登录配置
  microsoft: {
    clientId: import.meta.env.VITE_MICROSOFT_CLIENT_ID || '',
    enabled: !!import.meta.env.VITE_MICROSOFT_CLIENT_ID,
  },
};

// API配置
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
};

export default {
  sso: ssoConfig,
  api: apiConfig,
};
