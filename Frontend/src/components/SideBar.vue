<script setup>

const props = defineProps(["open"])
defineEmits(['open'])
</script>


<template>
    <q-drawer v-model="props.open" show-if-above :width="200" :breakpoint="400">
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
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="inbox" />
                        </q-item-section>

                        <q-item-section>
                            Inbox
                        </q-item-section>
                    </q-item>
                </q-expansion-item>
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