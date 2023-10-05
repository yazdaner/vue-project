<script setup>
import axios from 'axios';
import { ref } from 'vue';
import PostCardView from '@/components/posts/CardView.vue'
import { useRoute } from 'vue-router';
const post = ref({});
const loading = ref(true);
const route = useRoute();
function getpost() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
            post.value = response.data;
            loading.value = false;
        })
        .catch(function (error) {
            console.log(error);
        });
}
getpost()
</script>

<template>
    <div class="container my-5">
        <div class="row g-3">
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else class="col-md-4">
                <PostCardView :post="post" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
