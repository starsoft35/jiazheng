<template>
    <div class="address-list">
        <Header title="服务地址"></Header>
        
        <div class="address-container">
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default">
                        默认地址
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default active">
                        默认地址
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default">
                        默认地址
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default active">
                        默认地址
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default active">
                        默认地址
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <div class="mobile">18501701760</div>
                    <div class="consigee">联系人：张三三</div>
                    <div class="street">江苏省苏州市工业园区新平街388号腾飞苏州创新园塔楼A1-511</div>
                </div>
                <div class="operation">
                    <div class="edit">
                        删除
                    </div>
                    <div class="edit">
                        编辑
                    </div>
                    <div class="default active">
                        默认地址
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bottom">
            <router-link to="/address" class="button">添加服务地址</router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .address-container {
        margin-bottom: 1.5rem;
    }

    .address-container .item {
        margin-top: .3rem;
        background-color: #FFF;
        font-size: .26rem;
        text-align: left;
        color: #666;
    }
    .item .info {
        padding: .22rem;
    }
    .item .mobile {
        float: right;
    }
    .item .street {
        margin-top: .22rem;
    }
    .item .operation {
        border-top: 1px solid #EEE;
        padding: .22rem;
    }
    .operation .edit {
        float: right;
        margin-left: .4rem;
    }
    .operation .default {
        padding-left: .5rem;
        background: url("../../static/36@3x.png") no-repeat left center;
        background-size: .3rem;
    }
    .operation .default.active {
        background: url("../../static/35@3x.png") no-repeat left center;
        background-size: .3rem;
    }
    
  
    .bottom {
        width: 100%;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding-bottom: .3rem;
        background: #f5f5f9;
    }
    .button {
        display: block;
        height: .8rem;
        line-height: .8rem;
        margin: 0 .3rem;
        background-color: #258ef3;
        color: #FFF;
        border-radius: .8rem;
        font-size: .26rem;
    }
</style>