<!-- src/components/DashboardLayout.vue -->
<template>
  <div class="dashboard-layout">
    <div class="flex h-screen bg-gray-100">
    <aside class="sidebar">
      <h2>{{ role }} Dashboard</h2>
      <ul>
  <li><router-link to="/student/dashboard">Overview</router-link></li>
  <li><router-link to="/student/settings">Settings</router-link></li>
  <li><router-link to="/student/support">Support</router-link></li>
</ul>
    </aside>
    <main class="main-content">
        <div class="flex-1 p-6 overflow-auto">
      <slot />
    </div>
  </div>
</template>


<script setup>
defineProps(['role']);
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 200px;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}
.sidebar h2 {
  margin-bottom: 1rem;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 0.5rem 0;
}
.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
}
</style>
