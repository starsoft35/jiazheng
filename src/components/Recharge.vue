<template>
    <div class="recharge-container">
        <Header title="充值"></Header>

        <div class="template">
            <div class="item" v-for="(item, index) in template" :class="{active: item.actived}" @click="changeAmount(index)">{{item.price}}</div>
            <div class="clear"></div>
        </div>

        <div class="total">
            应付：¥ <input type="tel" v-model="amount" @focus="focusOnInput" class="amount">
        </div>
        <div class="button-container">
            <div class="button">微信支付</div>
            <div class="button green">支付宝支付</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                amount: null,
                temlateId: null,
                template: []
            }
        },
        created() {
            let self = this
            this.$api.getRechargeTemplate(function(response) {
                for (var i in response.result) {
                    self.template.push({
                        price: response.result[i].price,
                        actived: false,
                        templateId: response.result[i].templateId,
                    })
                }

                self.changeAmount(0)
            })
            
        },
        methods: {
            focusOnInput() {
                for (var i in this.template) {
                    if (!this.template[i].templateId) {
                        this.template[i].actived = true
                        this.amount = ''
                    } else {
                        this.template[i].actived = false
                    }
                }
            },
            changeAmount(index) {
                for (var i in this.template) {
                    if (this.template[i].actived = true) {
                        this.template[i].actived = false
                    }
                    if (i == index) {
                        this.template[i].actived = true
                        this.temlateId = this.template[i].templateId
                        this.amount = this.template[i].templateId ? this.template[i].price.substring(0, this.template[i].price.length-1) : ''
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .template {
        background: #FFF;
        padding: .3rem .1125rem;
    }
    .template .item {
        border: 1px solid #ccc;
        padding: .26rem 0;
        box-sizing: border-box;
        width: 2.2rem;
        margin: .1125rem;
        float: left;
        border-radius: .1rem;
        font-size: .26rem;
        color: #888;
    }
    .template .item.active {
        color: #2d92f4;
        border: 1px solid #2d92f4;
    }
    .clear {
        clear: both;
    }
    .total {
        background: #FFF;
        border-top: 1px solid #eee;
        padding: .26rem;
        font-size: .26rem;
        color: #666;
        text-align: left;
    }

    .button-container {
        margin-top: 1.5rem;
    }
    .button {
        margin: .5rem .5rem;
        height: .6rem;
        padding: .12rem;
        font-size: .28rem;
        background: #2d92f4;
        color: #FFF;
        border-radius: .6rem;
        line-height: .6rem;
    }
    .button.green {
        background-color: #22AC38;
    }
    .amount {
        border: 0;
        font-size: .28rem;
        color: #666;
        width: 5rem;
    }
</style>