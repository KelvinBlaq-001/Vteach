<template>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      @view="$emit('view', course.id)"
    />
  </div>
</template>

<script setup>
import CourseCard from './CourseCard.vue'

defineProps({
  courses: Array
})
</script>
