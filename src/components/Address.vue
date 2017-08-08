<template>
    <div class="address-container">
        <Header title="编辑服务地址"></Header>

        <div class="container">
           <div class="row">
                <label>
                    <input type="text" name="nickname" value="" placeholder="请输入姓名">
                    联系人
                </label>
            </div>
            <div class="row">
                <label>
                    <input type="text" name="nickname" value="" placeholder="手机号码">
                    联系电话
                </label>
            </div>
            <div class="row">
                <label>
                    <div class="arrow"></div>
                    <input type="text" name="nickname" value="" placeholder="请输入您的小区或大厦、街道名称">
                    服务地址
                </label>
            </div>
            <div class="row">
                <textarea name="" id="" cols="30" rows="3" placeholder="请填写详细门牌地址~"></textarea>
            </div>
        </div>

        <div class="container default">
            <div class="switch"></div>
            设为默认地址
            <div class="remark">注：每次下单时会使用该地址</div>
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
        color: #666;
        font-size: .26rem;
        text-align: left;
    }
    .container.default {
        padding: .22rem;
    }
    .container.default .remark {
        margin-top: .22rem;
        font-size: .24rem;
        color: #ccc;
    }
    .container.default .switch {
        float: right;
    }
    .container .remark {
        color: #ccc;
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
    .row input {
        font-size: .26rem;
        float: right;
        text-align: right;
        width: 4.5rem;
        padding-right: .1rem;
        color: #666;
        border: 0;
    }
    .row textarea {
        width: 100%;
        font-size: .26rem;
        color: #666;
        border: 0;
    }
    .row .arrow {
        float: right;
    }
    .row .arrow:before {
        content: '\003e';
        color: #999;
        font-size: .3rem;
    }

</style>