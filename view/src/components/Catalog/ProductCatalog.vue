<template>
    <div>
        <h1>Catalog</h1>
        <div class="product-catalog" v-if="skeleton">
            <div class="skeleton"
                 v-for="i in 6"
                 :key="i"
            >
                <content-loader
                        :width="330"
                        :height="280"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                >
                    <rect x="72" y="192" rx="3" ry="3" width="178" height="19" />
                    <rect x="57" y="12" rx="0" ry="0" width="213" height="161" />
                    <rect x="121" y="228" rx="3" ry="3" width="80" height="12" />
                    <rect x="98" y="248" rx="3" ry="3" width="124" height="30" />
                </content-loader>
            </div>
        </div>
        <div class="product-catalog" v-if="!skeleton">
            <product-item
             v-for="product in products"
             :key="product.name"
             :product="product"
            />
        </div>
        <div class="pagination" v-if="!skeleton">
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
    import { ContentLoader } from 'vue-content-loader'

    export default {
        name: "ProductCatalog",
        components: {
            ProductItem,
            ContentLoader
        },
        data() {
            return {
                skeleton: true
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
            this.getProductsFromApi(this.pagination.current_page).then(() => {
                setTimeout(() => {
                    this.skeleton = !this.skeleton
                }, 1000)
            })
        }
    }
</script>

<style scoped>
    @import "../../assets/css/prodct-catalog.css";
</style>