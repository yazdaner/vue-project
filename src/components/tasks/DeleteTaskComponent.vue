<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/task'
const store = useTaskStore()
const props = defineProps(['id'])
const id = props.id;
const loading = ref(false)

async function deleteTask(id) {
    loading.value = true
    await store.deleteTask(id)
    loading.value = false
}
</script>
<template>
  <div>
    <i class="bi bi-trash-fill" @click="deleteTask(id)"></i>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>
