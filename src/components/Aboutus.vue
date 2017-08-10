<template>
    <div class="aboutus-container">
        <Header title="关于我们"></Header>
        <div class="content">
            {{aboutus}}
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
            this.aboutus = this.$storage.get('aboutus')
        }
    }
</script>

<style scoped>
    .content {
        margin-top: 1rem;
        padding: .22rem;
        font-size: .26rem;
        text-align: left;
        color: #666;
    }
</style>