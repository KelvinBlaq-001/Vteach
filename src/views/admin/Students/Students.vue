<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">🎓 Registered Students</h2>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by name or email..."
      class="w-full max-w-md p-2 border border-gray-300 rounded mb-6"
    />

    <!-- Table for md and up -->
    <div class="hidden md:block">
      <table class="w-full bg-white rounded-lg shadow overflow-hidden">
        <thead>
          <tr class="bg-gray-100 text-gray-700 text-left">
            <th class="p-4">Name</th>
            <th class="p-4">Email</th>
            <th class="p-4">Courses</th>
            <th class="p-4">Spent (₦)</th>
            <th class="p-4">Status</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="student in filteredStudents"
            :key="student.id"
            class="hover:bg-gray-50 border-t"
          >
            <td class="p-4 font-medium">{{ student.name }}</td>
            <td class="p-4">{{ student.email }}</td>
            <td class="p-4">{{ student.courses.length }}</td>
            <td class="p-4 text-green-700 font-semibold">₦{{ student.totalSpent }}</td>
            <td class="p-4">
              <span :class="student.status === 'active' ? 'text-green-600' : 'text-red-600'">
                {{ student.status }}
              </span>
            </td>
            <td class="p-4 flex gap-2">
              <button
                @click="toggleStatus(student.id)"
                class="px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 text-sm"
              >
                {{ student.status === 'active' ? 'Ban' : 'Unban' }}
              </button>
              <router-link
                :to="`/admin/students/${student.id}`"
                class="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm"
              >
                View Profile
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Cards for mobile -->
    <div class="space-y-4 md:hidden">
      <div
        v-for="student in filteredStudents"
        :key="student.id"
        class="bg-white p-4 rounded-lg shadow border"
      >
        <div class="font-semibold text-lg">{{ student.name }}</div>
        <div class="text-sm text-gray-600">{{ student.email }}</div>
        <div class="mt-2">
          <p><strong>Courses:</strong> {{ student.courses.length }}</p>
          <p class="text-green-700 font-semibold">
            <strong>Spent:</strong> ₦{{ student.totalSpent }}
          </p>
          <p>
            <strong>Status:</strong>
            <span :class="student.status === 'active' ? 'text-green-600' : 'text-red-600'">
              {{ student.status }}
            </span>
          </p>
        </div>
        <div class="mt-3 flex gap-2">
          <button
            @click="toggleStatus(student.id)"
            class="flex-1 px-3 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200 text-sm"
          >
            {{ student.status === 'active' ? 'Ban' : 'Unban' }}
          </button>
          <router-link
            :to="`/admin/students/${student.id}`"
            class="flex-1 px-3 py-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm text-center"
          >
            View Profile
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const students = ref([
  {
    id: 1,
    name: 'Samuel Johnson',
    email: 'samuel@vteach.com',
    courses: ['Web Dev', 'UI/UX Design'],
    totalSpent: 18000,
    status: 'active'
  },
  {
    id: 2,
    name: 'Blessing Adeyemi',
    email: 'blessing@vteach.com',
    courses: ['Data Science'],
    totalSpent: 3000,
    status: 'banned'
  }
])

const filteredStudents = computed(() =>
  students.value.filter(s =>
    s.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const toggleStatus = (id) => {
  const student = students.value.find(s => s.id === id)
  if (student) {
    student.status = student.status === 'active' ? 'banned' : 'active'
  }
}
</script>
