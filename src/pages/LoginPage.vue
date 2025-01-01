<template>
<q-page padding>
  <q-banner
    v-if="error"
    class="bg-negative text-white">
    A user with that username and password was not found.
  </q-banner>

  <q-form
    autocapitalize="off"
    autocomplete="off"
    autocorrect="off"
    autofocus
    class="q-gutter-md"
    spellcheck="false"
    style="max-width: 500px; margin: auto"
    @submit="handleSubmit">
    <q-card
      bordered
      flat>
      <q-card-section>
        <h1 class="text-h6">
          Login
        </h1>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="username"
          :rules="usernameRules"
          filled
          label="Username"
          lazy-rules>
          <template #before>
            <q-icon name="person"/>
          </template>
        </q-input>

        <q-input
          v-model="password"
          :rules="passwordRules"
          filled
          label="Password"
          lazy-rules
          type="password">
          <template #before>
            <q-icon name="key"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          color="primary"
          icon-right="login"
          label="Login"
          type="submit"/>
      </q-card-actions>
    </q-card>
  </q-form>
</q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Login',
  path: '/login',
  middleware: ['redirect']
})

const username = ref('')
const usernameRules = [
  (value: string) => validateRequired(value) || 'Username is required'
]

const password = ref('')
const passwordRules = [
  (value: string) => validateRequired(value) || 'Password is required',
  (value: string) => validateMinLength(6)(value) || 'Password must be at least 6 characters'
]

const authStore = useAuthStore()
const { execute: login, error } = useAsyncData(
  'login',
  () => authStore.login(username.value, password.value)
    .then(() => {
      navigateTo(authStore.redirect || '/')
      authStore.redirect = undefined
    })
    .catch((error) => {
      password.value = ''
      createError(error)
    }),
  {
    immediate: false
  }
)

const handleSubmit = () => {
  login()
}
</script>
