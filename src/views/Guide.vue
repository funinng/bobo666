<template>
  <div class="p-4">

    <Button @click="alert('Hello from Guide page!')">Click Me</Button>
    <Input v-model="message" placeholder="Type something..." />
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { ref } from 'vue';

const message = ref('');
// Guide 页面逻辑
</script>
