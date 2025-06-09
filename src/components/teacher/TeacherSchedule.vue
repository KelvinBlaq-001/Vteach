<template>
  <div class="teacher-page">
    <h1>Upcoming Live Classes</h1>

    <div class="class-list">
      <div class="class-card" v-for="cls in schedule" :key="cls.id">
        <h2>{{ cls.title }}</h2>
        <p><strong>Date:</strong> {{ cls.date }}</p>
        <p><strong>Time:</strong> {{ cls.time }}</p>
        <p><strong>Platform:</strong> {{ cls.platform }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherSchedule",
  data() {
    return {
      schedule: [
        {
          id: 1,
          title: "UX Design Q&A",
          date: "May 22, 2025",
          time: "6:00 PM GMT",
          platform: "Zoom"
        },
        {
          id: 2,
          title: "Figma Project Review",
          date: "May 25, 2025",
          time: "3:00 PM GMT",
          platform: "Google Meet"
        }
      ]
    };
  }
};
</script>

<style scoped>
.teacher-page h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  color: #1e293b;
  margin-bottom: 2rem;
}

.class-list {
  display: grid;
  gap: 1.5rem;
}

.class-card {
  background: #ffffff;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
}

.class-card h2 {
  font-size: 1.1rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.class-card p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.3rem;
}
</style>
