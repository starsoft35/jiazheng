<template>
    <div class="recharge-container">
        <Header title="充值"></Header>

        <div class="template">
            <div class="item" v-for="(item, index) in template" :class="{active: item.actived}" @click="changeAmount(index)">{{item.price}}</div>
            <div class="clear"></div>
        </div>

        <div class="total">
            金额：¥ <input type="tel" v-model="amount" @focus="focusOnInput" class="amount">
        </div>
        <div class="button-container">
            <div class="button" :class="{disable: buttonDisable}" @click="doWechatPay">微信支付</div>
            <div class="button green" :class="{disable: buttonDisable}" @click="doAlipay">支付宝支付</div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                amount: null,
                templateId: null,
                template: [],
                buttonDisable: false
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
            // 微信充值
            doWechatPay(){
                if (this.buttonDisable) {
                    return
                }
                if (this.templateId) {
                    this.amount = ''
                } else {
                    if (!this.amount) {
                       Toast({
                           message: '请输入充值金额',
                           position: 'bottom'
                       }) 
                       return
                    }
                }
                let self = this
                if (typeof QcjzBridge === 'undefined') {
                    Toast({
                        message: '不支持支付宝支付',
                        position: 'bottom'
                    }) 
                    return
                }
                this.buttonDisable = true
                this.$api.wechatRecharge({
                    money: parseInt(this.amount),
                    pay_type: 3,
                    source: 2,
                    templateId: this.templateId
                }, function(response) {
                    let wechat = response.result.wechat
                    QcjzBridge.callWeChatPay(JSON.stringify({
                        appid: wechat.appId,
                        partnerid: wechat.partnerId,
                        prepayid: wechat.prepayId,
                        packageValue: 'Sign=WXPay',
                        noncestr: wechat.nonceStr,
                        timestamp: wechat.timeStamp,
                        sign: wechat.paySign
                    }), function(ret) {
                        if (ret == 0) {
                            Toast({
                                message: '支付成功',
                                position: 'bottom'
                            }) 
                            self.$router.replace('/balance')
                        }
                        self.buttonDisable = false
                    })
                })
            },
            // 支付宝充值
            doAlipay() {
                if (this.buttonDisable) {
                    return
                }
                
                if (this.templateId) {
                    this.amount = ''
                } else {
                    if (!this.amount) {
                       Toast({
                           message: '请输入充值金额',
                           position: 'bottom'
                       }) 
                       return
                    }
                }
                let self = this
                if (typeof QcjzBridge === 'undefined') {
                    Toast({
                        message: '不支持支付宝支付',
                        position: 'bottom'
                    }) 
                    return
                }
                this.buttonDisable = true
                this.$api.alipayRecharge({
                    money: parseInt(this.amount),
                    pay_type: 2,
                    source: 2,
                    templateId: this.templateId
                }, function(response) {
                    QcjzBridge.callAlipay(response.result.alipay, function(ret) {
                        if (ret == 0) {
                            Toast({
                                message: '支付成功',
                                position: 'bottom'
                            }) 
                            self.$router.replace('/balance')
                        }
                        self.buttonDisable = false
                    })
                })
            },
            // 输入金额
            focusOnInput() {
                for (var i in this.template) {
                    if (!this.template[i].templateId) {
                        this.template[i].actived = true
                        this.amount = ''
                        this.templateId = null
                    } else {
                        this.template[i].actived = false
                    }
                }
            },
            // 切换充值金额
            changeAmount(index) {
                for (var i in this.template) {
                    if (this.template[i].actived = true) {
                        this.template[i].actived = false
                    }
                    if (i == index) {
                        this.template[i].actived = true
                        this.templateId = this.template[i].templateId
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
    .button.disable {
        opacity: .6
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