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
            <div class="button" :class="{disable: buttonDisable}" @click="doPay(3)">微信支付</div>
            <div class="button green" :class="{disable: buttonDisable}" @click="doPay(2)">支付宝支付</div>
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
            // 支付
            doPay(payType) {
                let self = this
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
                this.buttonDisable = true


                if (payType === 3) {
                    //  微信支付
                    let openid = ''
                    if (this.$storage.get('oauthInfo')) {
                        openid = this.$storage.get('oauthInfo').openid
                    }

                    this.$api.wechatRecharge({
                        money: parseInt(this.amount),
                        openId: openid,
                        pay_type: payType,
                        source: this.$common.getPlatformType(),
                        templateId: this.templateId
                    }, function(response) {
                        let wechat = response.result.wechat
                        if (self.$common.isWeixin()) {
                            // 微信公众号支付
                            function onBridgeReady(){
                                WeixinJSBridge.invoke(
                                    'getBrandWCPayRequest', {
                                        'appId': wechat.appId,                 //公众号名称，由商户传入     
                                        'timeStamp': wechat.timeStamp,         //时间戳，自1970年以来的秒数     
                                        'nonceStr': wechat.nonceStr,            //随机串     
                                        'package': wechat.prepayId,     
                                        'signType': wechat.signType,            //微信签名方式：     
                                        'paySign': wechat.paySign               //微信签名 
                                    },
                                    function(res){     
                                        if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                                            Toast({
                                                message: '充值成功',
                                                position: 'bottom'
                                            })
                                            self.$router.replace('/balance')
                                        }     
                                    }
                                ); 
                            }
                            if (typeof WeixinJSBridge == "undefined"){
                                if( document.addEventListener ){
                                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                                }else if (document.attachEvent){
                                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                                }
                            }else{
                                onBridgeReady();
                            }
                        } else {
                            // 微信app支付
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
                                        message: '充值成功',
                                        position: 'bottom'
                                    }) 
                                    self.$router.replace('/balance')
                                }
                                self.buttonDisable = false
                            })
                        }
                    })
                } else if (payType === 2) {
                    // 支付宝支付
                    this.$api.alipayRecharge({
                        money: parseInt(this.amount),
                        pay_type: payType,
                        source: this.$common.getPlatformType(),
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
                }
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