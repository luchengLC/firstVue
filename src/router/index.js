import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Home from  '../page/Home.vue'

Vue.use(Router)



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/hello',
      component:Hello
    }
  ]

})
