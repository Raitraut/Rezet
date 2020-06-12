import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/product";
import cards from "./modules/card";


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cards: cards,
        products: products
    }
})

export default store