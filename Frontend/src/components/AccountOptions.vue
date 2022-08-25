<script setup>
const props = defineProps(['id'])

import { useRouter } from 'vue-router'
import backend from '../services/backend';

const router = useRouter()

async function showProfile(id) {
    // a new page to show details of the user..
    router.push('/users/id/profile')
}

async function editUser(id) {
    // when clicked go to the create user page but can be edited..
}

async function disableUser(id) {
    // disable account 
}

async function deleteUser(id) {
    await backend.delete(`/user/${props.id}`)
    // refresh (update list only front end)
}

// console.log(props.id)

</script>

<template>
<div id="q-app">
  <div class="q-pa-md">
    <q-btn-dropdown color="black" dropdown-icon="more_vert" dense flat >
      <q-list>
        <q-item clickable v-close-popup @click="showProfile(props.id)">
          <q-item-section>
            <q-item-label>Show Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="editUser(props.id)">
          <q-item-section>
            <q-item-label>Edit Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="disableUser(props.id)">
          <q-item-section>
            <q-item-label>Disable Account</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item clickable v-close-popup @click="deleteUser(props.id)">
          <q-item-section>
            <q-item-label>Remove Account</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  </div>
</template>