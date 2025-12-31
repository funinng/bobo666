<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
    <!-- 加载动画 -->
    <div class="text-center">
      <div class="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-pulse">
        <Icon icon="mdi-loading" class="w-8 h-8 text-white animate-spin" />
      </div>
      
      <h1 class="text-2xl font-bold text-gray-800 mb-2">正在处理登录...</h1>
      <p class="text-gray-600 mb-6">请稍候，我们正在验证您的身份</p>
      
      <!-- 进度条 -->
      <div class="w-64 bg-gray-200 rounded-full h-2 mx-auto mb-4">
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse" :style="{ width: progress + '%' }"></div>
      </div>
      
      <p class="text-sm text-gray-500">{{ statusMessage }}</p>
      
      <!-- 错误信息 -->
      <div v-if="error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
        <div class="flex items-center gap-2 text-red-800">
          <Icon icon="mdi-alert-circle" class="w-5 h-5" />
          <span class="font-medium">登录失败</span>
        </div>
        <p class="text-sm text-red-600 mt-1">{{ error }}</p>
        <button 
          @click="redirectToLogin"
          class="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          返回登录页面
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const progress = ref(0)
const statusMessage = ref('正在验证身份...')
const error = ref('')

// 处理SSO回调
const handleCallback = async () => {
  try {
    // 更新进度
    progress.value = 20
    statusMessage.value = '获取授权码...'

    const { code, state, error: authError } = route.query
    const provider = route.params.provider as string

    if (authError) {
      throw new Error(`授权失败: ${authError}`)
    }

    if (!code || !state) {
      throw new Error('缺少必要的授权参数')
    }

    // 更新进度
    progress.value = 50
    statusMessage.value = '验证授权信息...'

    // 处理SSO回调
    const result = await authStore.handleSSOCallback(
      code as string, 
      state as string, 
      provider
    )

    console.log('SSO登录成功:', result)

    // 更新进度
    progress.value = 80
    statusMessage.value = '登录成功，正在跳转...'

    // 延迟一下让用户看到成功信息
    setTimeout(() => {
      progress.value = 100
      statusMessage.value = '登录完成！'
      
      // 跳转到首页或原来的页面
      const redirect = sessionStorage.getItem('login_redirect') || '/'
      sessionStorage.removeItem('login_redirect')
      router.replace(redirect)
    }, 500)

  } catch (err: any) {
    console.error('SSO回调处理失败:', err)
    error.value = err.message || '登录处理失败，请重试'
    progress.value = 0
    statusMessage.value = ''
  }
}

// 返回登录页面
const redirectToLogin = () => {
  router.replace('/login')
}

// 模拟进度更新
const updateProgress = () => {
  const interval = setInterval(() => {
    if (progress.value < 15) {
      progress.value += 1
    } else {
      clearInterval(interval)
    }
  }, 100)
}

onMounted(() => {
  updateProgress()
  handleCallback()
})
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
