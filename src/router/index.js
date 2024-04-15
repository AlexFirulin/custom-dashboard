import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          name: 'candidates',
          path: '/candidates',
          component: () => import('/src/views/CandidatesView.vue')
        }

      ]
    })

export default router
