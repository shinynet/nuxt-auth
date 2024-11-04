<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      bordered
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

        <q-btn
          v-if="isAuthenticated && user"
          flat
          round
        >
          <q-avatar>
            <img
              :src="user.image"
              alt="user avatar"
            >
          </q-avatar>
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">
                  Settings
                </div>
              </div>

              <q-separator
                class="q-mx-lg"
                inset
                vertical
              />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img
                    :src="user.image"
                    alt="user avatar"
                  >
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">
                  {{ user.firstName }}
                  {{ user.lastName }}
                </div>

                <q-btn
                  v-close-popup
                  color="primary"
                  flat
                  label="Logout"
                  push
                  size="sm"
                  @click="logout"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>

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
        <q-route-tab label="Store" />
        <q-route-tab label="Account" />
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
  navigateTo('/')
}
</script>
