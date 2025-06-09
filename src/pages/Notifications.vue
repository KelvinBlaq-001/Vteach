<template>
  <section class="notifications-page">
    <h1>Notifications</h1>

    <div class="notification-list">
      <div
        v-for="(note, index) in notifications"
        :key="index"
        :class="['notification-card', { unread: !note.read }]"
      >
        <div class="text-content">
          <p class="title">{{ note.title }}</p>
          <p class="message">{{ note.message }}</p>
          <p class="time">{{ note.time }}</p>
        </div>

        <span v-if="!note.read" class="badge">New</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      notifications: [
        {
          title: "New Course Review",
          message: "A student left feedback on 'UX Design Basics'.",
          time: "5 minutes ago",
          read: false
        },
        {
          title: "Live Class Reminder",
          message: "Your 'Design Thinking Workshop' starts in 2 hours.",
          time: "Today at 4:00 PM",
          read: true
        },
        {
          title: "Certificate Request",
          message: "A student requested a certificate for 'Python Bootcamp'.",
          time: "Yesterday",
          read: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.notifications-page {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
}

.notifications-page h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #1e293b;
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.notification-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #ffffff;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  position: relative;
}

.notification-card.unread {
  border-left: 4px solid #0ea5e9;
}

.text-content {
  flex: 1;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.3rem;
}

.message {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.4rem;
}

.time {
  font-size: 0.85rem;
  color: #94a3b8;
}

.badge {
  background: #0ea5e9;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: bold;
}
</style>
