import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'In Testa Hair Salon · Blonde Color Specialist' },
  },
  {
    path: '/servizi',
    name: 'servizi',
    component: () => import('@/views/ServicesView.vue'),
    meta: { title: 'Servizi · In Testa Hair Salon' },
  },
  {
    path: '/chi-siamo',
    name: 'chi-siamo',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'Chi Siamo · In Testa Hair Salon' },
  },
  {
    path: '/recensioni',
    name: 'recensioni',
    component: () => import('@/views/ReviewsView.vue'),
    meta: { title: 'Recensioni · In Testa Hair Salon' },
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contatti · In Testa Hair Salon' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const title = to.meta.title
  if (typeof title === 'string') {
    document.title = title
  }
})

export default router
