<script setup>
import PostForm from '@/components/posts/form.vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { ref } from 'vue';


const loading = ref(false);

function createPost(formData) {
    loading.value = true;
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: formData.title,
        body: formData.body,
        userId: 1,
    })
        .then(function (response) {
            loading.value = false;
            toast("Wow so easy !", {
                type: 'success',
                theme: 'colored',
                autoClose: 2000,
                position: toast.POSITION.TOP_CENTER,
            });
            formData.title = '';
            formData.body = '';
        })
        .catch(function (error) {
            loading.value = false;
            toast("Wow so easy !", {
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
        <div class="row g-3">
            <h3>Create Post : </h3>
            <PostForm @formData="createPost" :loadingBtn="loading" btn-text="create"/>
        </div>
    </div>
</template>

<style scoped></style>
