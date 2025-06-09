<template>
  <section class="page-section">
    <h1>Explore Courses</h1>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search courses..." />
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <span
        v-for="tab in tabs"
        :key="tab.value"
        :class="['tab', { active: currentTab === tab.value }]"
        @click="currentTab = tab.value"
      >
        {{ tab.label }}
      </span>
    </div>

    <!-- Course Grid -->
    <div class="course-grid">
      <router-link
        v-for="course in filteredCourses"
        :key="course.id"
        :to="'/courses/' + course.id"
        class="course-card"
      >
        <div class="thumb" :style="{ backgroundImage: 'url(' + course.thumbnail + ')' }"></div>
        <div class="info">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <div class="meta">
            <span class="teacher">{{ course.teacher }}</span>
            <span class="duration">{{ course.duration }}</span>
          </div>
          <span class="tag">{{ course.type }}</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Courses',
  data() {
    return {
      searchQuery: '',
      currentTab: 'all',
      tabs: [
        { label: 'All', value: 'all' },
        { label: 'Offline', value: 'offline' },
        { label: 'Online', value: 'online' },
        { label: 'Live', value: 'live' },
      ],
      courses: [
        {
          id: 1,
          title: 'Design Basics',
          type: 'online',
          description: 'Master fundamentals of design thinking',
          teacher: 'Jane Doe',
          duration: '2h 30m',
          thumbnail: 'https://source.unsplash.com/400x200/?design'
        },
        {
          id: 2,
          title: 'Art Workshop',
          type: 'offline',
          description: 'Hands-on creative drawing classes',
          teacher: 'Mark Smith',
          duration: '3h 15m',
          thumbnail: 'https://source.unsplash.com/400x200/?art'
        },
        {
          id: 3,
          title: 'Live Coding Bootcamp',
          type: 'live',
          description: 'Code with experts in real time',
          teacher: 'Emily Lin',
          duration: '4h 45m',
          thumbnail: 'https://source.unsplash.com/400x200/?coding'
        },
        {
          id: 4,
          title: 'Freelancing 101',
          type: 'online',
          description: 'Start your freelancing journey',
          teacher: 'Chris Evans',
          duration: '1h 20m',
          thumbnail: 'https://source.unsplash.com/400x200/?freelance'
        },
        {
          id: 5,
          title: 'Music Production',
          type: 'offline',
          description: 'Studio sessions and training',
          teacher: 'Ava Stone',
          duration: '2h 50m',
          thumbnail: 'https://source.unsplash.com/400x200/?music'
        },
        {
          id: 6,
          title: 'Marketing Live Q&A',
          type: 'live',
          description: 'Join live strategy sessions',
          teacher: 'Daniel Kim',
          duration: '1h 10m',
          thumbnail: 'https://source.unsplash.com/400x200/?marketing'
        }
      ]
    };
  },
  computed: {
    filteredCourses() {
      const search = this.searchQuery.toLowerCase();
      return this.currentTab === 'all'
        ? this.courses.filter(c =>
            c.title.toLowerCase().includes(search) ||
            c.description.toLowerCase().includes(search) ||
            c.teacher.toLowerCase().includes(search)
          )
        : this.courses.filter(c =>
            c.type === this.currentTab &&
            (c.title.toLowerCase().includes(search) ||
             c.description.toLowerCase().includes(search) ||
             c.teacher.toLowerCase().includes(search))
          );
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@700&display=swap');

.page-section {
  font-family: 'Inter', sans-serif;
  padding: 3rem 1.5rem;
  background: linear-gradient(to right, #e0f7fa, #fce4ec);
  min-height: 100vh;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #212121;
  margin-bottom: 2rem;
  text-align: center;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-bar input {
  padding: 0.75rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: border 0.3s ease;
}

.search-bar input:focus {
  outline: none;
  border-color: #2978f0;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2.5rem;
  font-weight: 600;
  border-bottom: 2px solid #eee;
}

.tab {
  padding: 12px 0;
  cursor: pointer;
  color: #777;
  position: relative;
}

.tab.active {
  color: #2978F0;
}

.tab.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: #00D2FF;
  border-radius: 2px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.course-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0, 210, 255, 0.1);
}

.thumb {
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.info {
  padding: 1.1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.info h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.info p {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 0.7rem;
}

.meta {
  font-size: 0.85rem;
  color: #666;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}

.tag {
  background: #e6f4ff;
  color: #2978F0;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  align-self: flex-start;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .page-section {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  .tabs {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    font-size: 0.95rem;
  }

  .tab {
    padding: 8px 6px;
  }

  .search-bar input {
    width: 100%;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
  }

   .course-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .thumb {
    height: 10px;
  }

  .info h3 {
    font-size: 0.9rem;
  }

  .info p {
    font-size: 0.8rem;
  }

  .meta {
    font-size: 0.75rem;
  }

  .tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }
}

</style>

