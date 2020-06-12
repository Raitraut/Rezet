<template>
    <div class="error-404">
        <h1>Page not found!</h1>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .error-404 {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    h1 {
        color: black;
        text-transform: uppercase;
    }
</style>