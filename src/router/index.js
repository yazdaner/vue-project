import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskView from '../views/TaskView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
