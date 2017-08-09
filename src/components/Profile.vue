<template>
    <div class="profile">
        <Header title="个人中心"></Header>

        <div class="container">
            <div class="row avatar">
                <label>
                    <div class="arrow"></div>
                    <img src="../../static/tmp/avatar.jpg" alt="avatar">
                    <input type="file" class="avatar-input" name="avatar">
                    头像
                    <div class="clear"></div>
                </label>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <label>
                    <div class="arrow"></div>
                    <input type="text" name="nickname" value="" placeholder="昵称">
                    昵称
                </label>
            </div>
            <div class="row">
                <label>
                    <div class="arrow"></div>
                    <input type="number" name="mobile" value="" placeholder="手机号码绑定">
                    手机号码
                </label>
            </div>
        </div>
        
        <div class="container logout">
            <div class="row">
                退出登录
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .container {
        padding-left: .22rem;
        background: #FFF;
        margin-top: .4rem;
    }
    .container .row:first-child {
        border-top: 0;   
    }
    .clear {
        clear: both;
    }
    .row {
        padding: .26rem .22rem .26rem 0;
        text-align: left;
        color: #666;
        border-top: 1px solid #EEE;
        font-size: .26rem;
    }
    .row.avatar label {
        height: 1rem;
        line-height: 1rem;
        display: block;
    }
    .row img {
        float: right;
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
        margin-right: .2rem;
    }
    .row input {
        font-size: .26rem;
        float: right;
        text-align: right;
        width: 3rem;
        padding-right: .1rem;
        color: #666;
        border: 0;
    }
    .row .avatar-input {
        opacity: 0;
        float: right;
    }
    .row .arrow {
        float: right;
    }
    .row .arrow:before {
        content: '\003e';
        color: #999;
        font-size: .3rem;
    }

    .logout {
        margin-top: 1.5rem;
    }
    .logout .row {
        text-align: center;
    }

</style>