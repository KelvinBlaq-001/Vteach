<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Reports</h1>
    <ul class="space-y-4">
      <li
        v-for="report in reports"
        :key="report.id"
        class="p-4 bg-white shadow rounded"
      >
        <p class="font-medium">Report #{{ report.id }}</p>
        <p class="text-sm text-gray-500">{{ report.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const reports = [
  { id: 101, content: "Course not loading for students" },
  { id: 102, content: "User experiencing login issues" },
  { id: 103, content: "Live class link expired too early" },
];
</script>
