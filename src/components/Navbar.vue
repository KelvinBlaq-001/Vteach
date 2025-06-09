<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo">VTeach</router-link>

      <!-- Search Icon (Mobile Only) -->
      <div class="search-toggle" @click="toggleSearch">
        🔍
      </div>

      <!-- Floating Search Input (Mobile Only) -->
      <div v-if="isSearchVisible" class="search-float">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search courses..."
          @keyup.enter="performSearch"
        />
        <span class="close-icon" @click="isSearchVisible = false">✕</span>
      </div>

      <!-- Hamburger Menu -->
      <div class="menu-toggle" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </div>

      <!-- Links -->
      <ul :class="['nav-links', { show: isMenuOpen }]">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/courses" @click="closeMenu">Courses</router-link></li>
        <li><router-link to="/pricing" @click="closeMenu">Pricing</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        <li><router-link to="/our-goals" @click="closeMenu">Our Goals</router-link></li>

        <template v-if="userRole === 'guest'">
          <li><router-link to="/login" @click="closeMenu">Login</router-link></li>
          <li><router-link to="/register" class="join-btn" @click="closeMenu">Join for Free</router-link></li>
        </template>

        <template v-else-if="userRole === 'student'">
          <li><router-link to="/student" @click="closeMenu">Dashboard</router-link></li>
          <li><a href="#" @click.prevent="logout">Logout</a></li>
        </template>

        <template v-else-if="userRole === 'teacher'">
          <li><router-link to="/teacher" @click="closeMenu">Dashboard</router-link></li>
          <li><router-link to="/teacher/courses" @click="closeMenu">My Courses</router-link></li>
          <li><a href="#" @click.prevent="logout">Logout</a></li>
        </template>

        <template v-else-if="userRole === 'admin'">
          <li><router-link to="/admin" @click="closeMenu">Admin Panel</router-link></li>
          <li><a href="#" @click.prevent="logout">Logout</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userRole: 'guest', // Replace with real auth logic
      isMenuOpen: false,
      isSearchVisible: false,
      searchQuery: '',
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    logout() {
      alert('Logging out...');
      this.userRole = 'guest';
      this.$router.push('/');
      this.closeMenu();
    },
    performSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push(`/search?q=${encodeURIComponent(this.searchQuery)}`);
        this.searchQuery = '';
        this.isSearchVisible = false;
      }
    },
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.search-float') && !e.target.closest('.search-toggle')) {
        this.isSearchVisible = false;
      }
    });
  },
};
</script>

<style scoped>
/* Base Navbar */
.navbar {
  background-color: #ffffff;
  padding: 12px 24px;
  border-bottom: 2px solid #e6f0fa;
  box-shadow: 0 2px 8px rgba(0, 119, 204, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #0077cc;
  text-decoration: none;
}

/* Search toggle icon */
.search-toggle {
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
  display: none;
}

/* Floating search input */
.search-float {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 1050;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-float input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.close-icon {
  font-size: 16px;
  cursor: pointer;
  color: #888;
}

/* Nav Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
}

.nav-links li a {
  text-decoration: none;
  font-weight: 500;
  color: #333;
  position: relative;
}

.nav-links li a:hover {
  color: #0077cc;
}

.join-btn {
  background-color: #0077cc;
  color: white !important;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
}

/* Hamburger */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-left: 1rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #0077cc;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Responsive */
@media (max-width: 768px) {
  .search-toggle {
    display: block;
  }
  .logo {
  font-size: 24px;
  font-weight: bold;
  color: #0077cc;
  text-decoration: none;
  padding-left: 50px;
}

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }

  .nav-links.show {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
