<template>
    <div>
        <div class="header">
            <div class="menu">
                <router-link class="header-link" to="/cart">Carts</router-link>
                <router-link class="header-link" to="/shipping">Shipping</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    @import "../assets/css/header.css";
</style>