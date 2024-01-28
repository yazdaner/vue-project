import Swal from 'sweetalert2';

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters : {
        count(state){
            return state.cart.length;
        },
        getItems(state){
            return state.cart;
        },
        totalAmount(state){
            return state.cart.reduce((total,p) => {
                return total + p.price * p.quantity 
            },0);
        }
    },
    mutations: {
        addToCart(state, product) {
            const item = state.cart.find(p => p.id == product.id);
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                });
            } else {
                item.quantity++
            }
            updateLocalStorage(state.cart);
        },
        increment(state,id){
            const item = state.cart.find(p => p.id == id)
            if(item){
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        decrement(state,id){
            const item = state.cart.find(p => p.id == id)
            if(item && item.quantity > 1){
                item.quantity--
            }
            updateLocalStorage(state.cart)
        },
        deleteFromCart(state,id){
            state.cart = state.cart.filter(p => p.id != id)
            updateLocalStorage(state.cart)
        },
        clearCart(state){
            state.cart = []
            updateLocalStorage(state.cart)
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
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
        increment({ commit }, id){
            commit('increment', id);
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
        decrement({ commit }, id){
            commit('decrement', id);
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
        deleteFromCart({ commit }, id){
            commit('deleteFromCart', id);
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
        clearCart({ commit }){
            commit('clearCart');
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

}

export default cart;