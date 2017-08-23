import router from '@/router'
import storage from '@/api/storage'

function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

setupWebViewJavascriptBridge(function(bridge) {
    //初始化
    bridge.init(function(message, responseCallback) {
        var data = {
            'Javascript Responds': 'Wee!'
        };
        responseCallback(data);
    });

    // 获取登录凭证
    bridge.registerHandler('getAccessToken', (data, responseCallback) => {
        let token = storage.get('token')
        if (token) {
            return token.accessToken
        }
        return false
    })

    // 跳转消息页面
    bridge.registerHandler('uploadLocation', data => {
        let param = JSON.parse(data)
        if (param.type === 1) {
            // 跳转用户信息
            router.push('/message')
        } else {
            // 跳转工人信息
            router.push('/workerMessage')
        }
    })

    // 上传地理位置
    bridge.registerHandler('uploadLocation', data => {
        let param = JSON.parse(data)

        // 判定是否为工人
        if (storage.get('role') != 2) {
            return
        }

        // 上传位置
        let token = storage.get('token')
        if (!token) {
            return
        }
        axios.post(process.env.API_HOST + '/location/add?access_token=' + token.accessToken, querystring.stringify({
            latitude: param.latitude,
            longitude: param.longitude
        })).then(function(response) {

        })
    })
})




export default {
    // 微信支付
    wechatPay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callWeChatPay', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    },

    // 支付宝支付
    alipay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callAlipay', params, response => {
                    resolve(response)
                })
            })
        })
    },

    // 查询GPS
    getGPS() {
        return new Promise((resovle, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('getLocation', null, response => {
                    resovle(response)
                })
            })
        })
    },

    // 微信OAuth认证
    wechatOAuth() {
        return new Promise((resolve, reject) => [
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('oauth', "1", response => {
                    resolve(response)
                })
            })
        ])
    },

    // 分享
    share(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('share', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    }
}