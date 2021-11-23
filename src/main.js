import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // boostrap
import 'bootstrap-vue/dist/bootstrap-vue.css' // boostrap

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app1')
