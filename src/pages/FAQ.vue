<template>
  <section class="page-container">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-list">
      <div class="faq-item" v-for="(item, i) in faqs" :key="i">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqs: [
        { question: 'How do I join a course?', answer: 'Click “Sign Up”, then browse available courses.' },
        { question: 'Do I get certificates?', answer: 'Yes, certificates unlock after passing the test (≥ 70%).' },
        { question: 'Can I teach on VTeach?', answer: 'Yes. Apply as a teacher and get approved to create courses.' },
      ],
    };
  },
};
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #212121;
  margin-bottom: 2rem;
  text-align: center;
}

.faq-item {
  background: white;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
}

.faq-item h3 {
  font-family: 'Montserrat', sans-serif;
  color: #2978F0;
  margin-bottom: 0.5rem;
}

.faq-item p {
  font-size: 1rem;
  color: #444;
}
</style>
