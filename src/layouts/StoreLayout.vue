<template>
  <q-page>
    <q-toolbar>
      <q-toolbar-title>
        Store Layout
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <category-drawer class="col-auto" />
      <div class="col">
        <slot />
      </div>
    </div>
  </q-page>
</template>
