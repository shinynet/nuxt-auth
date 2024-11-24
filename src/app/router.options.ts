import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: () => [
    {
      path: '/',
      redirect: '/products',
      props: { headerHeightHint: 100 },
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          name: 'home',
          path: 'products',
          alias: 'products/search',
          components: {
            default: () => import('../pages/ProductsPage.vue'),
            toolbar: () => import('../components/store/StoreToolbar.vue'),
            drawer: () => import('../components/store/CategoryDrawer.vue')
          }
        },
        {
          name: 'productsByCategory',
          path: 'products/category/:category',
          props: true,
          components: {
            default: () => import('../pages/ProductsPage.vue'),
            toolbar: () => import('../components/store/StoreToolbar.vue'),
            drawer: () => import('../components/store/CategoryDrawer.vue')
          }
        }
      ]
    },

    {
      path: '/login',
      component: () => import('../layouts/DefaultLayout.vue'),
      props: { headerHeightHint: 50 },
      children: [{
        name: 'login',
        path: '',
        component: () => import('../pages/LoginPage.vue')
      }]
    }

    // Always leave this as last one,
    // but you can also remove it
    // {
    //   path: '/:catchAll(.*)*',
    //   component: () => import('../pages/ErrorNotFound.vue')
    // }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
} satisfies RouterConfig
