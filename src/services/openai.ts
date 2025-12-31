import OpenAI from 'openai';

// OpenAI 配置接口
export interface OpenAIConfig {
  apiKey: string;
  baseURL?: string;
  model?: string;
}

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

// OpenAI 服务类
export class OpenAIService {
  private client: OpenAI;
  private config: OpenAIConfig;

  constructor(config: OpenAIConfig) {
    this.config = {
      model: 'gpt-3.5-turbo',
      baseURL: 'https://api.openai.com/v1',
      ...config,
    };

    this.client = new OpenAI({
      apiKey: this.config.apiKey,
      baseURL: this.config.baseURL,
      dangerouslyAllowBrowser: true, // 允许在浏览器中使用
    });
  }

  // 发送聊天请求
  async chat(request: ChatRequest): Promise<string> {
    try {
      const response = await this.client.chat.completions.create({
        model: this.config.model!,
        messages: request.messages,
        temperature: request.temperature || 0.7,
        max_tokens: request.max_tokens || 1000,
        stream: false,
      });

      return response.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('OpenAI API 错误:', error);
      throw new Error('无法连接到 OpenAI 服务');
    }
  }

  // 流式聊天请求
  async *chatStream(request: ChatRequest): AsyncGenerator<string, void, unknown> {
    try {
      const stream = await this.client.chat.completions.create({
        model: this.config.model!,
        messages: request.messages,
        temperature: request.temperature || 0.7,
        max_tokens: request.max_tokens || 1000,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          yield content;
        }
      }
    } catch (error) {
      console.error('OpenAI 流式 API 错误:', error);
      throw new Error('无法连接到 OpenAI 流式服务');
    }
  }

  // 更新配置
  updateConfig(newConfig: Partial<OpenAIConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.client = new OpenAI({
      apiKey: this.config.apiKey,
      baseURL: this.config.baseURL,
      dangerouslyAllowBrowser: true, // 允许在浏览器中使用
    });
  }

  // 获取当前配置
  getConfig(): OpenAIConfig {
    return { ...this.config };
  }
}

// 创建默认的 OpenAI 服务实例
export const createOpenAIService = (config: OpenAIConfig): OpenAIService => {
  return new OpenAIService(config);
};
