import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//AXIOS
import Axios from 'axios';
import VueSwal from 'vue-swal';
import ImageUploader from 'vue-image-upload-resize'


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(VueSwal);
Vue.use(ImageUploader);

const token = localStorage.getItem('token');
if(token){
  Vue.prototype.$http.defaults.headers.common["x-access-token"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
