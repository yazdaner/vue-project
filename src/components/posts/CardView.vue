<script setup>
const props = defineProps({
    post : Object
})
</script>

<template>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">title : <RouterLink :to="{name:'showPost' ,params: { id : post.id } }">{{post.title}}</RouterLink></li>
          <li class="list-group-item">body : {{post.body}}</li>
        </ul>
      </div>
</template>

<style scoped></style>