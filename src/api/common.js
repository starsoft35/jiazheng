export default {
    // 判断是否微信
    isWeixin() {
        return window.navigator.userAgent.indexOf('MicroMessenger') > 0
    }
}