<script setup>
import axios from 'axios';
import { ref } from 'vue';
import postCardView from '@/components/posts/CardView.vue'
const posts = ref([]);
const loading = ref(true);
function getposts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            posts.value = response.data;
            loading.value = false;
        })
        .catch(function (error) {
            console.log(error);
        });
}
getposts()
</script>

<template>
    <div class="container my-5">
        <div v-if="loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="row g-3" v-else>
            <div>
                <RouterLink class="btn btn-dark" :to="{ name: 'createPost' }">create</RouterLink>
            </div>
            <div class="col-md-4" v-for="post in posts" :key="post.id">
                <postCardView :post="post" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
