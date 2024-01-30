import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        }
    },
    getters: {
        count() {
            return this.cart.length;
        },
        getItems() {
            return this.cart;
        },
        totalAmount() {
            return this.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0);
        }
    },
    actions: {
        addToCart(product) {

            const item = this.cart.find(p => p.id == product.id);
            if (!item) {
                this.cart.push({
                    ...product,
                    quantity: 1
                });
            } else {
                item.quantity++
            }
            updateLocalStorage(this.cart);


            Swal.fire({
                title: 'product added',
                position: "top",
                icon: 'success',
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        },
        increment(id) {
            const item = this.cart.find(p => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product updated',
                position: "top",
                icon: 'success',
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        },
        decrement(id) {
            const item = this.cart.find(p => p.id == id)
            if (item && item.quantity > 1) {
                item.quantity--
            }
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product updated',
                position: "top",
                icon: 'success',
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        },
        deleteFromCart(id) {
            this.cart = this.cart.filter(p => p.id != id)
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product removed',
                position: "top",
                icon: 'success',
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        },
        clearCart() {
            this.cart = []
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'cart is clear',
                position: "top",
                icon: 'success',
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

})

