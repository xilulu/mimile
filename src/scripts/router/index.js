import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import List from '@/scripts/components/List'
import Board from '@/scripts/components/Board'
import Car from '@/scripts/components/Car'
import Mine from '@/scripts/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'board',
      children:[
        {
          path:'board', 
          component:Board
        },
         {
          path:'list',
          component:List
        },
         {
          path:'car',
          component:Car
        },
         {
          path:'mine',
          component:Mine
        }
      ]
    }
  ]
})
