<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Empower Your Future with <span>VTeach</span></h1>
        <p>Learn anytime, anywhere with flexible courses designed for you.</p>
        <router-link to="/register" class="btn-primary">Get Started</router-link>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Learning illustration" />
      </div>
    </section>

    <!-- What We Offer -->
    <section class="offer-section">
      <h2>What We Offer</h2>
      <div class="offers">
        <div class="offer-card">
          <div class="icon-wrapper">
            <i class="fas fa-video"></i>
          </div>
          <h3>Online Courses</h3>
          <p>Structured, self-paced lessons with video content, assignments, and quizzes.</p>
        </div>
        <div class="offer-card">
          <div class="icon-wrapper">
            <i class="fas fa-chalkboard-teacher"></i>
          </div>
          <h3>Live Classes</h3>
          <p>Interactive live sessions with expert instructors and real-time Q&A.</p>
        </div>
        <div class="offer-card">
          <div class="icon-wrapper">
            <i class="fas fa-school"></i>
          </div>
          <h3>Offline Courses</h3>
          <p>Join physical classes and connect with local educators nearby.</p>
        </div>
      </div>
    </section>

    <!-- Top Learning Categories -->
    <section class="categories">
      <h2>Explore Popular Categories</h2>
      <div class="category-list">
        <div class="category">Programming</div>
        <div class="category">Design</div>
        <div class="category">Marketing</div>
        <div class="category">Business</div>
        <div class="category">Language</div>
        <div class="category">Technology</div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>How VTeach Works</h2>
      <div class="steps">
        <div class="step">
          <div class="step-icon">
            <i class="fas fa-user-plus"></i>
          </div>
          <h3>Create an Account</h3>
          <p>Sign up quickly as a student or teacher.</p>
        </div>
        <div class="step">
          <div class="step-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Find a Course</h3>
          <p>Browse and enroll in courses that match your goals.</p>
        </div>
        <div class="step">
          <div class="step-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <h3>Start Learning</h3>
          <p>Join live classes, watch lessons, complete tests, and earn certificates.</p>
        </div>
      </div>
    </section>

    <!-- VTeach Introduction Videos -->
<section class="vteach-videos">
  <h2>Discover VTeach in Action</h2>
  <p class="video-subtext">Watch how our platform helps you learn and teach better.</p>
  <div class="video-grid">
    <div class="video-card">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" title="VTeach Intro 1" allowfullscreen></iframe>
      <h4>How to Get Started</h4>
    </div>
    <div class="video-card">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" title="VTeach Intro 2" allowfullscreen></iframe>
      <h4>How to Join Live Classes</h4>
    </div>
    <div class="video-card">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" title="VTeach Intro 3" allowfullscreen></iframe>
      <h4>Taking Online Courses</h4>
    </div>
    <div class="video-card">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" title="VTeach Intro 4" allowfullscreen></iframe>
      <h4>Earn Certificates</h4>
    </div>
  </div>
</section>


    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Students Say</h2>
      <div class="carousel">
        <div 
          class="testimonial" 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          :class="{ active: currentIndex === index }"
        >
          <img :src="testimonial.avatar" alt="Student avatar" />
          <p>"{{ testimonial.message }}"</p>
          <h4>{{ testimonial.name }}</h4>
        </div>
        <div class="pagination">
          <span 
            v-for="(dot, index) in testimonials.length" 
            :key="index" 
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          name: "Ada M.",
          message: "VTeach changed the way I learn! The live classes are so interactive.",
          avatar: "https://i.pravatar.cc/100?img=3"
        },
        {
          name: "Chinedu O.",
          message: "Affordable, reliable, and really helpful platform.",
          avatar: "https://i.pravatar.cc/100?img=5"
        },
        {
          name: "Fatima B.",
          message: "The online course structure was easy to follow. I loved it!",
          avatar: "https://i.pravatar.cc/100?img=7"
        }
      ]
    };
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 6000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.home {
  font-family: 'Poppins', sans-serif;
  color: #003366; /* Dark text */
  background-color: #f0f8ff; /* Soft light blue */
  max-width: 5000px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 30px;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-text h1 {
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  color: #003366;
}

.hero-text h1 span {
  color: #4da6ff;
}

.hero-text p {
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: #444;
}

.btn-primary {
  background: #4da6ff;
  color: white;
  border: none;
  padding: 14px 36px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 6px 12px rgba(77, 166, 255, 0.3);
}

.btn-primary:hover {
  background: #3399ff;
  box-shadow: 0 8px 16px rgba(51, 153, 255, 0.4);
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

/* Offer Section */
.offer-section {
  margin-top: 60px;
  text-align: center;
}

.offer-section h2 {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: #003366;
}

.offers {
  display: flex;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
}

.offer-card {
  background: #ffffff;
  padding: 30px 25px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(77, 166, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 40px rgba(77, 166, 255, 0.3);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background-color: #4da6ff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.offer-card h3 {
  font-weight: 600;
  margin-bottom: 12px;
  color: #003366;
}

.offer-card p {
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
}

/* Categories */
.categories {
  margin-top: 60px;
  text-align: center;
}

.categories h2 {
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 35px;
  font-weight: 600;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.category {
  background-color: #d0ecff;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  color: #003366;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category:hover {
  background-color: #4da6ff;
  color: white;
}

/* How It Works */
.how-it-works {
  margin-top: 70px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.6rem;
  margin-bottom: 45px;
  font-weight: 600;
  color: #003366;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.step {
  background: white;
  padding: 30px 25px;
  width: 280px;
  border-radius: 15px;
  box-shadow: 0 18px 30px rgba(0, 150, 136, 0.12);
  transition: box-shadow 0.3s ease;
}

.step:hover {
  box-shadow: 0 28px 45px rgba(0, 150, 136, 0.2);
}

.step-icon {
  font-size: 2.5rem;
  color: #009688;
  margin-bottom: 18px;
}

.step h3 {
  font-weight: 600;
  margin-bottom: 10px;
  color: #064663;
}

.step p {
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
}

.vteach-videos {
  text-align: center;
  margin-top: 80px;
  padding: 20px;
}

.vteach-videos h2 {
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 10px;
  font-weight: 600;
}

.video-subtext {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 40px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
}

.video-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-card iframe {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  border: none;
  margin-bottom: 15px;
}

.video-card h4 {
  font-size: 1rem;
  color: #003366;
  font-weight: 500;
}

/* Testimonials */
.testimonials {
  margin-top: 80px;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #064663;
}

.carousel {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  min-height: 250px;
}

.testimonial {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 150, 136, 0.15);
  transition: opacity 0.7s ease;
  text-align: center;
  pointer-events: none;
}

.testimonial.active {
  opacity: 1;
  position: relative;
  pointer-events: auto;
}

.testimonial img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.testimonial p {
  font-style: italic;
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  line-height: 1.5;
}

.testimonial h4 {
  font-weight: 600;
  color: #009688;
  font-size: 1.15rem;
}

.pagination {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.pagination span {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #cfd8dc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination span.active {
  background-color: #009688;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding: 40px 0;
  }

  .hero-text {
    max-width: 100%;
    text-align: center;
  }

  .hero-image {
    margin-top: 30px;
  }

  .offers, .steps {
    flex-direction: column;
    align-items: center;
  }

  .offer-card, .step {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .btn-primary {
    padding: 12px 28px;
    font-size: 1rem;
  }

  .offer-card, .step {
    width: 100%;
    padding: 20px 15px;
  }

  .categories h2, .how-it-works h2, .offer-section h2, .testimonials h2 {
    font-size: 2rem;
  }

  .category {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
