<template>
  <div class="dashboard">
    <!-- Sidebar Toggle -->

    <!-- Main Content -->
    <main class="main-content">
       <router-view />
      <!-- Teacher Ad Banners -->
      <section class="teacher-section">
        <h2>Featured Teachers</h2>
        <div class="teacher-scroll">
          <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
            <img :src="teacher.image" alt="Teacher" />
            <div>
              <h3>{{ teacher.name }}</h3>
              <p>{{ teacher.subject }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Access Shortcuts -->
      <section class="shortcuts">
         <router-view />
        <h2>Quick Access</h2>
        <div class="shortcut-grid">
          <RouterLink to="/student/dashboard" class="shortcut">📘 Dashboard</RouterLink>
          <RouterLink to="/student/courses" class="shortcut">📘 My Courses</RouterLink>
          <RouterLink to="/student/schedule" class="shortcut">🗓️ Schedule</RouterLink>
          <RouterLink to="/student/profile" class="shortcut">👤 Profile</RouterLink>
          <RouterLink to="/student/certificates" class="shortcut">⚙️ My certificates</RouterLink>
          <RouterLink to="/student/settings" class="shortcut">⚙️ Settings</RouterLink>
          <RouterLink to="/student/discover" class="shortcut">🔍 Discover</RouterLink>
        </div>
      </section>

      <!-- Enrolled Courses -->
      <section class="course-section">
        <h2>Your Courses</h2>
        <div class="course-grid">
          <div v-for="course in enrolledCourses" :key="course.id" class="course-card">
            <h3>{{ course.title }}</h3>
            <p>{{ course.instructor }}</p>
            <small>Progress: {{ course.progress }}%</small>
          </div>
        </div>
      </section>

      <!-- Upcoming Live Classes -->
      <section class="live-section">
        <h2>Upcoming Live Classes</h2>
        <ul>
          <li v-for="live in upcomingLive" :key="live.id">
            <strong>{{ live.course }}</strong> with {{ live.teacher }} –
            <span>{{ live.date }}</span>
          </li>
        </ul>
      </section>

      <!-- Notifications -->
      <section class="notification-section">
        <h2>Recent Activity</h2>
        <ul>
          <li v-for="note in notifications" :key="note.id">
            {{ note.message }}
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sidebarOpen = ref(true);

const enrolledCourses = [
  { id: 1, title: 'Intro to Python', instructor: 'Jane Doe', progress: 75 },
  { id: 2, title: 'Advanced Math', instructor: 'John Smith', progress: 50 },
  { id: 3, title: 'Web Design Basics', instructor: 'Ali Musa', progress: 30 },
];

const upcomingLive = [
  { id: 1, course: 'Intro to Python', teacher: 'Jane Doe', date: 'May 18, 2025 - 2:00 PM' },
  { id: 2, course: 'Web Design Basics', teacher: 'Ali Musa', date: 'May 20, 2025 - 4:00 PM' },
];

const notifications = [
  { id: 1, message: 'New quiz available for “Intro to Python”.' },
  { id: 2, message: 'Live class scheduled for “Web Design Basics”.' },
  { id: 3, message: 'Certificate unlocked for “Advanced Math”.' },
];

const teachers = [
  { id: 1, name: 'Jane Doe', subject: 'Python Programming', image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Ali Musa', subject: 'Web Design', image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'John Smith', subject: 'Mathematics', image: 'https://via.placeholder.com/300x200' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@700&display=swap');

.dashboard {
  display: flex;
  font-family: 'Inter', sans-serif;
  background-color: #f5f7fa;
  color: #212121;
}

/* Sidebar toggle */
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: #2978f0;
  color: white;
  border: none;
  font-size: 1.5rem;
  z-index: 999;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background: #ffffff;
  padding: 2rem 1rem;
  border-right: 1px solid #e2e8f0;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar a {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.sidebar a.router-link-exact-active {
  background-color: #0ea5e9;
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
}

.logout-btn {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #ff4d4f;
  border-radius: 6px;
}

/* Main area */
.main-content {
  flex: 1;
  padding: 2rem;
}

/* Sections */
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

/* Teacher cards */
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
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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
.shortcuts h2{
  padding-top: 40px;
}
.shortcut:hover {
  transform: translateY(-4px);
  background-color: #e0f2ff;
}

/* Enrolled courses */
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
.course-section h2{
  padding-top: 40px;
}
.live-section h2{
  padding-top: 40px;
}

/* Notifications & live list */
.live-section ul,
.notification-section ul {
  list-style: none;
  padding: 0;
}
.notification-section h2{
    padding-top: 40px;
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

/* Responsive sidebar toggle */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 1000;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .sidebar-toggle {
    display: block;
  }
}
</style>
