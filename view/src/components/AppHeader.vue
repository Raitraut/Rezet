<template>
    <div class="header">
        <div class="menu">
            <router-link class="header-link" :to="{name: 'catalog'}">Catalog</router-link>
            <router-link class="header-link" :to="{name: 'cart'}">Cart({{ carts.length }})</router-link>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AppHeader",
        data() {
            return {
                isActive: this.$route.fullPath === '/',
            }
        },
        computed: {
            ...mapGetters([
               'carts'
            ])
        }
    }
</script>

<style scoped>
    @import "../assets/css/header.css";
</style>