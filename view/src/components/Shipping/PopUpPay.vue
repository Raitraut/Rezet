<template>
    <div class="popup">
        <div class="window">
            <span class="close" @click="closePopUp">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
                <g>
                    <g>
                        <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                            c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                            c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                            L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                            c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                            c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                            c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
                    </g>
                </g>
                </svg>
            </span>
            <h3>Order created</h3>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "PopUpPay",
        methods: {
            ...mapActions([
                'cleanCart'
            ]),
            closePopUp() {
                this.cleanCart()
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .popup {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s ease;
    }
    .window {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        width: 315px;
        height: 200px;
        background-color: white;
        border-radius: 8px;
    }
    .close {
        position: absolute;
        top: 13px;
        right: 13px;
    }
    .close svg{
        height: 20px;
        width: 20px;
    }
</style>