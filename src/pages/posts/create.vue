<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';


const form = reactive({
    title: "",
    body: "",

    titleError: "",
    bodyError: "",
});
const loading = ref(false);
function validate() {
    if (form.title == '') {
        form.titleError = 'title is required'
    } else {
        form.titleError = ''
    }
    if (form.body == '') {
        form.bodyError = 'body is required'
    } else {
        form.bodyError = ''
    }
    if (form.title != '' && form.body != '') {
        loading.value = true;
        createPost();
    }
}
function createPost() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
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
            form.title = '';
            body.title = '';
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
            <form @submit.prevent="validate()">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="title" class="form-label">title</label>
                        <input name="title" type="text" class="form-control" id="title" v-model.lazy="form.title">
                        <div class="text-danger">
                            {{ form.titleError }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">body</label>
                        <textarea class="form-control" id="body" name="body" rows="5" v-model.lazy="form.body"></textarea>
                        <div class="text-danger">
                            {{ form.bodyError }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-dark" type="submit" :disabled="loading">
                            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                            create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>
