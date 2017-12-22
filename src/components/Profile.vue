<template>
    <div class="profile">
        <Header title="个人中心" operation="保存" :action="saveUpdate"></Header>

        <div class="container">
            <div class="row avatar" @click="uploadAvatar">
                <label>
                    <div class="arrow"></div>
                    <img :src="avatar" alt="avatar">
                    <input type="file" class="avatar-input" name="avatar" @change="changeAvatar" accept="image/*" v-if="isWeixin">
                    头像
                    <div class="clear"></div>
                </label>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <label>
                    <!-- <div class="arrow"></div> -->
                    <input type="text" name="nickname" value="" v-model="nickname" placeholder="昵称">
                    昵称
                </label>
            </div>
            <div class="row">
                <label>
                    <!-- <div class="arrow"></div> -->
                    <input type="number" name="mobile" value="" v-model="mobile" readonly placeholder="手机号码绑定">
                    手机号码
                </label>
            </div>
        </div>
        
        <div class="container logout">
            <div class="row" @click="logout">
                退出登录
            </div>
        </div>

    </div>
</template>

<script>
    import { MessageBox, Toast, Indicator } from 'mint-ui'

    export default {
        data() {
            return {
                avatar: '../../static/moren@3x.png',
                nickname: '',
                mobile: ''
            }
        },
        created() {
            // 查询用户信息
            var self = this
            this.$api.findUserInfo(function (response) {
                if (response.result.headImage) {
                    self.avatar = response.result.headImage
                }
                self.nickname = response.result.nickName
                self.mobile = response.result.phone
            })
        },

        computed: {
            isWeixin() {
                return this.$common.isWeixin()
            }
        },

        methods: {
            // 保存更新后的用户信息
            saveUpdate() {
                if (!this.nickname) {
                    Toast({
                        message: '请输入昵称',
                        position: 'bottom'
                    })
                    return
                }

                var self = this
                this.$api.updateUserInfo(this.nickname, this.mobile, function() {
                    self.$router.push('/ucenter')  
                })
            },

            // 退出登录
            logout() {
                var self = this
                MessageBox.confirm('确认要退出登录吗？').then(action => {
                    self.$api.logout(function() {
                        self.$router.replace('/login')
                        self.$storage.remove('history_url')
                        self.$storage.remove('oauthInfo')
                        self.$storage.remove('token')
                    })
                })
            },

            // 上传头像
            uploadAvatar() {
                this.$bridge.choosePhoto().then(response => {
                    this.avatar = response
                })
            },

            // 切换头像
            changeAvatar(e) {
                Indicator.open('上传中...')
                let self = this
                let formData = new FormData()
                formData.append('file', e.target.files[0])
                this.$api.updateAvatar(formData, function(response) {
                    self.avatar =  response.result.data
                    Indicator.close()
                })
            }
        },
        destroyed() {
            Indicator.close()
        }
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
    .row .arrow {
        float: right;
    }
    .row .arrow:before {
        content: '\003e';
        color: #999;
        font-size: .3rem;
    }
    .row .avatar-input {
        opacity: 0;
        float: right;
    }
    .logout {
        margin-top: 1.5rem;
    }
    .logout .row {
        text-align: center;
    }

</style>