<template>
  <div class="discover-container">
    <h1>Discover Courses</h1>

       <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search courses..." />
    </div>

    <p class="sub-text">Browse through our available courses and pick what suits you best!</p>
    <div class="course-grid">
      <div class="course-card" v-for="course in courses" :key="course.id">
        <img :src="course.thumbnail" alt="Course Thumbnail" class="thumbnail" />
        <div class="course-info">
          <h3>{{ course.title }}</h3>
          <p class="type">{{ course.type }}</p>
          <p class="price">₦{{ course.price.toLocaleString() }}</p>
          <router-link :to="`/student/discover/${course.id}`" class="enroll">  View Course</router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    title: 'Mastering Algebra',
    type: 'Offline Course',
    price: 7000,
    thumbnail: 'https://via.placeholder.com/300x180?text=Algebra'
  },
  {
    id: 2,
    title: 'Web Design Bootcamp',
    type: 'Online Course - 2 Months',
    price: 25000,
    thumbnail: 'https://via.placeholder.com/300x180?text=Web+Design'
  },
  {
    id: 3,
    title: 'Live JavaScript Crash Course',
    type: 'Live Class',
    price: 8000,
    thumbnail: 'https://via.placeholder.com/300x180?text=JavaScript'
  }
];
</script>

<style scoped>
.discover-container {
  padding: 40px;
  background-color: #f9f9ff;
  font-family: 'Inter', sans-serif;
}

h1 {
  font-size: 32px;
  margin-bottom: 8px;
  color: #003366;
  padding-bottom: 10px;
}

.sub-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-bar input {
  padding: 0.75rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: border 0.3s ease;
}

.search-bar input:focus {
  outline: none;
  border-color: #2978f0;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.course-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.thumbnail {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.course-info {
  padding: 16px;
}

.course-info h3 {
  font-size: 18px;
  margin-bottom: 4px;
  color: #222;
}

.course-info .type {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.course-info .price {
  font-size: 16px;
  color: #0066cc;
  font-weight: bold;
  padding-bottom: 10px;
}

.enroll {
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

.enroll:hover {
  background-color: #004c99;
}

@media (max-width: 600px) {
  .course-grid {
    grid-template-columns: 1fr;
  }
  
}
</style>
