<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Teacher Reviews</h2>
    <div class="space-y-4">
      <div v-for="review in reviews" :key="review.id" class="bg-white rounded-lg p-4 shadow-md">
        <p><strong>{{ review.student }}</strong> rated <strong>{{ review.teacher }}</strong>:</p>
        <p class="text-yellow-500">⭐ {{ review.rating }}</p>
        <p class="text-gray-600 italic">"{{ review.comment }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = [
  { id: 1, student: 'Sarah', teacher: 'Mr. Adewale', rating: 5, comment: 'Very engaging and detailed!' },
  { id: 2, student: 'Mike', teacher: 'Mrs. Rita', rating: 4, comment: 'Clear explanation.' }
]
</script>
