import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: () => import('../views/First.vue'),
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar: () => import('../views/HomeView.vue'),
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar: () => import('../views/AboutView.vue'),
      },
    },
    {
      path: '/other',
      components: {
        default: () => import('../views/AboutView.vue'),
        LeftSidebar: () => import('../views/First.vue'),
        RightSidebar: () => import('../views/HomeView.vue'),
      },
    },
  ],
})

export default router
