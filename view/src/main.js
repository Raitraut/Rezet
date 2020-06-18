import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/routes";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
