<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/task'
const store = useTaskStore()
const props = defineProps(['task'])
const task = props.task;
const loading = ref(false)

async function updateTask(task) {
    loading.value = true
    await store.updateTask(task)
    loading.value = false
}
</script>
<template>
  <div @click="updateTask(task)">
    <i v-if="task.completed" class="bi bi-check font-22"></i>
    <i v-else class="bi bi-check-all font-22"></i>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>
