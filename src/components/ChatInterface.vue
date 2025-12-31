<template>
    <div class="chat-interface">
        <!-- 聊天消息区域 -->
        <div class="chat-messages" ref="messagesContainer">
            <div v-for="(message, index) in messages" :key="index" class="message" :class="message.role">
                <div class="message-avatar">
                    <Icon :icon="message.role === 'user' ? 'mdi:account' : 'mdi:robot'" class="avatar-icon" />
                </div>
                <div class="message-content">
                    <div class="message-text" v-html="formatMessage(message.content)"></div>
                    <div class="message-time">{{ formatTime(message.timestamp) }}</div>
                </div>
            </div>

            <!-- 加载状态 -->
            <div v-if="isLoading" class="message assistant">
                <div class="message-avatar">
                    <Icon icon="mdi:robot" class="avatar-icon" />
                </div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 输入区域 -->
        <div class="chat-input">
            <div class="input-container">
                <textarea v-model="inputMessage" @keydown="handleKeyDown" placeholder="输入您的消息..." class="message-input"
                    :disabled="isLoading" rows="1" ref="messageInput"></textarea>
                <Button @click="sendMessage" :disabled="!inputMessage.trim() || isLoading" class="send-button"
                    size="sm">
                    <Icon icon="mdi:send" />
                </Button>
            </div>
        </div>

        <!-- 配置面板 -->
        <div class="config-panel" v-if="showConfig">
            <div class="config-content">
                <h3>OpenAI 配置</h3>
                
                <!-- 配置指南 -->
                <div class="config-guide">
                    <h4>🔑 如何获取 API 密钥？</h4>
                    <ol>
                        <li>访问 <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI API Keys</a></li>
                        <li>登录您的账户</li>
                        <li>点击 "Create new secret key"</li>
                        <li>复制生成的密钥并粘贴到下方</li>
                    </ol>
                </div>
                
                <div class="config-item">
                    <Label>API Key</Label>
                    <Input v-model="config.apiKey" type="password" placeholder="sk-proj-... 或 sk-..." />
                    <small class="config-hint">
                        密钥格式：以 sk- 开头的长字符串
                    </small>
                </div>
                <div class="config-item">
                    <Label>模型</Label>
                    <select v-model="config.model" class="model-select">
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                        <option value="gpt-4">GPT-4</option>
                        <option value="gpt-4-turbo">GPT-4 Turbo</option>
                    </select>
                </div>
                <div class="config-item">
                    <Label>
                        <input type="checkbox" v-model="config.useProxy" class="mr-2" />
                        使用代理服务
                    </Label>
                    <Input v-if="config.useProxy" v-model="config.proxyUrl"
                        placeholder="代理服务 URL (例如: http://localhost:3001/api/openai)" />
                </div>
                <div class="config-actions">
                    <Button @click="saveConfig" variant="default">保存配置</Button>
                    <Button @click="showConfig = false" variant="outline">关闭</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { OpenAIService, type Message } from '@/services/openai';
import { OpenAIProxyService } from '@/services/openai-proxy';
import { getOpenAIConfig, type OpenAIConfig } from '@/config/openai';

// 响应式数据
const messages = ref<Array<Message & { timestamp: Date }>>([]);
const inputMessage = ref('');
const isLoading = ref(false);
const showConfig = ref(false);
const messagesContainer = ref<HTMLElement>();
const messageInput = ref<HTMLTextAreaElement>();

// OpenAI 服务
let openaiService: OpenAIService | OpenAIProxyService | null = null;

// 配置
const config = reactive<OpenAIConfig>({
    apiKey: '',
    baseURL: 'https://api.openai.com/v1',
    model: 'gpt-3.5-turbo',
    useProxy: false,
    proxyUrl: '',
});

// 初始化
onMounted(async () => {
    try {
        const openaiConfig = getOpenAIConfig();
        Object.assign(config, openaiConfig);

        // 根据配置选择使用直接连接还是代理服务
        if (config.useProxy && config.proxyUrl) {
            openaiService = new OpenAIProxyService({
                proxyUrl: config.proxyUrl,
                model: config.model,
            });
        } else {
            openaiService = new OpenAIService(config);
        }
    } catch (error) {
        console.warn('无法加载 OpenAI 配置，请手动配置:', error);
        showConfig.value = true;
    }
});

