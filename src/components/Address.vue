<template>
    <div class="address-container">
        <Header title="编辑服务地址" operation="保存" :action="saveAddress"></Header>

        <div class="container">
           <div class="row">
                <label>
                    <input type="text" name="nickname" v-model="consigee" placeholder="请输入姓名">
                    联系人
                </label>
            </div>
            <div class="row">
                <label>
                    <input type="tel" name="mobile" v-model="mobile" placeholder="手机号码">
                    联系电话
                </label>
            </div>
            <div class="row" @click="toAddressSearch">
                <label>
                    <div class="arrow"></div>
                    <input type="text" name="address" readonly v-model="address" placeholder="请输入您的小区或大厦、街道名称">
                    服务地址
                </label>
            </div>
            <div class="row">
                <textarea v-model="street" cols="30" rows="3" placeholder="请填写详细门牌地址~"></textarea>
            </div>
        </div>

        <div class="container default">
            <div class="switch">
                <mt-switch v-model="defaultAddress"></mt-switch>
            </div>
            设为默认地址
            <div class="remark">注：每次下单时会使用该地址</div>
        </div>
    </div>
</template>

<script>
    import { Switch, Toast } from 'mint-ui'
    export default {
        data() {
            return {
                id: undefined,
                consigee: '',
                mobile: '',
                address: '',
                street: '',
                longitude: '',
                latitude: '',
                isDefault: 0
            }
        },
        created() {
            this.$storage.remove('search_result')
        },
        computed: {
            defaultAddress: {
                get() {
                    return this.isDefault === 1
                },
                set(value) {
                    this.isDefault = value ? 1: 0
                }
            }
        },
        activated() {
            let self = this
            if (this.$route.params.id && !self.mobile) {
                this.$api.getAddress(this.$route.params.id, function(response) {
                    self.id = response.result.id
                    self.consigee = response.result.name
                    self.address = response.result.address
                    self.mobile = response.result.mobile
                    self.street = response.result.detailAddr
                    self.longitude = response.result.Longitude
                    self.latitude = response.result.Latitude
                    self.isDefault = response.result.isDefault
                })
            }
            let searchResult = this.$storage.get('search_result')
            if (searchResult) {
                this.address = searchResult.address
                this.longitude = searchResult.longitude
                this.latitude = searchResult.latitude
            }
        },
        methods: {
            toAddressSearch() {
                this.$router.push('/addr/search')
            },
            // 保存地址
            saveAddress() {
                if (!this.consigee) {
                    Toast({
                        message: '请输入联系人',
                        position: 'bottom'
                    })
                    return
                }
                if (!this.mobile) {
                    Toast({
                        message: '请输入联系电话',
                        position: 'bottom'
                    })
                    return
                }
                if (!this.address) {
                    Toast({
                        message: '请选择联系地址',
                        position: 'bottom'
                    })
                    return
                }
                if (!this.street) {
                    Toast({
                        message: '请输入门牌地址',
                        position: 'bottom'
                    })
                    return
                }

                let self = this
                this.$api.editAddress(this, function(response) {
                    self.$router.go(-1)
                })
            }
        },
        // 路由钩子(离开)
        beforeRouteLeave(to, from, next) {
            if (to.path != '/addr/search') {
                this.id = undefined
                this.consigee = ''
                this.mobile = ''
                this.address = ''
                this.street = ''
                this.longitude = ''
                this.latitude = ''
                this.isDefault = 0
            }
            next()
        },
        deactivated() {
            this.$storage.remove('search_result')
        }
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
        margin-top: .2rem;
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