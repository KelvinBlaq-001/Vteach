<template>
  <div class="my-courses">
    <h1>My Courses</h1>

    <div class="courses-grid">
      <div
        v-for="course in myCourses"
        :key="course.id"
        class="course-card"
      >
        <div class="course-header">
          <h3>{{ course.title }}</h3>
          <p class="status" :class="course.status.toLowerCase()">
            {{ course.status }}
          </p>
        </div>

        <div class="course-meta">
          <p>Instructor: {{ course.instructor }}</p>
          <p>Progress: {{ course.progress }}%</p>
        </div>

        <div class="course-actions">
          <button v-if="course.status === 'In Progress'" class="btn primary">
            Continue
          </button>
          <button v-else-if="course.status === 'Live Class'" class="btn live">
            Join Live
          </button>
          <button v-else class="btn secondary">
            View Course
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const myCourses = ref([
  {
    id: 1,
    title: 'Intro to JavaScript',
    instructor: 'John Doe',
    progress: 45,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Advanced Python',
    instructor: 'Jane Smith',
    progress: 100,
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Live Web Dev Bootcamp',
    instructor: 'Mary Johnson',
    progress: 20,
    status: 'Live Class',
  },
])
</script>

<style scoped>
.my-courses {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.courses-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.course-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-header {
  margin-bottom: 12px;
}

.course-header h3 {
  font-size: 20px;
  margin-bottom: 4px;
  color: #2c3e50;
}

.status {
  font-size: 14px;
  font-weight: bold;
}

.status.in\ progress {
  color: orange;
}
.status.completed {
  color: green;
}
.status.live\ class {
  color: #2980b9;
}

.course-meta {
  font-size: 14px;
  margin-bottom: 12px;
  color: #555;
}

.course-actions {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  text-align: center;
}

.btn.primary {
  background-color: #3498db;
  color: white;
}

.btn.secondary {
  background-color: #2ecc71;
  color: white;
}

.btn.live {
  background-color: #e67e22;
  color: white;
}
</style>
