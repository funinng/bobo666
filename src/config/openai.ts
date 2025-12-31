// OpenAI 配置管理
export interface OpenAIConfig {
  apiKey: string;
  baseURL: string;
  model: string;
  useProxy?: boolean; // 是否使用代理服务
  proxyUrl?: string; // 代理服务 URL
}

// 从环境变量获取配置
export const getOpenAIConfig = (): OpenAIConfig => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const baseURL = import.meta.env.VITE_OPENAI_BASE_URL || 'https://api.openai.com/v1';
  const model = import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo';
  const useProxy = import.meta.env.VITE_OPENAI_USE_PROXY === 'true';
  const proxyUrl = import.meta.env.VITE_OPENAI_PROXY_URL;

  if (!useProxy && !apiKey) {
    throw new Error('请设置 VITE_OPENAI_API_KEY 环境变量或启用代理模式');
  }

  if (useProxy && !proxyUrl) {
    throw new Error('使用代理模式时请设置 VITE_OPENAI_PROXY_URL 环境变量');
  }

  return {
    apiKey: apiKey || '',
    baseURL,
    model,
    useProxy,
    proxyUrl,
  };
};

// 默认配置
export const defaultOpenAIConfig: OpenAIConfig = {
  apiKey: 'your_openai_api_key_here',
  baseURL: 'https://api.openai.com/v1',
  model: 'gpt-3.5-turbo',
  useProxy: false,
  proxyUrl: '',
};
