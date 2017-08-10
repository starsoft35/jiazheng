import axios from 'axios'
import querystring from 'querystring'
import token from './accessToken'
import router from '../router'
import storage from './storage'
import { MessageBox, Toast } from 'mint-ui'


// 配置axios
var instance = axios.create({
    baseURL: process.env.API_HOST,
    timeout: 5000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
instance.interceptors.request.use(function(config) {
    return config
}, function(error) {
    return Promise.reject(error)
})

// 返回拦截器
instance.interceptors.response.use(function(response) {
    if (!response.status === 200) {
        // 请求失败
        Toast({
            message: '服务器繁忙，请重试',
            position: 'bottom'
        });
    }
    if (response.data.err_code != 0) {
        if ('20002' === response.data.err_code) {
            // 登录凭证失效
            Toast({
                message: '登录已过期',
                position: 'bottom'
            })
            storage.set('history_url', router.history.current.path)
            router.replace('/login')
        }
    }
    return response
}, function(error) {
    return Promise.reject(error)
})


// 封装参数
function buildURL(url, needToken) {
    if (!needToken) {
        return url
    }
    var accessToken = token.getAccessToken()
    if (!accessToken) {
        return false
    }
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + "access_token=" + accessToken
}

export default {
    /**
     * GET请求
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} callback  回调函数
     */
    get(needToken, url, callback) {
        url = buildURL(url, needToken)

        if (!url) {
            return
        }

        instance.get(url).then(function(response) {
            if (typeof callback === 'function' && response.data.err_code === 0) {
                callback(response.data)
            }
        }).catch(function(error) {
            Promise.reject(error)
        })
    },

    /**
     * POST请求
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     * @param {*} callback 回调函数
     */
    post(needToken, url, params, callback) {
        url = buildURL(url, needToken)

        if (!url) {
            return
        }

        instance.post(url, querystring.stringify(params)).then(function(response) {
            if (typeof callback === 'function' && response.data.err_code === 0) {
                callback(response.data)
            }
        }).catch(function(error) {
            Promise.reject(error)
        })
    }
}