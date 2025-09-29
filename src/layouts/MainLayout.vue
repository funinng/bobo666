<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <template v-for="(item, idx) in matched" :key="item.path">
                <BreadcrumbItem>
                  <template v-if="idx < matched.length - 1">
                    <BreadcrumbLink :href="item.path">
                      {{ item.meta.title }}
                    </BreadcrumbLink>
                  </template>
                  <template v-else>
                    <BreadcrumbPage>{{ item.meta.title }}</BreadcrumbPage>
                  </template>
                </BreadcrumbItem>
                <BreadcrumbSeparator v-if="idx < matched.length - 1" />
              </template>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb"
import { Separator } from "@/components/ui/Separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/Sidebar"
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const matched = computed(() => route.matched.filter(r => r.meta && r.meta.title))
</script>
