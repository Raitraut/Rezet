import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/product";
import cart from "./modules/cart";


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart: cart,
        products: products
    }
})

export default store