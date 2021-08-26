import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui';
import "./assets/css/initialize.css"
import 'muse-ui/dist/muse-ui.css';
import './assets/css/font.css';


Vue.use(MuseUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
