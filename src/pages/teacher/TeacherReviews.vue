<template>
  <section class="review-page">
    <h1>Student Reviews</h1>

    <div v-if="reviews.length === 0" class="empty">
      <p>No reviews yet.</p>
    </div>

    <div class="review-grid" v-else>
      <div class="review-card" v-for="review in reviews" :key="review.id">
        <h3 class="course-title">{{ review.courseTitle }}</h3>
        <div class="meta">
          <strong class="student-name">{{ review.studentName }}</strong>
          <div class="stars">
            <span v-for="n in 5" :key="n" :class="{ active: n <= review.rating }">★</span>
          </div>
        </div>
        <p class="comment">{{ review.comment }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeacherReviews',
  data() {
    return {
      reviews: [
        {
          id: 1,
          courseTitle: 'UI/UX Basics',
          studentName: 'Ada Obi',
          rating: 5,
          comment: 'Very clear explanations and helpful live sessions!',
        },
        {
          id: 2,
          courseTitle: 'Live Python Bootcamp',
          studentName: 'Daniel Ekene',
          rating: 4,
          comment: 'I learned a lot, but would love more real-world examples.',
        },
        {
          id: 3,
          courseTitle: 'Freelancing Essentials',
          studentName: 'Grace Musa',
          rating: 5,
          comment: 'The offline session was incredibly engaging. Thanks!',
        },
      ],
    }
  },
}
</script>

<style scoped>
.review-page {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Inter', sans-serif;
}

h1 {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2563eb;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.empty {
  text-align: center;
  padding: 2rem 1rem;
  background: #f9fafb;
  border-radius: 12px;
  font-size: 1.1rem;
  color: #777;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.review-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.course-title {
  font-size: 1.1rem;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.student-name {
  font-weight: 600;
  color: #374151;
}

.stars {
  font-size: 1.1rem;
  color: #d1d5db;
}

.stars span.active {
  color: #facc15;
}

.comment {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}

/* Responsive tweaks */
@media (max-width: 640px) {
  .meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .review-card {
    padding: 1.2rem;
  }
}
</style>
