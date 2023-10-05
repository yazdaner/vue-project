<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
const loading = ref(false);
const props = defineProps({
  post: Object
})

function deletePost(postId) {
  loading.value = true;
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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
  <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">title : <RouterLink :to="{ name: 'showPost', params: { id: post.id } }">{{ post.title }}
        </RouterLink>
      </li>
      <li class="list-group-item">body : {{ post.body }}</li>
    </ul>
    <div class="card-footer">
      <button @click="deletePost(post.id)" class="btn btn-danger me-3" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm"></div>
        delete
      </button>
      <RouterLink class="btn btn-dark" :to="{ name: 'editPost', params: { id: post.id } }">edit</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>