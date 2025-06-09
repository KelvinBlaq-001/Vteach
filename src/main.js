import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Optional: jsPDF plugins (if used in other components)
import 'jspdf';
import 'jspdf-autotable';

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faTachometerAlt,
  faBook,
  faCalendarAlt,
  faUser,
  faCertificate,
  faCog,
  faSearch,
  faBell,
  faRightFromBracket,
  faStar,
  faLaptop,
  faWallet,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Add only the icons you imported
library.add(
  faBars,
  faTachometerAlt,
  faBook,
  faCalendarAlt,
  faUser,
  faCertificate,
  faCog,
  faSearch,
  faBell,
  faRightFromBracket,
  faStar,
  faLaptop,
  faWallet,
  faTimes
);

// Create Vue app instance
const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
