<template>
  <div class="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img :src="course.image" alt="Course Image" class="w-full h-40 object-cover rounded" />
    <h2 class="text-lg font-semibold mt-2">{{ course.title }}</h2>
    <p class="text-sm text-gray-600">{{ course.description }}</p>
    <p class="text-green-700 font-bold mt-2">₦{{ course.price.toLocaleString() }}</p>
    <BaseButton color="primary" class="mt-3 w-full" @click="$emit('view', course.id)">View Course</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps({
  course: Object
})
</script>
