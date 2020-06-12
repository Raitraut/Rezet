<template>
    <div class="shipping-wrapper">
        <h1>Shipping</h1>
        <div class="shipping-table">
            <div class="shipping-item head">
                <span class="item item-title">title</span>
                <span class="item">price</span>
            </div>
            <shipping-item
                v-for="product in products"
                :key="product.title"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
    import ShippingItem from "./ShippingItem";
    export default {
        name: "Shipping",
        data() {
            return {
                products: [
                    {
                        title: 'test1',
                        price: 120,
                    },
                    {
                        title: 'test3',
                        price: 120,
                    },
                    {
                        title: 'test2',
                        price: 120,
                    }
                ]
            }

        },
        components: {
            ShippingItem
        }
    }
</script>

<style scoped>
    .head {
        border: none!important;
        background-color: #7abaff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .shipping-item {
        display: grid;
        grid-template-columns: 300px 100px 100px;
        grid-template-rows: 60px;
        border-top: 2px solid #0e2231;
        align-items: center;
        justify-items: start;
    }
    .item{
        font-size: 15px;
        font-weight: bolder;
    }
    .item-title {
        margin-left: 12px;
    }
    .shipping-table {
        max-width: 400px;
        width: 100%;
        border: 1px solid #1b1e21;
        border-radius: 8px;
    }
    .shipping-wrapper {
        max-width: 1100px;
        margin: 0 auto;
    }
</style>