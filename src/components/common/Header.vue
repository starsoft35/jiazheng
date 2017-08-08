<template>
    <div class="header">
    <div class="headPart">
        <div class="headCont">
            <a @click="goBack" v-if="!hiddenBack">
                <span class="fl"></span>
            </a>
            <p>{{title}}</p>
        </div>
    </div>
    <div class="blank"></div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'back'],
        data: function () {
            return {
                hiddenBack: false
            }
        },
        created: function() {
            if (this.back === 'hidden') {
                this.hiddenBack = true
            }
        },
        methods: {
            goBack: function () {
                if (!this.back) {
                    this.$router.go(-1)
                } else {
                    this.$router.push(this.back)
                }
            }
        }
    }
</script>

<style scoped>
    .headPart{
        width: 100%;
        height: 0.92rem;
        background: url("../../../static/banner.png") repeat-y top center;
        background-size: 100%;
        overflow: hidden;
        position: fixed;
    }
    .headCont{
        width: 7rem;
        height: 0.32rem;
        margin: 0.25rem;
    }
    .headCont a{
        display: block;
    }
    .headCont span{
        color: #FFFFFF;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../static/return.png");
        background-size: 100% 100%;
    }
    .headCont p{
        height: 0.32rem;
        color: #FFFFFF;
        font-size: 0.32rem;
    }
    .blank {
        height: .92rem;
    }
</style>