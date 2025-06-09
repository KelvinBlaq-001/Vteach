<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">👨‍🏫 All Teachers</h2>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by name or email..."
      class="w-full max-w-md p-2 border border-gray-300 rounded mb-6"
    />

    <table class="w-full bg-white rounded-lg shadow overflow-hidden responsive-table">
      <thead>
        <tr class="bg-gray-100 text-gray-700 text-left">
          <th class="p-4">Name</th>
          <th class="p-4">Email</th>
          <th class="p-4">Courses</th>
          <th class="p-4">Rating</th>
          <th class="p-4">Status</th>
          <th class="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="teacher in filteredTeachers"
          :key="teacher.id"
          class="hover:bg-gray-50 border-t"
        >
          <td class="p-4 font-medium" data-label="Name">{{ teacher.name }}</td>
          <td class="p-4" data-label="Email">{{ teacher.email }}</td>
          <td class="p-4" data-label="Courses">{{ teacher.courses.length }}</td>
          <td class="p-4" data-label="Rating">⭐ {{ teacher.rating.toFixed(1) }}</td>
          <td class="p-4" data-label="Status">
            <span :class="teacher.status === 'active' ? 'text-green-600' : 'text-red-600'">
              {{ teacher.status }}
            </span>
          </td>
          <td class="p-4 flex gap-2" data-label="Actions">
            <button
              @click="toggleStatus(teacher.id)"
              class="px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 text-sm"
            >
              {{ teacher.status === 'active' ? 'Ban' : 'Unban' }}
            </button>
            <router-link
              :to="`/admin/teachers/${teacher.id}`"
              class="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm"
            >
              View Profile
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const teachers = ref([
  {
    id: 1,
    name: 'Chinedu Umeh',
    email: 'chinedu@vteach.com',
    courses: ['Frontend Dev', 'React'],
    rating: 4.7,
    status: 'active'
  },
  {
    id: 2,
    name: 'Mariam Yusuf',
    email: 'mariam@vteach.com',
    courses: ['Business Writing'],
    rating: 4.2,
    status: 'banned'
  }
])

const filteredTeachers = computed(() =>
  teachers.value.filter(t =>
    t.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    t.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const toggleStatus = (id) => {
  const teacher = teachers.value.find(t => t.id === id)
  if (teacher) {
    teacher.status = teacher.status === 'active' ? 'banned' : 'active'
  }
}
</script>

<style scoped>
/* Responsive Table */
@media (max-width: 768px) {
  table.responsive-table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin-bottom: 1rem;
    border-bottom: 2px solid #eee;
  }

  td {
    position: relative;
    padding-left: 50%;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  td::before {
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
    color: #555;
    transform: translateY(-50%);
    content: attr(data-label);
  }

  /* Actions flex wrap */
  td[data-label="Actions"] {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
