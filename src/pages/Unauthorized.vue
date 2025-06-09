<template>
  <div class="error-page">
    <h1>403</h1>
    <p class="message">You don’t have permission to view this page.</p>
    <router-link to="/" class="home-btn">Return to Dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: "Unauthorized"
};
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.error-page h1 {
  font-size: 5rem;
  color: #f97316;
  margin-bottom: 1rem;
}

.message {
  font-size: 1.2rem;
  color: #475569;
  margin-bottom: 2rem;
}

.home-btn {
  background-color: #0ea5e9;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
}

.home-btn:hover {
  background-color: #0284c7;
}
</style>
