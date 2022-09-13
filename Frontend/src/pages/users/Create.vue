<script setup>
import { ref } from 'vue';
import Layout from '@/components/Layout.vue'
import backend from '../../services/backend'
import resIsOk from '../../utils/resIsOk'
import { useRouter } from 'vue-router'
import userOptions from '../../constants/userOptions'
import genderOptions from '../../constants/genderOptions'
import statusOptions from '../../constants/statusOptions'
import departmentOptions from '../../constants/departmentOptions'
import yearOptions from '../../constants/yearOptions'
import semesterOptions from '../../constants/semesterOptions'
import regOptions from '../../constants/regOptions'
import countryOptions from '../../constants/countryOptions'
import bloodTypeOptions from '../../constants/bloodTypeOptions'
import religionOptions from '../../constants/religionOptions'
import maritialStatusOptions from '../../constants/maritialStatusOptions'


const router = useRouter()

const data = ref({})


async function create() {
    data.value.name = data.value.name.split(" ")

    let dataEntered = await backend.post(`/user?type=${data.value.type}`, data.value)
    if (!resIsOk(dataEntered)) {
        // error message
        return
    }
    router.push('/users/search')
}


</script>

<template>
    <Layout>
        <q-card class="container">
            <p class="title">
                Create a New User Account
            </p>
            <div class="input-container">
                <q-select outlined class='input-field' v-model='data.type' label='User Type' :options="userOptions"
                    emit-value />
                <q-input outlined class="input-field" v-model="data.name" label="Full Name" />
                <q-input outlined class="input-field" v-model="data.fatherName" label="Father's Name" />
                <q-input outlined class="input-field" v-model="data.motherName" label="Mother's Name" />

                <q-select outlined class='input-field' v-model="data.gender" label='Gender' :options="genderOptions" />


                <q-input class='birthdate-input input-field' outlined label='Birthdate' readonly
                    v-model="data.birthdate" mask="date" :rules="['date']">
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


                <q-input outlined class="input-field" v-model="data.phone1" label="Phone-1" />

                <q-input outlined class="input-field" v-model="data.phone2" label="Phone-2" />




                <q-select outlined class="input-field" v-model="data.country" label="Country"
                    :options="countryOptions" />


                <q-input outlined class="input-field" v-model="data.citizenship" label="Citizenship" />


                <q-select outlined class="input-field" v-model="data.maritialStatus" label="Maritial Status"
                    :options="maritialStatusOptions" />


                <q-select outlined class="input-field" v-model="data.bloodType" label="Blood Type"
                    :options="bloodTypeOptions" />


                <q-select outlined class="input-field" v-model="data.religion" label="Religion"
                    :options="religionOptions" />




                <q-select outlined class="input-field" v-model="data.department" label="Department"
                    :options="departmentOptions" emit-value
                    v-if="['Student', 'Lecturer', 'HeadOfDepartment'].includes(data.type)" />

                <q-select outlined class="input-field" v-model="data.year" :options="yearOptions" emit-value
                    label="Year" v-if="data.type == 'Student'" />

                <q-select outlined class="input-field" v-model="data.registrationType" :options="regOptions" emit-value
                    label="Registration Type" v-if="data.type == 'Student'" />

                <q-input outlined class="input-field" v-model="data.prepSchool" label="Prep School"
                    v-if="data.type == 'Student'" />
                <q-input outlined class="input-field" v-model="data.nameOfHighSchool" label="Name of High School"
                    v-if="data.type == 'Student'" />



                <q-select outlined class="input-field" v-model="data.semester" :options="semesterOptions" emit-value
                    label="Semester" v-if="data.type == 'Student'" />
                <q-select outlined class="input-field" v-model="data.status" label="Status" :options="statusOptions"
                    emit-value />

                <q-input outlined class="address" v-model="data.address" label="Address" />

                <div class="password-container">

                    <q-input outlined class="input-field" v-model="data.password" label="Password" type="password" />
                    <q-input outlined class="input-field" v-model="data.password2" label="Re-write password"
                        type="password" />
                </div>

                <q-file outlined v-model="data.photo" label="Upload Photo" class="input-field" clearable />

            </div>
            <q-btn class='create-btn' label='Create' @click='create()' />
        </q-card>

    </Layout>


</template>
<style scoped>
.address {
    width: 520px;
}

.title {
    font-size: 15pt;
}

.container {
    display: flex;
    flex-direction: column;


    /* border: 1px solid grey; */
    /* border-radius: 10px; */
    padding: 25px;
    width: 100%;
    margin-inline: auto;
}

.input-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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

.input-field {
    width: 250px;
}
</style>