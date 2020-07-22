import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import  { routes } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import axios from 'axios';
import VCalendar from 'v-calendar';
import toast from './assets/toast'



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)



library.add(faFlag);
library.add(faAddressCard);
library.add(faPlusCircle);
library.add(faPenSquare);
library.add(faUserCircle);
library.add(faPowerOff);
library.add(faAngleLeft);
library.add(faPen);
library.add(faTrashAlt);
library.add(faTimesCircle);
library.add(faCheckCircle);
library.add(faArrowCircleDown);

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(LayoutPlugin);
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
});

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://workeasy.comm-it.it';
axios.defaults.headers.post['accept'] = 'application/json';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token
}
axios.interceptors.request.use(response => {
  return response
});

axios.interceptors.response.use(
  function(response) {
      return response;
      },
  function(error) {
    if (error.response) {
    toast.error(error.response.data.error);
    toast.error(error.response.data.error.message.email);
    }
    return error
  });

export default token;

const router = new VueRouter({
  routes,
  mode : 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth= localStorage.getItem('token')
    if (!auth) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
