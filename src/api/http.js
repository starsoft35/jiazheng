import axios from 'axios'
import querystring from 'querystring'
import token from './accessToken'
import router from '../router'
import storage from './storage'
import { MessageBox, Toast } from 'mint-ui'


// 配置axios
let instance = axios.create({
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
        } else if (response.data.err_code == 2) {

        } else {
            Toast({
                message: response.data.err_msg,
                position: 'bottom'
            })
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
    let accessToken = token.getAccessToken()
    if (!accessToken) {
        return false
    }
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + "access_token=" + accessToken
}

// 封装分页
function buildPagination(url, pagination) {
    let pageURI = 'page=' + pagination.page + '&page_size=' + pagination.pageSize
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + pageURI
}

export default {
    /**
     * GET请求
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} callback  回调函数
     * @param {*} param 请求参数
     */
    get(needToken, url, callback, params) {
        url = buildURL(url, needToken)

        if (!url) {
            return
        }

        instance.get(url, params).then(function(response) {
            if (typeof callback === 'function' && response.data.err_code === 0) {
                callback(response.data)
            }
        }).catch(function(error) {
            Promise.reject(error)
        })
    },

    /**
     * 分页
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} pagination 分页参数
     * @param {*} callback 回调地址
     * @param {*} param 请求参数
     */
    page(needToken, url, pagination, callback, param) {
        this.get(needToken, buildPagination(url, pagination), callback, param)
    },

    /**
     * POST请求
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     * @param {*} callback 回调函数
     * @param {*} error 错误
     */
    post(needToken, url, params, callback, showToast, error) {
        url = buildURL(url, needToken)

        if (!url) {
            return
        }

        instance.post(url, querystring.stringify(params)).then(function(response) {
            if (typeof callback === 'function' && response.data.err_code === 0) {
                callback(response.data)
            } else if (typeof error === 'function' && response.data.err_code != 0) {
                error(response.data)
            }
            if (showToast && response.data.err_code === 0) {
                Toast({
                    message: typeof showToast === 'string' ? showToast : '操作成功',
                    position: 'bottom'
                })
            }
        }).catch(function(error) {
            Promise.reject(error)
        })
    },

    /**
     * 文件上传
     * 
     * @param {*} needToken 是否需要凭证
     * @param {*} url 地址
     * @param {*} formData 表单数据
     * @param {*} callback 回调
     * @param {*} showToast 显示提示
     */
    upload(needToken, url, formData, callback, showToast) {
        url = buildURL(url, needToken)

        if (!url) {
            return
        }

        instance.post(url, formData, {
            headers: {
                'Content-Type': 'multiple/form-data'
            }
        }).then(function(response) {
            if (typeof callback === 'function' && response.data.err_code === 0) {
                callback(response.data)
            }
            if (showToast && response.data.err_code === 0) {
                Toast({
                    message: typeof showToast === 'string' ? showToast : '上传成功',
                    position: 'bottom'
                })
            }
        }).catch(function(error) {
            Promise.reject(error)
        })


    }
}