import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AllBooks from '@/components/books/AllBooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllBooks',
      component: AllBooks
    },
  ]
})
