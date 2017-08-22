(function(window) {

    // 获取访问凭证
    window.getAccessToken = function() {
        let token = JSON.parse(window.localStorage.getItem('token'))
        if (token) {
            return token.accessToken
        }
        return false
    }


    // 跳转消息列表
    window.viewMessagePage = function(type) {
        if (type == 1) {
            // 跳转用户信息
            window.location.hash = '/message'
        } else if (type == 2) {
            // 跳转工人信息
            window.location.hash = '/workerMessage'
        }
    }

}(window))