<template>
<icon-btn icon="shopping_cart">
  <q-badge
    color="accent"
    floating>
    {{ $n(4, 'decimal') }}
  </q-badge>
  <q-tooltip>
    {{ $t('view_cart') }}
  </q-tooltip>
</icon-btn>
</template>
