<template>
  <div class="p-4 md:p-8">
    <h2 class="text-2xl font-bold mb-6">Upcoming Live Classes</h2>

    <div class="space-y-6">
      <div
        v-for="session in liveClasses"
        :key="session.id"
        class="bg-white rounded-xl shadow-md border border-gray-200 p-5"
      >
        <!-- Title + Platform -->
        <div class="flex justify-between items-center flex-wrap gap-y-2">
          <h3 class="text-lg font-semibold text-gray-800">
            {{ session.title }}
          </h3>
          <span
            class="text-xs font-semibold px-3 py-1 rounded-full"
            :class="{
              'bg-blue-100 text-blue-700': session.platform === 'Google Meet',
              'bg-purple-100 text-purple-700': session.platform === 'Jitsi',
            }"
          >
            {{ session.platform }}
          </span>
        </div>

        <!-- Date + Time -->
        <div class="flex items-center text-sm text-gray-700 mt-2 gap-x-3">
          <div class="flex items-center gap-x-1">
            <span>📅</span>
            <span>{{ session.date }}</span>
          </div>
          <div class="flex items-center gap-x-1">
            <span>⏰</span>
            <span>{{ session.time }}</span>
          </div>
        </div>

        <!-- Join Button -->
        <div class="mt-4">
          <a
            :href="session.joinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded transition duration-200"
          >
            Join Class
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const liveClasses = [
  {
    id: 1,
    title: 'Vue.js for Beginners',
    date: 'May 20, 2025',
    time: '10:00 AM - 11:30 AM',
    platform: 'Google Meet',
    joinUrl: 'https://meet.google.com/abc-defg-hij', // example Google Meet link
  },
  {
    id: 2,
    title: 'Python for Data Science',
    date: 'May 22, 2025',
    time: '2:00 PM - 3:30 PM',
    platform: 'Jitsi',
    joinUrl: 'https://meet.jit.si/your-custom-room', // example Jitsi link
  },
  {
    id: 3,
    title: 'Web Development Basics',
    date: 'May 24, 2025',
    time: '4:00 PM - 5:00 PM',
    platform: 'Google Meet',
    joinUrl: 'https://meet.google.com/xyz-lmno-pqr',
  },
]
</script>
