<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes["class"], to?: any }>(), {
  as: "span",
})
</script>

<template>
  <component
    :is="as === 'router-link' ? RouterLink : Primitive"
    data-slot="breadcrumb-link"
    v-bind="as === 'router-link' ? { to: props.to } : {}"
    :as="as !== 'router-link' ? as : undefined"
    :as-child="asChild"
    :class="cn('hover:text-foreground transition-colors', props.class)"
  >
    <slot />
  </component>
</template>
