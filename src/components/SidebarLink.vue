<template>
  <router-link
    :to="to"
    class="flex items-center gap-3 p-2 rounded-md hover:bg-blue-100 transition text-gray-700 font-medium"
  >
    <i :class="['fas', icon, 'w-5']"></i>
    <span>{{ label }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  to: String,
})
</script>
