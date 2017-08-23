import axios from 'axios'
import storage from './storage'
import router from '../router'


export default {
    // 认证
    authorize() {
        // storage.set('history_url', router.history.current.path)
        let redirect = 'http://jiazheng.ydd100.cn#oauth'
        let authURI = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + process.env.WEIXIN.APP_ID + '&redirect_uri=' + encodeURIComponent(redirect) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
        window.location.replace(authURI)
    },

    // 获取凭证
    getAccessToken(code) {
        return new Promise((resolve, reject) => {
            let URI = process.env.WEIXIN.API_HOST + '/sns/oauth2/access_token?appid=' + process.env.WEIXIN.APP_ID + '&secret=' + process.env.WEIXIN.APP_SECRET + '&code=' + code + '&grant_type=authorization_code'
            axios.get(URI).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取用户信息
    getUserInfo(accessToken, openid) {
        return new Promise((resolve, reject) => {
            let URI = process.env.WEIXIN.API_HOST + '/sns/userinfo?access_token=' + accessToken + '&openid=' + openid + '&lang=zh_CN'
            axios.get(URI, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}