<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-primary text-white"
      height-hint="98"
      reveal
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar
            font-size="36px"
            icon="private_connectivity"
          />
          Authentication
        </q-toolbar-title>

        <settings-menu
          v-if="isAuthenticated && user"
          :first-name="user.firstName"
          :image="user.image"
          :last-name="user.lastName"
          @logout="logout"
        />

        <q-btn
          v-else
          dense
          flat
          icon="login"
          round
          to="/login"
        />
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab
          label="Home"
          to="/"
        />
        <q-route-tab
          label="Store"
          to="/products/categories"
        />
        <q-route-tab
          v-if="authStore.isAuthenticated"
          label="Store Admin"
          to="/store/admin"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)
const logout = () => {
  authStore.logout()
  navigateTo('/login')
}
</script>
