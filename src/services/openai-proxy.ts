// 使用代理服务器的 OpenAI 服务
// 这种方式更安全，因为 API 密钥不会暴露在浏览器中

// 消息接口
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// 聊天请求接口
export interface ChatRequest {
  messages: Message[];
  stream?: boolean;
  temperature?: number;
  max_tokens?: number;
}

// 代理配置接口
export interface ProxyConfig {
  proxyUrl: string;
  model?: string;
}

// 使用代理的 OpenAI 服务类
export class OpenAIProxyService {
  private config: ProxyConfig;

  constructor(config: ProxyConfig) {
    this.config = {
      model: 'gpt-3.5-turbo',
      ...config,
    };
  }

  // 发送聊天请求
  async chat(request: ChatRequest): Promise<string> {
    try {
      const response = await fetch(`${this.config.proxyUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model,
          messages: request.messages,
          temperature: request.temperature || 0.7,
          max_tokens: request.max_tokens || 1000,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('OpenAI 代理 API 错误:', error);
      throw new Error('无法连接到 OpenAI 代理服务');
    }
  }

  // 流式聊天请求
  async *chatStream(request: ChatRequest): AsyncGenerator<string, void, unknown> {
    try {
      const response = await fetch(`${this.config.proxyUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model,
          messages: request.messages,
          temperature: request.temperature || 0.7,
          max_tokens: request.max_tokens || 1000,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('无法获取响应流');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') return;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content;
              if (content) {
                yield content;
              }
            } catch (e) {
              // 忽略解析错误
            }
          }
        }
      }
    } catch (error) {
      console.error('OpenAI 代理流式 API 错误:', error);
      throw new Error('无法连接到 OpenAI 代理流式服务');
    }
  }

  // 更新配置
  updateConfig(newConfig: Partial<ProxyConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // 获取当前配置
  getConfig(): ProxyConfig {
    return { ...this.config };
  }
}

// 创建默认的 OpenAI 代理服务实例
export const createOpenAIProxyService = (config: ProxyConfig): OpenAIProxyService => {
  return new OpenAIProxyService(config);
};




