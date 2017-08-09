<template>
    <div class="bing-mobile">
        <Header title="手机号绑定" hidden-bg="true"></Header>

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

        <div class="btn-bind">绑定</div>
    </div>
</template>

<script>
    export default {

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
</style>