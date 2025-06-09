<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1>Create Account</h1>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Name</label>
          <input v-model="name" type="text" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>

        <div class="form-group">
          <label>Registering as</label>
          <select v-model="role" required>
            <option disabled value="">Select role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <!-- Teacher Fields (wrapped for smooth transition) -->
        <transition name="fade">
          <div v-if="role === 'teacher'" class="teacher-extra">
            <div class="form-group">
              <label>Area of Expertise</label>
              <input v-model="expertise" type="text" placeholder="e.g., Design, Forex, AI" />
            </div>

            <div class="form-group checkbox-group">
              <input type="checkbox" v-model="agreedToPay" id="pay" required />
              <label for="pay">I agree to pay the quarterly fee</label>
            </div>

            <p class="note">Teachers are required to pay ₦12,000 quarterly to keep teaching.</p>
          </div>
        </transition>

        <button type="submit" class="auth-btn">Sign Up</button>

        <p class="switch-link">
          Already have an account?
          <router-link to="/login">Log in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
      expertise: "",
      agreedToPay: false
    };
  },
  methods: {
    handleRegister() {
      if (this.role === "teacher" && !this.agreedToPay) {
        alert("You must agree to the quarterly fee to register as a teacher.");
        return;
      }

      const newUser = {
        name: this.name,
        email: this.email,
        role: this.role
      };

      console.log("Registering:", newUser);

      // Redirect based on role
      if (this.role === "teacher") {
        this.$router.push("/teacher/pay");
      } else {
        this.$router.push("/student/courses");
      }
    }
  }
};
</script>


<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8fafc;
  padding: 1rem;
  font-family: 'Inter', sans-serif;
}

.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 420px;
}

.auth-card h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  text-align: center;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #334155;
}

input,
select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.note {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.auth-btn {
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
}

.auth-btn:hover {
  background-color: #0284c7;
}

.switch-link {
  margin-top: 1.4rem;
  font-size: 0.9rem;
  text-align: center;
}

.switch-link a {
  color: #0ea5e9;
  text-decoration: none;
}

/* Mobile responsive */
@media (max-width: 480px) {
  .auth-card {
    padding: 1.5rem;
    border-radius: 12px;
  }
}

/* Smooth show/hide transition */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const expertise = ref('')
const agreedToPay = ref(false)

const router = useRouter()

const handleRegister = async () => {
  if (role.value === 'teacher' && !agreedToPay.value) {
    alert('Teachers must agree to the quarterly fee.')
    return
  }

  try {
await api.post('/auth/users/', {
  username: name.value,
  email: email.value,
  password: password.value,
  role: role.value,
  expertise: role.value === 'teacher' ? expertise.value : ''
})


    alert('Registration successful. Please log in.')
    router.push('/login')
  } catch (err) {
    alert('Registration failed.')
    console.error(err)
  }
}
</script>
