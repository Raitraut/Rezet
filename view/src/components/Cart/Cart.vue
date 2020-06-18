<template>
    <div class="cart-wrapper">
        <h1>Cart</h1>
        <div class="wrapper">
            <div v-if="this.carts.length !== 0">
                <cart-item
                    v-for="(cart, index) in this.carts"
                    :key="cart.name"
                    :cart="cart"
                    @increment="increment(index)"
                    @decrement="decrement(index)"
                />
            </div>
            <div
                class="no-content"
                v-else
            >
                <span>Not products</span>
            </div>
        </div>
        <div
                class="total-price"
                v-if="this.carts.length !== 0"
        >
            <span>{{ cart_total }} &euro;</span>
            <router-link class="buy-btn" :to="{name: 'shipping'}">BUY</router-link>
        </div>
    </div>
</template>

<script>
    import CartItem from "./CartItem"
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        methods: {
            ...mapActions([
                'decrementCartItem',
                'incrementCartItem',
                'getCartFromStorage'
            ]),
            increment(index) {
                this.incrementCartItem(index)
            },
            decrement(index) {
                this.decrementCartItem(index)
            }
        },
        computed: {
            ...mapGetters([
                'carts'
            ]),
            cart_total() {
                let result = []
                for(const item in this.carts) {
                    result.push(this.carts[item].price * this.carts[item].quantity)
                }
                result = result.reduce(function (sum, el) {
                    return sum + el
                })
                return result
            }
        },
        created() {
            this.getCartFromStorage()
        }
    }
</script>

<style scoped>
    @import "../../assets/css/cart.css";
</style>