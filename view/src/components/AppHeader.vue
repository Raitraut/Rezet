<template>
    <div class="header">
        <div class="menu">
            <router-link class="header-link" :to="{name: 'catalog'}">Catalog</router-link>
            <router-link class="header-link" :to="{name: 'shipping'}">Shipping</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                isActive: this.$route.fullPath === '/',
            }
        },
        computed: {
            uri(){
                return this.$route.fullPath;
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/header.css";
</style>