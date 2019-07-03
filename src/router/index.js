import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AllBooks from '@/components/books/AllBooks'
import Book from '@/components/books/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllBooks',
      component: AllBooks
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: Book
    }
  ]
})
