<template>
  <div class="dashboard">
    <!-- Sidebar Toggle (Mobile Only) -->
    <button class="sidebar-toggle" @click="sidebarOpen = !sidebarOpen">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ open: sidebarOpen }">
       <h1 class="text-2xl font-semibold mb-6">VTeach Admin</h1>
        <nav class="space-y-3">
          <router-link to="/admin" class="block text-gray-700 hover:text-blue-600">📊 Overview</router-link>
          <router-link to="/admin/students" class="block text-gray-700 hover:text-blue-600">🎓 Students</router-link>
          <router-link to="/admin/teachers" class="block text-gray-700 hover:text-blue-600">👩‍🏫 Teachers</router-link>
          <router-link to="/admin/teacher-reviews" class="block text-gray-700 hover:text-blue-600">⭐ Teacher Reviews</router-link>
          <router-link to="/admin/courses" class="block text-gray-700 hover:text-blue-600">📚 Courses</router-link>
          <router-link to="/admin/payments" class="block text-gray-700 hover:text-blue-600">💰 Payments</router-link>
          <router-link to="/admin/reports" class="block text-gray-700 hover:text-blue-600">📈 Reports</router-link>
          <router-link to="/admin/settings" class="block text-gray-700 hover:text-blue-600">⚙️ Settings</router-link>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="content" @click="sidebarOpen = false">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sidebarOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@700&display=swap');

.dashboard {
  display: flex;
  flex-direction: row;
  font-family: 'Inter', sans-serif;
  background-color: #f5f7fa;
  color: #212121;
  min-height: 100vh;
}

/* Sidebar toggle button (hamburger) */
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 0.3rem;
  left: 1rem;
  z-index: 1100;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #334155;
  font-size: 1.5rem;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.sidebar-toggle:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.05);
}


/* Sidebar styles */
.sidebar {
  width: 220px;
  background: #ffffff;
  padding: 2rem 1rem;
  border-right: 1px solid #e2e8f0;
  transition: transform 0.3s ease-in-out;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar a,
.sidebar button.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: none;
  border: none;
  transition: background-color 0.2s;
}

.sidebar a.router-link-exact-active {
  background-color: #0ea5e9;
  color: white;
}

.sidebar button.logout-btn {
  background-color: #ff4d4f;
  color: white;
  cursor: pointer;
}

/* Content section */
.content {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
  width: 100%;
  overflow-x: hidden;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 1050;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar-toggle {
    display: block;
  }

  .content {
    padding: 1rem;
  }
  .text-2xl font-semibold mb-6{
    padding-top: 20px;
  }
}

</style>