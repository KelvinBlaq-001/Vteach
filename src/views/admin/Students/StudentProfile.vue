<template>
  <div class="max-w-5xl mx-auto px-4 py-8 bg-white">
    <h2 class="text-2xl font-bold mb-6 text-blue-900">🎓 Student Profile</h2>

    <!-- Profile Card -->
    <div class="flex flex-col sm:flex-row items-center sm:items-start bg-blue-50 rounded-xl p-5 gap-6 shadow mb-8">
      <img
        :src="student.avatar || defaultAvatar"
        alt="Student Avatar"
        class="w-28 h-28 rounded-full object-cover"
      />
      <div class="text-center sm:text-left">
        <h3 class="text-xl font-semibold text-blue-900">{{ student.name }}</h3>
        <p class="text-gray-700 mt-1"><strong>Email:</strong> {{ student.email }}</p>
        <p class="text-gray-700"><strong>Enrolled Courses:</strong> {{ student.enrolledCourses.length }}</p>
        <p class="text-gray-700"><strong>Certificates Earned:</strong> {{ student.certificates.length }}</p>
      </div>
    </div>

    <!-- Purchase History -->
    <div class="mb-8">
      <h4 class="text-lg font-semibold mb-3">📦 Course Purchase History</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-md shadow">
          <thead class="bg-gray-100 text-left">
            <tr>
              <th class="px-4 py-3">Course</th>
              <th class="px-4 py-3">Type</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="purchase in student.purchases" :key="purchase.id" class="border-t hover:bg-gray-50">
              <td class="px-4 py-2">{{ purchase.course }}</td>
              <td class="px-4 py-2">{{ purchase.type }}</td>
              <td class="px-4 py-2 text-green-700 font-medium">₦{{ purchase.amount.toLocaleString() }}</td>
              <td class="px-4 py-2">{{ formatDate(purchase.date) }}</td>
              <td class="px-4 py-2">
                <button @click="downloadReceipt(purchase)" class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Certificates -->
    <div>
      <h4 class="text-lg font-semibold mb-3">🏅 Certificates</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="cert in student.certificates" :key="cert.id">
          {{ cert.course }} –
          <a :href="cert.link" class="text-blue-600 hover:underline" download>Download</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const studentId = route.params.id

const defaultAvatar = 'https://via.placeholder.com/120'
const student = ref({
  name: '',
  email: '',
  avatar: '',
  enrolledCourses: [],
  certificates: [],
  purchases: []
})

onMounted(() => {
  student.value = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: '',
    enrolledCourses: ['Intro to Python', 'Advanced Design'],
    certificates: [
      { id: 1, course: 'Intro to Python', link: '#' }
    ],
    purchases: [
      { id: 1, course: 'Intro to Python', type: 'Online', amount: 15000, date: '2024-10-05' },
      { id: 2, course: 'Certificate', type: 'Certificate', amount: 3000, date: '2024-11-10' }
    ]
  }
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString()
}

function downloadReceipt(purchase) {
  alert(`Downloading receipt for ${purchase.course}`)
}
</script>
