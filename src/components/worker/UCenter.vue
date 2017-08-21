<template>
	<div id="box">
		<Header title="个人中心" back="hidden"></Header>

		<div class="menu-container">
            <div class="item" @click="toProfile">
                <div class="arrow info"></div>
                <div class="avatar">
					<img :src="avatar" alt="">
				</div>
				<div class="info">
					<div class="name">张某某</div>
					<div class="mobile">18501701760</div>
				</div>
            </div>
        </div>

		<div class="menu-container">
            <a href="tel:400-800-1236" class="item">
                <div class="arrow"></div>
                <div class="label">{{hotline}}</div>
                <div class="title">联系客服</div>
            </a>
            <router-link to="/aboutus" class="item">
                <div class="arrow"></div>
                <div class="title">关于我们</div>
            </router-link>
        </div>

        <div class="menu-container">
            <router-link to="/location" class="item">
                <div class="arrow"></div>
                <div class="title">工人位置</div>
            </router-link>
        </div>

		<div class="menu-container">
            <div class="item" @click="toggleRole">
                <div class="arrow"></div>
                <div class="label">工人版</div>
                <div class="title">角色切换</div>
            </div>
        </div>

		<WorkerMenu actived="four"></WorkerMenu>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
                nickname: '',
                mobile: '',
                avatar: '../../../static/moren@3x.png',
				hotline: '18501701760'
			}
        },
        created() {
            var self = this
            this.$api.findUserInfo(function (response) {
                if (response.result.headImage) {
                    self.avatar = response.result.headImage    
                }
                if (response.result.nickName) {
                    self.nickname = response.result.nickName    
                }
                if (response.result.phone) {
                    self.mobile = response.result.hidePhone    
                }
                self.hotline = response.result.linkPhone
                self.$storage.set('aboutus', response.result.aboutUs)
                self.roles = response.result.roles
                if (self.roles.length > 1) {
                    for (let i in self.roles) {
                        if (self.roles[i].isCurrent == 1 && self.roles[i].roleName == '用户版') {
                            self.$router.push('/ucenter')
                        }
                    }
                }
            })
        },
        methods: {
            toProfile() {
                this.$router.push('/profile')
            },
            // 切换角色
            toggleRole() {
                let self = this
                this.$api.toggleRole(function(response) {
                    if (response.result.role == 1) {
                        self.$router.push('/ucenter')
                    }
                });
            }
        }
	}
</script>

<style scoped>
	.menu-container {
        background: #FFF;
        margin-top: .35rem;
        padding-left: .3rem;
        font-size: .26rem;
    }
    .menu-container .item {
        color: #666;
        display: block;
        text-align: left;
        padding: .25rem .3rem .25rem .1rem;
        border-top: 1px solid #EEE;
    }
    .menu-container .item:first-child {
        border-top: 0;
    }
    .menu-container .item .arrow {
        line-height: .35rem;
        float: right;
	}
	.menu-container .item .arrow.info {
		margin-top: .16rem;
	}
    .menu-container .item .arrow:before {
        content: '\003e';
        color: #ccc;
        font-size: .3rem;
    }
    .menu-container .item .label {
        float: right;
        margin-right: .2rem;
    }
    .menu-container .item .badge {
        float: right;
        box-sizing: border-box;
        padding: 0 .1rem;
        margin-right: .2rem;
        min-width: .35rem;
        height: .35rem;
        border-radius: .35rem;
        line-height: .38rem;
        color: #FFF;
        background-color: #f71414;
        text-align: center;
	}
	.item .avatar img {
        height: 1.1rem;
        width: 1.1rem;
        border-radius: .55rem;
		float: left;
	}
	.item .info {
		padding: .22rem 0 0 1.44rem;
		color: #666;
	}
	.info .name {
		font-size: .28rem;
	}
	.info .mobile {
		margin-top: .14rem;
		font-size: .24rem;
		background: url("../../../static/worker112.png") no-repeat left center;
        background-size: .14rem;
        padding-left: .25rem;
	}
</style>