<template>
  <div class="notifications-container">
    <h2 class="page-title">Notifications</h2>

    <div class="filter-bar">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">All</button>
      <button @click="filter = 'purchase'" :class="{ active: filter === 'purchase' }">Purchases</button>
      <button @click="filter = 'review'" :class="{ active: filter === 'review' }">Reviews</button>
      <button @click="filter = 'rating'" :class="{ active: filter === 'rating' }">Ratings</button>
    </div>

    <div class="notification-list">
      <div
        v-for="(notification, index) in filteredNotifications"
        :key="index"
        :class="['notification-card', { unread: !notification.read }]"
      >
        <i :class="notification.icon"></i>
        <div class="notification-content">
          <p class="notification-message">{{ notification.message }}</p>
          <small class="notification-time">{{ notification.time }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filter = ref('all')

const notifications = ref([
  // Purchases
  { type: 'purchase', message: 'John Doe purchased your course "Advanced React"', icon: 'fas fa-shopping-cart', time: '5 mins ago', read: false },
  { type: 'purchase', message: 'Ada Lovelace purchased "Python for Data Science"', icon: 'fas fa-shopping-cart', time: '1 hour ago', read: true },
  { type: 'purchase', message: 'Elon Musk purchased "Space Tech Fundamentals"', icon: 'fas fa-shopping-cart', time: '3 hours ago', read: false },

  // Reviews
  { type: 'review', message: 'Jane Smith left a review: "Very helpful course!"', icon: 'fas fa-comment-dots', time: '2 hours ago', read: true },
  { type: 'review', message: 'Thomas said: "Could be more practical"', icon: 'fas fa-comment-dots', time: 'Yesterday', read: false },

  // Ratings
  { type: 'rating', message: 'Samuel rated your course 5 stars', icon: 'fas fa-star', time: '1 day ago', read: false },
  { type: 'rating', message: 'Mariam rated your course 4 stars', icon: 'fas fa-star', time: '3 days ago', read: true },
])

const filteredNotifications = computed(() => {
  return filter.value === 'all'
    ? notifications.value
    : notifications.value.filter(n => n.type === filter.value)
})
</script>

<style scoped>
.notifications-container {
  max-width: 850px;
  margin: 1rem auto;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.page-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
}

.filter-bar button {
  padding: 0.5rem 1.2rem;
  border: 1px solid #0ea5e9;
  background-color: white;
  color: #0ea5e9;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
  white-space: nowrap;
}

.filter-bar button.active,
.filter-bar button:hover {
  background-color: #0ea5e9;
  color: white;
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.notification-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-left: 5px solid #0ea5e9;
  background: #f8fafc;
  border-radius: 10px;
  transition: background 0.3s;
}

.notification-card.unread {
  background: #e0f2fe;
}

.notification-card i {
  font-size: 1.5rem;
  color: #0ea5e9;
  margin-top: 3px;
  min-width: 24px;
}

.notification-content {
  flex: 1;
}

.notification-message {
  font-weight: 600;
  margin: 0 0 0.3rem;
  color: #334155;
}

.notification-time {
  font-size: 0.85rem;
  color: #64748b;
}
</style>
