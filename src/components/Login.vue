<template>
    <div class="login">
        <Header title="快捷登录" hidden-bg="true"></Header>

        <div class="container">
            <div class="row">
                <label>
                    <input type="number" name="mobile" placeholder="手机号码">    
                </label>
            </div>
            <div class="row">
                <div class="captcha-btn">获取验证码</div>
                <label>
                    <input type="number" name="captcha" placeholder="验证码">    
                </label>
            </div>
        </div>
        <div class="rule">我以阅读并同意“全城家政使用条款”</div>

        <div class="btn-login">登录</div>

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
    export default {

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
        border-left: 1px solid #258ef3;
        padding: .1rem .2rem;
        height: .32rem;
        margin: .12rem 0;
        line-height: .32rem;
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