// 发送消息
const sendMessage = async () => {
    if (!inputMessage.value.trim() || isLoading.value) return;

    const userMessage = inputMessage.value.trim();
    inputMessage.value = '';

    // 添加用户消息
    messages.value.push({
        role: 'user',
        content: userMessage,
        timestamp: new Date(),
    });

    isLoading.value = true;
    scrollToBottom();

    try {
        if (!openaiService) {
            throw new Error('OpenAI 服务未初始化');
        }

        // 构建消息历史
        const chatMessages: Message[] = messages.value.map(msg => ({
            role: msg.role,
            content: msg.content,
        }));

        // 发送请求
        const response = await openaiService.chat({
            messages: chatMessages,
            temperature: 0.7,
            max_tokens: 1000,
        });

        // 添加助手回复
        messages.value.push({
            role: 'assistant',
            content: response,
            timestamp: new Date(),
        });
  } catch (error) {
    console.error('发送消息失败:', error);
    let errorMessage = '抱歉，我遇到了一些问题。';
    
    // 根据错误类型提供具体的解决建议
    if (error instanceof Error) {
      if (error.message.includes('invalid_api_key') || error.message.includes('Incorrect API key')) {
        errorMessage = '❌ API 密钥无效。请点击设置按钮配置正确的 OpenAI API 密钥。\n\n💡 获取密钥：https://platform.openai.com/account/api-keys';
        showConfig.value = true; // 自动打开配置面板
      } else if (error.message.includes('insufficient_quota') || error.message.includes('quota')) {
        errorMessage = '💰 账户余额不足。请检查您的 OpenAI 账户余额。\n\n💡 充值地址：https://platform.openai.com/account/billing';
      } else if (error.message.includes('rate_limit')) {
        errorMessage = '⏱️ 请求过于频繁。请稍等片刻后重试。';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorMessage = '🌐 网络连接问题。请检查网络连接或稍后重试。';
      }
    }
    
    messages.value.push({
      role: 'assistant',
      content: errorMessage,
      timestamp: new Date(),
    });
  } finally {
        isLoading.value = false;
        scrollToBottom();
    }
};

// 处理键盘事件
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
};

// 滚动到底部
const scrollToBottom = () => {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
    });
};

// 格式化消息内容
const formatMessage = (content: string): string => {
    return content
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
};

// 格式化时间
const formatTime = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

// 保存配置
const saveConfig = () => {
    try {
        // 根据配置选择使用直接连接还是代理服务
        if (config.useProxy && config.proxyUrl) {
            openaiService = new OpenAIProxyService({
                proxyUrl: config.proxyUrl,
                model: config.model,
            });
        } else {
            openaiService = new OpenAIService(config);
        }
        showConfig.value = false;
        // 这里可以添加配置持久化逻辑
        localStorage.setItem('openai-config', JSON.stringify(config));
    } catch (error) {
        console.error('保存配置失败:', error);
    }
};

// 监听消息变化，自动滚动
watch(messages, () => {
    scrollToBottom();
}, { deep: true });
</script>

<style scoped>
.chat-interface {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.message {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
}

.message.user {
    flex-direction: row-reverse;
}

.message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.message.user .message-avatar {
    background: #3b82f6;
    color: white;
}

.message.assistant .message-avatar {
    background: #10b981;
    color: white;
}

.avatar-icon {
    width: 18px;
    height: 18px;
}

.message-content {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.message.user .message-content {
    align-items: flex-end;
}

.message-text {
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
}

.message.user .message-text {
    background: #3b82f6;
    color: white;
    border-bottom-right-radius: 0.25rem;
}

.message.assistant .message-text {
    background: #f3f4f6;
    color: #374151;
    border-bottom-left-radius: 0.25rem;
}

.message-time {
    font-size: 0.75rem;
    color: #6b7280;
    padding: 0 0.5rem;
}

.typing-indicator {
    display: flex;
    gap: 0.25rem;
    padding: 0.75rem 1rem;
    background: #f3f4f6;
    border-radius: 1rem;
    border-bottom-left-radius: 0.25rem;
}

.typing-indicator span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #9ca3af;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {

    0%,
    60%,
    100% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(-10px);
    }
}

.chat-input {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
}

.input-container {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
}

.message-input {
    flex: 1;
    min-height: 40px;
    max-height: 120px;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    resize: none;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.5;
}

.message-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.send-button {
    height: 40px;
    width: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.config-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.config-content {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    max-width: 400px;
    width: 90%;
}

.config-item {
    margin-bottom: 1rem;
}

.config-item label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.model-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
}

.config-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.config-guide {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.config-guide h4 {
  margin: 0 0 0.5rem 0;
  color: #0369a1;
  font-size: 0.875rem;
  font-weight: 600;
}

.config-guide ol {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: #374151;
}

.config-guide li {
  margin-bottom: 0.25rem;
}

.config-guide a {
  color: #2563eb;
  text-decoration: underline;
}

.config-hint {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
}
</style>
