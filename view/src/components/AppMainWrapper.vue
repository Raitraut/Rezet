<template>
    <div>
        <cart-catalog/>
        <shipping/>
    </div>
</template>

<script>

import CartCatalog from "./Cart/CartCatalog";
import Shipping from "./Shipping/Shipping";

export default {
    name: "AppMainWrapper",
    components: {
        CartCatalog,
        Shipping
    }
}
</script>

<style scoped>

</style>