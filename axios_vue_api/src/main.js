import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Ensure this is imported after CSS
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set axios globally, so it can be accessed in any component
const app = createApp(App);

// You can set a base URL if you use the same endpoint frequently
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; 

// Optionally, you can add some default headers if required
// axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';

// Add axios to the app instance for global usage
app.config.globalProperties.$axios = axios;

app.mount('#app');
