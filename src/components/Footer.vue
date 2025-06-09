<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <!-- Brand Info -->
        <div class="footer-column">
          <h3>VTeach</h3>
          <p class="tagline">Empowering learning through modern technology.</p>

          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/courses">Courses</router-link></li>
            <li><router-link to="/pricing">Pricing</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/ourgoals">Our Goals</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>

        <!-- Support -->
        <div class="footer-column">
          <h4>Support</h4>
          <ul>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><a href="mailto:support@vteach.com">Email Us</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-column newsletter">
          <h4>Subscribe to Newsletter</h4>
          <p>Get the latest updates and course releases.</p>
          <form @submit.prevent="submitNewsletter">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 VTeach. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    submitNewsletter() {
      alert('Thank you for subscribing!');
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  color: #4b5563;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  padding: 2rem 1rem 1rem;
}

.footer-inner {
  max-width: 1200px;
  margin: auto;
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-column {
  min-width: 180px;
  flex: 1;
}

.footer-column h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.footer-column h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.footer-column .tagline {
  font-size: 0.9rem;
  margin-top: 0.25rem;
  color: #6b7280;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
}

.footer-column ul li a {
  text-decoration: none;
  color: #4b5563;
  transition: color 0.3s ease;
}

.footer-column ul li a:hover {
  color: #0ea5e9;
}

.social-icons {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
}

.social-icons a {
  color: #4b5563;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #0ea5e9;
}

.newsletter p {
  margin-bottom: 0.5rem;
  color: #6b7280;
}

.newsletter form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.newsletter input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.9rem;
}

.newsletter button {
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter button:hover {
  background-color: #0284c7;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #6b7280;
}
</style>

<!-- Make sure Font Awesome is included in your index.html or layout -->
<!-- Example (add in public/index.html <head>): -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> -->
