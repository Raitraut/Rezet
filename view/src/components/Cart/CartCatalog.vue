<template>
    <div>
        <h1>Catalog</h1>
        <div class="cart-catalog">
            <cart-item
             v-for="product in products"
             :key="product.title"
             :product="product"
            />
        </div>
    </div>
</template>

<script>
    import CartItem from './CartItem'

    export default {
        name: "CartCatalog",
        components: {
            CartItem
        },
        data() {
            return {
                products : [
                    {
                        title: 'test1',
                        price: '120',
                    },
                    {
                        title: 'test2',
                        price: '130',
                    },
                    {
                        title: 'test3',
                        price: '120',
                    },
                    {
                        title: 'test4',
                        price: '130',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .cart-catalog {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-column-gap: 40px;
        grid-row-gap: 15px;
        max-width: 1000px;
        margin: 0 auto;
    }
</style>