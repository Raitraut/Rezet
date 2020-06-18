import axios from 'axios'

const cart = {
    state: {
        cart: [],
        cart_storage: {},
        total_price: 0
    },
    mutations: {
        setCart(state, payload) {
            state.cart = payload
        },
        pushToCart(state, payload) {
            state.cart.push(payload)
        },
        removeFromCart(state,payload) {
            state.cart.splice(payload, 1)
        },
        addToCartStorage(state, payload) {
            state.cart_storage[payload.id] = payload.quantity
            localStorage.setItem('cart_storage', JSON.stringify(state.cart_storage))
        },
        setCartStorage(state, payload) {
            state.cart_storage = payload
        },
        removeFromCartStorage(state, payload) {
            delete state.cart_storage[payload]
            localStorage.setItem('cart_storage', JSON.stringify(state.cart_storage))
        },
        increment(state, payload) {
            if(state.cart[payload].quantity < 50) {
                state.cart[payload].quantity++
                state.cart_storage[state.cart[payload].id]++
                localStorage.setItem('cart_storage', JSON.stringify(state.cart_storage))
            }
        },
        decrement(state, payload) {
            if(state.cart[payload].quantity > 1) {
                state.cart[payload].quantity--
                state.cart_storage[state.cart[payload].id]--
                localStorage.setItem('cart_storage', JSON.stringify(state.cart_storage))
            }
        },
        setTotalPrice(state, payload) {
            state.total_price = payload
        }
    },
    actions: {
        getCartFromStorage({commit, state}) {
            if(Object.keys(state.cart_storage).length !== 0) {
                return axios.get('http://rezet/api/cart?products_id=' + Object.keys(state.cart_storage).toString()).
                then((response) => {
                    let cart = response.data.cart
                    let payload = []
                    for (const item in response.data.cart) {
                        cart[item].quantity = state.cart_storage[cart[item].id]
                        payload.push(cart[item])
                    }
                    commit('setCart', payload)
                    return response
                }).catch((error) => {
                    return error
                })
            }
        },
        addToCart({commit}, payload) {
            payload.quantity = 1
            commit('pushToCart', payload)
            commit('addToCartStorage', payload)
        },
        deleteFromCart({commit, state}, payload) {
            commit("removeFromCart", state.cart.indexOf(payload))
            commit("removeFromCartStorage", payload.id)
        },
        setCartSessionFromStorage({commit, dispatch}) {
            let cart_storage = localStorage.getItem('cart_storage')
            if(cart_storage !== '') {
                cart_storage = JSON.parse(cart_storage)
                commit('setCartStorage', cart_storage)
                dispatch('getCartFromStorage')
            }
        },
        decrementCartItem({commit}, payload) {
            commit('decrement', payload)
        },
        incrementCartItem({commit}, payload) {
            commit('increment', payload)
        },
        getTotalPrice({commit, state}) {
            let price = 0
            state.cart.forEach(element => {
                price += element.price*element.quantity
            })
            commit('setTotalPrice', price)
        },
        createOrder({state}, payload) {
            let data = payload
            data.products_quantity = localStorage.getItem('cart_storage').toString()
            data.total_price = state.total_price
            return axios.post('http://rezet/api/order', data).
                then((response) => {
                    localStorage.setItem('order_num', response.data.order_number)
                    return response
                }).catch((error) => {
                    return error
                })
        },
        cleanCart({commit}) {
            commit("setCart", [])
            commit("setCartStorage", {})
            commit("setTotalPrice", 0)
            localStorage.setItem('cart_storage', "")
        }
    },
    getters: {
        carts(state) {
            return state.cart
        },
        cart_storage(state) {
            return state.cart_storage
        },
        totalPrice(state) {
            return state.total_price
        }
    }
}

export default cart