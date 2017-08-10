<template>
    <div class="login">
        <Header title="快捷登录" hidden-bg="true"></Header>

        <div class="container">
            <div class="row">
                <label>
                    <input type="tel" name="mobile" v-model="login.mobile" placeholder="手机号码">    
                </label>
            </div>
            <div class="row">
                <div class="captcha-btn" @click="sendCaptcha" :class="{active: isMobile && enableSend}">{{captchaLabel}}</div>
                <label>
                    <input type="tel" name="captcha" v-model="login.captcha" placeholder="验证码">    
                </label>
            </div>
        </div>
        <div class="rule" :class="{active: isAgree}" @click="toggleAgreementStatus">我以阅读并同意“全城家政使用条款”</div>

        <div class="btn-login" :class="{disable: !isAgree}" @click="mobileLogin">登录</div>

        <div class="quick-login">
            <div class="title">第三方快捷登录</div>
            <div class="channel-container">
                <div class="channel">
                    <img src="../../static/41@3x.png" alt="微信登录">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                isAgree: false,
                isMobile: false,
                enableSend: false,
                captchaLabel: '获取验证码',
                login: {
                    mobile: '',
                    captcha: '',
                    registerToken: '',
                    registrationId: '1111'   
                }
            }
        },
        created () {
            
        },
        methods: {
            // 切换注册协议状态
            toggleAgreementStatus(e) {
                this.isAgree = !this.isAgree
            },

            // 获取验证吗
            sendCaptcha() {
                if (!this.isMobile) {
                    return
                }
                if (!this.enableSend) {
                    return
                }

                var self = this
                var seconds = 60
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

                // 发送短信验证码
                this.$api.sendRegisterCaptcha(this.login.mobile, function (response) {
                    self.login.registerToken = response.result.register_token
                    self.enableSend = false
                    self.login.captcha = response.result.code
                    countdown()
                })
            },

            // 登录
            mobileLogin() {
                if (!this.isAgree) {
                    return
                }
                if (!this.login.mobile)  {
                    Toast({
                        message: '请输入手机号码',
                        position: 'bottom'
                    })
                    return
                }
                if (!this.login.captcha) {
                    Toast({
                        message: '请输入验证码',
                        position: 'bottom'
                    })
                    return
                }
                var self = this

                this.$api.login(this.login, function (response) {
                    // 保存访问凭证
                    var accessToken = response.result.accessToken
                    self.$token.refreshToken(
                        accessToken.access_token, 
                        accessToken.refresh_token, 
                        accessToken.expire_time)

                    // 跳转
                    self.$router.replace(self.$storage.get('history_url'))
                })
            }
        },
        watch: {
            'login.mobile': function(value, old) {
                if (value && value.length === 11) {
                    this.isMobile = true
                    this.enableSend = true
                } else {
                    this.isMobile = false
                    this.enableSend = false
                }
            }   
        }
    }
</script>

<style scoped>
    .login {
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
        color: #ccc;
        font-size: .28rem;
        float: right;
        text-align: center;
        border-left: 1px solid #258ef3;
        padding: .1rem .2rem;
        width: 1.6rem;
        height: .32rem;
        margin: .12rem 0;
        line-height: .32rem;
    }
    .container .row .captcha-btn.active {
        color: #666;
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
        width: 3.8rem;
    }
    .rule {
        box-sizing: border-box;
        width: 6rem;
        margin: .5rem auto 1rem;
        color: #666;
        font-size: .28rem;
        text-align: left;
        background: url("../../static/36@3x.png") no-repeat left center;
        background-size: .32rem;
        padding-left: .45rem;
    }
    .rule.active {
        background: url("../../static/35@3x.png") no-repeat left center;
        background-size: .32rem;
    }
    .btn-login {
        background: #258ef3;
        width: 6rem;
        height: .8rem;
        margin: 0 auto;
        box-sizing: border-box;
        border-radius: .8rem;
        font-size: .3rem;
        color: #FFF;
        line-height: .8rem;
    }
    .btn-login.disable {
        background: #CCC;
    }
    .quick-login {
        position: fixed;
        bottom: 0;
        left: 0;
        /*margin-top: 1.5rem;*/
        width: 100%;
        height: 2.5rem;
    }
    .quick-login .title {
        font-size: .28rem;
        color: #999;
        position: relative;
    }
    .quick-login .title:before, .quick-login .title:after {
        content: '';
        position: absolute;
        top: 50%;
        background: #ccc;
        width: 1.6rem;
        height: 1px;
    }
    .quick-login .title:before {
        left: .75rem;
    } 
    .quick-login .title:after {
        right: .75rem;
    }
    .quick-login .channel {
        margin-top: .5rem;
    }
    .quick-login .channel img {
        width: 1rem;
        margin: 0 .2rem;
    }
</style>