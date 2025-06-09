<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">All Courses</h1>
    <ul class="space-y-4">
      <li
        v-for="course in courses"
        :key="course.id"
        class="p-4 bg-white rounded shadow"
      >
        <h2 class="text-lg font-semibold">{{ course.title }}</h2>
        <p class="text-sm text-gray-500">{{ course.category }} - {{ course.status }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const courses = [
  { id: 1, title: "Mathematics Basics", category: "Offline", status: "Published" },
  { id: 2, title: "Frontend Dev", category: "Online", status: "Draft" },
  { id: 3, title: "Live Python Bootcamp", category: "Live", status: "Published" },
];
</script>
