<template>
    <div class="header">
    <div class="headPart"  :class="{nonebg: !showBg}">
        <div class="headCont">
            <div class="operation" @click="operationAction" v-if="operation">{{operation}}</div>
            <div @click="goBack" v-if="!hiddenBack">
                <span class="fl"></span>
            </div>
            <p>{{title}}</p>
        </div>
    </div>
    <div class="menu-blank" style="height: 0.92rem;"></div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }, 
            operation: {
                type: String,
                required: false
            }, 
            back: {
                type: String,
                required: false
            }, 
            hiddenBg: {
                type: String,
                required: false
            },
            action: {
                type: Function,
                required: false
            }
        },
        data: function () {
            return {
                hiddenBack: false,
                showBg: true
            }
        },
        created: function() {
            if (this.back === 'hidden') {
                this.hiddenBack = true
            }
            if (this.hiddenBg) {
                this.showBg = false;
            }
        },
        methods: {
            goBack() {
                if (!this.back) {
                    this.$router.back()
                } else {
                    this.$router.push(this.back)
                }
            },
            operationAction() {
                typeof this.action === 'function' && this.action()
            }
        }
    }
</script>

<style scoped>
    .header, .headPart {
        z-index: 30;
    }
    .headPart{
        width: 100%;
        height: 0.92rem;
        background: url("../../../static/banner.png") repeat-y top center;
        background-size: 100%;
        overflow: hidden;
        position: fixed;
        z-index: 40;
    }
    .headPart.nonebg {
        background: none;
    }
    .headCont{
        width: 7rem;
        height: 0.32rem;
        margin: 0.25rem;
    }
    .headCont div{
        display: block;
    }
    .headCont span{
        color: #FFFFFF;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../static/return.png");
        background-size: 100% 100%;
    }
    .headPart.nonebg .headCont span {
        background: url("../../../static/left_arrow.png");
        background-size: 100% 100%;
    }
    .headPart.nonebg .headCont p {
        color: #444;
    }
    .headCont p{
        height: 0.32rem;
        color: #FFFFFF;
        font-size: 0.32rem;
    }
    .operation {
        float: right;
        color: #FFF;
    }
    .menu-blank {
        height: .92rem;
    }
    
</style>