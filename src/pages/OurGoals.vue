<template>
  <section class="goals-section">
    <div class="goals-header">
      <h1>Empower Your Journey with VTeach</h1>
      <p class="subtext">
        At VTeach, we believe education should be transformative, accessible, and personal. Discover the real-world impact you can achieve.
      </p>
    </div>

    <div class="goals-grid">
      <div class="goal-card">
        <div class="icon">🎓</div>
        <h2>Build In-Demand Skills</h2>
        <p>Master the tools and techniques used by today’s top professionals through hands-on learning experiences.</p>
      </div>
      <div class="goal-card">
        <div class="icon">🌍</div>
        <h2>Learn Anytime, Anywhere</h2>
        <p>Our flexible platform adapts to your lifestyle — access courses 24/7 on any device from anywhere in the world.</p>
      </div>
      <div class="goal-card">
        <div class="icon">📜</div>
        <h2>Earn Meaningful Certificates</h2>
        <p>Boost your credibility with certificates that are respected by employers and showcase your dedication to growth.</p>
      </div>
      <div class="goal-card">
        <div class="icon">💬</div>
        <h2>Engage with Experts</h2>
        <p>Connect with experienced instructors and get personalized feedback to accelerate your progress.</p>
      </div>
      <div class="goal-card">
        <div class="icon">🤝</div>
        <h2>Thrive in Community</h2>
        <p>Collaborate with peers, share ideas, and be part of a vibrant community of lifelong learners and educators.</p>
      </div>
      <div class="goal-card">
        <div class="icon">🚀</div>
        <h2>Advance Your Career</h2>
        <p>Unlock new opportunities, land better jobs, or launch your dream business with practical knowledge that works.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'OurGoals' };
</script>

<style scoped>
.goals-section {
  padding: 4rem 1.5rem;
  background: #f5faff;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.goals-header {
  max-width: 720px;
  margin: 0 auto 3rem;
}

.goals-header h1 {
  font-size: 2.5rem;
  color: #1a8cff;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.subtext {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.goal-card {
  background: white;
  padding: 1.5rem;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.06);
}

.goal-card .icon {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.goal-card h2 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  color: #1a8cff;
  font-weight: 600;
}

.goal-card p {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}

/* 📱 Mobile adjustments */
@media (max-width: 768px) {
  .goals-header h1 {
    font-size: 1.8rem;
  }

  .subtext {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }

  .goals-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .goal-card {
    padding: 1.2rem;
  }

  .goal-card .icon {
    font-size: 2rem;
  }

  .goal-card h2 {
    font-size: 1.1rem;
  }

  .goal-card p {
    font-size: 0.9rem;
  }
}

</style>
