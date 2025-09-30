<template>
    <Button v-bind="props" @click="props.onClick" />
</template>
<script setup lang="tsx">
import { defineProps } from 'vue'
import { Button } from '@/components/ui/button'

const props = defineProps<{
    text: string
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}>()
</script>