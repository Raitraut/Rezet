<template>
    <div>
        <h1>Catalog</h1>
        <div class="product-catalog">
            <product-item
             v-for="product in products"
             :key="product.name"
             :product="product"
            />
        </div>
        <div class="pagination">
            <div :class="{disabled_link : pagination.current_page === 1}"
                 @click="getProductFromPager(pagination.current_page - 1)"
            >
                &laquo;
            </div>
            <div
                v-for="n in pagination.last_page"
                :class="{active: pagination.current_page === n}"
                :key="n"
                @click="getProductFromPager(n)"
            >
                {{ n }}
            </div>
            <div
                    :class="{disabled_link : pagination.current_page === pagination.last_page}"
                    @click="getProductFromPager(pagination.current_page + 1)"
            >
                &raquo;
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from './ProductItem'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProductCatalog",
        components: {
            ProductItem
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapActions([
                'getProductsFromApi'
            ]),

            getProductFromPager(page_num) {
                this.getProductsFromApi(page_num)
            }

        },
        computed: {
            ...mapGetters([
                'products',
                'pagination'
            ]),
        },
        created() {
            this.getProductsFromApi(this.pagination.current_page)
        }
    }
</script>

<style scoped>
    @import "../../assets/css/prodct-catalog.css";
</style>