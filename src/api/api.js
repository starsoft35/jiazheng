import http from './http'

export default {
    // Demon

    // 个人中心
    findUserInfo(callback) {
        http.get(true, '/user/myInfo', callback)
    },

    // 更新个人信息
    updateUserInfo(nickname, mobile, callback) {
        http.post(true, '/user/updateInfo', {
            nickName: nickname,
            phone: mobile
        }, callback, '保存成功')
    },

    // 更新头像
    updateAvatar(formData, callback) {
        http.upload(true, '/user/updateHeadImage', formData, callback)
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

    // 退出登录
    logout(callback) {
        http.post(true, '/user/loginout', {}, callback, '退出登录成功')
    },

    // 发送注册短信
    sendRegisterCaptcha(mobile, callback) {
        http.post(false, '/user/send/captcha', {
            mobile: mobile
        }, callback)
    },

    // 获取地址列表
    getAddressList(callback) {
        http.get(true, '/serviceAddress/list', callback)
    },

    // 编辑地址
    editAddress(params, callback) {
        http.post(true, '/serviceAddress/update', {
            address: params.address,
            addressId: params.addressId,
            consignee: params.consignee,
            detailAddr: params.detailAddr,
            isDefault: params.isDefault,
            latitude: params.latitude,
            longitude: params.longitude,
            mobile: params.mobile
        }, callback)
    },

    // 删除地址
    deleteAddress(addressId, callback) {
        http.post(true, '/serviceAddress/delete', {
            addressId: addressId
        }, callback)
    },

    // 获取余额记录
    getBalanceRecordList(callback) {
        http.get(true, '/memberBill/list', callback)
    },

    // 分页查询余额金额
    pageBalance(callback) {

    }




    // 易







}