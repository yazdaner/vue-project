<script setup>
import PostForm from '@/components/posts/form.vue';
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useRoute } from 'vue-router';

const loading = ref(false);
const loadingGet = ref(false);
const post = ref({});
const route = useRoute();

function getpost() {
    loadingGet.value = true;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
            loadingGet.value = false;
            post.value = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
getpost();

function updatePost(formData) {
    loading.value = true;
    axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: route.params.id,
        title: formData.title,
        body: formData.body,
        userId: 1,
    })
        .then(function (response) {
            loading.value = false;
            toast("success !", {
                type: 'success',
                theme: 'colored',
                autoClose: 2000,
                position: toast.POSITION.TOP_CENTER,
            });
        })
        .catch(function (error) {
            loading.value = false;
            toast("error !", {
                type: 'error',
                theme: 'colored',
                autoClose: 2000,
                position: toast.POSITION.TOP_CENTER,
            });
        });
}
</script>

<template>
    <div class="container my-5">
        <div v-if="loadingGet">
            <div class="spinner-border"></div>
        </div>
        <div class="row g-3" v-else>
            <h3>Edit Post : </h3>
            <div >
                <PostForm @formData="updatePost" :loadingBtn="loading" btn-text="edit" :post-data="post"/>
            </div>
            
        </div>
    </div>
</template>

<style scoped></style>
