<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1>Log In</h1>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>

        <button type="submit" class="auth-btn">Log In</button>

        <p class="switch-link">
          Don’t have an account?
          <router-link to="/register">Sign up</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log("Logging in:", this.email, this.password);
      // TODO: Call your auth service
    }
  }
};
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background: #f8fafc;
  font-family: 'Inter', sans-serif;
}

.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.auth-card h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.form-group {
  text-align: left;
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #334155;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
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
  margin-top: 0.5rem;
}

.auth-btn:hover {
  background-color: #0284c7;
}

.switch-link {
  margin-top: 1.2rem;
  font-size: 0.9rem;
}

.switch-link a {
  color: #0ea5e9;
  text-decoration: none;
}
</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    // Login request
    const res = await api.post('/auth/token/login/', {
      email: email.value,
      password: password.value
    });

    const token = res.data.auth_token
    localStorage.setItem('auth_token', token)

    // Fetch user profile (basic info)
    const userRes = await api.get('/auth/users/me/')
    const user = userRes.data
    console.log('Logged in user:', user)

    // Redirect (you can improve this later by checking their role)
    router.push('/student/courses')
  } catch (err) {
    alert('Login failed. Check credentials.')
    console.error(err)
  }
}

</script>

