<template>
  <div class="student-dashboard">
    <h1>My Courses</h1>

    <div class="course-grid">
      <div class="course-card" v-for="course in courses" :key="course.id">
        <h2>{{ course.title }}</h2>
        <p>{{ course.description.slice(0, 80) }}...</p>
        <router-link :to="`/my-courses/${course.id}`" class="view-btn">View Course</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCourses",
  data() {
    return {
      courses: [
        {
          id: 101,
          title: "UX Design Fundamentals",
          description: "Learn the principles of user experience design from scratch."
        },
        {
          id: 102,
          title: "Live Python Bootcamp",
          description: "Join our live Python sessions and get real-time feedback."
        }
      ]
    };
  }
};
</script>

<style scoped>
.student-dashboard h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #1e293b;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
}

.course-card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.course-card p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 1rem;
}

.view-btn {
  font-size: 0.9rem;
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 500;
}

.view-btn:hover {
  text-decoration: underline;
}
</style>
