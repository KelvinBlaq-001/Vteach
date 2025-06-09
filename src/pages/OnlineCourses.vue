<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-6">Online Courses</h2>

    <!-- Search Filter -->
    <div class="mb-6 max-w-md">
      <input
        v-model="search"
        type="text"
        placeholder="Search by title or instructor..."
        class="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RouterLink
        v-for="course in filteredCourses"
        :key="course.slug"
        :to="`/course/${course.slug}`"
        class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
      >
        <img
          :src="course.thumbnail"
          :alt="course.title"
          class="h-40 w-full object-cover"
        />

        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ course.title }}</h3>
          <p class="text-sm text-gray-600 mb-2">Instructor: {{ course.instructor }}</p>
          <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            Online
          </span>

          <div class="mt-4 flex justify-between items-center">
            <span class="text-green-600 font-bold">₦{{ course.fee.toLocaleString() }}</span>
            <span class="text-sm text-green-600 font-medium hover:underline">
              View Details
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref('');

const courses = [
  {
    slug: 'vuejs-for-beginners',
    title: 'Vue.js for Beginners',
    instructor: 'David Adeyemi',
    fee: 15000,
    thumbnail: 'https://source.unsplash.com/400x300/?code',
  },
  {
    slug: 'uiux-design-masterclass',
    title: 'UI/UX Design Masterclass',
    instructor: 'Sarah Bello',
    fee: 22000,
    thumbnail: 'https://source.unsplash.com/400x300/?ux',
  },
  {
    slug: 'python-data-science',
    title: 'Python for Data Science',
    instructor: 'Mark Essien',
    fee: 30000,
    thumbnail: 'https://source.unsplash.com/400x300/?data',
  },
  {
    slug: 'content-creation-strategies',
    title: 'Content Creation Strategies',
    instructor: 'Chika Nwosu',
    fee: 20000,
    thumbnail: 'https://source.unsplash.com/400x300/?content',
  },
];

const filteredCourses = computed(() => {
  const term = search.value.toLowerCase();
  return courses.filter(
    (c) =>
      c.title.toLowerCase().includes(term) ||
      c.instructor.toLowerCase().includes(term)
  );
});
</script>
