<template>
  <div class="p-4 md:p-8">
    <h2 class="text-2xl font-bold mb-6">My Profile</h2>

    <div class="bg-white rounded-xl shadow-md border border-gray-200 p-6 max-w-xl space-y-6">
      <!-- Avatar Upload -->
      <div class="flex items-center gap-4">
        <img
          :src="profile.avatar"
          alt="Profile"
          class="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <input type="file" @change="handleAvatarUpload" class="text-sm file:mr-3 file:px-3 file:py-1 file:bg-green-500 file:text-white file:rounded file:cursor-pointer" />
          <p class="text-xs text-gray-500 mt-1">Upload JPG or PNG, max 2MB</p>
        </div>
      </div>

      <!-- Profile Fields -->
      <div class="space-y-4">
        <div>
          <label class="block font-medium text-gray-700 mb-1">Full Name</label>
          <input
            v-model="profile.name"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="profile.email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            v-model="profile.phone"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            v-model="profile.bio"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>
      </div>

      <!-- Account Details -->
      <div class="pt-6 border-t border-gray-200">
        <h3 class="text-lg font-semibold mb-4">Account Details</h3>

        <div class="space-y-4">
          <div>
            <label class="block font-medium text-gray-700 mb-1">Bank Name</label>
            <input
              v-model="profile.bankName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block font-medium text-gray-700 mb-1">Account Number</label>
            <input
              v-model="profile.accountNumber"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block font-medium text-gray-700 mb-1">Account Name</label>
            <input
              v-model="profile.accountName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="pt-6">
        <button
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profile = ref({
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+234 801 123 4567',
  bio: 'Enthusiastic learner and future software engineer.',
  avatar: 'https://via.placeholder.com/150',

  // Account Details
  bankName: 'Access Bank',
  accountNumber: '0123456789',
  accountName: 'Jane Doe',
});

function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      profile.value.avatar = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>
