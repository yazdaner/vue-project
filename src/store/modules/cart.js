import Swal from 'sweetalert2';

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
        }
    }

}

export default cart;