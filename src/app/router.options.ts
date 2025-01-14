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
          name: 'products',
          path: 'products',
          alias: 'products/search',
          props: {
            default: route => ({
              ...route.query,
              limit: Number(route.query.limit ?? 10),
              skip: Number(route.query.skip ?? 0)
            })
          },
          components: {
            default: () => import('../pages/ProductsPage.vue'),
            toolbar: () => import('../components/store/toolbar/StoreToolbar.vue'),
            leftDrawer: () => import('../components/store/CategoryDrawer.vue'),
            rightDrawer: () => import('../components/store/CartDrawer.vue')
          }
        },
        {
          name: 'productsByCategory',
          path: 'products/category/:category',
          props: true,
          components: {
            default: () => import('../pages/ProductsPage.vue'),
            toolbar: () => import('../components/store/toolbar/StoreToolbar.vue'),
            leftDrawer: () => import('../components/store/CategoryDrawer.vue'),
            rightDrawer: () => import('../components/store/CartDrawer.vue')
          }
        },
        {
          name: 'product',
          path: 'products/:productId',
          props: true,
          components: {
            default: () => import('../pages/ProductPage.vue'),
            toolbar: () => import('../components/store/toolbar/StoreToolbar.vue'),
            leftDrawer: () => import('../components/store/CategoryDrawer.vue'),
            rightDrawer: () => import('../components/store/CartDrawer.vue')
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
        props: route => ({ redirect: route.query.redirect }),
        component: () => import('../pages/LoginPage.vue')
      }]
    },

    {
      path: '/profile',
      component: () => import('../layouts/DefaultLayout.vue'),
      props: { headerHeightHint: 50 },
      children: [{
        name: 'profile',
        path: '',
        meta: { auth: true },
        component: () => import('../pages/ProfilePage.vue')
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
