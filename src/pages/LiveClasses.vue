<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-6">Live Classes</h2>

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
        v-for="session in filteredClasses"
        :key="session.slug"
        :to="`/course/${session.slug}`"
        class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
      >
        <img
          :src="session.thumbnail"
          :alt="session.title"
          class="h-40 w-full object-cover"
        />

        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ session.title }}</h3>
          <p class="text-sm text-gray-600 mb-1">Instructor: {{ session.instructor }}</p>
          <p class="text-xs text-gray-500">🗓️ {{ session.date }} • ⏰ {{ session.time }}</p>
          <span class="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mt-2">
            Live
          </span>

          <div class="mt-4 flex justify-between items-center">
            <span class="text-green-600 font-bold">₦{{ session.fee.toLocaleString() }}</span>
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

const liveClasses = [
  {
    slug: 'live-javascript-qa',
    title: 'Live JavaScript Q&A',
    instructor: 'Tolu Akanbi',
    date: 'May 25, 2025',
    time: '10:00 AM - 11:30 AM',
    fee: 15000,
    thumbnail: 'https://source.unsplash.com/400x300/?javascript',
  },
  {
    slug: 'brand-strategy-deep-dive',
    title: 'Brand Strategy Deep Dive',
    instructor: 'Adaeze Umeh',
    date: 'May 26, 2025',
    time: '2:00 PM - 3:30 PM',
    fee: 20000,
    thumbnail: 'https://source.unsplash.com/400x300/?branding',
  },
  {
    slug: 'intro-to-ai-chatgpt',
    title: 'Intro to AI & ChatGPT',
    instructor: 'Michael Eze',
    date: 'May 27, 2025',
    time: '4:00 PM - 5:30 PM',
    fee: 18000,
    thumbnail: 'https://source.unsplash.com/400x300/?ai',
  },
  {
    slug: 'live-pitch-coaching',
    title: 'Live Pitch Coaching',
    instructor: 'Nneka George',
    date: 'May 28, 2025',
    time: '6:00 PM - 7:30 PM',
    fee: 15000,
    thumbnail: 'https://source.unsplash.com/400x300/?presentation',
  },
];

const filteredClasses = computed(() => {
  const term = search.value.toLowerCase();
  return liveClasses.filter(
    (c) =>
      c.title.toLowerCase().includes(term) ||
      c.instructor.toLowerCase().includes(term)
  );
});
</script>
