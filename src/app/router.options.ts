import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: () => [
    {
      path: '/products',
      alias: '/',
      props: { headerHeightHint: 100 },
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [{
        name: 'home',
        path: '',
        components: {
          default: () => import('../pages/ProductsPage.vue'),
          toolbar: () => import('../components/StoreToolbar.vue'),
          drawer: () => import('../components/CategoryDrawer.vue'),
        },
      }],
    },

    {
      path: '/login',
      component: () => import('../layouts/DefaultLayout.vue'),
      props: { headerHeightHint: 50 },
      children: [{
        name: 'login',
        path: '',
        component: () => import('../pages/LoginPage.vue'),
      }],
    },

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
  },
} satisfies RouterConfig
