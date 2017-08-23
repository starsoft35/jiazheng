import bridge from '@/api/bridge'

export default {
    // 微信支付
    wechatPay(amount, templateId) {
        api.recharge({
            money: parseInt(amount),
            pay_type: 3, // 微信
            source: common.getPlatformType(),
            templateId: templateId
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

    // 支付宝支付
    alipay(params) {
        return new Promise((resolve, reject) => {
            bridge.alipay(params).then(response => {
                resolve(response)
            })
        })
    }
}