<template>
	<div id="box">
		<!--顶部-->
		<Header title="全城家政" back="hidden" ></Header>
		<div class="sharePage-content">
			<img src="../../static/sa@3x.png" class="fullAuto"  />
			<div class="content">
				<img src="../../static/shareEnter.png" class="fullAuto"  />
				<p class="tit-1">全城家政大放价</p>
				<p class="tit-2">现金优惠券大礼包</p>
				<input type="tel" maxlength="12" placeholder="请输入您的手机号码" v-model="phone" class="phone" />
				<div class="enter-app" @click="getEnter">立即领券</div>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				phone: '',
				userId: undefined
			}
		},
		created() {
			this.userId = this.$route.params.id
		},
		methods: {
			getEnter() {
				if(!this.phone) {
                    Toast({
                        message: '请输入手机号码',
                        position: 'bottom',
                        duration: 1000
                    })
                    return
				}
				this.$api.addShareUser({
					inviterId: this.userId,
					phone: this.phone
				}, (res) => {
					Toast({
					  message: '领取成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 1000
					})  
				})
			}
		}
	}
</script>

<style scoped>
	#box{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	.sharePage-content{
		position: absolute;
		top: 0;
		width: 100%;
		left: 0;
		min-height: 100%;
		padding-top: 5rem;
		overflow: hidden;
		box-sizing: border-box;
		
	}
	.fullAuto{
		position: absolute;
		width: 100%;
		height: auto;
		left: 0;
		top: 0.92rem;
		z-index: -1;
	}
	.content{
		position: relative;
		padding: 0.3rem;
		padding-bottom: 1.6rem;
	}
	.content>img{
		position: absolute;
		width: 6.7rem;
		height: auto;
		left: 0.4rem;
		top: 0.4rem;
		z-index: -1;
	}
	.tit-1{
		font-size: 0.36rem;
		color: #000;
		padding-top: 0.48rem;
	}
	.tit-2{
		font-size: 0.4rem;
		color: #000;
		padding-top: 0.2rem;
	}
	.phone{
		outline: none;
		width: 5.8rem;
		height: 0.7rem;
		border: 1px solid #ddd;
		border-radius: 0.4rem;
		line-height: 0.8rem;
		text-align: center;
		font-size: 0.36rem;
		margin-top: 1.3rem;
	}
	.enter-app{
		width: 5.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		margin: 0.5rem auto 0;
		border-radius: 0.4rem;
		background: #fbeb11;
		color: #000;
		font-size: 0.32rem;
	}
</style>