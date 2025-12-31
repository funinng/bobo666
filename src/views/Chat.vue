<template>
    <div class="chat-page">
        <div class="chat-header">
            <h1 class="chat-title">AI 聊天助手</h1>
            <div class="chat-actions">
                <Button @click="clearChat" variant="outline" size="sm">
                    <Icon icon="mdi:delete" class="mr-2" />
                    清空对话
                </Button>
                <Button @click="showConfig = !showConfig" variant="outline" size="sm">
                    <Icon icon="mdi:cog" class="mr-2" />
                    设置
                </Button>
            </div>
        </div>

        <ChatInterface :show-config="showConfig" @config-updated="handleConfigUpdate" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';
import ChatInterface from '@/components/ChatInterface.vue';

const showConfig = ref(false);

const clearChat = () => {
    // 这里可以添加清空聊天的逻辑
    if (confirm('确定要清空所有对话记录吗？')) {
        // 清空逻辑
        console.log('清空对话');
    }
};

const handleConfigUpdate = () => {
    showConfig.value = false;
};
</script>

<style scoped>
.chat-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
}

.chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.chat-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
}

.chat-actions {
    display: flex;
    gap: 0.5rem;
}
</style>




