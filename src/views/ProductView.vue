<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useProductStore } from '../stores/product'

const storeCart = useCartStore()
const storeProduct = useProductStore()
function addToCart(product){
  storeCart.addToCart(product);
}

const products = computed(() => storeProduct.allProducts)
</script>

<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-for="product in products" :key="product.id" class="col-md-3">
        <div class="card">
          <img :src="product.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <button @click="addToCart(product)" class="btn btn-outline-success">add to cart</button>
            {{ product.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
