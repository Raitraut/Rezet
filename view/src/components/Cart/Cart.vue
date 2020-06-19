<template>
    <div class="cart-wrapper">
        <h1>Cart</h1>
        <div class="wrapper" v-if="skeleton">
            <div class="skeleton-cart"
                 v-for="i in 3"
                 :key="i"
            >
                <content-loader
                        :width="1100"
                        :height="180"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                >
                    <rect x="206" y="70" rx="3" ry="3" width="166" height="25" />
                    <rect x="22" y="13" rx="0" ry="0" width="120" height="156" />
                    <rect x="550" y="70" rx="3" ry="3" width="128" height="25" />
                    <rect x="874" y="70" rx="3" ry="3" width="94" height="25" />
                    <rect x="1058" y="13" rx="3" ry="3" width="31" height="30" />
                </content-loader>
            </div>
        </div>
        <div class="wrapper" v-if="!skeleton">
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
                v-if="this.carts.length !== 0 && !skeleton"
        >
            <span>{{ cart_total }} &euro;</span>
            <router-link class="buy-btn" :to="{name: 'shipping'}">BUY</router-link>
        </div>
    </div>
</template>

<script>
    import CartItem from "./CartItem"
    import {mapGetters, mapActions} from 'vuex'
    import { ContentLoader } from 'vue-content-loader'
    export default {
        name: "Cart",
        components: {
            CartItem,
            ContentLoader
        },
        data() {
          return {
              skeleton: true
          }
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
            this.getCartFromStorage().then(() => {
                setTimeout(() => {
                    this.skeleton = !this.skeleton
                }, 1000)
            })
        }
    }
</script>

<style scoped>
    @import "../../assets/css/cart.css";
</style>