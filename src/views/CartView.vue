<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const cartItems = computed(() => store.getters['cart/getItems'])
const totalAmount = computed(() => store.getters['cart/totalAmount'])
function increment(id) {
  store.dispatch('cart/increment', id)
}
function decrement(id) {
  store.dispatch('cart/decrement', id)
}
function deleteFromCart(id){
  store.dispatch('cart/deleteFromCart', id)

}
function clearCart(){
  store.dispatch('cart/clearCart')
}
</script>
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-12 pl-3 pt-3">
        <table v-if="cartItems.length > 0" class="table table-hover border bg-white">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th style="width: 10%">Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="align-middle">
                <div class="row">
                  <div class="col-lg-2">
                    <img :src="item.image" class="img-fluid" />
                  </div>
                  <div class="col-lg-10">
                    <h5>{{ item.name }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ item.price }}</td>
              <td class="align-middle">
                <button @click="increment(item.id)" class="btn btn-sm btn-dark me-2">+</button>
                <span>{{ item.quantity }}</span>
                <button @click="decrement(item.id)" class="btn btn-sm btn-dark ms-2">-</button>
              </td>
              <td class="align-middle">{{ item.quantity * item.price }}</td>
              <td class="align-middle" style="width: 15%">
                <button @click="deleteFromCart(item.id)" class="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="clearCart" class="btn btn-dark">Clear Cart</button>
              </td>
              <td colspan="2" class="hidden-xs"></td>
              <td class="hidden-xs text-center" style="width: 15%">
                <strong>Total : {{ totalAmount }}</strong>
              </td>
              <td>
                <a href="#" class="btn btn-success btn-block">Checkout</a>
              </td>
            </tr>
          </tfoot>
        </table>
        <div v-else class="d-flex justify-content-center mt-5">
          <div class="text-center">
            <i class="bi bi-basket-fill" style="font-size: 60px"></i>
            <h3 class="">Cart is empty</h3>
            <RouterLink to="/products" class="btn btn-outline-dark mt-3">Products</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
