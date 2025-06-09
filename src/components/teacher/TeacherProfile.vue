<template>
  <div class="teacher-page">
    <h1>My Profile</h1>

    <div class="profile-card">
      <div class="profile-info">
        <img :src="teacher.avatar" alt="Avatar" />
        <div>
          <p class="name">{{ teacher.name }}</p>
          <p class="email">{{ teacher.email }}</p>
        </div>
      </div>

      <div class="details">
        <p><strong>Bio:</strong> {{ teacher.bio }}</p>
        <p><strong>Location:</strong> {{ teacher.location }}</p>
        <p><strong>Joined:</strong> {{ teacher.joined }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherProfile",
  data() {
    return {
      teacher: {
        name: "Sarah Johnson",
        email: "sarah@vteach.com",
        avatar: require('@/assets/instructor.jpg'),
        bio: "UX expert with 7+ years of teaching and mentoring.",
        location: "Lagos, Nigeria",
        joined: "January 2025"
      }
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

.profile-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-info img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-weight: 600;
  font-size: 1rem;
  color: #1e293b;
}

.email {
  font-size: 0.95rem;
  color: #475569;
}

.details p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.5rem;
}
</style>
