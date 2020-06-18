import Vue from "vue"
import VueRouter from 'vue-router'
import ProductCatalog from "../components/Catalog/ProductCatalog";
import Cart from "../components/Cart/Cart";
import NotFound from "../components/NotFound";
import Shipping from "../components/Shipping/Shipping";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: ProductCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/shipping',
        name: 'shipping',
        component: Shipping
    },
    {
        path: "*",
        component: NotFound
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router