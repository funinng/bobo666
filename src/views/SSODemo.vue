<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">SSO登录页面演示</h1>
        <p class="text-xl text-gray-600">现代化、美观的单点登录解决方案</p>
      </div>

      <!-- 功能展示卡片 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- 多种登录方式 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-account-multiple" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">多种登录方式</h3>
          <p class="text-gray-600 text-sm">支持微信、支付宝、QQ、GitHub、Google、Microsoft等主流SSO登录</p>
        </div>

        <!-- 现代化设计 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-palette" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">现代化设计</h3>
          <p class="text-gray-600 text-sm">毛玻璃效果、渐变背景、流畅动画，提供优秀的视觉体验</p>
        </div>

        <!-- 响应式布局 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-responsive" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">响应式设计</h3>
          <p class="text-gray-600 text-sm">完美适配桌面、平板和移动设备，确保各种屏幕下的最佳体验</p>
        </div>

        <!-- 安全可靠 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-shield-check" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">安全可靠</h3>
          <p class="text-gray-600 text-sm">内置CSRF保护、状态验证，采用业界标准的安全措施</p>
        </div>

        <!-- TypeScript支持 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-code-tags" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">TypeScript支持</h3>
          <p class="text-gray-600 text-sm">完整的类型定义，提供更好的开发体验和代码质量</p>
        </div>

        <!-- 易于集成 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
            <Icon icon="mdi-puzzle" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">易于集成</h3>
          <p class="text-gray-600 text-sm">模块化设计，可轻松集成到现有项目中，支持自定义配置</p>
        </div>
      </div>

      <!-- 桌面端特性展示 -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">桌面端优化特性</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-monitor" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">左右分栏布局</h3>
                <p class="text-sm text-gray-600">左侧品牌展示，右侧登录表单</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-palette" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">渐变背景装饰</h3>
                <p class="text-sm text-gray-600">动态blob动画和浮动元素</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-eye" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">毛玻璃效果</h3>
                <p class="text-sm text-gray-600">backdrop-blur和半透明设计</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-mouse" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">丰富交互效果</h3>
                <p class="text-sm text-gray-600">hover动画和状态反馈</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-speedometer" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">性能优化</h3>
                <p class="text-sm text-gray-600">硬件加速和流畅动画</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi-responsive" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">响应式设计</h3>
                <p class="text-sm text-gray-600">桌面端优先，移动端适配</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 演示按钮 -->
      <div class="text-center mb-12">
        <button @click="goToLogin"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <Icon icon="mdi-login" class="w-5 h-5" />
          <span>体验桌面端登录页面</span>
        </button>
      </div>

      <!-- 技术栈 -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">技术栈</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-vuejs" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">Vue 3</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-language-typescript" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">TypeScript</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-tailwind" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">Tailwind CSS</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-router" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">Vue Router</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-lightning-bolt" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">Vite</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon icon="mdi-star" class="w-8 h-8 text-white" />
            </div>
            <p class="text-sm font-medium text-gray-700">Iconify</p>
          </div>
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="mt-12 bg-gray-900 rounded-xl p-6 overflow-hidden">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-white">快速开始</h3>
          <div class="flex gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <pre class="text-green-400 text-sm overflow-x-auto"><code># 访问登录页面
http://localhost:5173/login

# 配置环境变量
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# 启动开发服务器
npm run dev</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}
</script>
