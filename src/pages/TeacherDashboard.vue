<template>
  <div class="teacher-dashboard">
    <h1>Welcome, {{ teacher.name }}</h1>

    <!-- Dashboard Stats -->
    <div class="dashboard-cards">
      <div class="card">
        <h2>Total Courses</h2>
        <p>{{ teacher.totalCourses }}</p>
      </div>
      <div class="card">
        <h2>Upcoming Classes</h2>
        <p>{{ teacher.upcomingLiveClasses }}</p>
      </div>
      <div class="card">
        <h2>Pending Reviews</h2>
        <p>{{ teacher.pendingReviews }}</p>
      </div>
    </div>

    <!-- Recent Courses -->
    <div class="section">
      <h3>Recent Courses</h3>
      <div class="list-cards">
        <div v-for="course in teacher.recentCourses" :key="course.id" class="list-card">
          <div>
            <h4>{{ course.title }}</h4>
            <p>{{ course.category }}</p>
          </div>
          <router-link :to="`/teacher/edit-course/${course.id}`" class="link-btn">Edit</router-link>
        </div>
      </div>
    </div>

    <!-- Upcoming Live Classes -->
    <div class="section">
      <h3>Upcoming Live Classes</h3>
      <div class="list-cards">
        <div v-for="live in teacher.upcomingClasses" :key="live.id" class="list-card">
          <div>
            <h4>{{ live.topic }}</h4>
            <p>{{ live.datetime }}</p>
          </div>
          <router-link to="/teacher-panel/schedule" class="link-btn">View</router-link>
        </div>
      </div>
    </div>

    <!-- Reminders -->
    <div class="section">
      <h3>Reminders</h3>
      <ul class="reminders">
        <li>📝 Review student submissions for "UX Design Basics"</li>
        <li>📅 Confirm next week's live session time</li>
        <li>📥 New course applications to approve</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherDashboard",
  data() {
    return {
      teacher: {
        name: "Sarah Johnson",
        totalCourses: 4,
        upcomingLiveClasses: 2,
        pendingReviews: 5,
        recentCourses: [
          { id: 201, title: "UX Design Basics", category: "Design" },
          { id: 202, title: "Web Accessibility", category: "Development" }
        ],
        upcomingClasses: [
          { id: 1, topic: "Design Thinking Workshop", datetime: "May 22, 6pm GMT" },
          { id: 2, topic: "Live UX Review", datetime: "May 25, 2pm GMT" }
        ]
      }
    };
  }
};
</script>

<style scoped>
.teacher-dashboard {
  font-family: 'Inter', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

.teacher-dashboard h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  color: #1e293b;
  margin-bottom: 2rem;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.dashboard-cards {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
}

.card {
  min-width: 200px;
  flex: 0 0 auto;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.03);
  text-align: center;
  scroll-snap-align: start;
}

.card h2 {
  font-size: 1.1rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1.5rem;
  color: #0ea5e9;
  font-weight: 600;
}

@media (min-width: 768px) {
  .dashboard-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    overflow-x: unset;
  }
}


/* Sections */
.section {
  margin-bottom: 2.5rem;
}

.section h3 {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 1rem;
}

.list-cards {
  display: grid;
  gap: 1rem;
}

.list-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.list-card h4 {
  font-size: 1rem;
  color: #0f172a;
  margin: 0;
}

.list-card p {
  font-size: 0.9rem;
  color: #64748b;
}

.link-btn {
  font-size: 0.9rem;
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 500;
}

.link-btn:hover {
  text-decoration: underline;
}

.reminders {
  list-style: none;
  padding-left: 0;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.7;
}
</style>
