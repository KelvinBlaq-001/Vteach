<template>
  <section class="search-page">
    <h1>Search Results for “{{ query }}”</h1>

    <div class="filters">
      <label>
        Filter by Type:
        <select v-model="selectedType">
          <option value="">All Types</option>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
          <option value="live">Live</option>
        </select>
      </label>
    </div>

    <div v-if="filteredResults.length" class="results-grid">
      <div
        v-for="course in filteredResults"
        :key="course.id"
        class="course-card"
      >
        <h2>{{ course.title }}</h2>
        <p>{{ course.description.slice(0, 100) }}...</p>
        <router-link :to="`/courses/${course.id}`" class="view-link">
          View Course →
        </router-link>
      </div>
    </div>

    <div v-else class="no-results">
      <p>No results found for “{{ query }}”</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: this.$route.query.q || "",
      selectedType: "",
      allCourses: [] // will simulate data here
    };
  },
  computed: {
    filteredResults() {
      return this.allCourses.filter((course) => {
        const matchesQuery = course.title
          .toLowerCase()
          .includes(this.query.toLowerCase());
        const matchesType = this.selectedType
          ? course.type === this.selectedType
          : true;
        return matchesQuery && matchesType;
      });
    }
  },
  mounted() {
    // Simulated courses
    this.allCourses = [
      {
        id: 1,
        title: "UX Design Fundamentals",
        type: "online",
        description: "Learn the principles of user experience design in this comprehensive online course."
      },
      {
        id: 2,
        title: "Live Python Bootcamp",
        type: "live",
        description: "Join our live instructor-led bootcamp to master Python fast."
      },
      {
        id: 3,
        title: "Offline Photography Mastery",
        type: "offline",
        description: "Master the art of photography with in-depth offline material and local workshops."
      }
    ];
  },
  watch: {
    '$route.query.q'(newQuery) {
      this.query = newQuery || "";
    }
  }
};
</script>

<style scoped>
.search-page {
  max-width: 960px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  font-family: 'Inter', sans-serif;
}

.search-page h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #1e293b;
}

.filters {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #334155;
}

.filters select {
  padding: 0.5rem;
  font-size: 0.95rem;
  margin-left: 0.5rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .results-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.course-card {
  background-color: #ffffff;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
}

.course-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.course-card h2 {
  font-size: 1.2rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.course-card p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.75rem;
}

.view-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: #0ea5e9;
  text-decoration: none;
}

.view-link:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  font-size: 1rem;
  color: #64748b;
  margin-top: 2rem;
}
</style>
