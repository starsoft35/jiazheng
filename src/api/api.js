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

    // 分页查询余额金额
<<<<<<< HEAD
    pageBalance(callback) {

    },
=======
    pageBalance(pagination, callback) {
        http.page(true, '/memberBill/list', pagination, callback)
    }
>>>>>>> 70bf3e7315c70423b17c1a403aba18d64378043b




    // 易
	//首页
	homeData(params,callback) {
		http.get(true, '/main', callback, params)
	},
	
	//搜索服务
	serviceSearch(params,callback) {
		http.get(true, '/service/search', callback, params)
	},
	
	//全部服务列表
	serviceMenuList(params,callback) {
		http.get(true, '/service/menuList', callback, params)
	},
	
	//二级服务列表
	serviceList(params,callback) {
		http.get(true, '/service/list', callback, params)
	},
	
	//二级服务详情
	serviceDetail(params,callback) {
		http.get(true, '/service/detail', callback, params)
	},
	
	//二级服务评价列表
	evaluateList(params,callback) {
		http.get(true, '/evaluate/list', callback, params)
	},
	
	//我的优惠卷
	userCoupon(params,callback) {
		http.get(true, '/userCoupon/list', callback, params)
	}





}