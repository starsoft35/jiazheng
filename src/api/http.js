import axios from 'axios'
import querystring from 'querystring'

// 配置axios
var instance = axios.create({
    baseURL: process.env.API_HOST,
    timeout: 5000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
// 返回拦截器
instance.interceptors.response.use(function (response) {
    if (!response.status === 200) {
        // 请求失败
        alert('服务器忙')
    }
    if (response.data.err_code != 0) {
        alert(response.data.err_msg)
    }
    return response
}, function (error) {
    return Promise.reject(error)
})

// GET请求
function getRequest(url, callback) {
    instance.get(url).then(function (response) {
        typeof callback === 'function' && callback(response.data)
    }).catch(function (error) {
        Promise.reject(error)
    })
}

// POST请求
function postRequest(url, data, callback) {
    instance.post(url, querystring.stringify(data)).then(function (response) {
        typeof callback === 'function' && callback(response.data)
    }).catch(function (error) {
        Promise.reject(error)
    })
}

export default {
    get: getRequest,
    post: postRequest
}