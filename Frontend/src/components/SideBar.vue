<script setup>
import jwt_decode from 'jwt-decode'
import { token, setToken } from '../services/token'
import { useRouter } from 'vue-router'

const router = useRouter()

let decodedToken = jwt_decode(token.value)

const props = defineProps(["open"])
defineEmits(['open'])

function logout() {
    setToken('')
    router.push('/login')
}

</script>
<template>
    <q-drawer v-model="props.open" show-if-above :width="235" :breakpoint="400">
        <q-img class="absolute-top" src="../../public/images/bg-logo.png" style="height: 200px">
            <div class="absolute-top  bg-transparent">
                <q-avatar size="150px" class="row q-ml-auto q-mr-auto">
                    <img style="background-color: white;" src="../../public/images/jobs.webp">
                </q-avatar>
                <div class="column">
                    <div style="background-color: white;" class="text-weight-bold text-center text-black username">{{ decodedToken.sub }}</div>
                </div>

            </div>
        </q-img>
        <q-scroll-area style="height: 400px; margin-top: 200px; border-right: 1px solid #ddd">
            <q-list padding>
                <q-item clickable v-ripple to="/dashboard">
                    <q-item-section avatar>
                        <q-icon name="home" />
                    </q-item-section>

                    <q-item-section>
                        Home
                    </q-item-section>
                </q-item>
                <q-expansion-item icon="group" label="Users" :content-inset-level="0.5">
                    <q-item clickable v-ripple to="/users/create">

                        <q-item-section avatar>
                            <q-icon name="add" />
                        </q-item-section>

                        <q-item-section>
                            Create
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple to="/users/search">
                        <q-item-section avatar>
                            <q-icon name="search" />
                        </q-item-section>

                        <q-item-section>
                            Search
                        </q-item-section>
                    </q-item>

                </q-expansion-item>
                <q-expansion-item icon="library_books" label="Courses" :content-inset-level="0.5">

                    <q-item clickable v-ripple to="/courses/create">

                        <q-item-section avatar>
                            <q-icon name="add" />
                        </q-item-section>

                        <q-item-section>
                            Create
                        </q-item-section>

                    </q-item>

                    <q-item clickable v-ripple to="/courses/search">
                        <q-item-section avatar>
                            <q-icon name="search" />
                        </q-item-section>

                        <q-item-section>
                            Search
                        </q-item-section>
                    </q-item>

                    <q-expansion-item icon="list" label="My Courses" :content-inset-level="0.5">

                        <q-item clickable v-ripple to="/courses/">
                            <q-item-section>
                                Course 1
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple to="/courses/">
                            <q-item-section>
                                Course 2
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple to="/courses/">
                            <q-item-section>
                                Course 3
                            </q-item-section>
                        </q-item>


                        <q-item clickable v-ripple to="/courses/">
                            <q-item-section>
                                Course 4
                            </q-item-section>
                        </q-item>

                    </q-expansion-item>

                    <q-item clickable v-ripple to="/courses/take">

                        <q-item-section avatar>
                            <q-icon name="pick" />
                        </q-item-section>

                        <q-item-section>
                            Take Course
                        </q-item-section>

                    </q-item>

                    <q-item clickable v-ripple to="/courses/curriculum">

                        <q-item-section avatar>
                            <q-icon name="pick" />
                        </q-item-section>

                        <q-item-section>
                            Curriculum
                        </q-item-section>

                    </q-item>

                    <q-item clickable v-ripple to="/courses/transicript">

                        <q-item-section avatar>
                            <q-icon name="pick" />
                        </q-item-section>

                        <q-item-section>
                            Transicript
                        </q-item-section>

                    </q-item>


                    <q-item clickable v-ripple to="/courses/departmentalCourses">

                        <q-item-section avatar>
                            <q-icon name="pick" />
                        </q-item-section>

                        <q-item-section>
                            Departmental Courses
                        </q-item-section>

                    </q-item>



                </q-expansion-item>

                <q-item clickable v-ripple to="/inbox">
                    <q-item-section avatar>
                        <q-icon name="inbox" />
                    </q-item-section>

                    <q-item-section>
                        Inbox
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple to="/settings">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>

                    <q-item-section>
                        Settings
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple to="/help">
                    <q-item-section avatar>
                        <q-icon name="help" />
                    </q-item-section>

                    <q-item-section>
                        Help
                    </q-item-section>
                </q-item>

            </q-list>

        </q-scroll-area>
        <q-item class="absolute-bottom" clickable v-ripple @click="logout()">
            <q-item-section avatar>
                <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
                Logout
            </q-item-section>
        </q-item>
    </q-drawer>
</template>

<style scoped>
.logout-btn {
    margin-left: auto;
    margin-top: auto;
}


</style>