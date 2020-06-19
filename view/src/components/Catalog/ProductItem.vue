<template>
    <div class="product-item">
        <img :src="image" class="undefined-image" alt="undefined image">
        <p>
            {{product.name}}
        </p>
        <span>{{product.price}} &euro;</span>
        <div
             v-if="!in_cart"
             class="add-to-cart"
             @click="addToStore"
        >
            Add to cart
        </div>

        <div
            v-else
            class="in-cart"
        >
            In cart &#10004;
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ProductItem",
        props: {
          product: Object
        },
        data() {
            return {
                image: 'http://rezet' + this.product.image,
                in_cart: false
            }
        },
        methods: {
            addToStore() {
                this.in_cart = true
                this.$store.dispatch('addToCart', this.product)
            }
        },
        computed: {
            ...mapGetters([
                'cart_storage'
            ]),
        },
        created() {
            this.in_cart = this.cart_storage[this.product.id] !== undefined
        }
    }
</script>

<style scoped>
    @import '../../assets/css/product-item.css';
</style>