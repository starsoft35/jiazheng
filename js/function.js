import axios from 'axios'
import querystring from 'querystring'
import storage from '@/api/storage'

(function(window, axios, storage) {

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

    // 上传地理位置
    window.uploadLocation = function(params) {
        let location = JSON.parse(params)

        // 判定是否为工人
        if (storage.get('role') != 2) {
            return
        }

        // 上传位置
        let accessToken = getAccessToken()
        if (!accessToken) {
            console.error('未登录')
            return
        }
        axios.post(process.env.API_HOST + '/location/add?access_token=' + accessToken, querystring.stringify({
            latitude: location.latitude,
            longitude: location.longitude
        })).then(response => {
            console.info(response)
        })
    }

}(window, axios, storage))