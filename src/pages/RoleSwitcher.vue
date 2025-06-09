<template>
  <div class="role-switch">
    <h1>Select a Role</h1>
    <p>Which view do you want to use today?</p>

    <div class="role-options">
      <router-link to="/student/courses" class="role-card">🎓 Student</router-link>
      <router-link to="/teacher/dashboard" class="role-card">🧑‍🏫 Teacher</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleSwitcher"
};
</script>

<style scoped>
.role-switch {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.role-switch h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
}

.role-options {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.role-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #1e293b;
  transition: all 0.2s ease;
}

.role-card:hover {
  background: #f0f9ff;
  border-color: #0ea5e9;
}
</style>
