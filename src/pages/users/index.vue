<script setup>
import axios from 'axios';
import { ref } from 'vue';
import UserCardView from '@/components/users/CardView.vue'
const users = ref([]);
const loading = ref(true);
function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            users.value = response.data;
            loading.value = false;
        })
        .catch(function (error) {
            console.log(error);
        });
}
getUsers()
</script>

<template>
    <div class="container my-5">
        <div class="row g-3">
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else class="col-md-4" v-for="user in users" :key="user.id">
                <UserCardView :user="user" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
