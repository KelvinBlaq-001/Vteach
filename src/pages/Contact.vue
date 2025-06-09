<template>
  <section class="page-container">
    <h1>Contact Us</h1>
    <div class="content-card">
      <p>We’d love to hear from you. Please fill out the form below and our team will get back to you shortly.</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    submitForm() {
      alert('Message sent!');
    },
  },
};
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #212121;
  margin-bottom: 1.5rem;
}

.content-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.05);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 16px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
}

.contact-form button {
  background: #2978F0;
  color: white;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
}

.contact-form button:hover {
  background: #00D2FF;
}
</style>
