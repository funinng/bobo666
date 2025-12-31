import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Message } from '@/services/openai';

export interface ChatMessage extends Message {
  id: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export const useChatStore = defineStore('chat', () => {
  // 状态
  const messages = ref<ChatMessage[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const isConnected = ref(false);

  // 计算属性
  const messageCount = computed(() => messages.value.length);
  const hasMessages = computed(() => messages.value.length > 0);
  const lastMessage = computed(() =>
    messages.value.length > 0 ? messages.value[messages.value.length - 1] : null
  );

  // 操作
  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: generateId(),
      timestamp: new Date(),
      status: 'sent',
    };
    messages.value.push(newMessage);
  };

  const updateMessage = (id: string, updates: Partial<Omit<ChatMessage, 'id' | 'timestamp'>>) => {
    const index = messages.value.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      messages.value[index] = { ...messages.value[index], ...updates };
    }
  };

  const removeMessage = (id: string) => {
    const index = messages.value.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      messages.value.splice(index, 1);
    }
  };

  const clearMessages = () => {
    messages.value = [];
  };

  const setLoading = (loading: boolean) => {
    isLoading.value = loading;
  };

  const setError = (errorMessage: string | null) => {
    error.value = errorMessage;
  };

  const setConnected = (connected: boolean) => {
    isConnected.value = connected;
  };

  const clearError = () => {
    error.value = null;
  };

  // 工具函数
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // 导出状态和操作
  return {
    // 状态
    messages,
    isLoading,
    error,
    isConnected,

    // 计算属性
    messageCount,
    hasMessages,
    lastMessage,

    // 操作
    addMessage,
    updateMessage,
    removeMessage,
    clearMessages,
    setLoading,
    setError,
    setConnected,
    clearError,
  };
});
