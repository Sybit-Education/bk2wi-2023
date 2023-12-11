import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },  {
      path: '/verleih',
      name: 'verleih',
      component: () => import('../views/VerleihListView.vue')
    },
    {
      path: '/verleih/:id',
      name: 'verleih-detail',
      component: () => import('../views/ClubDetailView.vue')
    }
  ]
})

export default router
