<template>
    <div>
        <h1>Shipping</h1>
        <form method="post" class="shipping-form">
            <div class="form-item">
                <label for="name">Name*</label>
                <div class="input-get" :class="{error : $v.name.$error}">
                    <input
                            v-model="name"
                            class="input-data"
                            type="text"
                            id="name"
                            @change="$v.name.$touch()"
                    >
                    <small class="small-error" v-if="!$v.name.required">Field is required</small>
                    <small class="small-error" v-if="!$v.name.alpha">This field can only contain letters and spaces</small>
                    <small class="small-error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</small>
                    <small class="small-error" v-if="!$v.name.maxLength">Name must have at most {{$v.name.$params.maxLength.max}} letters.</small>
                </div>
            </div>
            <div class="form-item">
                <label for="address">Address*</label>
                <div class="input-get"  :class="{error : $v.address.$error}">
                    <input
                            v-model="address"
                            class="input-data"
                            type="text"
                            id="address"
                            @change="$v.address.$touch()"
                    >
                    <small class="small-error" v-if="!$v.address.required">Field is required</small>
                    <small class="small-error" v-if="!$v.address.alphaNum">This field can only contain letters, digits and spaces</small>
                    <small class="small-error" v-if="!$v.address.minLength">Name must have at least {{$v.address.$params.minLength.min}} letters.</small>
                    <small class="small-error" v-if="!$v.address.maxLength">Name must have at most {{$v.address.$params.maxLength.max}} letters.</small>
                </div>
            </div>
            <div class="form-item">
                <label for="phone">Phone</label>
                <div class="input-get"  :class="{error : $v.phone.$error}">
                    <input
                            v-model="phone"
                            class="input-data"
                            type="text"
                            id="phone"
                            @change="$v.phone.$touch()"
                    >
                    <small class="small-error" v-if="!$v.phone.minLength">Phone must have at least {{$v.phone.$params.minLength.min}} letters.</small>
                    <small class="small-error" v-if="!$v.phone.maxLength">Phone must have at most {{$v.phone.$params.maxLength.max}} letters.</small>
                    <small class="small-error" v-if="!$v.phone.phone">Invalid phone number</small>
                </div>
            </div>

            <div class="form-item">
                <label for="email">E-mail</label>
                <div class="input-get" :class="{error : $v.email.$error}">
                    <input
                            v-model="email"
                            class="input-data"
                            type="email"
                            id="email"
                            @change="$v.email.$touch()"
                    >
                    <small class="small-error" v-if="!$v.email.email">Invalid email</small>
                    <small class="small-error" v-if="!$v.email.minLength">Name must have at least {{$v.email.$params.minLength.min}} letters.</small>
                    <small class="small-error" v-if="!$v.email.maxLength">Name must have at most {{$v.email.$params.maxLength.max}} letters.</small>
                </div>
            </div>
            <div class="form-item">
                <label for="shipping">Shipping options</label>
                <select
                        v-model="shippingType"
                        class="select-data"
                        id="shipping"
                >
                    <option value="Free 0.0">Free shipping</option>
                    <option
                            :value="totalPrice > 300 ? 'Express 0.0' : 'Express 9.99'"
                    >
                        Express shipping- additional {{ totalPrice > 300 ? 'free' : '9.99 €' }}
                    </option>
                    <option value="Courier 19.99">Courier shipping - additional 19.99 €</option>
                </select>
            </div>
            <div class="bth-pay">
                <button class="buy-btn" :disabled="$v.$invalid">PAY</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import { helpers, required, email, minLength, maxLength } from 'vuelidate/lib/validators'
    const alpha = helpers.regex("alpha", /^[a-zA-Z\s]*$/)
    const alphaNum = helpers.regex("alphaNum", /^[a-zA-Z0-9\s]*$/)
    const phone = helpers.regex("phone", /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)

    export default {
        name: "Shipping",
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                address: '',
                shippingType: 'Free 0.0',
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(30),
                alpha
            },
            email: {
                email,
                minLength:8,
                maxLength:30,
            },
            address: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(60),
                alphaNum
            },
            phone: {
                minLength: minLength(10),
                maxLength: maxLength(14),
                phone
            },
        },
        methods: {
            ...mapActions([
                'getTotalPrice',
                'getCartFromStorage'
            ])
        },
        computed: {
            ...mapGetters([
                'totalPrice'
            ])
        },
        created() {
            this.getCartFromStorage().then(() => {
                    this.getTotalPrice()
                }
            )
        }
    }
</script>

<style scoped>
    @import "../../assets/css/shipping.css";
</style>