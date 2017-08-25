<template>
    <div class="ucenter-container">
        <!-- <Header title="" back="hidden"></Header> -->
        <div class="header">
            <div class="user" @click="toProfile">
                <div class="set">></div>
                <div class="avatar">
                    <img :src="avatar" alt="avatar">
                </div>
                <div class="info">
                    <div class="name">{{nickname}}</div>
                    <div class="mobile">{{mobile}}</div>
                </div>
            </div>
            <div class="data">
                <div class="balance" @click="toBalance">
                    {{balance}}<span class="unit">元</span>
                    <p>余额</p>
                </div>
                
                <div class="coupon" @click="toCoupon">
                    {{parseInt(coupons)}}<span class="unit">张</span>
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
                <div class="badge" v-if="messageCount > 0">{{messageCount}}</div>
                <div class="title">我的消息</div>
            </router-link>
            <router-link to="/addresses/unSelect" class="item">
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
            <a :href="getHotline" class="item">
                <div class="arrow"></div>
                <img src="../../static/52@3x.png" alt="package">
                <div class="label">{{hotline}}</div>
                <div class="title">联系客服</div>
            </a>
            <router-link to="/aboutus" class="item">
                <div class="arrow"></div>
                <img src="../../static/53@3x.png" alt="package">
                <div class="title">关于我们</div>
            </router-link>
        </div>

        <div class="menu-container" v-if="roles.length > 1">
            <div class="item" @click="toggleRole">
                <div class="arrow"></div>
                <img src="../../static/54@3x.png" alt="package">
                <div class="label">用户版</div>
                <div class="title">角色切换</div>
            </div>
        </div>
        <Menu actived="four"></Menu>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                roles: [],
                messageCount: 0, // 消息数量
                nickname: '',   // 头像
                mobile: '',     // 昵称
                avatar: '../../static/moren@3x.png',     // 头像
                balance: 0.00,  // 余额
                coupons: 0,     // 优惠券数量
                hotline: ''     // 热线电话
            }
        },
        computed: {
            getHotline() {
                return 'tel:' + this.hotline
            }
        },
        created: function() {
            var self = this
            this.$api.findUserInfo(function (response) {
                self.balance = parseFloat(response.result.balance).toFixed(2)
                if (response.result.headImage) {
                    self.avatar = response.result.headImage    
                }
                self.coupons = response.result.coupons
                if (response.result.nickName) {
                    self.nickname = response.result.nickName    
                }
                if (response.result.phone) {
                    self.mobile = response.result.hidePhone    
                }
                self.hotline = response.result.linkPhone
                self.messageCount = response.result.noticeNum
                self.$storage.set('aboutus', response.result.aboutUs)
                self.roles = response.result.roles
                if (self.roles.length > 1) {
                    for (let i in self.roles) {
                        if (self.roles[i].isCurrent == 1 && self.roles[i].roleName == '工人版') {
                            self.$router.push('/worker/ucenter')
                        }
                    }
                }
                self.$storage.set('role', 1)
            })
        },
        methods: {
            // 跳转余额
            toBalance() {
                this.$router.push('/balance')
            },
            // 跳转优惠券
            toCoupon() {
                this.$router.push('/coupons')
            },
            // 跳转个人中心
            toProfile() {
                this.$router.push('/profile')
            },
            // 切换角色
            toggleRole() {
                let self = this
                this.$api.toggleRole(function(response) {
                    if (response.result.role == 2) {
                        self.$router.push('/worker/ucenter')
                    }
                });
            }
        }
    }
</script>

<style scoped>
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
        color: #ccc;
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