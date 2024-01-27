import { createStore } from 'vuex'
import task from './modules/task';
import product from './modules/product';
import cart from './modules/cart';
const store = createStore({
  modules : {
    task,
    product,
    cart,
  }
});

export default store
