<template>
  <section class="apply-page">
    <h1>Apply to Teach Online</h1>
    <p class="intro">
      Submit this form to apply for permission to upload online courses or host live classes.
    </p>

    <div class="form-box">
      <!-- IF teacher has already applied, show their application status -->
      <div v-if="applicationStatus">
        <p v-if="applicationStatus === 'pending'" class="status pending">
          <i class="fas fa-hourglass-half"></i>
          Your application has been submitted and is currently under review.
        </p>
        <p v-else-if="applicationStatus === 'approved'" class="status approved">
          <i class="fas fa-check-circle"></i>
          Congratulations! Your application has been approved. You can now teach online.
        </p>
        <p v-else-if="applicationStatus === 'declined'" class="status declined">
          <i class="fas fa-times-circle"></i>
          Your application was not approved. Feel free to try again in the future.
        </p>
      </div>

      <!-- IF no application yet, show the application form -->
      <form v-else @submit.prevent="submitApplication">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="form.name" required />

        <label for="email">Email</label>
        <input id="email" type="email" v-model="form.email" required />

        <label for="reason">Why do you want to teach online?</label>
        <textarea id="reason" v-model="form.reason" rows="4" required></textarea>

        <label for="topics">What subjects or skills will you teach?</label>
        <input
          id="topics"
          type="text"
          v-model="form.topics"
          placeholder="e.g. Web Development, UI Design"
          required
        />

        <button type="submit"><i class="fas fa-paper-plane"></i> Submit Application</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApplyForOnline',
  data() {
    return {
      form: {
        name: '',
        email: '',
        reason: '',
        topics: ''
      },
      applicationStatus: null // 'pending', 'approved', 'declined', or null
    };
  },
  created() {
    this.fetchApplicationStatus();
  },
  methods: {
    async fetchApplicationStatus() {
      // Replace this mock with real API logic
      // Example: await fetch('/api/teacher/application-status')
      const mockStatus = null; // 'pending', 'approved', 'declined', or null
      this.applicationStatus = mockStatus;
    },
    async submitApplication() {
      try {
        const payload = { ...this.form };

        // Replace with real API call: await fetch('/api/teacher/apply', ...)
        console.log('Submitting application:', payload);

        // Simulate successful submission
        this.applicationStatus = 'pending';
      } catch (error) {
        alert('There was an error submitting your application.');
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.apply-page {
  max-width: 600px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  font-family: 'Inter', sans-serif;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #2978F0;
  text-align: center;
}

.intro {
  text-align: center;
  margin-bottom: 2rem;
  color: #555;
  font-size: 1rem;
}

.form-box {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
}

label {
  font-weight: 600;
  display: block;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
}

button {
  background: #2978F0;
  color: white;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;
}

button:hover {
  background: #00D2FF;
}

.status {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  font-weight: 500;
}

.status i {
  font-size: 1.5rem;
}

.status.pending {
  background: #fffbe5;
  color: #b58900;
  border: 1px solid #ffe58f;
}

.status.approved {
  background: #e6ffed;
  color: #2e7d32;
  border: 1px solid #b2fab4;
}

.status.declined {
  background: #ffe6e6;
  color: #d32f2f;
  border: 1px solid #f5b5b5;
}

/* Mobile-friendly */
@media (max-width: 500px) {
  .form-box {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  .intro {
    font-size: 0.95rem;
  }

  button {
    width: 100%;
    justify-content: center;
  }
}
</style>
