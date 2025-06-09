<template>
  <div class="text-center text-gray-500 py-10">
    <p class="text-xl font-semibold mb-2">Nothing to show</p>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>
