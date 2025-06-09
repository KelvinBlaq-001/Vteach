<template>
  <div class="teacher-profile">
    <div class="header">
      <h1>👩‍🏫 Teacher Profile</h1>
      <p>Overview of teacher performance, earnings, and payouts.</p>
    </div>

    <!-- Profile & Earnings -->
    <div class="profile-summary">
      <div class="card info-card">
        <h2>{{ teacher.name }}</h2>
        <p><strong>Email:</strong> {{ teacher.email }}</p>
        <p><strong>Phone:</strong> {{ teacher.phone }}</p>
      </div>

      <div class="card earnings-card">
        <h3>Total Earned</h3>
        <p class="amount">₦{{ teacher.totalEarned.toLocaleString() }}</p>
        <button @click="downloadPayouts">⬇ Download Payout History</button>
      </div>

      <div class="card account-card">
        <h3>Bank Account</h3>
        <p><strong>Bank:</strong> {{ teacher.bank }}</p>
        <p><strong>Account Number:</strong> {{ teacher.accountNumber }}</p>
        <p><strong>Account Name:</strong> {{ teacher.accountName }}</p>
        <button @click="triggerPaystackPayment">💸 Pay Teacher</button>
      </div>
    </div>

    <!-- Courses -->
    <div class="section">
      <h3>📚 Courses Created</h3>
      <ul class="course-list">
        <li v-for="course in teacher.courses" :key="course.id">
          <div class="course-title">{{ course.title }}</div>
          <span class="badge">{{ course.enrolled }} enrolled</span>
          <span class="badge green">₦{{ course.earned.toLocaleString() }}</span>
        </li>
      </ul>
    </div>

    <!-- Reviews -->
    <div class="section">
      <h3>⭐ Student Reviews</h3>
      <ul class="review-list">
        <li v-for="review in teacher.reviews" :key="review.id">
          <p><strong>{{ review.student }}</strong>: {{ review.comment }}</p>
          <p class="rating">Rating: {{ review.rating }} ⭐</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Dummy teacher data
const teacher = reactive({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '08012345678',
  totalEarned: 180000,
  bank: 'Access Bank',
  accountNumber: '1234567890',
  accountName: 'John Doe',
  courses: [
    { id: 1, title: 'Vue Basics', enrolled: 45, earned: 45000 },
    { id: 2, title: 'Nuxt Mastery', enrolled: 25, earned: 65000 },
    { id: 3, title: 'Advanced JavaScript', enrolled: 30, earned: 70000 }
  ],
  reviews: [
    { id: 1, student: 'Ada Lovelace', comment: 'Great teacher!', rating: 5 },
    { id: 2, student: 'Tunde Bakare', comment: 'Very detailed', rating: 4.5 }
  ]
})

function downloadPayouts() {
  alert('Download logic coming soon!')
}

function triggerPaystackPayment() {
  const handler = PaystackPop.setup({
    key: 'pk_test_xxxxxxxx', // Replace with your real Paystack public key
    email: teacher.email,
    amount: teacher.totalEarned * 100, // amount in kobo
    currency: 'NGN',
    ref: `VTEACH-PAYOUT-${Date.now()}`,
    onClose: function () {
      alert('Payment window closed.')
    },
    callback: function (response) {
      alert('✅ Payment successful! Ref: ' + response.reference)
      // You can call your backend to verify and log payout
    }
  })
  handler.openIframe()
}
</script>

<style scoped>
.teacher-profile {
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  max-width: 1200px;
  margin: auto;
}

.header h1 {
  font-size: 2.25rem;
  margin-bottom: 0.3rem;
  color: #111827;
}

.header p {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.profile-summary {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  flex: 1;
  min-width: 280px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.amount {
  font-size: 2rem;
  color: #10b981;
  font-weight: 700;
  margin-top: 1rem;
}

button {
  margin-top: 1rem;
  background: #3b82f6;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
}

button:hover {
  background: #2563eb;
}

.section {
  margin-top: 3rem;
}

.course-list,
.review-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.course-list li,
.review-list li {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.course-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.badge {
  display: inline-block;
  background: #e5e7eb;
  color: #374151;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
}

.badge.green {
  background: #d1fae5;
  color: #065f46;
}

.rating {
  color: #f59e0b;
  font-weight: 600;
}
</style>

<!-- Paystack Script -->
<!-- <script src="https://js.paystack.co/v1/inline.js"></script> -->
