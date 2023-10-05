import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoggleMap from '../components/GoggleMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/maps',
      name: 'Maps',
      component: GoggleMap
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/globe',
      name: 'Globe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Globe.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/BoardUser.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/admin/BoardAdmin.vue')
    },
    {
      path: '/moderator',
      name: 'Moderator',
      component: () => import('../views/BoardModerator.vue')
    },
  ]
})

export default router
