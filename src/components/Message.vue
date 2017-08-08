<template>
    <div class="message-container">
        <Header title="消息"></Header>

        <div class="none-message none">
            <div class="bg"></div>
            暂无消息
        </div>

        <div class="date">2017年8月2日</div>
        <div class="message">
            <div class="title">服务完成</div>
            <div class="content">你的订单已服务完成，可在我的订单中评价工人的施工质量及我们的服务</div>
        </div>
        <div class="date">2017年7月18日</div>
        <div class="message">
            <div class="title">订单排单成功</div>
            <div class="content">你的订单已经派遣了工人，如需联系，可在我的订单中电话联系。你的订单已经派遣了工人，如需联系，可在我的订单中电话联系</div>
        </div>
        <div class="date">2017年7月18日</div>
        <div class="message">
            <div class="title">订单排单成功</div>
            <div class="content">你的订单已经派遣了工人，如需联系，可在我的订单中电话联系。你的订单已经派遣了工人，如需联系，可在我的订单中电话联系</div>
        </div>
        <div class="date">2017年8月2日</div>
        <div class="message">
            <div class="title">服务完成</div>
            <div class="content">你的订单已服务完成，可在我的订单中评价工人的施工质量及我们的服务</div>
        </div>
        <div class="date">2017年7月18日</div>
        <div class="message">
            <div class="title">订单排单成功</div>
            <div class="content">你的订单已经派遣了工人，如需联系，可在我的订单中电话联系。你的订单已经派遣了工人，如需联系，可在我的订单中电话联系</div>
        </div>
        <div class="date">2017年7月18日</div>
        <div class="message">
            <div class="title">订单排单成功</div>
            <div class="content">你的订单已经派遣了工人，如需联系，可在我的订单中电话联系。你的订单已经派遣了工人，如需联系，可在我的订单中电话联系</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .message-container {
        font-size: .26rem;
        color: #666;
    }
    .none {
        display: none;
    }
    .none-message {
        margin: 2rem auto;
        font-size: .26rem;
        color: #ccc;
        width: 2rem;
        
        height: 2.5rem;
    }
    .none-message .bg {
        width: 100%;
        background: url("../../static/44@3x.png") no-repeat top center;
        background-size: 100%;
        height: 2rem;
    }
    .date {
        font-size: .22rem;
        color: #FFF;
        background: #999;
        padding: .05rem .25rem;
        display: inline-block;
        border-radius: .42rem;
        margin: .24rem auto;
    }
    .message {
        background: #FFF;
        border-radius: .15rem;
        padding: .2rem;
        margin: 0 .22rem .3rem;
        font-size: .26rem;
        text-align: left;
    }
    .message .title {
        font-size: .28rem;
        font-weight: 600;
        margin-bottom: .2rem;
    }
</style>