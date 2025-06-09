<template>
  <div class="container">
    <h2 class="page-title">📘 My Courses</h2>

    <div class="grid">
      <div
        v-for="course in courses"
        :key="course.id"
        :class="['course-card', course.id == route.query.new ? 'highlight' : '']"
      >
        <!-- Thumbnail -->
        <img
          :src="course.thumbnail"
          alt="Course Thumbnail"
          class="thumbnail"
        />

        <!-- Info -->
        <div class="info">
          <h3 class="title">{{ course.title }}</h3>
          <p class="type">
            Type:
            <span
              :class="{
                online: course.type === 'online',
                offline: course.type === 'offline',
                live: course.type === 'live',
              }"
            >
              {{ course.type }}
            </span>
          </p>
          <p class="fee">Fee: ₦{{ course.fee.toLocaleString() }}</p>
          <p class="enrolled">Enrolled: {{ course.enrolled }} students</p>
        </div>

        <!-- Actions -->
        <div class="actions">
          <RouterLink
            :to="`/teacher/edit-course/${course.id}`"
            class="btn btn-edit"
          >
            ✏️ Edit
          </RouterLink>

          <RouterLink
            :to="`/teacher/add-test/${course.id}`"
            class="btn btn-test"
          >
            🧪 Add Test
          </RouterLink>

          <button
            class="btn btn-delete"
            @click="confirmDelete(course.id)"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>

    <RouterLink
      to="/teacher/add-course"
      class="add-course-btn"
      title="Add New Course"
    >
      +
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const courses = ref([
  {
    id: 1,
    title: 'Vue.js Fundamentals',
    type: 'online',
    fee: 15000,
    enrolled: 28,
    thumbnail: 'https://source.unsplash.com/300x200/?vue',
  },
  {
    id: 2,
    title: 'Photography Essentials',
    type: 'offline',
    fee: 20000,
    enrolled: 12,
    thumbnail: 'https://source.unsplash.com/300x200/?camera',
  },
  {
    id: 3,
    title: 'Live Coding Bootcamp',
    type: 'live',
    fee: 25000,
    enrolled: 35,
    thumbnail: 'https://source.unsplash.com/300x200/?coding',
  },
])

onMounted(() => {
  const newCourseData = localStorage.getItem('newCourse')
  if (newCourseData) {
    try {
      const parsed = JSON.parse(newCourseData)
      courses.value.push(parsed)
    } catch {
      // ignore errors
    }
    localStorage.removeItem('newCourse')
  }
})

function confirmDelete(id) {
  if (window.confirm('Are you sure you want to delete this course?')) {
    courses.value = courses.value.filter(c => c.id !== id)
  }
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: 'Inter', sans-serif;
}

/* Page Title */
.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1f2937; /* gray-800 */
}

/* Grid layout */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* Course Card */
.course-card {
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  border: 1px solid #e5e7eb; /* gray-200 */
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.875rem; /* smaller font */
  transition: box-shadow 0.3s ease;
}

.course-card:hover {
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
}

/* Highlight new course */
.highlight {
  ring: 2px solid #3b82f6; /* blue-500 */
  box-shadow: 0 0 0 3px #3b82f6;
}

/* Thumbnail */
.thumbnail {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Info section */
.info {
  flex-grow: 1;
}

.title {
  font-weight: 600;
  color: #111827; /* gray-900 */
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.2;
}

.type {
  margin-bottom: 0.15rem;
  color: #4b5563; /* gray-600 */
}

.type span {
  font-weight: 600;
  text-transform: capitalize;
}

.type span.online {
  color: #2563eb; /* blue-600 */
}

.type span.offline {
  color: #ca8a04; /* yellow-600 */
}

.type span.live {
  color: #7c3aed; /* purple-600 */
}

.fee,
.enrolled {
  color: #4b5563;
  margin-bottom: 0.15rem;
}

/* Actions */
.actions {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  flex: 1;
  text-align: center;
  padding: 0.4rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.875rem;
  border: none;
  user-select: none;
  white-space: nowrap;
}

.btn-edit {
  background-color: #2563eb; /* blue-600 */
  color: #fff;
}
.btn-edit:hover {
  background-color: #1d4ed8; /* blue-700 */
}

.btn-test {
  background-color: #16a34a; /* green-600 */
  color: #fff;
}
.btn-test:hover {
  background-color: #15803d; /* green-700 */
}

.btn-delete {
  background-color: #dc2626; /* red-600 */
  color: #fff;
}
.btn-delete:hover {
  background-color: #b91c1c; /* red-700 */
}

/* Floating add course button */
.add-course-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  background-color: #2563eb;
  color: #fff;
  border-radius: 9999px;
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  z-index: 50;
}
.add-course-btn:hover {
  background-color: #1d4ed8;
}

/* Responsive font sizes */
@media (max-width: 639px) {
  .page-title {
    font-size: 1.5rem;
  }
  .title {
    font-size: 0.9rem;
  }
  .btn {
    font-size: 0.75rem;
    padding: 0.3rem 0.4rem;
  }
  .thumbnail {
    height: 100px;
  }
}
</style>
