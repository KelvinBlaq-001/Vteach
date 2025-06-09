<template>
  <button :class="['px-4 py-2 rounded-lg text-white', colorClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  color: { type: String, default: 'primary' }
})

const colorClass = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700'
}[$props.color]
</script>
