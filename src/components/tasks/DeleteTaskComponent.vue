<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps(['id'])
const id = props.id;
const loading = ref(false)

async function deleteTask(id) {
    loading.value = true
    await store.dispatch('task/deleteTask', id)
    loading.value = false
}
</script>
<template>
  <div>
    <i class="bi bi-trash-fill" @click="deleteTask(id)"></i>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>
