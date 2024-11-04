<template>
  <nuxt-route-announcer />
  <nuxt-layout name="default-layout">
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const { execute: login5 } = useAsyncData(() => authStore.fetchUser(), {
  immediate: false,
})

await callOnce(async () => {
  const token = useCookie('token').value
  const isAuthenticated = authStore.isAuthenticated

  if (token && !isAuthenticated) {
    await login5()
  }
})
</script>
