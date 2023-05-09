import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: Home,
    children: [
      {
        path: 'product/:id',
        name: 'home-product',
        component: () => import('@/pages/product/')
      }
    ]
  },
  {
    path: '/category',
    name: 'CategoryPage',
    component: () => import('@/pages/category/')
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('@/pages/cart/')
  },
  {
    path: '/personal',
    name: 'PersonalPage',
    component: () => import('@/pages/personal/')
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import('@/pages/search/')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
