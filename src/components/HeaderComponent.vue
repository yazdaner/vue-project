<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
const store = useCartStore()
const count = computed(() => store.count)
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tasks">Task</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">Product</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link p-1 me-3" to="/cart">
              <span class="badge rounded-pill bg-primary me-1">{{count}}</span>
              <i class="bi bi-basket-fill" style="font-size: 23px"></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
