<template>
  <div class="p-4 md:p-8">
    <h2 class="text-2xl font-bold mb-6">Class Schedule</h2>
    <div class="space-y-5">
      <div
        v-for="session in schedule"
        :key="session.id"
        class="bg-white rounded-xl shadow-md border border-gray-200 p-5"
      >
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold text-gray-800">{{ session.title }}</h3>
          <span
            class="text-xs font-semibold px-2 py-1 rounded-full"
            :class="{
              'bg-blue-100 text-blue-700': session.platform === 'Google Meet',
              'bg-purple-100 text-purple-700': session.platform === 'Jitsi',
            }"
          >
            {{ session.platform }}
          </span>
        </div>
        <div class="text-sm text-gray-600">
          <p class="mb-1">🗓️ {{ session.date }}</p>
          <p>⏰ {{ session.time }}</p>
        </div>
        <div class="mt-3 flex gap-3">
          <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">Join</button>
          <button
            @click="editSession(session.id)"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const schedule = ref([
  {
    id: 1,
    title: 'Vue Fundamentals Live Class',
    date: 'May 21, 2025',
    time: '10:00 AM - 11:30 AM',
    platform: 'Google Meet',
  },
  {
    id: 2,
    title: 'Data Science Intro (Jitsi)',
    date: 'May 22, 2025',
    time: '2:00 PM - 3:30 PM',
    platform: 'Jitsi',
  },
])

function editSession(id) {
  router.push(`/teacher/edit-live-class/${id}`)
}

onMounted(() => {
  // New from live class creation
  const newLiveClassData = localStorage.getItem('newLiveClass')
  if (newLiveClassData) {
    try {
      const parsed = JSON.parse(newLiveClassData)
      if (!schedule.value.find(s => s.id === parsed.id)) {
        schedule.value.push(parsed)
      }
    } catch (e) {
      console.error('Error parsing new live class data', e)
    }
    localStorage.removeItem('newLiveClass')
  }

  // Updated from edit page
  const updatedData = localStorage.getItem('updatedLiveClass')
  if (updatedData) {
    try {
      const updated = JSON.parse(updatedData)
      const index = schedule.value.findIndex(s => s.id === updated.id)
      if (index !== -1) {
        schedule.value[index] = updated
      }
    } catch (e) {
      console.error('Error parsing updated live class data', e)
    }
    localStorage.removeItem('updatedLiveClass')
  }
})
</script>
