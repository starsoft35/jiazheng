import storage from './storage'
import moment from 'moment'
import api from './api'

export default {
    // 获取accessToken
    getAccessToken () {
        // 从storage中查询token信息
        var token = storage.get('token')
        
        // 检查accessToken是否过期
        if (token.expired <= moment().unix()) {
            // 已过期，置换accessToken
            
        }

        return token.accessToken
    },

    // 保存token信息
    refresh (accessToken, refreshToken, expireTime) {
        storage.set('token', {
            accessToken: accessToken,  // 访问凭证
            refreshToken: refreshToken, // 置换凭证
            expired: moment().unix() + parseInt(expireTime) - 10 // 有效时间 = 当前时间戳 + 过期时间（秒）
        })
    }
}