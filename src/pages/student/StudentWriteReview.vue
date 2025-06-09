<template>
  <section class="review-container">
    <h1>Write a Review</h1>
    <p>Let us know what you thought about this course.</p>

    <div class="form">
      <label for="rating">Rating</label>
      <div class="stars">
        <span
          v-for="star in 5"
          :key="star"
          :class="{ active: rating >= star }"
          @click="rating = star"
        >★</span>
      </div>

      <label for="text">Your Review</label>
      <textarea
        v-model="review"
        rows="5"
        placeholder="Type your experience..."
      ></textarea>

      <button @click="submitReview">Submit Review</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudentWriteReview',
  data() {
    return {
      courseId: this.$route.params.courseId,
      rating: 0,
      review: '',
    };
  },
  methods: {
    submitReview() {
      if (!this.review || this.rating === 0) {
        alert('Please complete your review and rating.');
        return;
      }
      // Replace with API call later
      alert(`Review submitted for course ${this.courseId}!\nRating: ${this.rating}\nComment: ${this.review}`);
      this.$router.push('/student/courses');
    },
  },
};
</script>

<style scoped>
.review-container {
  max-width: 700px;
  margin: 4rem auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #2978F0;
}

p {
  margin-bottom: 2rem;
  color: #444;
}

.form {
  text-align: left;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

textarea {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 1rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.stars {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #ccc;
  cursor: pointer;
}

.stars span.active {
  color: #FFD700;
}

button {
  background: #2978F0;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #00D2FF;
}
</style>
