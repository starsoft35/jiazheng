<template>
    <div class="profile">
        <Header title="个人中心" operation="保存" :action="saveUpdate"></Header>

        <div class="container">
            <div class="row avatar">
                <label>
                    <div class="arrow"></div>
                    <img :src="avatar" alt="avatar">
                    <input type="file" class="avatar-input" name="avatar" @change="changeAvatar" accept="image/*">
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
    import { MessageBox } from 'mint-ui'

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

        methods: {
            // 保存更新后的用户信息
            saveUpdate() {
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
                        self.$router.push('/login')
                        self.$storage.remove('history_url')
                    })
                })
            },

            // 切换头像
            changeAvatar(e) {
                let self = this
                let formData = new FormData()
                formData.append('file', e.target.files[0])
                this.$api.updateAvatar(formData, function(response) {
                    console.info(response)
                    self.avatar =  response.result.data
                })
            }
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