<script setup>
import Layout from '../../components/Layout.vue'
import { onMounted, ref, watch } from 'vue'
import backend from '../../services/backend';
import { token, setToken } from '../../services/token'
import resIsOk from '../../utils/resIsOk';
import serialize from '../../utils/serialize';
import userOptions from '../../constants/userOptions';
import departmentOptions from '../../constants/departmentOptions';
import yearOptions from '../../constants/yearOptions';
import AccountOptions from '../../components/AccountOptions.vue'



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
    {
        name: 'decision',
    }
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

const handleSearch = async (oldValue, newValue) => {
    console.log(filters.value)
    let res = await backend.get(`/user?${serialize(filters.value)}`, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    if (resIsOk) {
        users.value = res.data
    }
}

watch(filters, handleSearch, { deep: true })


</script>

<template>

    <Layout>
        <q-card class="filter-container">
            <q-input v-model='filters.userId' label="User ID" outlined :debounce="500" />
            <q-input v-model='filters.fullName' label="Full Name" outlined :debounce="500" />
            <q-select outlined v-model='filters.department' label='Department' :options="departmentOptions"
                emit-value />
            <q-select outlined v-model='filters.userType' label='User Type' :options="userOptions" emit-value />
            <q-select outlined class='input-field-year' v-model='filters.year' label='Year' :options="yearOptions"
                emit-value />
        </q-card>

        <!-- Leave for now -->

        <q-table row-key="_id" class='table' title="Users" :rows="users" :columns="columns" :pagination="pageOptions">

            <template v-slot:body-cell-decision="props">
                <q-td :props="props">
                    <AccountOptions :id="props.row._id"/>
                </q-td>
            </template>

        </q-table>
    </Layout>

</template>

<style scoped>
.table>>>th {
    font-weight: bold !important;
}

.filter-container {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    padding: 25px;
    flex-wrap: wrap;
}

.filter-container>* {
    width: 250px;
}

.input-field-year {
    width: 135px;

}
</style>
