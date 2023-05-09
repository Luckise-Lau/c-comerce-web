import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'homePage',
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
    name: 'categoryPage',
    component: () => import('@/pages/category/')
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: () => import('@/pages/cart/')
  },
  {
    path: '/personal',
    name: 'personalPage',
    component: () => import('@/pages/personal/')
  },
  {
    path: '/search',
    name: 'searchPage',
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
