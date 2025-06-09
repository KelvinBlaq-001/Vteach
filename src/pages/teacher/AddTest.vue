<template>
  <div class="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6">🧪 Add Test for Course</h2>

    <form @submit.prevent="submitTest" class="space-y-6">
      <div
        v-for="(q, index) in questions"
        :key="index"
        class="border p-4 rounded-md space-y-4"
      >
        <h3 class="font-semibold text-lg mb-2">Question {{ index + 1 }}</h3>

        <div>
          <label class="block mb-1 font-medium">Question</label>
          <input
            v-model="q.question"
            type="text"
            class="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div v-for="i in 4" :key="i">
          <label class="block mb-1 font-medium">Option {{ i }}</label>
          <input
            v-model="q.options[i - 1]"
            type="text"
            class="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Correct Answer</label>
          <select
            v-model="q.answer"
            class="w-full border rounded px-4 py-2"
            required
          >
            <option disabled value="">Select correct answer</option>
            <option v-for="(opt, i) in q.options" :key="i" :value="opt">
              {{ opt || 'Option ' + (i + 1) }}
            </option>
          </select>
        </div>
      </div>

      <!-- Add/Remove buttons -->
      <div class="flex justify-between items-center mt-4">
        <button
          type="button"
          @click="addQuestion"
          :disabled="questions.length >= 15"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ➕ Add Question
        </button>

        <button
          type="button"
          @click="removeQuestion"
          :disabled="questions.length <= 5"
          class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          ➖ Remove Last
        </button>
      </div>

      <!-- Submit -->
      <div class="pt-6">
        <button
          type="submit"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Save Test
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
  {
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
])

function addQuestion() {
  if (questions.value.length < 15) {
    questions.value.push({
      question: '',
      options: ['', '', '', ''],
      answer: '',
    })
  }
}

function removeQuestion() {
  if (questions.value.length > 5) {
    questions.value.pop()
  }
}

function submitTest() {
  alert('Test saved! (Frontend only for now)')
  // Later: connect to backend to save questions
}
</script>
