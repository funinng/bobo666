<template>
    <div class="openai-test">
        <div class="test-container">
            <h1>OpenAI 集成测试</h1>

            <div class="test-section">
                <h2>配置状态</h2>
                <div class="status-grid">
                    <div class="status-item">
                        <span class="label">连接方式:</span>
                        <span class="value" :class="{ 'valid': hasApiKey, 'invalid': !hasApiKey }">
                            {{ config.useProxy ? '代理服务' : '直接连接' }}
                        </span>
                    </div>
                    <div class="status-item" v-if="!config.useProxy">
                        <span class="label">API Key:</span>
                        <span class="value"
                            :class="{ 'valid': config.apiKey && config.apiKey !== 'your_openai_api_key_here', 'invalid': !config.apiKey || config.apiKey === 'your_openai_api_key_here' }">
                            {{ config.apiKey && config.apiKey !== 'your_openai_api_key_here' ? '已配置' : '未配置' }}
                        </span>
                    </div>
                    <div class="status-item" v-if="config.useProxy">
                        <span class="label">代理 URL:</span>
                        <span class="value" :class="{ 'valid': config.proxyUrl, 'invalid': !config.proxyUrl }">
                            {{ config.proxyUrl ? '已配置' : '未配置' }}
                        </span>
                    </div>
                    <div class="status-item">
                        <span class="label">模型:</span>
                        <span class="value">{{ config.model }}</span>
                    </div>
                    <div class="status-item">
                        <span class="label">基础 URL:</span>
                        <span class="value">{{ config.baseURL }}</span>
                    </div>
                </div>
            </div>

            <div class="test-section">
                <h2>快速测试</h2>
                <div class="test-input">
                    <Input v-model="testMessage" placeholder="输入测试消息..." :disabled="isLoading" />
                    <Button @click="sendTestMessage" :disabled="!testMessage.trim() || isLoading" :loading="isLoading">
                        发送测试
                    </Button>
                </div>

                <div v-if="testResponse" class="test-response">
                    <h3>AI 回复:</h3>
                    <div class="response-content">{{ testResponse }}</div>
                </div>

                <div v-if="error" class="error-message">
                    <h3>错误信息:</h3>
                    <div class="error-content">{{ error }}</div>
                </div>
            </div>

            <div class="test-section">
                <h2>功能导航</h2>
                <div class="nav-buttons">
                    <Button @click="goToChat" variant="default">
                        进入聊天界面
                    </Button>
                    <Button @click="goToConfig" variant="outline">
                        配置设置
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { OpenAIService } from '@/services/openai';
import { OpenAIProxyService } from '@/services/openai-proxy';
import { getOpenAIConfig, type OpenAIConfig } from '@/config/openai';

const router = useRouter();

// 响应式数据
const testMessage = ref('');
const testResponse = ref('');
const error = ref('');
const isLoading = ref(false);

// 配置
const config = reactive<OpenAIConfig>({
    apiKey: '',
    baseURL: 'https://api.openai.com/v1',
    model: 'gpt-3.5-turbo',
    useProxy: false,
    proxyUrl: '',
});

// 计算属性
const hasApiKey = computed(() => {
    return (config.apiKey && config.apiKey !== 'your_openai_api_key_here') ||
        (config.useProxy && config.proxyUrl);
});

// 初始化
onMounted(() => {
    try {
        const openaiConfig = getOpenAIConfig();
        Object.assign(config, openaiConfig);
    } catch (err) {
        console.warn('无法加载 OpenAI 配置:', err);
        error.value = '请先配置 OpenAI API Key';
    }
});

// 发送测试消息
const sendTestMessage = async () => {
    if (!testMessage.value.trim() || isLoading.value) return;

    isLoading.value = true;
    error.value = '';
    testResponse.value = '';

    try {
        if (!hasApiKey.value) {
            throw new Error('请先配置 OpenAI API Key 或代理服务');
        }

        // 根据配置选择使用直接连接还是代理服务
        const openaiService = config.useProxy && config.proxyUrl
            ? new OpenAIProxyService({
                proxyUrl: config.proxyUrl,
                model: config.model,
            })
            : new OpenAIService(config);

        const response = await openaiService.chat({
            messages: [
                { role: 'user', content: testMessage.value }
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        testResponse.value = response;
    } catch (err) {
        console.error('测试失败:', err);
        error.value = err instanceof Error ? err.message : '未知错误';
    } finally {
        isLoading.value = false;
    }
};

// 导航函数
const goToChat = () => {
    router.push('/chat');
};

const goToConfig = () => {
    // 这里可以添加配置页面的导航逻辑
    console.log('跳转到配置页面');
};
</script>

<style scoped>
.openai-test {
    min-height: 100vh;
    background: #f8fafc;
    padding: 2rem;
}

.test-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 2rem;
    text-align: center;
}

h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 0.5rem;
}

.test-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.test-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.status-grid {
    display: grid;
    gap: 1rem;
}

.status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: #f9fafb;
    border-radius: 0.375rem;
}

.label {
    font-weight: 500;
    color: #374151;
}

.value {
    font-family: monospace;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}

.value.valid {
    background: #dcfce7;
    color: #166534;
}

.value.invalid {
    background: #fee2e2;
    color: #dc2626;
}

.test-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.test-input .input {
    flex: 1;
}

.test-response,
.error-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.375rem;
}

.test-response {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
}

.error-message {
    background: #fef2f2;
    border: 1px solid #fecaca;
}

.response-content,
.error-content {
    white-space: pre-wrap;
    line-height: 1.6;
    color: #374151;
}

.error-content {
    color: #dc2626;
}

.nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}
</style>
