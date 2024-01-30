<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../../stores/task';

const store = useTaskStore();
const number = ref()
function filterTasks() {
  store.filterTasks(number.value)
}
</script>
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <h6>Filter Tasks:</h6>
        <select v-model="number" @change="filterTasks()" class="form-select form-select-sm">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  </div>
</template>
