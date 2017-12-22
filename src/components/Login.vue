<template>
    <div class="login">
        <Header title="快捷登录"></Header>

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
        <div class="rule" :class="{active: isAgree}" >
        	<span class="agree" :class="{active: isAgree}" @click="toggleAgreementStatus"></span>
        	<span class="agree-text" @click="goAgreement">我以阅读并同意“全城到家使用条款”</span>
        </div>

        <div class="btn-login" :class="{disable: !isAgree}" @click="mobileLogin">登录</div>

        <div class="quick-login" v-show="showBottom">
            <div class="title">第三方快捷登录</div>
            <div class="channel-container">
                <div class="channel">
                    <img src="../../static/41@3x.png" alt="微信登录" @click="wechatLogin">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
	import $ from 'jquery'
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
                },
                
                showBottom: true,
                seconds: 0
            }
        },
        created () {
            
        },
        activated() {
			let self = this
            var winHeight = $(window).height();   
			$(window).resize(function(){
			    var thisHeight=$(this).height();
			    if(winHeight - thisHeight >40){
			        self.showBottom = false
			    }else{
			        self.showBottom = true
			    }
			});
            if (this.$route.query.oauth === '1') {
                let info = this.$storage.get('oauthInfo')
                this.$api.wechatLogin(info.unionid, function(response) {
                	console.log(response)
                    self.loginSuccess(response.result)
                }, function(response) {
                    if (response.err_code == 2) {
                        self.$router.push('/bind/mobile')
                    }
                })
            }
		},
        beforeRouteEnter (to, from, next) {
	    	if(/agreement/g.test(from.fullPath)) {
	    		next()
	    	}else {
	    		next(vm=>{
	    			vm.isAgree = false
	                vm.isMobile = false
	                vm.enableSend = false
	                vm.captchaLabel = '获取验证码'
	                vm.login = {
	                    mobile: '',
	                    captcha: '',
	                    registerToken: '',
	                    registrationId: '1111'   
	                }
	                
	                vm.showBottom = true
			        
	        	})
	    	}
	    	
	    	
		},
        methods: {
            // 微信登录
            wechatLogin() {
                // 判断是否微信
                let self = this
                if (this.$common.isWeixin()) {
                    let info = this.$storage.get('oauthInfo')
                    if (!info) {
                        this.$weixin.authorize()
                        return
                    }
                    self.$api.wechatLogin(info.unionid, function(response) {
                    	console.log(response)
                        self.loginSuccess(response.result)
                    }, function(response) {
                        if (response.err_code == 2) {
                            self.$router.push('/bind/mobile')
                        }
                    })
                    return
                }
                // oauth认证
                this.$bridge.wechatOAuth().then(response => {
                    let info = JSON.parse(response)
                    self.$api.wechatLogin(info.unionid, function(response) {
                        self.loginSuccess(response.result)
                    }, function(response) {
                        if (response.err_code == 2) {
                            self.$storage.set('oauthInfo', info)
                            self.$router.push('/bind/mobile')
                        }
                    })
                })
            },

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

                let self = this
                this.seconds = 60
                function countdown() {
                    setTimeout(function() {
                        self.seconds--
                        console.log(self.seconds)
                        if (self.seconds > 0) {
                            self.captchaLabel = '重新获取('+ self.seconds +')'
                        } else {
                            self.captchaLabel = '获取验证码'
                            self.enableSend = true
                        }
                        if (self.seconds >= 1) {
                            countdown()
                        }
                    }, 1000)
                }

                // 发送短信验证码
                this.$api.sendRegisterCaptcha(this.login.mobile, function (response) {
                    self.login.registerToken = response.result.register_token
                    self.enableSend = false
                    process.env.AUTO_INPUT_CAPTHA && (self.login.captcha = response.result.code)
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
                    // 跳转
                    self.loginSuccess(response.result)
                })
            },

            loginSuccess(result) {
                let self = this
                let accessToken = result.accessToken
                self.$token.refreshToken(accessToken.access_token, accessToken.refresh_token, accessToken.expire_time)

                self.$storage.set('role', result.role)
                self.$storage.set('currRole', result.role)

                let redirectURI = '/first'
                this.$router.replace(redirectURI)
            },
            goAgreement() {
            	this.$router.push('agreement')
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
        padding: .1rem 0;
        width: 1.6rem;
        height: .32rem;
        margin: .12rem 0;
        line-height: .32rem;
        width: 2.2rem;
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
        width: 3rem;
    }
    .rule {
        box-sizing: border-box;
        width: 6.4rem;
        margin: .3rem auto 0.8rem;
        color: #666;
        font-size: .28rem;
        text-align: left;
        
        padding-left: .7rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        position: relative;
    }
    .rule .agree{
    	width: 0.7rem;
    	height: 0.78rem;
    	position: absolute;
    	left: 0;
    	top: 0;
    	background: url("../../static/36@3x.png") no-repeat 0.2rem center;
        background-size: .32rem;
    }
    .rule .agree.active{
        background-image: url("../../static/35@3x.png");
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