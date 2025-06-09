<template>
  <section class="about-section">
    <div class="about-header">
      <h1>Welcome to VTeach</h1>
      <p>Your hub for innovative and accessible learning experiences.</p>
    </div>

    <div class="about-content">
      <div class="text-block">
        <p>
          VTeach is a vibrant education platform committed to bridging the gap between quality instruction and eager learners. Whether you're interested in online, offline, or live classes, we provide dynamic options to support every learning journey.
        </p>
        <p>
          Our tools empower students to grow at their own pace and give educators a stage to make a lasting impact. VTeach is where knowledge, passion, and community come together.
        </p>
        <router-link to="/register" class="join-button">Join Our Community</router-link>
      </div>
      <div class="image-block">
        <img src="https://source.unsplash.com/600x400/?learning,classroom" alt="About VTeach" />
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'About' };
</script>

<style scoped>
.about-section {
  padding: 3rem 1.5rem;
  background: linear-gradient(to bottom right, #e0f7ff, #f7fbff);
  font-family: 'Inter', sans-serif;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.4rem;
  color: #1a8cff;
  margin-bottom: 0.8rem;
}

.about-header p {
  font-size: 1.1rem;
  color: #444;
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.text-block {
  flex: 1 1 300px;
  padding: 1rem;
}

.text-block p {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.join-button {
  display: inline-block;
  margin-top: 1rem;
  background: #1a8cff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.join-button:hover {
  background: #0077cc;
}

.image-block {
  flex: 1 1 300px;
  padding: 1rem;
}

.image-block img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  .about-header h1 {
    font-size: 2rem;
  }
}
</style>
