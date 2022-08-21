<script setup>
import { ref } from 'vue';
import Layout from '@/components/Layout.vue'
import backend from '../../services/backend'
import resIsOk from '../../utils/resIsOk'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = ref({})
const userOptions = [
    { value: 'Student', label: 'Student' },
    { value: 'Lecturer', label: 'Leacturer' },
    { value: 'HeadOfDepartment', label: 'Head of Department' },
    { value: 'Dean', label: 'Dean of Faculty' },
    { value: 'HRManager', label: 'HR Manager' },
    { value: 'StudentAffiers', label: 'Student Affiers' }


]

const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
]

async function create() {
    console.log(data.value)

    let dataEntered = await backend.post(`/user?type=${data.value.type}`, data.value)
    if (!resIsOk(dataEntered)) {
        // error message
        return
    }
    // 
}


</script>

<template>
    <Layout>
        <q-card class="container">
            <p class="title">
                Create a New User Account
            </p>
            <div class="input-container">
                <q-select outlined class='input-field' v-model='data.type' label='User Type' :options="userOptions"  emit-value/>
                <q-input outlined class="input-field" v-model="data.fullname" label="Full Name" />
                <div class="gender-select">
                    <p>Gender:</p>
                    <q-option-group v-model="data.gender" :options="genders" color="primary" inline />
                </div>

                <q-input class='birthdate-input' outlined label='Birthdate' readonly v-model="data.birthdate"
                    mask="date" :rules="['date']">
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


                <q-input outlined class="input-field" v-model="data.username" label="Username" />
                <q-input outlined class="input-field" v-model="data.email" label="Email" />

                <div class="password-container">

                    <q-input outlined class="input-field" v-model="data.password" label="Password" type="password" />
                    <q-input outlined class="input-field" v-model="data.password2" label="Re-write password"
                        type="password" />
                </div>
                <q-input outlined class="input-field" v-model="data.status" label="Status"/>

                <q-input outlined class="input-field" v-model="data.department" label="Department" v-if="['Student', 'Lecturer', 'HeadOfDepartment'].includes(data.type)"/>

                <q-input outlined class="input-field" v-model="data.year" label="Year" v-if="data.type == 'Student'"/>

                <q-input outlined class="input-field" v-model="data.semester" label="Semester" v-if="data.type == 'Student'"/>

            </div>
            <q-btn class='create-btn' label='Create' @click='create()' />
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