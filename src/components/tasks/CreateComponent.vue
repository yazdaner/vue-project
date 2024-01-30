<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
const title = ref()
const titleError = ref()
const loading = ref(false)
async function storeTask() {
  if (title.value == '') {
    titleError.value = 'title is required'
  } else {
    loading.value = true
    titleError.value = ''
    await store.storeTask(title.value)
    loading.value = false
    title.value = ''
  }
}
</script>
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <h6>Filter Tasks:</h6>
        <form @submit.prevent="storeTask" class="row">
          <div class="col-md-6">
            <input v-model="title" type="text" class="form-control" />
            <div class="form-text text-danger">{{ titleError }}</div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-dark">
              create
              <span v-if="loading" class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
