<script setup>

const props = defineProps(["open"])
defineEmits(['open'])
</script>


<template>
    <q-drawer v-model="props.open" show-if-above :width="235" :breakpoint="400">
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 200px">
            <div class="absolute-top  bg-transparent">
                <q-avatar size="100px" class="row q-ml-auto q-mr-auto">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="column">
                    <div class="text-weight-bold text-center">RazvanRazvan</div>
                    <q-btn class="logout-btn">
                        <q-icon name="logout" />
                    </q-btn>
                </div>

            </div>
        </q-img>
        <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
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



                    <q-item clickable v-ripple to="/users/inbox">
                        <q-item-section avatar>
                            <q-icon name="inbox" />
                        </q-item-section>

                        <q-item-section>
                            Inbox
                        </q-item-section>
                    </q-item>

                </q-expansion-item>


                <q-expansion-item icon="library_books" label="Courses" :content-inset-level="0.5">

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


                     <q-item clickable v-ripple to="/courses/departmental_courses">

                        <q-item-section avatar>
                            <q-icon name="pick" />
                        </q-item-section>

                        <q-item-section>
                            Departmental Courses
                        </q-item-section>

                    </q-item>

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

                </q-expansion-item>

                <q-item clickable v-ripple to="/courses/settings">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>

                    <q-item-section>
                        Settings
                    </q-item-section>
                </q-item>

                   <q-item clickable v-ripple to="/courses/help">
                    <q-item-section avatar>
                        <q-icon name="help" />
                    </q-item-section>

                    <q-item-section>
                        Help
                    </q-item-section>
                </q-item>

            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<style scoped>
.logout-btn {
    margin-left: auto;
    margin-top: auto;
}
</style>