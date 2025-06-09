<template>
  <div class="error-page">
    <h1>404</h1>
    <p class="message">Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="home-btn">Go back home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
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
  color: #0ea5e9;
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
