<template>
    <div class="cart-item">
        <p>1</p>
        <button>add</button>
    </div>
</template>

<script>
    export default {
        name: "CartItem"
    }
</script>

<style scoped>
    .cart-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        height: 260px;
    }
</style>