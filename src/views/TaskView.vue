<script setup>
import CreateComponent from '../components/tasks/CreateComponent.vue'
import FilterComponent from '../components/tasks/FilterComponent.vue'
import UpdateTaskComponent from '../components/tasks/UpdateTaskComponent.vue'
import DeleteTaskComponent from '../components/tasks/DeleteTaskComponent.vue'

import { computed, ref } from 'vue'
import { useTaskStore } from '../stores/task'

const loading = ref(false)
const store = useTaskStore()
async function fetchTasks() {
  loading.value = true
  await store.fetchTasks() 
  loading.value = false
}
fetchTasks()
const tasks = computed(() => store.allTasks)
</script>

<template>
  <CreateComponent />
  <hr />
  <FilterComponent />
  <div v-if="loading" class="container my-5 text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="container my-5">
    <div class="row g-3">
      <div v-for="task in tasks" :key="task.id" class="col-md-4">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center" :class="{ 'bg-light': task.completed }">
              <del v-if="task.completed">{{ task.title }}</del>
              <div v-else>{{ task.title }}</div>
              <div class="d-flex align-items-center">
                <UpdateTaskComponent :task="task" />
                <DeleteTaskComponent :id="task.id" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
