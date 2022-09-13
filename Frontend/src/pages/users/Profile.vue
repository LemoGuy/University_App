<script setup>
import Layout from '../../components/Layout.vue'
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import backend from '../../services/backend';

const route = useRoute();
console.log(route.params.id)

const data = ref({})

onMounted(async () => {

    //get data from db, save in state
    let response = await backend.get("/user?id=" + route.params.id)

    if (response.status === 200) {
        data.value = response.data[0]
        //todo better one 
    }

})




</script>

<template>

    <Layout>
        <q-card class="filter-container">
            <div class="profile-picture">
                <q-img src="../../../public/images/jobs.webp"></q-img>
            </div>

            <div class="width">
                <div class="profile-info-1" >
                    <div class="full-name">
                        <p class="text-h5 text-bold text-weight-thin " v-for="name in data.name" :key="name">
                            {{ name }}
                        </p>

                    </div>

                    <p class="text-subtitle2 text-bold text-primary">Student</p>
                </div>
                <div class="contact-info text-uppercase text-overline text-weight-light text-grey-14">
                    <p class="text-subtitle2 ">General Information</p>

                </div>


                <div class="profile-info-2">
                    <div class="pa-md">

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">User ID:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data._id}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold" >Full Name:</p>
                            </div>
                            <div class="col full-name">
                                <p class="text-subtitle2 " v-for="name in data.name" :key="name">{{name}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Department:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.department}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Status:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data.status}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Registration Year:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.year}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Registration Type:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.registrationType}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Prep School:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.prepSchool}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Name of High School:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.nameOfHighSchool}}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="contact-info text-uppercase text-overline text-weight-light text-grey-14">
                    <p class="text-subtitle2 ">Parent Information</p>

                </div>

                <div class="profile-info-2">
                    <div class="pa-md">

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Fathers's Name:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.fatherName}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Mother's Name:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.motherName}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>

                <div class="contact-info text-uppercase text-overline text-weight-light text-grey-14">
                    <p class="text-subtitle2 ">Contact Information</p>

                </div>


                <div class="profile-info-2">
                    <div class="pa-md">


                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Phone-1:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data.phone1}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Phone-2:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data.phone2}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Address:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.address}}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Email:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data.email}}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="contact-info text-uppercase text-overline text-weight-light text-grey-14">
                    <p class="text-subtitle2 ">Basic Information</p>

                </div>

                <div class="profile-info-2">
                    <div class="pa-md">

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Country:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.country}}</p>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Citizenship:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.citizenship}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Birthday:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2 text-primary">{{data.birthdate}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Gender:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.gender}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Maritial Status</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.maritialStatus}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Blood Type:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.bloodType}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-subtitle2 text-bold">Religion:</p>
                            </div>
                            <div class="col">
                                <p class="text-subtitle2">{{data.religion}}</p>
                            </div>
                        </div>

                    </div>
                </div>




            </div>





        </q-card>

    </Layout>

</template>

<style scoped>
.full-name {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap:1ch;

}

.profile-picture {
    height: 200px;
    width: 200px;
}

.filter-container {
    display: flex;
    gap: 45px;
    padding: 25px;
    flex-wrap: wrap;
}

.profile-info-1 {
    display: flex;
    flex-direction: column;
}

.pa-md {
    padding: 0;
}

.row>div {
    margin-bottom: 10px;

}



.width {
    width: 350px;
}
</style>