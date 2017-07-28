import Vue from 'vue'
import App from './App.vue'
import User from './page/user.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/',
      name: 'user',
      component: User
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
