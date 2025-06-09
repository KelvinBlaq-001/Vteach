<template>
  <div class="mb-6">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-gray-500">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
