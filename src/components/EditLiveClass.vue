<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
    <h2 class="text-2xl font-bold mb-6">Edit Live Class</h2>
    <form @submit.prevent="saveChanges" class="space-y-4">
      <div>
        <label class="block font-semibold mb-1" for="title">Title</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block font-semibold mb-1" for="date">Date</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block font-semibold mb-1" for="time">Time</label>
        <input
          id="time"
          v-model="form.time"
          type="text"
          placeholder="e.g. 10:00 AM - 11:30 AM"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block font-semibold mb-1" for="platform">Platform</label>
        <select
          id="platform"
          v-model="form.platform"
          required
          class="w-full border rounded px-3 py-2"
        >
          <option value="Google Meet">Google Meet</option>
          <option value="Jitsi">Jitsi</option>
          <option value="Zoom">Zoom</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold"
      >
        Save Changes
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const schedule = ref([
  {
    id: 1,
    title: 'Vue Fundamentals Live Class',
    date: '2025-05-21',
    time: '10:00 AM - 11:30 AM',
    platform: 'Google Meet',
  },
  {
    id: 2,
    title: 'Data Science Intro (Jitsi)',
    date: '2025-05-22',
    time: '2:00 PM - 3:30 PM',
    platform: 'Jitsi',
  },
])

const route = useRoute()
const router = useRouter()

const form = ref({
  id: null,
  title: '',
  date: '',
  time: '',
  platform: 'Google Meet',
})

onMounted(() => {
  const id = Number(route.params.id)
  const session = schedule.value.find(s => s.id === id)
  if (session) {
    form.value = { ...session }
  } else {
    alert('Live class not found')
    router.back()
  }
})

function saveChanges() {
  // Save to localStorage so TeacherSchedule can load it
  localStorage.setItem('updatedLiveClass', JSON.stringify(form.value))
  router.push('/teacher-panel/schedule')
}
</script>

