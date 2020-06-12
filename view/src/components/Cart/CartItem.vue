<template>
    <div class="cart-item">
        <p>{{product.title}}</p>
        <span>{{product.price}} $</span>
        <button @click="consoleTitle">add</button>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
          product: Object
        },
        data() {
            return {

            }
        },
        methods: {
            consoleTitle(){
                console.log(this.product.title)
            }
        }
    }
</script>

<style scoped>
    .cart-item {
        display: flex;
        flex-direction: column;
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        height: 260px;
    }
</style>