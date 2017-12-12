<template>
    <div class="aboutus-container">
        <Header title="关于我们"></Header>
        <div class="content">
            全城到家服务是一款专注于家庭生活服务的APP，其中业务涵盖家政、安装、维修、保姆、月嫂、洗衣、搬家等各类生活服务，让用户最快最准最全的找到所需服务信息，自主选择服务形式及付款模式，并对结果做出客观的评价，更人性、更智能、更可控。
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aboutus: ''
            }
        },
        created() {
//          this.aboutus = this.$storage.get('aboutus')
        }
    }
</script>

<style scoped>
    .content {
        margin-top: .5rem;
        padding: .22rem;
        font-size: .28rem;
        text-align: left;
        text-indent: 2em;
        color: #666;
        line-height: 1.6;
    }
</style>