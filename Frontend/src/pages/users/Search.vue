<script setup>
import Layout from '../../components/Layout.vue'
import { onMounted, ref } from 'vue'
import backend from '../../services/backend';
import { token, setToken } from '../../services/token'
import resIsOk from '../../utils/resIsOk';


let users = ref([]);
let filters = ref({})
const pageOptions = {
    rowsPerPage: 10
}

const columns = [
    {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        field: '_id',
        sortable: true
    },
    {
        name: 'name',
        required: true,
        label: 'Full Name',
        align: 'left',
        field: row => row.name.join(' '),
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'department',
        required: true,
        label: 'Department',
        align: 'left',
        field: 'department',
        sortable: true
    },
    {
        name: '__t',
        required: true,
        label: 'User Type',
        align: 'left',
        field: '__t',
        sortable: true
    },
    {
        name: 'gender',
        required: true,
        label: 'Gender',
        align: 'left',
        field: 'gender',
        sortable: true
    },
    {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true
    },
    {
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        sortable: true
    },
]

onMounted(async () => {
    let res = await backend.get('/user', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    if (resIsOk) {
        users.value = res.data
    }
    // console.log(users.value)
})

const handleSearch = async (value) => {
    let res = await backend.get(`/user?userId=${value}`, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    if (resIsOk) {
        users.value = res.data
    }
}


</script>


<template>

    <Layout>
        <q-card class="filter-container">
            <q-input @update:model-value="handleSearch" v-model='filters.userId' label="User ID" outlined :debounce="500" />

        </q-card>
        <q-table class='table' title="Users" :rows="users" :columns="columns" :pagination="pageOptions" />
    </Layout>

</template>
<style scoped>
.table>>>th {
    font-weight: bold !important;
}

.filter-container {
    margin-bottom: 25px;
    padding: 25px;
}

.filter-container>* {
    width: 250px;
}
</style>
