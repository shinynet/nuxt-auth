<template>
<icon-btn>
  <q-avatar>
    <img
      :src="image"
      alt="user avatar">
  </q-avatar>
  <q-menu>
    <div class="row no-wrap q-pa-md">
      <div class="column">
        <div class="text-h6 q-mb-md">
          {{ $t('settings') }}
        </div>
      </div>

      <q-separator
        class="q-mx-lg"
        inset
        vertical/>

      <div class="column items-center">
        <q-avatar size="72px">
          <img
            :src="image"
            alt="user avatar">
        </q-avatar>

        <div class="text-subtitle1 q-mt-md q-mb-xs">
          {{ firstName }}
          {{ lastName }}
        </div>

        <q-btn
          v-close-popup
          :label="$t('logout')"
          color="primary"
          flat
          push
          size="sm"
          @click="$emit('logout')"/>
      </div>
    </div>
  </q-menu>
</icon-btn>
</template>

<script lang="ts" setup>
defineProps<Pick<AuthUser, 'firstName' | 'lastName' | 'image'>>()
defineEmits(['logout'])
</script>

<style scoped>

</style>
