<script setup>
import { ref } from 'vue';
import Layout from '@/components/Layout.vue'

const data = ref({})
const userOptions = [
    { id: 'Student', desc: 'Student' },
    { id: 'Lecturer', desc: 'Leacturer' },
    { id: 'HeadOfDepartment', desc: 'Head of Department' },
    { id: 'Dean', desc: 'Dean of Faculty' },
    { id: 'HRManager', desc: 'HR Manager' },
    { id: 'StudentAffiers', desc: 'Student Affiers' },
    
    
]

const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
]

function submit() {
    console.log(data.value)
}

</script>

<template>
    <Layout>
        <q-card class="container">
            <p class="title">
                Create a New User Account
            </p>
            <div class="input-container">
                <q-select outlined class='input-field' v-model='data.type' option-value="id" option-label="desc"
                    label='User Type' :options="userOptions" />
                <q-input outlined class="input-field" v-model="ref.fullname" label="Full Name" />
                <div class="gender-select">
                    <p>Gender:</p>
                    <q-option-group v-model="data.gender" :options="genders" color="primary" inline />
                </div>

                <q-input class='birthdate-input' outlined label='Birthdate' readonly v-model="data.birthdate" mask="date" :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="data.birthdate">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>


                <q-input outlined class="input-field" v-model="ref.username" label="Username" />
                <q-input outlined class="input-field" v-model="ref.email" label="Email" />

                <div class="password-container">

                    <q-input outlined class="input-field" v-model="ref.password" label="Password" />
                    <q-input outlined class="input-field" v-model="ref.password2" label="Re-write password" />
                </div>
                <q-input outlined class="input-field" v-model="ref.status" label="Status" />
            </div>
            <q-btn class='create-btn' label='Create' @click='submit()' />
        </q-card>

    </Layout>


</template>
<style scoped>
.title {
    font-size: 15pt;
}

.container {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    /* border: 1px solid grey; */
    /* border-radius: 10px; */
    padding: 50px;
    width: 600px;
    margin-inline: auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px
}

.gender-select {
    display: flex;
    align-items: center;
    height: 56px;
}

.birthdate-input {
    padding: 0;
}

.gender-select>p {
    margin: 0;
    font-size: 12pt;
}

.password-container {
    display: flex;
    width: 100%;
    align-items: stretch;
    gap: 20px
}

.password-container>* {
    flex: 1
}

.create-btn {
    margin-left: auto;
    margin-top: 50px;
    width: 100px;
}

/* .input-field {
    width: 250px;
} */
</style>