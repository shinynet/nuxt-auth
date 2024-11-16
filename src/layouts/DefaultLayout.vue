<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      :height-hint="headerHeightHint"
      class="header text-grey-4"
      reveal>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar
            font-size="36px"
            icon="private_connectivity"/>
          Authentication
        </q-toolbar-title>

        <settings-menu
          v-if="isAuthenticated && user"
          :first-name="user.firstName"
          :image="user.image"
          :last-name="user.lastName"
          @logout="logout"/>

        <icon-btn
          v-else
          icon="login"
          to="/login"/>
      </q-toolbar>

      <router-view
        name="toolbar"
        @toggle-drawer="toggleDrawer"/>
    </q-header>

    <router-view
      :drawer-open="drawerOpen"
      name="drawer"
      @drawer-change="drawerOpen = $event"/>

    <q-page-container>
      <router-view class="bg-grey-4"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
defineProps<{ headerHeightHint: number }>()

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
  background: linear-gradient(45deg, $primary 25%, $secondary 75%);
}
</style>
