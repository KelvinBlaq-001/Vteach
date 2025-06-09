<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Settings</h1>
    <div class="space-y-4 bg-white p-6 rounded shadow">
      <div>
        <label class="block text-sm font-medium">Platform Name</label>
        <input v-model="settings.name" class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block text-sm font-medium">Support Email</label>
        <input v-model="settings.email" class="w-full border p-2 rounded" />
      </div>
      <button class="bg-green-600 text-white px-4 py-2 rounded">
        Save Settings
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const settings = reactive({
  name: 'Vteach',
  email: 'support@vteach.com',
});
</script>
