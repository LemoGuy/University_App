<script setup>

// TODO! When logining in, press enter instead of clicking login btn..


import { token, setToken } from '../services/token'

import { ref } from 'vue'
import backend from '../services/backend'
import resIsOk from '../utils/resIsOk'
import { useRouter } from 'vue-router'

const router = useRouter()
if (token.value) {
  router.push({ path: '/dashboard' })
}

let credentials = ref({})

let rememberMe = ref(false)

async function submit() {
  let res = await backend.post('/login', credentials.value)
  if (!resIsOk(res)) {
    // error message
    return
  }
  setToken(res.data.token)
  router.push('/dashboard')
}

function handleLoginEntry(e) {
  if (e.key == "Enter") {
    submit();
  }
}

</script>

<template>
  <div class="login-form" v-on:keydown="handleLoginEntry">
    <q-card class="input-container">
      <img class='login-image' src="/images/logo.webp" alt="no pic">
      <q-input class='username' label="Username" v-model="credentials.username" />
      <q-input type="password" class='password' label="Password" v-model="credentials.password" />
      <div class="login-container">
        <q-checkbox label="Remember me" v-model="rememberMe" />
        <q-btn class="login-btn" @click="submit()">Login</q-btn>
        
      </div>

    <router-link to="/">Forgot Password?</router-link>
    </q-card>

  </div>

</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}

.input-container {
  gap: 20px;
  padding: 25px;
  flex-direction: column;
  display: flex;
  width: 400px;
  margin: auto;
  margin-top: 25px;
}

.login-btn {
  width: 75px;
  margin-left: auto;
}

.login-image {
  width: 400px;
  margin-inline: auto;
}

.login-container {
  display: flex;

}
</style>