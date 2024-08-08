import { createMemoryHistory, createRouter } from 'vue-router'

import First from '../views/FirstView.vue'
import Second from '../views/SecondView.vue'

const routes=[
    { path: '/', component: First },
    { path: '/about', component: Second },
    // 动态路由
    // {
    //     path: '/users/eduardo/posts/:id' ,component: () => import('../views/UserView.vue')
    // },
    { 
        path: '/users/:id',
        component: () => import('../views/UserView.vue'),
        children: [
            {
                path: 'profile',
                component: () => import('../views/UserProfile.vue')
            },
            {
                path: 'posts',
                component: () => import('../views/UserPosts.vue')
            }
        ]
    },
    {
        path: '/order/:id',
        name: 'order',
        component: () => import('../views/OrderView.vue')
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
