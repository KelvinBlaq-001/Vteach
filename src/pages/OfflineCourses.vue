<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-6">Offline Courses</h2>

    <!-- Search Filter -->
    <div class="mb-6 max-w-md">
      <input
        v-model="search"
        type="text"
        placeholder="Search by title or instructor..."
        class="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <!-- Course Grid -->
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
          <span class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            Offline
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
    slug: 'public-speaking-mastery',
    title: 'Public Speaking Mastery',
    instructor: 'Jane Okafor',
    fee: 18000,
    thumbnail: 'https://source.unsplash.com/400x300/?publicspeaking',
  },
  {
    slug: 'business-communication',
    title: 'Business Communication',
    instructor: 'Samuel Etim',
    fee: 15000,
    thumbnail: 'https://source.unsplash.com/400x300/?business',
  },
  {
    slug: 'photography-essentials',
    title: 'Photography Essentials',
    instructor: 'Lola Balogun',
    fee: 25000,
    thumbnail: 'https://source.unsplash.com/400x300/?photography',
  },
  {
    slug: 'culinary-skills-workshop',
    title: 'Culinary Skills Workshop',
    instructor: 'Chef Kemi',
    fee: 20000,
    thumbnail: 'https://source.unsplash.com/400x300/?cooking',
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
