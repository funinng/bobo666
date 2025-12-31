<template>
  <div
    class="min-h-screen bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
    <!-- 背景装饰 - 优化溢出 -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob">
      </div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000">
      </div>
      <div
        class="absolute top-40 left-40 w-80 h-80 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000">
      </div>
      <div
        class="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-6000">
      </div>
    </div>

    <!-- 桌面端主容器 -->
    <div
      class="relative flex w-full max-w-5xl min-h-[500px] max-h-[90vh] backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
      <!-- 左侧装饰面板 - 桌面端专用 -->
      <div class="hidden lg:flex lg:w-1/2  relative overflow-hidden">
        <!-- 装饰图案 -->
        <div class="absolute inset-0">
          <div class="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div class="absolute bottom-32 right-32 w-24 h-24 bg-white/5 rounded-full animate-float animation-delay-2000">
          </div>
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-4000">
          </div>
        </div>

        <!-- 内容 -->
        <div class="relative z-10 flex flex-col justify-center p-8 lg:p-10 text-blue-800">
          <div class="mb-6">
            <div class="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Icon icon="mdi-shield-star" class="w-8 h-8 text-blue-700" />
            </div>
            <h1 class="text-3xl lg:text-4xl font-bold mb-3 opacity-95">欢迎使用</h1>
            <h2 class="text-xl lg:text-2xl font-light mb-4 opacity-90">统一身份认证系统</h2>
            <p class="text-base lg:text-lg opacity-80 leading-relaxed">
              安全、便捷的单点登录体验<br>
              支持多种第三方账户登录<br>
              企业级安全保障
            </p>
          </div>

          <!-- 特性列表 -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <Icon icon="mdi-check-circle" class="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span class="text-sm opacity-90">多平台账户支持</span>
            </div>
            <div class="flex items-center gap-3">
              <Icon icon="mdi-check-circle" class="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span class="text-sm opacity-90">企业级安全认证</span>
            </div>
            <div class="flex items-center gap-3">
              <Icon icon="mdi-check-circle" class="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span class="text-sm opacity-90">一键快速登录</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="flex-1 lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center overflow-y-auto max-h-[90vh]">
        <!-- Logo和标题 -->
        <div class="text-center mb-6">
          <div class="mx-auto w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
            <Icon icon="mdi-shield-account" class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-xl lg:text-2xl font-bold text-gray-800 mb-2">欢迎回来</h1>
          <p class="text-sm lg:text-base text-gray-600">选择您的登录方式</p>
        </div>

        <!-- SSO登录选项 -->
        <div class="space-y-3 mb-4">
          <h3 class="text-sm font-medium text-gray-700 text-center mb-3">第三方登录</h3>
          <div class="grid grid-cols-2 gap-2">
            <button v-for="(provider, key) in enabledProviders" :key="key" @click="handleSSOLogin(key)"
              :disabled="isLoading" :class="[
                'flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
                provider.color,
                provider.hoverColor,
                'text-white border-transparent'
              ]">
              <Icon :icon="provider.icon" class="w-4 h-4" />
              <span class="hidden sm:inline">{{ provider.name }}</span>
            </button>
          </div>
        </div>

        <!-- 分割线 -->
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">或使用账号密码</span>
          </div>
        </div>

        <!-- 传统登录表单 -->
        <form @submit.prevent="handleLogin" class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">用户名/邮箱</label>
            <div class="relative">
              <Icon icon="mdi-account"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input v-model="loginForm.username" type="text" placeholder="请输入用户名或邮箱"
                class="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <div class="relative">
              <Icon icon="mdi-lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input v-model="loginForm.password" :type="showPassword ? 'text' : 'password'" placeholder="请输入密码"
                class="w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                required />
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Icon :icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex text-blue-600 items-center space-x-2">
              <Checkbox id="remember" v-model="loginForm.remember" />
              <label for="remember"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                记住我
              </label>
            </div>
            <a href="#" class="text-sm text-blue-600 hover:text-blue-800">忘记密码？</a>
          </div>

          <button type="submit" :disabled="isLoading"
            class="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm">
            <span v-if="!isLoading">登录</span>
            <div v-else class="flex items-center justify-center gap-2">
              <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>登录中...</span>
            </div>
          </button>
        </form>

        <!-- 注册链接 -->
        <div class="mt-4 text-center">
          <p class="text-xs text-gray-600">
            还没有账户？
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">立即注册</a>
          </p>
        </div>

        <!-- 安全提示 -->
        <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div class="flex items-start gap-2">
            <Icon icon="mdi-shield-check" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-xs text-blue-800 font-medium">安全提示</p>
              <p class="text-xs text-blue-600 mt-1">我们使用业界标准的加密技术保护您的账户安全</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ssoProviders } from '@/services/sso'
import { ssoConfig } from '@/config'
import { Checkbox } from '@/components/ui/checkbox'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// 响应式数据
const showPassword = ref(false)
const isLoading = computed(() => authStore.isLoading)

const loginForm = reactive({
  username: '',
  password: '',
  remember: false
})

// 计算启用的SSO提供商
const enabledProviders = computed(() => {
  const enabled: Record<string, any> = {}
  Object.entries(ssoProviders).forEach(([key, provider]) => {
    if (ssoConfig[key as keyof typeof ssoConfig]?.enabled) {
      enabled[key] = provider
    }
  })
  return enabled
})

// SSO登录处理
const handleSSOLogin = async (provider: string) => {
  console.log(`正在使用 ${provider} 登录...`)

  try {
    await authStore.ssoLogin(provider)
  } catch (error) {
    console.error('SSO登录失败:', error)
    // 这里可以显示错误提示
    alert(`${ssoProviders[provider]?.name || provider} 登录失败，请稍后重试`)
  }
}

// 传统登录处理
const handleLogin = async () => {
  if (!loginForm.username || !loginForm.password) {
    return
  }

  try {
    const data = await authStore.login({
      username: loginForm.username,
      password: loginForm.password,
      remember: loginForm.remember
    })

    console.log('登录成功:', data)

    // 登录成功后跳转
    const redirect = authStore.loginRedirect || '/'
    router.push(redirect)
  } catch (error: any) {
    console.error('登录失败:', error)
    alert(error.message || '用户名或密码错误，请重试')
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-6000 {
  animation-delay: 6s;
}

/* 桌面端优化 */
@media (min-width: 1024px) {
  .min-h-screen {
    min-height: 100vh;
    max-height: 100vh;
  }
}

/* 移动端适配 */
@media (max-width: 1023px) {
  .min-h-screen {
    padding: 1rem;
    min-height: 100vh;
  }

  .max-h-\[90vh\] {
    max-height: 85vh;
  }
}

/* 小屏幕优化 */
@media (max-width: 640px) {
  .min-h-screen {
    padding: 0.5rem;
  }

  .max-h-\[90vh\] {
    max-height: 80vh;
  }
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 桌面端专用效果 */
@media (min-width: 1024px) {
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }

  .shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
}
</style>
