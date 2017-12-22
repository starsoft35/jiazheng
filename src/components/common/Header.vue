<template>
    <div class="header">
    <div class="headPart"  :class="{nonebg: !showBg}">
        <div class="headCont">
            <div class="operation" @click="operationAction" v-if="operation">{{operation}}</div>
            <div @click="goBack" class="back" v-if="!hiddenBack">
                <span class="fl"></span>
            </div>
            <p class="right">{{title}}</p>
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
                    this.$router.go(-1)
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
        background: #2d92f4;
        background-size: 100%;
        overflow: hidden;
        position: fixed;
        z-index: 40;
        left: 0;
        top: 0;
    }
    .headPart.nonebg {
        background: none;
    }
    .headCont{
    	position: absolute;
    	left: 0;
    	top: 0;
        width: 100%;
        height: 100%;
    }
    .headCont div.back{
    	position: absolute;
    	width: 0.92rem;
    	height: 0.92rem;
        left: 0;
        top:0;
        z-index: 60;
    }
    .headCont div.back span{
        color: #FFFFFF;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../static/return.png");
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .headPart.nonebg .headCont span {
        background: url("../../../static/left_arrow.png");
        background-size: 100% 100%;
    }
    .headPart.nonebg .headCont p {
        color: #444;
    }
    .headCont p{
    	position: absolute;
    	width: 100%;
    	height: 100%;
        color: #FFFFFF;
        font-size: 0.32rem;
        left: 0;
        top: 0;
        line-height: 0.92rem;
        z-index: -1;
    }
    .operation {
        position: absolute;
        right: 0;
        top: 0;
        height: 0.92rem;
        line-height: 0.92rem;
        z-index: 60;
        color: #fff;
        padding: 0 0.2rem;
    }
    .menu-blank {
        height: .92rem;
    }
    
</style>