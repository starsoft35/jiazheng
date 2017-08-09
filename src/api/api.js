import http from './http'


export default {

    // 手机号码登录
    login (mobile, captcha, registerToken, registrationId, callback) {
        http.post('/user/login', {
            phone: mobile, 
            captcha: captcha,
            register_token: registerToken,
            registration_id: registrationId
        }, callback)
    },

    // 发送注册短信
    sendRegisterCaptcha (mobile) {
        http.post('/user/send/captcha', {
            mobile: mobile
        })
    }






}