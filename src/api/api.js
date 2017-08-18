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
            addressId: params.id,
            consignee: params.consigee,
            detailAddr: params.street,
            isDefault: params.isDefault,
            latitude: params.latitude,
            longitude: params.longitude,
            mobile: params.mobile
        }, callback, params.id ? '更新成功' : '创建成功')
    },

    // 删除地址
    deleteAddress(addressId, callback) {
        http.get(true, '/serviceAddress/delete', callback, {
            params: {
                addressId: addressId
            }
        })
    },

    // 查询地址
    getAddress(addressId, callback) {
        http.get(true, '/serviceAddress/getData', callback, { params: { addressId: addressId } })
    },

    // 设置默认地址
    updateDefaultAddress(addressId, callback) {
        http.get(true, '/serviceAddress/updateDefault', callback, { params: { addressId: addressId } })
    },

    // 搜索地区数据
    searchAddress(keywords, callback) {
        http.get(true, '/serviceAddress/searchAddress', callback, {
            params: {
                keyword: keywords
            }
        })
    },

    // 分页查询余额金额
    pageBalance(pagination, callback) {
        http.page(true, '/memberBill/list', pagination, callback)
    },

    // 查询充值模板
    getRechargeTemplate(callback) {
        http.get(true, '/charge/templateList', callback)
    },

    // 支付宝充值
    alipayRecharge(params, callback) {
        params.pay_type = 2
        http.post(true, '/charge', params, callback)
    },

    // 微信支付充值
    wechatRecharge(params, callback) {
        params.pay_type = 3
        http.post(true, '/charge', params, callback)
    },


    // 易
    //首页
    homeData(params, callback) {
        http.get(true, '/main', callback, params)
    },

    //搜索服务
    serviceSearch(params, callback) {
        http.get(true, '/service/search', callback, params)
    },

    //全部服务列表
    serviceMenuList(params, callback) {
        http.get(true, '/service/menuList', callback, params)
    },

    // 易
    //首页
    homeData(params, callback) {
        http.get(true, '/main', callback, params)
    },

    //搜索服务
    serviceSearch(params, callback) {
        http.get(true, '/service/search', callback, params)
    },

    //全部服务列表
    serviceMenuList(params, callback) {
        http.get(true, '/service/menuList', callback, params)
    },

    //二级服务列表
    serviceList(params, callback) {
        http.get(true, '/service/list', callback, params)
    },

    //二级服务详情
    serviceDetail(params, callback) {
        http.get(true, '/service/detail', callback, params)
    },

    //二级服务评价列表
    evaluateList(params, callback) {
        http.get(true, '/evaluate/list', callback, params)
    },

    //我的优惠卷
    userCoupon(params, callback) {
        http.get(true, '/userCoupon/list', callback, params)
    },

    //确认订单
    serveConfirmOrder(params, callback) {
        http.get(true, '/serviceOrder/preOrder', callback, params)
    },

    //分享的新人列表
    userMyShared(params, callback) {
        http.get(true, '/user/myShared', callback, params)
    }





}