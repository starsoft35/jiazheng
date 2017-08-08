<template>
    <div class="recharge-container">
        <Header title="充值"></Header>

        <div class="template">
            <div class="item">100元</div>
            <div class="item">200元</div>
            <div class="item active">500元</div>
            <div class="item">800元</div>
            <div class="item">1000元</div>
            <div class="item">其他数额</div>
            <div class="clear"></div>
        </div>

        <div class="total">
            应付：¥<span>500.00</span>
        </div>
        <div class="button-container">
            <div class="button">微信支付</div>
            <div class="button green">支付宝支付</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .template {
        background: #FFF;
        padding: .3rem .1125rem;
    }
    .template .item {
        border: 1px solid #ccc;
        padding: .26rem 0;
        box-sizing: border-box;
        width: 2.2rem;
        margin: .1125rem;
        float: left;
        border-radius: .1rem;
        font-size: .26rem;
        color: #888;
    }
    .template .item.active {
        color: #2d92f4;
        border: 2px solid #2d92f4;
    }
    .clear {
        clear: both;
    }
    .total {
        background: #FFF;
        border-top: 1px solid #eee;
        padding: .26rem;
        font-size: .26rem;
        color: #666;
        text-align: left;
    }

    .button-container {
        margin-top: 1.5rem;
    }
    .button {
        margin: .5rem .5rem;
        height: .6rem;
        padding: .12rem;
        font-size: .28rem;
        background: #2d92f4;
        color: #FFF;
        border-radius: .6rem;
        line-height: .6rem;
    }
    .button.green {
        background-color: #22AC38;
    }
</style>