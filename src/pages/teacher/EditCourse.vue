<template>
  <div class="p-6 max-w-3xl mx-auto bg-white shadow rounded-xl">
    <h2 class="text-2xl font-bold mb-6">✏️ Edit Course</h2>

    <form @submit.prevent="updateCourse" class="space-y-6">
      <div>
        <label class="block font-medium text-gray-700 mb-1">Course Title</label>
        <input v-model="form.title" type="text" class="w-full border rounded px-4 py-2" />
      </div>

      <div>
        <label class="block font-medium text-gray-700 mb-1">Course Type</label>
        <select v-model="form.type" class="w-full border rounded px-4 py-2">
          <option value="offline">Offline</option>
          <option value="online" :disabled="!isApprovedForOnline">
            Online (Admin Approval Required)
          </option>
          <option value="live">Live</option>
        </select>
        <p v-if="!isApprovedForOnline" class="text-sm text-red-500 mt-1">
          🔒 You are not approved to offer online courses.
        </p>
      </div>

      <div>
        <label class="block font-medium text-gray-700 mb-1">Fee (₦)</label>
        <input v-model="form.fee" type="number" class="w-full border rounded px-4 py-2" />
      </div>

      <div>
        <label class="block font-medium text-gray-700 mb-1">Description</label>
        <textarea v-model="form.description" rows="4" class="w-full border rounded px-4 py-2"></textarea>
      </div>

      <div>
        <label class="block font-medium text-gray-700 mb-1">Thumbnail Image</label>
        <input type="file" @change="handleThumbnail" class="mb-2" />
        <div v-if="preview" class="mt-2">
          <img :src="preview" alt="Preview" class="w-40 rounded border" />
        </div>
      </div>

      <div>
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Update Course
        </button>
      </div>
    </form>

    <!-- Custom Toast -->
    <div
      v-if="showToast"
      class="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow transition"
    >
      ✅ Course updated successfully!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isApprovedForOnline = false // Simulate admin approval

const route = useRoute()
const router = useRouter()
const courseId = route.params.id

const form = ref({
  title: '',
  type: '',
  fee: null,
  description: '',
  thumbnail: '',
})

const preview = ref('')
const showToast = ref(false)

onMounted(() => {
  const existingCourse = {
    id: courseId,
    title: 'Vue.js Fundamentals',
    type: 'online',
    fee: 15000,
    description: 'Learn Vue from scratch with hands-on examples.',
    thumbnail: 'https://source.unsplash.com/400x300/?vue',
  }

  form.value = { ...existingCourse }
  preview.value = existingCourse.thumbnail
})

function handleThumbnail(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      preview.value = reader.result
      form.value.thumbnail = file
    }
    reader.readAsDataURL(file)
  }
}

function updateCourse() {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
    router.push('/teacher/manage-courses')
  }, 1500)
}
</script>
