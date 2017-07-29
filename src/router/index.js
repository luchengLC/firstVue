import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Home from  '../page/Home.vue'
import Instruct from  '../page/Instruct.vue'
import UserInput from '../page/UserInput.vue'
import MyFilter from '../page/MyFilter.vue'

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
    },
    {
      path:'/instruct',
      component:Instruct,
    },
    {
      path:'/userinput',
      component:UserInput
    },
    {
      path:'/myfilter',
      component:MyFilter
    }

  ]

})
