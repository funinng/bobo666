<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import type { SidebarProps } from '@/components/ui/sidebar'
import { ChevronRight, LogOut, User } from "lucide-vue-next"
import SearchForm from '@/components/SearchForm.vue'
import VersionSwitcher from '@/components/VersionSwitcher.vue'
import { useAuthStore } from '@/stores/auth'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const props = defineProps<SidebarProps>()

// 使用响应式计算属性获取侧边栏路由
const sidebarRoutes = computed(() => {
  // 找到主布局路由（路径为 '/'）
  const mainRoute = router.options.routes?.find(route => route.path === '/')
  console.log('Main route:', mainRoute)
  console.log('Children:', mainRoute?.children)
  const filtered = mainRoute?.children?.filter(r => r.meta?.sidebar) ?? []
  console.log('Filtered sidebar routes:', filtered)
  return filtered
})

// 改进的活动菜单检查函数，使其具有响应性
const isActiveMenu = computed(() => {
  return (menuName: string, activeName?: string) => {
    const current = route.meta.activeName || route.name
    return current === (activeName || menuName)
  }
})

function getRouteName(route: { name?: string }): string {
  return typeof route.name === 'string' ? route.name : ''
}

// 退出登录
const handleLogout = async () => {
  try {
    await authStore.logout()
    router.push('/login')
  } catch (error) {
    console.error('退出登录失败:', error)
  }
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <VersionSwitcher :versions="['1.0.1', '1.1.0-alpha', '2.0.0-beta1']" default-version="1.0.1" />
      <SearchForm />
    </SidebarHeader>
    <SidebarContent class="gap-0">
      <!-- 调试信息 -->
      <!-- <div class="p-2 text-xs text-gray-500">
        Routes count: {{ sidebarRoutes.length }}
      </div> -->
      <SidebarMenu>
        <template v-for="route in sidebarRoutes" :key="route.name">
          <Collapsible v-if="route.meta?.group && route.children" v-slot="{ open }">
            <SidebarGroup>
              <SidebarGroupLabel as-child>
                <CollapsibleTrigger as-child>
                  <div
                    :class="isActiveMenu(getRouteName(route as Record<string, any>), route.meta?.activeName as string | undefined) ? 'bg-blue-100 dark:bg-blue-900 font-bold' : ''"
                    style="display:flex;align-items:center;padding:8px 12px;user-select:none;cursor:pointer;">
                    <span v-if="route.meta?.icon" :class="route.meta.icon" style="margin-right:8px"></span>
                    {{ route.meta?.title || route.name }}
                    <ChevronRight class="ml-auto transition-transform duration-200"
                      :style="{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }" />
                  </div>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <transition name="slide-fade">
                    <SidebarMenu v-if="open">
                      <SidebarMenuItem v-for="child in route.children.filter((c: any) => c.meta?.sidebar)"
                        :key="child.name">
                        <SidebarMenuButton as-child
                          :class="isActiveMenu(getRouteName(child as any), (child as any).meta?.activeName) ? 'bg-blue-100 dark:bg-blue-900' : ''">
                          <router-link :to="{ name: child.name }">
                            <span v-if="(child as any).meta?.icon" :class="(child as any).meta.icon"
                              style="margin-right:8px"></span>
                            {{ (child as any).meta?.title || child.name }}
                          </router-link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </transition>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <SidebarMenuItem v-else>
            <SidebarMenuButton as-child
              :class="isActiveMenu(getRouteName(route as Record<string, any>), route.meta?.activeName as string | undefined) ? 'bg-blue-100 dark:bg-blue-900' : ''">
              <router-link :to="{ name: route.name }">
                <span v-if="route.meta?.icon" :class="route.meta.icon" style="margin-right:8px"></span>
                {{ route.meta?.title || route.name }}
              </router-link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </template>
      </SidebarMenu>
    </SidebarContent>
    
    <!-- 用户信息和退出登录 -->
    <SidebarFooter v-if="authStore.isAuthenticated">
      <SidebarMenu>
        <SidebarMenuItem>
          <div class="p-2 border-t">
            <!-- 用户信息 -->
            <div class="flex items-center gap-3 p-2 mb-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                <User class="w-4 h-4" v-if="!authStore.user?.avatar" />
                <img v-else :src="authStore.user.avatar" :alt="authStore.user.name" class="w-full h-full rounded-full object-cover" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {{ authStore.user?.name || authStore.user?.username }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {{ authStore.user?.email }}
                </p>
              </div>
            </div>
            
            <!-- 退出登录按钮 -->
            <SidebarMenuButton @click="handleLogout" class="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20">
              <LogOut class="w-4 h-4 mr-2" />
              退出登录
            </SidebarMenuButton>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    
    <SidebarRail />
  </Sidebar>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(.4, 0, .2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
