<template>
  <div class="teacher-page">
    <h1>Pay Quarterly Fee</h1>
    <p>To continue teaching on VTeach, please complete your quarterly payment.</p>

    <div class="payment-box">
      <p><strong>Amount:</strong> ₦4,000 (NGN)</p>
      <button class="pay-btn">Pay with Paystack</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherPayment"
};
</script>

<style scoped>
.teacher-page {
  max-width: 500px;
  margin: 3rem auto;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.payment-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  margin-top: 1.5rem;
}

.pay-btn {
  background-color: #0ea5e9;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
