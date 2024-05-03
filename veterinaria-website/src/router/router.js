import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    {
        path: '/inicio',
        name: 'inicio',
        component: () => import('@/components/DummyMain')
    },
    {
        path: '/productos',
        name: 'productos',
        component: () => import('@/components/StoreContent')
    },
    {
        path: '/producto/:id',
        name: 'productos-id',
        component: () => import('@/components/ProductItem'),
        props: ( route ) => {
            const id = Number(route.params.id)
            return isNaN(id)? { id: 1 }: { id };
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/DummyMain')
    },
    {
        path: '/',
        redirect: { name: 'inicio' },
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router