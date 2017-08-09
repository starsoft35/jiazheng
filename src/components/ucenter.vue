<template>
    <div class="ucenter-container">
        <!-- <Header title="" back="hidden"></Header> -->
        <div class="header">
            <div class="user" @click="toProfile">
                <div class="set">
                    >
                </div>
                <div class="avatar">
                    <img src="../../static/tmp/avatar.jpg" alt="avatar">
                </div>
                <div class="info">
                    <div class="name">我就是大晴天</div>
                    <div class="mobile">18501701760</div>
                </div>
            </div>
            <div class="data">
                <div class="balance" @click="toBalance">
                    100<span class="unit">元</span>
                    <p>余额</p>
                </div>
                
                <div class="coupon" @click="toCoupon">
                    6<span class="unit">张</span>
                    <p>优惠券</p>
                </div>
                <div class="split"></div>
            </div>
        </div>

        <div class="menu-container">
            <router-link to="/balance" class="item">
                <div class="arrow"></div>
                <img src="../../static/48@3x.png" alt="package">
                <div class="title">我的钱包</div>
            </router-link>
            <router-link to="/message" class="item">
                <div class="arrow"></div>
                <img src="../../static/49@3x.png" alt="package">
                <div class="badge">9</div>
                <div class="title">我的消息</div>
            </router-link>
            <router-link to="/addresses" class="item">
                <div class="arrow"></div>
                <img src="../../static/50@3x.png" alt="package">
                <div class="title">地址管理</div>
            </router-link>
        </div>

        <div class="menu-container">
            <router-link to="/login" class="item">
                <div class="arrow"></div>
                <img src="../../static/51@3x.png" alt="package">
                <div class="title">分享有礼</div>
            </router-link>
            <a href="tel:400-800-1236" class="item">
                <div class="arrow"></div>
                <img src="../../static/52@3x.png" alt="package">
                <div class="label">400-800-1236</div>
                <div class="title">联系客服</div>
            </a>
            <router-link to="/aboutus" class="item">
                <div class="arrow"></div>
                <img src="../../static/53@3x.png" alt="package">
                <div class="title">关于我们</div>
            </router-link>
        </div>

        <div class="menu-container">
            <router-link to="/address" class="item">
                <div class="arrow"></div>
                <img src="../../static/54@3x.png" alt="package">
                <div class="label">工人版</div>
                <div class="title">角色切换</div>
            </router-link>
        </div>
        <Menu actived="four"></Menu>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data: function() {
            return {

            }
        },
        created: function() {
            console.info(moment().unix())
        },
        methods: {
            toBalance: function() {
                this.$router.push('/balance')
            },
            toCoupon: function() {
                this.$router.push('/coupons')
            },
            toProfile: function() {
                this.$router.push('/profile')
            }
        }
    }
</script>

<style scoped>
    .ucenter-container {
        padding-bottom: 1.3rem;
    }
    .menu-container {
        background: #FFF;
        margin-top: .35rem;
        padding-left: .3rem;
        font-size: .26rem;
    }
    .menu-container .item {
        color: #666;
        display: block;
        text-align: left;
        padding: .25rem .3rem .25rem .1rem;
        border-top: 1px solid #EEE;
    }
    .menu-container .item:first-child {
        border-top: 0;
    }
    .menu-container .item img {
        display: block;
        float: left;
        width: .36rem;
    }
    .menu-container .item .title {
        padding-left: .6rem;   
    }
    .menu-container .item .arrow {
        line-height: .35rem;
        float: right;
    }
    .menu-container .item .arrow:before {
        content: '\003e';
        color: #999;
        font-size: .3rem;
    }
    .menu-container .item .label {
        float: right;
        margin-right: .2rem;
    }
    .menu-container .item .badge {
        float: right;
        box-sizing: border-box;
        padding: 0 .1rem;
        margin-right: .2rem;
        min-width: .35rem;
        height: .35rem;
        border-radius: .35rem;
        line-height: .38rem;
        color: #FFF;
        background-color: #f71414;
        text-align: center;
    }

    .header {
        background-color: #FFF;
    }
    .header .set {
        float: right;
        padding: .45rem .2rem .5rem .5rem; 
        font-size: .4rem;
    }
    .header .user {
        box-sizing: border-box;
        height: 3.402rem;
        padding-top: 1rem;
        color: #FFF;
        background: #FFF url('../../static/47@3x.png') no-repeat top center;
        background-size: 100%;
    }
    .user .info {
        padding: .25rem 0 0 2.2rem;
        text-align: left;
    }
    .user .name {
        font-size: .32rem;
    }
    .user .mobile {
        font-size: .26rem;
        background: url("../../static/mobile@3x.png") no-repeat left center;
        background-size: .14rem;
        padding-left: .25rem;
    }
    .avatar {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 1.4rem;
        background-color: #59B0F6;
        margin-left: .25rem;
        padding: .13rem;
        float: left;
    }
    .avatar img {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 1.4rem;
    }
    .data {
        padding: .2rem 0 .05rem;
    }
    .data .balance,.coupon {
        font-size: .5rem;
        font-weight: 600;
        width: 3.75rem;
        float: left;
    }
    .data p {
        font-size: .22rem;
        color: #999;
    }
    .unit {
        font-size: .22rem;
        font-weight: 500;
    }
    .balance {
        color: #28AC37; 
    }
    .coupon {
        color: #F8B62D;
    }
    .data .split {
        height: .6rem;
        width: 0;
        margin: .2rem auto .3rem;
        border-right: 1px solid #dedede;
    }
</style>