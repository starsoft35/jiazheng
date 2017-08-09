<template>
    <ul class="nav_bottm">
        <li :class="{'active':first.active}">
            <router-link to='/orderPart/orderPartOne'>
                <img :src="first.icon" alt="订单"/>
                <div>订单</div>
            </router-link>
        </li>
        <li :class="{'active':second.active}">
            <router-link to='/sendOrders/sendOrderLeft'>
                <img :src="second.icon" alt="派单"/>
                <div>派单</div>
            </router-link>
        </li>
        <li :class="{'active':third.active}">
            <router-link to='/workerMessage'>
                <img :src="third.icon" alt="消息"/>
                <div>消息</div>
            </router-link>
        </li>
        <li :class="{'active':four.active}">
            <router-link to='/mine'>
                <img :src="four.icon" alt="我的"/>
                <div>我的</div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['actived'],
        data: function () {
            return  {
                first: {
                    active: false,
                    icon: '@../../../static/16@2x.png'
                },
                second: {
                    active: false,
                    icon: '@../../../static/worker03.png'
                },
                third: {
                    active: false,
                    icon: '@../../../static/44@2x.png'
                },
                four: {
                    active: false,
                    icon: '@../../../static/17@3x.png'
                }    
            }
        },
        created: function () {
            if (this.actived == 'first') {
                this.first = {
                    active: true,
                    icon: '@../../../static/19@2x.png'
                }
            } else if (this.actived == 'second') {
                this.second = {
                    active: true,
                    icon: '@../../../static/worker07.png'
                }
            } else if (this.actived == 'third') {
                this.third = {
                    active: true,
                    icon: '@../../../static/49@3x.png'
                }
            } else if (this.actived == 'four') {
                this.four = {
                    active: true,
                    icon: '@../../../static/20@3x.png'
                }
            }
        }   
    }
</script>

<style scoped>
    /*底部导航*/
    .nav_bottm{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #FFFFFF;
        border-top: 1px solid #eee;
    }
    .nav_bottm li{
        width: 25%;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav_bottm a{
        display: block;
    }
    .nav_bottm img{

        width: 0.4rem;
        height: 0.4rem;
        display: block;
        margin:0.15rem 0.3rem 0.1rem 0.3rem ;
    }
    .nav_bottm div{
        width: 1rem;
        font-size: 0.2rem;
        color: #c7c7c7;
        text-align: center;
    }
    .nav_bottm .active div {
        color: #258ef3;
    }
</style>
