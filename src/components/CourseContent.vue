<template>
  <div class="container">
    <!-- Course Header -->
    <header class="course-header">
      <h1 class="course-title">{{ course.title }}</h1>
      <p class="instructor">Instructor: <span>{{ course.instructor }}</span></p>
      <p class="course-description">{{ course.description }}</p>
    </header>

    <div class="content-wrapper">
      <!-- Left: Video Section -->
      <section class="video-section">
        <div class="video-wrapper">
          <video
            :src="currentVideo.url"
            controls
            class="video-player"
          ></video>
        </div>

        <div class="thumbnails">
          <button
            v-for="video in course.videos"
            :key="video.id"
            @click="currentVideo = video"
            :class="['thumbnail-btn', currentVideo.id === video.id ? 'active' : '']"
          >
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="thumbnail-img"
            />
          </button>
        </div>
      </section>

      <!-- Right: Course Materials -->
      <aside class="materials-section">
        <h2 class="materials-title">Course Materials</h2>

        <ul class="materials-list">
          <li
            v-for="material in course.materials"
            :key="material.id"
            class="material-item"
          >
            <component :is="material.icon" class="material-icon" />
            <a
              :href="material.url"
              target="_blank"
              rel="noopener noreferrer"
              class="material-link"
            >
              {{ material.title }}
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const PdfIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24" class="icon-svg"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zM13 3.5L18.5 9H13V3.5zM7 13h2v6H7v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6z"/></svg>`,
}
const LinkIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24" class="icon-svg"><path d="M3.9 12a5 5 0 0 1 7.07-7.07l1.42 1.42-1.42 1.42-1.42-1.42a3 3 0 1 0 4.24 4.24l1.42 1.42a5 5 0 0 1-7.07 7.07L3.9 16.5l1.42-1.42L3.9 13.7z"/></svg>`,
}
const ImageIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24" class="icon-svg"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8 8l2.5 3 3-4L18 17H6l2-3z"/></svg>`,
}

const course = {
  title: 'Mastering Vue 3 and Composition API',
  instructor: 'Jane Doe',
  description:
    'Deep dive into Vue 3’s Composition API, building scalable, maintainable apps with clean code patterns.',
  videos: [
    {
      id: 1,
      title: 'Introduction to Vue 3',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://img.youtube.com/vi/4deVCNJq3qc/hqdefault.jpg',
    },
    {
      id: 2,
      title: 'Composition API Basics',
      url: 'https://www.w3schools.com/html/movie.mp4',
      thumbnail: 'https://img.youtube.com/vi/ZqgiuPt5QZo/hqdefault.jpg',
    },
    {
      id: 3,
      title: 'Advanced Reactivity',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://img.youtube.com/vi/4deVCNJq3qc/hqdefault.jpg',
    },
  ],
  materials: [
    {
      id: 1,
      title: 'Course PDF Handbook',
      url: '/materials/vue3-handbook.pdf',
      icon: PdfIcon,
    },
    {
      id: 2,
      title: 'Official Vue.js Documentation',
      url: 'https://vuejs.org/',
      icon: LinkIcon,
    },
    {
      id: 3,
      title: 'Sample Project Images',
      url: '/materials/project-images.zip',
      icon: ImageIcon,
    },
  ],
}

const currentVideo = ref(course.videos[0])
</script>

<style scoped>
/* Container */
.container {
  max-width: 1100px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b; /* dark slate */
}

/* Course Header */
.course-header {
  margin-bottom: 3rem;
}
.course-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #2563eb; /* blue-600 */
  margin-bottom: 0.5rem;
}
.instructor {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #475569; /* slate-600 */
}
.instructor span {
  font-weight: 600;
  color: #1e293b;
}
.course-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #334155; /* slate-700 */
}

/* Content wrapper flex */
.content-wrapper {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

/* Video Section */
.video-section {
  flex: 1 1 600px;
}

.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgb(37 99 235 / 0.3); /* blue shadow */
  margin-bottom: 1rem;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Thumbnails */
.thumbnails {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.thumbnails::-webkit-scrollbar {
  height: 8px;
}
.thumbnails::-webkit-scrollbar-track {
  background: transparent;
}
.thumbnails::-webkit-scrollbar-thumb {
  background-color: #2563eb; /* blue-600 */
  border-radius: 10px;
}

.thumbnail-btn {
  border: 3px solid transparent;
  border-radius: 8px;
  padding: 0;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  width: 100px;
  height: 56px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.thumbnail-btn:hover {
  border-color: #93c5fd; /* blue-300 */
}

.thumbnail-btn.active {
  border-color: #2563eb;
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 6px;
}

/* Materials Section */
.materials-section {
  width: 320px;
  flex-shrink: 0;
}

.materials-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 0.25rem;
}

/* List styles */
.materials-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.material-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.material-link {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.material-link:hover {
  text-decoration: underline;
  color: #1e40af; /* blue-800 */
}

/* Icon SVG size & color */
.icon-svg {
  width: 24px;
  height: 24px;
  color: #2563eb;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }
  .materials-section {
    width: 100%;
    margin-top: 2rem;
  }
  .video-section {
    width: 100%;
  }
}
</style>
