<template>
  <div class="pricing-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Choose Your Plan</h1>
        <p>Flexible pricing designed to suit your learning goals — whether you're just getting started or leveling up.</p>
      </div>
    </section>

    <section class="pricing-section">
      <div class="pricing-card">
        <h2>Offline Course</h2>
        <p class="price">₦7,000</p>
        <p class="duration">Fixed per course</p>
        <p class="detail">Perfect for hands-on learners who want in-person interaction.</p>
      </div>

      <div class="pricing-card">
        <h2>Live Class</h2>
        <p class="price">₦5,000+</p>
        <p class="duration">Starting price per session</p>
        <p class="detail">Join real-time sessions with industry experts.</p>
      </div>

      <div class="pricing-card">
        <h2>Online Course</h2>
        <ul class="online-tiers">
          <li><strong>1 month</strong> – ₦15,000</li>
          <li><strong>2 months</strong> – ₦25,000</li>
          <li><strong>3 months</strong> – ₦35,000</li>
          <li><strong>6 months</strong> – ₦50,000</li>
          <li><strong>1 year</strong> – ₦120,000</li>
          <li><strong>2 years</strong> – ₦250,000</li>
        </ul>
        <p class="detail">Access a wide range of content at your own pace with flexible plans.</p>
      </div>

      <div class="pricing-card">
        <h2>Certificate</h2>
        <p class="price">₦3,000</p>
        <p class="duration">Per certificate</p>
        <p class="detail">Receive a shareable certificate upon course completion and assessment.</p>
      </div>

      <div class="pricing-card">
        <h2>Teacher Quarterly Fee</h2>
        <p class="price">₦4,000</p>
        <p class="duration">Per quarter</p>
        <p class="detail">Gain access to teaching tools and platform visibility each quarter.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS needed
</script>

<style scoped>
.pricing-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f5faff;
}

.hero {
  background: linear-gradient(to right, #6db9ff, #1a8cff);
  padding: 80px 20px 60px;
  text-align: center;
  color: white;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.hero h1 {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 15px;
}

.hero p {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 28px;
  }

  .hero p {
    font-size: 16px;
  }
}

.pricing-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.pricing-card h2 {
  font-size: 20px;
  color: #1a8cff;
  margin-bottom: 10px;
  font-weight: 600;
}

.price {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #222;
}

.duration {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.detail {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  line-height: 1.4;
}

.online-tiers {
  list-style: none;
  padding: 0;
  font-size: 15px;
  color: #444;
  margin-top: 10px;
}

.online-tiers li {
  margin: 8px 0;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}
</style>
