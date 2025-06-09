<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">📘 My Courses</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in courses"
        :key="course.id"
        :class="[
          'bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between',
          course.id == route.query.new ? 'ring-2 ring-blue-500' : ''
        ]"
      >
        <!-- Thumbnail -->
        <img
          :src="course.thumbnail"
          alt="Course Thumbnail"
          class="w-full h-40 object-cover rounded mb-3"
        />

        <!-- Info -->
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ course.title }}</h3>
          <p class="text-sm text-gray-600">
            Type:
            <span
              :class="{
                'text-blue-600': course.type === 'online',
                'text-yellow-600': course.type === 'offline',
                'text-purple-600': course.type === 'live',
              }"
              class="font-medium capitalize"
            >
              {{ course.type }}
            </span>
          </p>
          <p class="text-sm text-gray-600">Fee: ₦{{ course.fee.toLocaleString() }}</p>
          <p class="text-sm text-gray-600">Enrolled: {{ course.enrolled }} students</p>
        </div>

        <!-- Actions -->
        <div class="mt-4 flex gap-2">
          <RouterLink
            :to="`/teacher/edit-course/${course.id}`"
            class="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm text-center"
          >
            ✏️ Edit
          </RouterLink>

          <RouterLink
            :to="`/teacher/add-test/${course.id}`"
            class="flex-1 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm text-center"
          >
            🧪 Add Test
          </RouterLink>

          <button
            class="flex-1 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 text-sm"
            @click="confirmDelete(course.id)"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  </div>

  <RouterLink
    to="/teacher/add-course"
    class="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 text-3xl z-50"
    title="Add New Course"
  >
    +
  </RouterLink>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const courses = ref([
  {
    id: 1,
    title: 'Vue.js Fundamentals',
    type: 'online',
    fee: 15000,
    enrolled: 28,
    thumbnail: 'https://source.unsplash.com/400x300/?vue',
  },
  {
    id: 2,
    title: 'Photography Essentials',
    type: 'offline',
    fee: 20000,
    enrolled: 12,
    thumbnail: 'https://source.unsplash.com/400x300/?camera',
  },
  {
    id: 3,
    title: 'Live Coding Bootcamp',
    type: 'live',
    fee: 25000,
    enrolled: 35,
    thumbnail: 'https://source.unsplash.com/400x300/?coding',
  },
])

onMounted(() => {
  const newCourseData = localStorage.getItem('newCourse')
  if (newCourseData) {
    try {
      const parsed = JSON.parse(newCourseData)
      courses.value.push(parsed)
    } catch (e) {
      console.error('Error parsing new course data from localStorage.')
    }
    localStorage.removeItem('newCourse')
  }
})

function confirmDelete(id) {
  const confirmed = window.confirm('Are you sure you want to delete this course?')
  if (confirmed) {
    courses.value = courses.value.filter(c => c.id !== id)
  }
}
</script>
