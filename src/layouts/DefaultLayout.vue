<template>
  <q-layout view="lHh lpR fFf">
    <q-header
      class="header text-grey-4"
      height-hint="100"
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

      <router-view
        name="toolbar"
        @toggle-drawer="toggleDrawer"
      />
    </q-header>

    <router-view
      :drawer-open="drawerOpen"
      name="drawer"
      @drawer-change="drawerOpen = $event"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
const drawerOpen = ref(false)
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)
const logout = () => {
  authStore.logout()
  navigateTo('/login')
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(45deg, #2C3E50 25%, #2980B9 75%)
}
</style>
