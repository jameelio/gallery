import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//AXIOS
import Axios from 'axios';
import VueSwal from 'vue-swal';
import vUploader from 'v-uploader';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(VueSwal);

const uploaderConfig = {
  // file uploader service url
  uploadFileUrl: 'http://xxx/upload/publicFileUpload',
  // file delete service url
  deleteFileUrl: 'http://xxx/upload/deleteUploadFile',
  // set the way to show upload message(upload fail message)
  showMessage: (vue, message) => {
    //using v-dialogs to show message
    //vue.$dlg.alert(message, { messageType: 'error' });
  }
};

Vue.use(vUploader, uploaderConfig);

const token = localStorage.getItem('token');
if(token){
  Vue.prototype.$http.defaults.headers.common["x-access-token"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
