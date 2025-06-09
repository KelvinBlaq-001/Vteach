<template>
  <section class="course-detail">
    <!-- Header Section -->
    <div class="header">
      <div class="title-info">
        <span class="tag">{{ course.type }}</span>
        <h1>{{ course.title }}</h1>
        <p class="description">{{ course.description }}</p>
        <div class="meta">
          <span>🧑 {{ course.teacher }}</span>
          <span>⏱️ {{ course.duration }}</span>
        </div>
       <button class="enroll-btn" @click="startPayment">Enroll Now</button>
      </div>
      <img :src="course.thumbnail" alt="course thumbnail" class="thumb-img" />
    </div>

    <!-- Video Preview -->
    <div class="video-preview">
      <video controls width="100%">
        <source :src="course.previewVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- What You'll Learn -->
    <div class="learning-points">
      <h2>What You'll Learn</h2>
      <ul>
        <li v-for="(point, index) in course.learningPoints" :key="index">✔️ {{ point }}</li>
      </ul>
    </div>

    <!-- Syllabus or Outline -->
    <div class="syllabus">
      <h2>Course Outline</h2>
      <ul>
        <li v-for="(item, index) in course.outline" :key="index">
          <strong>Lesson {{ index + 1 }}:</strong> {{ item }}
        </li>
      </ul>
    </div>

    <!-- Instructor Info -->
    <div class="instructor">
      <h2>Instructor</h2>
      <p><strong>{{ course.teacher }}</strong> – {{ course.teacherBio }}</p>
    </div>

<section class="certificate">
    <h2>Certificate of Completion</h2>
    <p>
      Receive a personalized certificate after completing this course and passing the final quiz. Share your achievement on LinkedIn, your resume, or with your employer.
    </p>
    <img src="https://via.placeholder.com/600x200?text=Certificate+Preview" alt="Certificate Preview" class="certificate-img" />
  </section>

    <!-- Reviews Section -->
    <div class="reviews">
      <h2>Student Reviews</h2>
      <div class="review" v-for="review in reviews" :key="review.id">
        <p class="review-text">“{{ review.comment }}”</p>
        <span class="reviewer">– {{ review.name }}</span>
      </div>
    </div>

    <!-- Recommended Courses -->
    <div class="related">
      <h2>Recommended Courses</h2>
      <div class="related-grid">
        <router-link v-for="related in relatedCourses" :key="related.id" :to="'/courses/' + related.id" class="related-card">
          <img :src="related.thumbnail" />
          <div>
            <h3>{{ related.title }}</h3>
            <p>{{ related.teacher }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const courseId = Number(route.params.id);

const course = {
  id: courseId,
  title: 'Design Basics',
  type: 'online',
  description: 'Master fundamentals of design thinking and layout strategy.',
  teacher: 'Jane Doe',
  teacherBio: 'Jane is a senior UI/UX designer with over 10 years of experience in creative industries. She’s taught over 50,000 students worldwide.',
  duration: '2h 30m',
  thumbnail: 'https://source.unsplash.com/600x300/?design',
  previewVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
  learningPoints: [
    'Understand design fundamentals',
    'Create clean and usable layouts',
    'Master typography and color theory',
    'Apply grid systems effectively'
  ],
  outline: [
    'Introduction to Design',
    'Visual Hierarchy',
    'Typography Basics',
    'Color Theory',
    'Layout & Grids'
  ]
};

const reviews = [
  { id: 1, name: 'Chris O.', comment: 'Loved how easy the lessons were to follow!' },
  { id: 2, name: 'Amaka E.', comment: 'Great content and structure. Highly recommend.' },
  { id: 3, name: 'Samuel K.', comment: 'Helped me land my first design project!' }
];

const relatedCourses = [
  {
    id: 2,
    title: 'Creative Thinking',
    teacher: 'Mark Smith',
    thumbnail: 'https://source.unsplash.com/400x200/?creativity'
  },
  {
    id: 3,
    title: 'Typography Masterclass',
    teacher: 'Emily Lin',
    thumbnail: 'https://source.unsplash.com/400x200/?typography'
  }
];
</script>

<style scoped>
.course-detail {
  font-family: 'Inter', sans-serif;
  background: #f9fbfd;
  padding: 2rem;
  color: #212121;
}

.header {
  display: flex;
  flex-direction: column-reverse;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  gap: 2rem;
}

@media(min-width: 768px) {
  .header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.title-info h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #212121;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.9rem;
  color: #666;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.enroll-btn {
  background: #2978f0;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.enroll-btn:hover {
  background: #1769d0;
}

.thumb-img {
  max-width: 400px;
  border-radius: 12px;
  object-fit: cover;
  width: 100%;
}

.tag {
  background: #e0f4ff;
  color: #2978f0;
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.5rem;
}

.certificate {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  text-align: center;
}

.certificate h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: #212121;
  margin-bottom: 1rem;
}

.certificate p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
}

.certificate-img {
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  object-fit: cover;
}

.video-preview,
.learning-points,
.instructor,
.syllabus,
.reviews,
.related {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.video-preview video {
  border-radius: 12px;
}

.learning-points h2,
.syllabus h2,
.instructor h2,
.reviews h2,
.related h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #212121;
}

.learning-points ul {
  list-style: none;
  padding-left: 0;
}

.learning-points li {
  padding: 0.5rem 0;
  color: #333;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.syllabus ul {
  list-style: none;
  padding-left: 0;
}

.syllabus li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 0.95rem;
}

.instructor p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

.review {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  font-size: 1rem;
  color: #444;
}

.reviewer {
  display: block;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: #666;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.related-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
}

.related-card:hover {
  transform: translateY(-6px);
}

.related-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.related-card h3 {
  font-size: 1.1rem;
  margin: 0.8rem 1rem 0.2rem;
  color: #222;
}

.related-card p {
  margin: 0 1rem 1rem;
  font-size: 0.95rem;
  color: #666;
}
</style>
