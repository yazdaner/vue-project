<script setup>
const props = defineProps({
    user : Object
})
</script>

<template>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">name : <RouterLink :to="{name:'showUser' ,params: { id : user.id } }">{{user.name}}</RouterLink></li>
          <li class="list-group-item">username : {{user.username}}</li>
          <li class="list-group-item">email : {{user.email}}</li>
          <li class="list-group-item">phone : {{user.phone}}</li>
        </ul>
      </div>
</template>

<style scoped></style>