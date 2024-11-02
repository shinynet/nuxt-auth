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
          dense
          flat
          icon="login"
          round
        />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          label="Page One"
          to="/page1"
        />
        <q-route-tab
          label="Page Two"
          to="/page2"
        />
        <q-route-tab
          label="Page Three"
          to="/page3"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
