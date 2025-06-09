<template>
  <div class="panel-layout">
    <!-- Sidebar Toggle (Mobile Only) -->
    <button class="sidebar-toggle" @click="sidebarOpen = !sidebarOpen">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>


    <!-- Sidebar -->
    <aside class="sidebar" :class="{ open: sidebarOpen }">
    <div class="md:hidden flex justify-end p-4">
      <button @click="sidebarOpen = false">
        <font-awesome-icon icon="times" class="text-xl text-gray-700" />
      </button>
    </div>
    <nav>
      <router-link to="/teacher-panel/courses">
        <font-awesome-icon icon="book" class="mr-2" /> Courses
      </router-link>
      <router-link to="/teacher-panel/schedule">
        <font-awesome-icon icon="calendar-alt" class="mr-2" /> Schedule
      </router-link>
      <router-link to="/teacher-panel/reviews">
        <font-awesome-icon icon="star" class="mr-2" /> Reviews
      </router-link>
      <router-link to="/teacher-panel/profile">
        <font-awesome-icon icon="user" class="mr-2" /> Profile
      </router-link>
      <router-link to="/teacher-panel/apply-for-online">
        <font-awesome-icon icon="laptop" class="mr-2" /> Online Application
      </router-link>
      <router-link to="/teacher-panel/teachernotifications">
        <font-awesome-icon icon="bell" class="mr-2" /> Notifications
      </router-link>
      <router-link to="/teacher-panel/earnings">
        <font-awesome-icon icon="wallet" class="mr-2" /> Earnings
      </router-link>
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
.panel-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
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

.content {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
  width: 100%;
  margin-left: 0;
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
}

/* Reusable section headings */
.teacher-section h2,
.shortcuts h2,
.course-section h2,
.live-section h2,
.notification-section h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  color: #212121;
  margin-bottom: 1rem;
}

/* Horizontal teacher cards */
.teacher-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.teacher-card {
  background: white;
  border-radius: 20px;
  min-width: 320px;
  min-height: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 1rem;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
}

.teacher-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 210, 255, 0.3);
}

.teacher-card img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 1rem;
}

/* Shortcut cards */
.shortcut-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.shortcut {
  background-color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  color: #2978f0;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
  font-size: 1rem;
}

.shortcuts h2 {
  padding-top: 40px;
}

.shortcut:hover {
  transform: translateY(-4px);
  background-color: #e0f2ff;
}

/* Enrolled course cards */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.course-card {
  background: white;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease;
}

.course-card:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 45px rgba(0, 210, 255, 0.35);
}

.course-section h2 {
  padding-top: 40px;
}

.live-section h2 {
  padding-top: 40px;
}

.notification-section h2 {
  padding-top: 40px;
}

/* Notifications & upcoming live list */
.live-section ul,
.notification-section ul {
  list-style: none;
  padding: 0;
}

.live-section li,
.notification-section li {
  background: white;
  margin-bottom: 0.75rem;
  padding: 1rem;
  border-left: 4px solid #2978f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

</style>

