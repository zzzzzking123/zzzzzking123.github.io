import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/Bro/First'
// import Top from '@/components/Top'
 import Loading from '@/components/Loading'
 import ShopCar from '@/components/ShopCar'
import Register from '@/components/Register'
import Submit from '@/components/Submit'
import Alert from '@/components/Alert'
import Goods from '@/components/Goods'
import Success from '@/components/Success'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/First' 
    },
    {
      path:'/First',
      component:First
    },
     {
       path: '/Loading',
       component: Loading
     },
     {
      path: '/ShopCar',
      component: ShopCar
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/Goods/:id',
      component: Goods
    },
    {
      path: '/Submit',
      component: Submit
    },
    {
      path: '/Alert',
      component: Alert
    },
    {
      path: '/Success',
      component: Success
    }
  ]
})
