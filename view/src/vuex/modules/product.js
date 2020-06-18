import axios from 'axios'

const products = {
    state: {
        products: [],
        pagination: {}
    },
    mutations: {
        setProductsToState(state, payload) {
            state.products = payload
        },
        setProductsPagination(state, payload) {
            state.pagination = payload
        }
    },
    actions: {
        getProductsFromApi({commit}, payload) {
            let page = 1
            if(payload !== undefined) {
                page = payload
            }
            return axios.get('http://rezet/api/product?page=' + page).then((response) => {
                const pagination = {
                    current_page: response.data.products.current_page,
                    last_page: response.data.products.last_page
                }
                commit('setProductsToState', response.data.products.data)
                commit('setProductsPagination', pagination)
            })
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        pagination(state) {
            return state.pagination
        }
    }
}

export default products