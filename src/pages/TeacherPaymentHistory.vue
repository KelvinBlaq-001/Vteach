<template>
  <div class="teacher-payment-history">
    <h1>Payment History</h1>
    <p class="desc">Here is a list of all your quarterly payments.</p>

    <div class="history-list">
      <div v-for="payment in payments" :key="payment.id" class="history-card">
        <p><strong>Date:</strong> {{ payment.date }}</p>
        <p><strong>Amount:</strong> ₦{{ payment.amount }}</p>
        <p><strong>Status:</strong> {{ payment.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherPaymentHistory",
  data() {
    return {
      payments: [
        { id: 1, date: "Feb 01, 2025", amount: 12000, status: "Paid" },
        { id: 2, date: "May 01, 2025", amount: 12000, status: "Paid" }
      ]
    };
  }
};
</script>

<style scoped>
.teacher-payment-history {
  max-width: 600px;
  margin: 3rem auto;
  font-family: 'Inter', sans-serif;
  padding: 1rem;
}

h1 {
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1rem;
  text-align: center;
  color: #1e293b;
}

.desc {
  text-align: center;
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.history-card {
  background: #ffffff;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  font-size: 0.95rem;
  color: #475569;
}
</style>
