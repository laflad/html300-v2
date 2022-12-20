import Vue from 'vue';
import App from './App.vue'

Vue.config.productionTip = false

// Import the vue-router
import VueRouter from 'vue-router'

// My custom import
import HomePage from './components/pages/HomePage'
import ImagesPage from './components/pages/ImagesPage'
import AccordionPage from './components/pages/AccordionPage'
import GridPage from './components/pages/GridPage'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './scss/style.scss'


// Add the Router plugin
Vue.use(VueRouter)

// Define the routes
const routes = [
  { path: '/', name:'Home', component: HomePage },
  { path: '/images', name:'Images', component: ImagesPage },
  { path: '/accordion', name:'Accordion', component: AccordionPage },
  { path: '/grid', name:'Grids', component: GridPage },
]

// Create the router instance
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

