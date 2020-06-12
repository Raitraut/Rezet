<template>
    <div class="shipping-item">
        <span class="item item-title">{{ product.title }}</span>
        <span class="item">{{ product.price }} $</span>
    </div>
</template>

<script>
    export default {
        name: "ShippingItem",
        props: {
            product: Object
        }
    }
</script>

<style scoped>
    .item-title {
        margin-left: 12px;
    }
</style>