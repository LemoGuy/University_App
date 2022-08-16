<script setup>

import {token, setToken} from '../services/token'

import { ref } from 'vue'
import backend from '../services/backend'
import resIsOk from '../utils/resIsOk'
import {useRouter} from 'vue-router'

const router = useRouter()
if (token.value){
  router.push({path: '/dashboard'})
}

let credentials = ref({})

async function submit() {
  let res = await backend.post('/login', credentials.value)
  if(!resIsOk(res)){
    // error message
    return 
  }
  setToken(res.data.token)
  console.log(token)
  router.push('/dashboard')
}
</script>

<template>
  <div class="login-form">
    <q-card class="input-container">
      <img class='login-image' src="/images/logo.webp" alt="no pic">
      <q-input class='username' label="Username" v-model="credentials.username" />
      <q-input class='password' label="Password" v-model="credentials.password" />
      <q-btn class="login-btn" @click="submit()">Login</q-btn>
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
</style>