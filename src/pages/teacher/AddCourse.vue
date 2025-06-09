<template>
  <section class="add-course-page">
    <h1>Add New Course</h1>
    <form @submit.prevent="submitCourse">
      <!-- Basic Info -->
      <label>Course Title</label>
      <input type="text" v-model="form.title" required />

      <label>Instructor Name</label>
      <input type="text" v-model="form.instructor" required />

      <label>Course Type</label>
      <select v-model="form.type" required>
        <option disabled value="">Select a type</option>
        <option value="offline">Offline</option>
        <option value="online" :disabled="!approved">Online</option>
        <option value="live">Live</option>
      </select>

      <!-- Online Course Fields -->
      <div v-if="form.type === 'online'">
        <label>Duration</label>
        <select v-model="form.duration" required>
          <option value="1 month">1 month – ₦15,000</option>
          <option value="2 months">2 months – ₦25,000</option>
          <option value="3 months">3 months – ₦35,000</option>
          <option value="6 months">6 months – ₦50,000</option>
          <option value="1 year">1 year – ₦120,000</option>
          <option value="2 years">2 years – ₦250,000</option>
        </select>

        <label>Days of the Week</label>
        <div class="days-checkboxes">
          <label v-for="day in days" :key="day">
            <input type="checkbox" :value="day" v-model="form.days" /> {{ day }}
          </label>
        </div>

        <label>Time of Class</label>
        <input type="time" v-model="form.time" required />
      </div>

      <!-- Live Class Fields -->
      <div v-if="form.type === 'live'">
        <label>Class Fee (₦5,000 minimum)</label>
        <input type="number" v-model="form.fee" min="5000" required />

        <label>Days of the Week</label>
        <div class="days-checkboxes">
          <label v-for="day in days" :key="day">
            <input type="checkbox" :value="day" v-model="form.days" /> {{ day }}
          </label>
        </div>

        <label>Time of Class</label>
        <input type="time" v-model="form.time" required />

        <label>Length of Class</label>
        <div class="length-box">
          <input type="number" v-model="form.lengthHours" placeholder="Hours" min="0" />
          <input type="number" v-model="form.lengthMinutes" placeholder="Minutes" min="0" max="59" />
        </div>
      </div>

      <!-- Offline Class Fields -->
      <div v-if="form.type === 'offline'">
        <label>Class Fee (Fixed ₦7,000)</label>
        <input type="number" value="7000" disabled />

        <label>Day of Class</label>
        <div class="days-radios">
          <label v-for="day in days" :key="day">
            <input type="radio" name="offlineDay" :value="day" v-model="form.day" /> {{ day }}
          </label>
        </div>

        <label>Time of Class</label>
        <input type="time" v-model="form.time" required />
      </div>

      <!-- Description -->
      <label>Description</label>
      <textarea v-model="form.description" rows="5" required></textarea>

      <!-- Thumbnail -->
      <label>Course Thumbnail</label>
      <input type="file" @change="handleThumbnail" accept="image/*" />

      <!-- Videos & Materials -->
      <div v-if="form.type === 'offline' || form.type === 'online'">
        <label>Number of Videos</label>
        <select v-model.number="videoCount">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>

        <div v-for="(video, index) in form.videos" :key="index" class="video-section">
          <h3>Video {{ index + 1 }}</h3>

          <label>Video File</label>
          <input type="file" :required="isOffline" @change="(e) => handleUpload(e, index, 'video')" accept="video/*" />

          <label>Lesson Outline</label>
          <textarea v-model="video.lessonOutline" placeholder="Brief outline of this lesson..." rows="3"></textarea>

          <label>Material Link</label>
          <input type="url" v-model="video.link" placeholder="https://..." />

          <label>Upload PDF</label>
          <input type="file" @change="(e) => handleUpload(e, index, 'pdf')" accept=".pdf" />

          <label>Upload Image</label>
          <input type="file" @change="(e) => handleUpload(e, index, 'image')" accept="image/*" />

          <div v-if="uploadProgress[index]">
            <div class="progress-bar" :style="{ width: uploadProgress[index] + '%' }">
              {{ uploadProgress[index] }}%
            </div>
          </div>
        </div>
      </div>

      <!-- Approval -->
      <div class="approval-box">
        <p>Status: <strong>{{ approved ? 'Approved' : 'Pending Approval' }}</strong></p>
        <button type="button" @click="simulateApproval" v-if="!approved">
          Simulate Admin Approval
        </button>
      </div>

      <!-- Submit -->
      <button type="submit" :disabled="form.type === 'online' && !approved">Submit Course</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        instructor: '',
        type: '',
        fee: '',
        duration: '',
        day: '',
        days: [],
        time: '',
        lengthHours: '',
        lengthMinutes: '',
        description: '',
        thumbnail: null,
        videos: [],
      },
      videoCount: 0,
      uploadProgress: {},
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      approved: false,
    };
  },
  computed: {
    isOffline() {
      return this.form.type === 'offline';
    },
  },
  watch: {
    videoCount(newCount) {
      this.form.videos = Array.from({ length: newCount }, () => ({
        video: null,
        link: '',
        pdf: null,
        image: null,
        lessonOutline: '',
      }));
    },
  },
  methods: {
    getOnlineFee(duration) {
      const map = {
        '1 month': 15000,
        '2 months': 25000,
        '3 months': 35000,
        '6 months': 50000,
        '1 year': 120000,
        '2 years': 250000,
      };
      return map[duration] || 0;
    },
    submitCourse() {
      if (this.form.type === 'online') {
        this.form.fee = this.getOnlineFee(this.form.duration);
      } else if (this.form.type === 'offline') {
        this.form.fee = 7000;
      }
      const newCourseId = Math.floor(Math.random() * 1000000).toString();
      const courseData = {
        id: newCourseId,
        ...this.form,
        videos: this.form.videos.map((v, i) => ({
          index: i + 1,
          video: v.video?.name || null,
          pdf: v.pdf?.name || null,
          image: v.image?.name || null,
          link: v.link || '',
          lessonOutline: v.lessonOutline || '',
        })),
        schedule:
          this.form.type !== 'online'
            ? `${this.form.day || this.form.days.join(', ')} at ${this.form.time}`
            : null,
        thumbnailName: this.form.thumbnail?.name || 'None',
        thumbnail:
          this.form.thumbnail
            ? URL.createObjectURL(this.form.thumbnail)
            : 'https://source.unsplash.com/300x200/?course',
        enrolled: 0,
      };
      localStorage.setItem('newCourse', JSON.stringify(courseData));
      this.$router.push({ path: '/teacher-panel/courses', query: { new: newCourseId } });
    },
  },
};
</script>

<style scoped>
.add-course-page {
  max-width: 700px;
  margin: 4rem auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #2978F0;
  margin-bottom: 2rem;
  text-align: center;
}

form {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
}

label {
  display: block;
  margin-top: 1.2rem;
  font-weight: bold;
  color: #333;
}

input,
textarea,
select {
  width: 100%;
  padding: 12px 16px;
  margin-top: 0.3rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.days-checkboxes,
.days-radios {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0.5rem;
}

.length-box {
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
}

.length-box input {
  flex: 1;
}

.approval-box {
  margin-top: 1.5rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  color: #333;
}

.video-section {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
}

.progress-bar {
  background: #2978F0;
  height: 10px;
  color: white;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
  border-radius: 6px;
}
</style>

