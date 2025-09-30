<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import type { SidebarProps } from '@/components/ui/sidebar'
import { ChevronRight } from "lucide-vue-next"
import SearchForm from '@/components/SearchForm.vue'
import VersionSwitcher from '@/components/VersionSwitcher.vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
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
const sidebarRoutes = router.options.routes?.[0]?.children?.filter(r => r.meta?.sidebar) ?? []
const props = defineProps<SidebarProps>()

function isActiveMenu(menuName: string, activeName?: string) {
  const current = route.meta.activeName || route.name
  return current === (activeName || menuName)
}
function getRouteName(route: { name?: string }): string {
  return typeof route.name === 'string' ? route.name : ''
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <VersionSwitcher :versions="['1.0.1', '1.1.0-alpha', '2.0.0-beta1']" default-version="1.0.1" />
      <SearchForm />
    </SidebarHeader>
    <SidebarContent class="gap-0">
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
