<template>
    <div class="bing-mobile">
        <Header title="手机号绑定" hidden-bg="true"></Header>

        <div class="container">
            <div class="row">
                <label>
                    <input type="number" name="mobile" v-model="mobile" placeholder="手机号码">    
                </label>
            </div>
            <div class="row">
                <div class="captcha-btn" :class="{disable: !enableSend}" @click="sendCaptcha">获取验证码</div>
                <label>
                    <input type="number" name="captcha" v-model="captcha" placeholder="验证码">    
                </label>
            </div>
        </div>

        <div class="btn-bind" :class="{disable: !enableBind}" @click="bindMobile">绑定</div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                mobile: '', 
                captcha: '',
                registerToken: '',
                isMobile: false,
                enableBind: false,
                enableSend: false,
                captchaLabel: '获取验证码'
            }
        },
        methods: {
            // 绑定
            bindMobile() {
                if (!this.enableBind) {
                    return
                }
                if (!this.isMobile) {
                    Toast({
                        message: '请输入正确的手机号码',
                        position: 'bottom'
                    })
                    return
                }
                let self = this
                let oauthInfo = this.$storage.get('oauthInfo')
                this.$api.wechatRegister({
                    captcha: self.captcha,
                    avatar: oauthInfo.avatar,
                    nickname: oauthInfo.nickname,
                    openid: oauthInfo.unionid,
                    registerToken: self.registerToken
                }, function(response) {
                    let accessToken = response.result.accessToken
                    self.$token.refreshToken(
                        accessToken.access_token, 
                        accessToken.refresh_token, 
                        accessToken.expire_time)

                    self.$storage.set('role', response.result.role)
                    let redirectURI = '/ucenter'
                    if (self.$storage.get('history_url')) {
                        redirectURI = self.$storage.get('history_url')
                        self.$storage.remove('history_url')
                    }
                    self.$router.replace(redirectURI)
                })
            },

            // 发送验证码
            sendCaptcha() {
                if (!this.enableSend) {
                    return
                }
                if (!this.isMobile) {
                    Toast({
                        message: '请输入正确的手机号码',
                        position: 'bottom'
                    })
                    return
                }
                let self = this
                let seconds = 60
                function countdown() {
                    setTimeout(function() {
                        seconds--
                        if (seconds > 0) {
                            self.captchaLabel = '重新获取('+ seconds +')'
                        } else {
                            self.captchaLabel = '获取验证码'
                            self.enableSend = true
                        }
                        if (seconds >= 1) {
                            countdown()
                        }
                    }, 1000)
                }
                this.$api.sendRegisterCaptcha(this.mobile, function(response) {
                    self.captcha = response.result.code
                    self.registerToken = response.result.register_token
                    self.enableSend = false
                    countdown()
                })
            }
        },
        watch: {
            mobile(value, old) {
                if (value && value.length === 11) {
                    this.isMobile = true
                    this.enableSend = true
                } else {
                    this.isMobile = false
                    this.enableSend = false
                }
            },
            captcha(value, old) {
                if (value && value.length === 4) {
                    this.enableBind = true
                } else {
                    this.enableBind = false
                }
            }
        }
    }
</script>

<style scoped>
    .bing-mobile {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #FFF;
    }
    .container {
        margin-top: 1.5rem;
    }
    .container .row {
        width: 6rem;
        margin: 0 auto;
        padding: .02rem 0;
        border-bottom: 1px solid #258ef3;
        text-align: left;
    }
    .container .row .captcha-btn {
        color: #666;
        font-size: .28rem;
        float: right;
        border-left: 1px solid #258ef3;
        padding: .1rem .2rem;
        height: .32rem;
        margin: .12rem 0;
        line-height: .32rem;
    }
    .container .row .captcha-btn.disable {
        color: #CCC;
    }
    .container .row label {
        width: 100%;
        display: block;
    }
    .container .row input {
        margin: 0 auto;
        border: 0;
        color: #666;
        padding: .22rem 0 .22rem .1rem;
        font-size: .28rem;
        box-sizing: border-box;
        width: 4rem;
    }
    .btn-bind {
        background: #258ef3;
        width: 6rem;
        height: .8rem;
        margin: 1rem auto 0;
        box-sizing: border-box;
        border-radius: .8rem;
        font-size: .3rem;
        color: #FFF;
        line-height: .8rem;
    }
    .btn-bind.disable {
        background: #CCC;
    }
</style>