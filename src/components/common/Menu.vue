<template>
    <ul class="nav_bottm">
        <li>
            <router-link to='first'>
                <img src="../../../static/14@3x.png" alt="首页"/>
                <div style="color: #258ef3;">首页</div>
            </router-link>
        </li>
        <li>
            <router-link to='second'>
                <img src="../../../static/15@3x.png" alt="附近"/>
                <div>附近</div>
            </router-link>
        </li>
        <li>
            <router-link to='second'>
                <img src="../../../static/16@3x.png" alt="订单"/>
                <div>订单</div>
            </router-link>
        </li>
        <li>
            <router-link to='ucenter'>
                <img src="../../../static/17@3x.png" alt="我的"/>
                <div>我的</div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['active']
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
</style>