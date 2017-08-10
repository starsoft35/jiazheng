import http from './http'

export default {

    // 个人中心
    findUserInfo(callback) {
        http.get(true, 'user/myInfo', callback)
    },

    // 手机号码登录
    login(params, callback) {
        http.post(false, '/user/login', {
            phone: params.mobile,
            captcha: params.captcha,
            register_token: params.registerToken,
            registration_id: params.registrationId
        }, callback)
    },

    // 发送注册短信
    sendRegisterCaptcha(mobile, callback) {
        http.post(false, '/user/send/captcha', {
            mobile: mobile
        }, callback)
    }
}