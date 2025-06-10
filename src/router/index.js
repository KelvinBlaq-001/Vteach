import { createRouter, createWebHistory } from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// Public Pages
import Home from '../pages/Home.vue'
import OfflineCourses from '../pages/OfflineCourses.vue'
import LiveClasses from '../pages/LiveClasses.vue'
import ApplyForOnline from '../components/teacher/ApplyForOnline.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

// New Themed Public Pages
import Courses from '../pages/Courses.vue' // Replaces OnlineCourses
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Pricing from '../pages/Pricing.vue'
import FAQ from '../pages/FAQ.vue'
import OurGoals from '../pages/OurGoals.vue'

// Student Dashboard Layout & Pages
import StudentDashboardLayout from '../components/StudentDashboardLayout.vue'
import StudentCourses from '../components/student/StudentCourses.vue'
import StudentSchedule from '../components/student/StudentSchedule.vue'
import StudentProfile from '../components/student/StudentProfile.vue'
import StudentCertificates from '../components/student/StudentCertificates.vue'
import CourseDetails from '@/pages/student/CourseDetails.vue'
import CourseContent from '@/components/CourseContent.vue'

// Teacher Dashboard Layout & Pages
import TeacherDashboard from '../pages/TeacherDashboard.vue'
import TeacherPanelLayout from '../components/TeacherPanelLayout.vue'
import TeacherCourses from '../components/TeacherCourses.vue'
import TeacherSchedule from '../components/TeacherSchedule.vue'
import TeacherProfile from '../components/TeacherProfile.vue'
import TeacherEarnings from '../components/teacher/TeacherEarnings.vue'
import TeacherNotifications from '../components/teacher/TeacherNotifications.vue'
import EditLiveClass from '@/components/EditLiveClass.vue'

// Admin Dashboard & Views
import AdminDashboard from '@/views/admin/AdminDashboard.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import StudentDiscover from '@/components/student/StudentDiscover.vue'
import StudentSettings from '@/components/student/StudentSettings.vue'
import StudentDashboard from '@/components/student/StudentDashboard.vue'
// import TeacherNotifications from '@/components/TeacherNotifications.vue'



// Optional: tweak speed and color
NProgress.configure({ showSpinner: false, speed: 500 })


const routes = [
  // Public Routes
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/offline-courses', component: OfflineCourses },
  { path: '/live-classes', component: LiveClasses },
  { path: '/courses', component: Courses },





  // New Public Pages@/pages/student/CourseDetails.vue
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/pricing', component: Pricing },
  { path: '/faq', component: FAQ }, // shown only via link
  { path: '/our-goals', component: OurGoals },


  { path: '/', component: StudentCourses },
  { path: '/courses/:id', component: CourseDetails, props: true },
  { path: '/my-courses/:id', component: CourseContent, props: true },
 {
  path: '/courses/:id',
  name: 'CourseDetail', component: CourseDetails
 },

{
  path: '/admin/students/:id',
  name: 'StudentProfile',
  component: () => import('@/views/admin/Students/StudentProfile.vue') // or your correct path
},

{
  path: '/admin/teachers/:id',
  name: 'TeacherProfile',
  component: () => import('@/views/admin/Teachers/TeacherProfile.vue') // or your correct path
},

// Example Vue Router config snippet
{
  path: '/teacher/edit-live-class/:id',
  name: 'EditLiveClass',
  component: EditLiveClass,
},


  // Student Dashboard (nested)
  {
    path: '/student',
    component: StudentDashboardLayout,
    redirect: '/student/dashboard',
    children: [
      { path: 'dashboard', component: StudentDashboard },
      { path: 'courses', component: StudentCourses },
      { path: 'schedule', component: StudentSchedule },
      { path: 'profile', component: StudentProfile },
      { path: 'certificates', component: StudentCertificates },
      { path: 'discover', component: StudentDiscover },
      { path: 'settings', component: StudentSettings },
      { path: 'discover/:id', name: 'CourseDetails', component: CourseDetails },
      { path: 'notifications', component: () => import('@/pages/Notifications.vue') }
    ]
  },
  
  {
    path: '/teacher-panel',
    component: TeacherPanelLayout,
    redirect: '/teacher-panel/courses',
    children: [
      { path: 'courses', component: TeacherCourses },
      { path: 'schedule', component: TeacherSchedule },
      { path: 'profile', component: TeacherProfile },
      { path: 'earnings', component: TeacherEarnings },
      { path: 'apply-for-online',component: ApplyForOnline },
      { path: 'teachernotifications', component: TeacherNotifications },
      { path: 'reviews', component: () => import('../pages/teacher/TeacherReviews.vue') },
    ]
  },

  // Admin Dashboard
  {
  path: '/admin',
  component: AdminDashboard,
  children: [
    { path: '', component: () => import('@/views/admin/Overview.vue') },
    { path: 'students', component: () => import('@/views/admin/Students/Students.vue') },
    { path: 'teachers', component: () => import('@/views/admin/Teachers.vue') },
    { path: 'teacher-reviews', component: () => import('@/views/admin/TeacherReviews.vue') },
    { path: 'courses', component: () => import('@/views/admin/Courses.vue') },
    { path: 'payments', component: () => import('@/views/admin/Payments.vue') },
    { path: 'reports', component: () => import('@/views/admin/Reports.vue') },
    { path: 'settings', component: () => import('@/views/admin/Settings.vue') }
  ]
},

  // Student Review
  {
    path: '/student/review/:courseId',
    component: () => import('../pages/student/StudentWriteReview.vue')
  },

  // Teacher Reviews
  {
    path: '/teacher/reviews',
    component: () => import('../pages/teacher/TeacherReviews.vue')
  },

  // Apply Page
  {
    path: '/apply-for-online',
    component: () => import('../components/teacher/ApplyForOnline.vue')
  },

  // Search Page
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/Search.vue')
  },

  // Teacher Tools
  {
    path: '/teacher/manage-courses',
    component: () => import('../pages/teacher/TeacherCoursesManage.vue')
  },
  {
    path: '/teacher/edit-course/:id',
    component: () => import('../pages/teacher/EditCourse.vue')
  },
  {
    path: '/teacher/add-test/:id',
    component: () => import('../pages/teacher/AddTest.vue')
  },
  {
    path: '/teacher/add-course',
    component: () => import('../pages/teacher/AddCourse.vue')
  },
  {
    path: '/teacher/add-test',
    component: () => import('../pages/teacher/AddTest.vue')
  },
// {
//   path: '/teacher/edit-schedule/:id',
//   name: 'EditSchedule',
//   component: EditSchedule,
//   props: true,
// },

{
  path: '/unauthorized',
  name: 'Unauthorized',
  component: () => import('@/pages/Unauthorized.vue')
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/pages/NotFound.vue')
},

{
  path: '/teacher/pay',
  name: 'TeacherPayment',
  component: () => import('@/pages/TeacherPayment.vue')
},

{
  path: '/teacher/payment-history',
  name: 'TeacherPaymentHistory',
  component: () => import('@/pages/TeacherPaymentHistory.vue')
},

{
  path: '/select-role',
  name: 'RoleSwitcher',
  component: () => import('@/pages/RoleSwitcher.vue')
},


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 300) // delay helps with fast routes
})


export default router
