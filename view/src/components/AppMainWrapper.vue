<template>
    <div>
        <router-view/>
    </div>
</template>

<script>


export default {
    name: "AppMainWrapper",
    created() {
        this.$store.dispatch('setCartSessionFromStorage')
    }
}
</script>

<style scoped>

</style>