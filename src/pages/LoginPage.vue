<template>
  <q-page padding>
    <q-form
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      autofocus
      class="q-gutter-md"
      spellcheck="false"
      style="max-width: 500px; margin: auto"
      @submit="handleSubmit"
    >
      <q-card
        bordered
        flat
      >
        <q-card-section>
          <h1 class="text-h6">
            Login
          </h1>
        </q-card-section>
        <q-card-section>
          <q-input
            v-model="email"
            :rules="emailRules"
            filled
            label="Email"
          >
            <template #before>
              <q-icon name="mail" />
            </template>
          </q-input>

          <q-input
            v-model="password"
            :rules="passwordRules"
            filled
            label="Password"
            lazy-rules
            type="password"
          >
            <template #before>
              <q-icon name="key" />
            </template>
          </q-input>

          <q-card-actions align="right">
            <q-btn
              color="primary"
              icon-right="login"
              label="Login"
              type="submit"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Login',
  path: '/login',
})

const email = ref('')
const emailRules = [
  (value: string) => validateRequired(value) || 'Email is required',
  (value: string) => validateEmail(value) || 'Email is not valid',
]

const password = ref('')
const passwordRules = [
  (value: string) => validateRequired(value) || 'Password is required',
  (value: string) => validateMinLength(6)(value) || 'Password must be at least 6 characters',
]

const handleSubmit = () => {
}
</script>

<style scoped>

</style>
