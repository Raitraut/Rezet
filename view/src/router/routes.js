import Vue from "vue"
import VueRouter from 'vue-router'
import CartCatalog from "../components/Cart/CartCatalog";
import Shipping from "../components/Shipping/Shipping";
import NotFound from "../components/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: CartCatalog
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