<template>
    <div class="cart-catalog">
        <cart-item/>
    </div>
</template>

<script>
    import CartItem from './CartItem'

    export default {
        name: "CartCatalog",
        components: {
            CartItem
        }
    }
</script>

<style scoped>
    .cart-catalog {
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
    }
</style>