import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          name: 'candidates',
          path: '/candidates',
          component: () => import('/src/views/CandidatesView.vue')
        },
        {
          name: 'positions',
          path: '/positions',
          component: () => import('/src/views/PositionView.vue')
        },
        {
          name: 'employer',
          path: '/employer',
          component: () => import('/src/views/EmployerView.vue')
        }

      ]
    })

export default router
