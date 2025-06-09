<template>
  <div class="settings-container">
    <h1 class="title">Account Settings</h1>

    <div class="card">
      <h2>Profile Information</h2>
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>
    </div>

    <div class="card">
      <h2>Change Password</h2>
      <div class="form-group">
        <label>Current Password</label>
        <input type="password" v-model="currentPassword" />
      </div>
      <div class="form-group">
        <label>New Password</label>
        <input type="password" v-model="newPassword" />
      </div>
      <div class="form-group">
        <label>Confirm New Password</label>
        <input type="password" v-model="confirmPassword" />
      </div>
    </div>

    <div class="card">
      <h2>Notifications</h2>
      <div class="toggle-group">
        <label>
          <input type="checkbox" v-model="notificationsEnabled" />
          Enable Email Notifications
        </label>
        <label>
          <input type="checkbox" v-model="promoEmails" />
          Receive Promotional Emails
        </label>
      </div>
    </div>

    <div class="card">
      <h2>Account Preferences</h2>
      <div class="form-group">
        <label>Language</label>
        <select v-model="language">
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
      <div class="form-group">
        <label>Theme</label>
        <select v-model="theme">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
    </div>

    <div class="card danger">
      <h2>Danger Zone</h2>
      <p>This action is irreversible.</p>
      <button class="delete-btn" @click="deleteAccount">Delete Account</button>
    </div>

    <button class="save-btn" @click="saveSettings">Save Changes</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('John Doe');
const email = ref('john@example.com');
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const notificationsEnabled = ref(true);
const promoEmails = ref(false);
const language = ref('English');
const theme = ref('Light');

function saveSettings() {
  alert('Settings saved successfully!');
}

function deleteAccount() {
  if (confirm('Are you sure you want to delete your account?')) {
    alert('Account deleted!');
  }
}
</script>

<style scoped>
.settings-container {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  font-family: 'Inter', sans-serif;
  color: #333;
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
  margin-bottom: 30px;
}

.card h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #222;
}

.form-group {
  margin-bottom: 16px;
}

label {
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  transition: 0.3s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: #2196f3;
}

.toggle-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-weight: 500;
}

.save-btn {
  background-color: #2196f3;
  color: #fff;
  font-weight: bold;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  transition: background 0.3s ease;
}

.save-btn:hover {
  background-color: #1976d2;
}

.danger {
  border: 1px solid #f44336;
  background: #fff5f5;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>
