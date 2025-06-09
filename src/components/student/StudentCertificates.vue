<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">My Certificates</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in certificates"
        :key="course.id"
        class="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 flex flex-col"
      >
        <!-- Thumbnail -->
        <img
          :src="course.thumbnail"
          alt="Course Thumbnail"
          class="w-full h-40 object-cover rounded mb-3"
        />

        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-800">{{ course.title }}</h3>
          <p class="text-sm text-gray-600 mb-2">Instructor: {{ course.instructor }}</p>
          <p class="text-sm mb-2">
            Status:
            <span
              :class="{
                'text-yellow-600': course.status === 'not_tested',
                'text-green-600': course.status === 'passed',
                'text-red-500': course.status === 'failed',
              }"
              class="font-semibold"
            >
              {{ course.status === 'not_tested' ? 'Not Tested' : course.status === 'passed' ? 'Passed' : 'Failed' }}
            </span>
          </p>

          <p v-if="course.score !== null" class="text-sm text-gray-600">
            Score: {{ course.score }}%
          </p>
        </div>

        <!-- Conditional UI -->
        <div class="mt-4">
          <button
            v-if="course.status === 'not_tested'"
            class="bg-yellow-500 text-white w-full py-2 rounded hover:bg-yellow-600"
            @click="startTest(course.id)"
          >
            🟡 Take Test
          </button>

          <a
            v-else-if="course.status === 'passed'"
            :href="course.downloadLink"
            download
            class="bg-green-600 text-white block text-center py-2 rounded hover:bg-green-700"
          >
            ✅ Download Certificate
          </a>

          <button
            v-else-if="course.status === 'failed'"
            class="bg-gray-700 text-white w-full py-2 rounded hover:bg-gray-800"
            @click="startTest(course.id)"
          >
            🔁 Retake Test
          </button>
        </div>

        <!-- Test Form -->
        <div v-if="activeTestId === course.id" class="mt-6">
          <h4 class="text-md font-semibold mb-3">🧪 Test: {{ course.title }}</h4>

          <form @submit.prevent="submitTest(course.id)">
            <div
              v-for="(q, index) in course.questions"
              :key="index"
              class="mb-4"
            >
              <p class="font-medium mb-2">{{ index + 1 }}. {{ q.question }}</p>
              <div class="space-y-1">
                <label
                  v-for="(option, i) in q.options"
                  :key="i"
                  class="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    :name="`q-${course.id}-${index}`"
                    :value="option"
                    v-model="answers[course.id][index]"
                  />
                  <span>{{ option }}</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Submit Test
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const activeTestId = ref(null)

const certificates = reactive([
  {
    id: 1,
    title: 'Vue.js Fundamentals',
    instructor: 'David Adeyemi',
    status: 'not_tested',
    score: null,
    thumbnail: 'https://source.unsplash.com/400x300/?vue',
    downloadLink: '/certificates/vuejs.pdf',
    questions: [
      {
        question: 'What is Vue.js?',
        options: ['A JavaScript framework', 'A CSS library', 'A CMS', 'An IDE'],
        answer: 'A JavaScript framework',
      },
      {
        question: 'Which directive is used for conditionals?',
        options: ['v-show', 'v-if', 'v-bind', 'v-for'],
        answer: 'v-if',
      },
      {
        question: 'Which hook runs after render?',
        options: ['mounted', 'created', 'setup', 'beforeMount'],
        answer: 'mounted',
      },
      {
        question: 'File extension for Vue components?',
        options: ['.vue', '.vjs', '.jsx', '.component'],
        answer: '.vue',
      },
      {
        question: 'Looping in Vue uses?',
        options: ['v-if', 'v-loop', 'v-each', 'v-for'],
        answer: 'v-for',
      },
    ],
  },
])

const answers = reactive({})

function startTest(courseId) {
  activeTestId.value = courseId
  const course = certificates.find(c => c.id === courseId)
  answers[courseId] = Array(course.questions.length).fill('')
  course.score = null
}

function submitTest(courseId) {
  const course = certificates.find(c => c.id === courseId)
  const userAnswers = answers[courseId]
  let correct = 0

  course.questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) correct++
  })

  const percent = Math.round((correct / course.questions.length) * 100)
  course.score = percent
  course.status = percent >= 70 ? 'passed' : 'failed'
  activeTestId.value = null
}
</script>
