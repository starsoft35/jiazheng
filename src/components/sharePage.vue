<template>
	<div id="box">
		<!--顶部-->
		<Header title="分享有礼" operation="我的二维码" :action="showMyCode"></Header>
		<div class="sharePage-content">
			<img src="../../static/sa@3x.png" class="fullAuto"  />
			<p class="share-tip">新人注册即可获取优惠</p>
			<p class="share-btn">分享新人领50元优惠</p>
			<div class="shareUserList">
				<div class="shareUser-tit"></div>
				<div class="shareUser">
					<div class="shareUser-item" v-for="(item, index) in userShareList">
						<img :src="item.headImage"  />
						<div class="shareUser-info">
							<p class="nickName">{{item.nickName}}</p>
							<p class="timer">{{item.shareTime}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="qr-code-content" v-show="showCode">
			<div class="bg-content" @click="showCode = false"></div>
			<div class="qr-code-box">
				<qrcode 
					value="https://www.baidu.com/" 
					:options="{ size: 170 }">
				</qrcode>
				<p style="padding: 0.2rem; color: #fff;">（ 扫码邀请好友 ）</p>
			</div>
				
			
		</div>
		
	</div>
</template>

<script type="text/javascript">
import Qrcode from 'vue-qrcode'
	export default {
		components: {
		  qrcode: Qrcode
		},
		data() {
			return {
				userShareList: [],
				showCode: false
			}
		},
		created() {
			this.$api.userMyShared(null,(res) => {
		    	this.userShareList = res.result.list
		    })
		},
		methods: {
			showMyCode() {
				this.showCode = !this.showCode
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
		padding-top: 4.8rem;
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
	.share-tip{
		color: #fbeb11;
	}
	.share-btn{
		color: #433f05;
		background: #FBEB11;
		width: 6rem;
		margin: 0.3rem auto;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.32rem;
		border-radius: 0.4rem;
		letter-spacing: 1px;
	}
	.shareUserList{
		padding: 0rem 0.8rem 0.5rem;
	}
	.shareUser-tit{
		width: 3.4rem;
		height: 1rem;
		margin: 0 auto 0.3rem;
		background: url(../../static/ad-01.png) no-repeat;
		background-size: 100% 100%;
	}
	.shareUser-item{
		display: flex;
		padding: 0.1rem 0.3rem;
	}
	.shareUser-item>img {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		margin: 0.2rem;
	}
	.shareUser-info{
		flex: 1;
		line-height: 0.5rem;
		text-align: left;
	}
	.qr-code-content{
		position: absolute;
		width: 100%;
		left: 0;
		top: 0.92rem;
		bottom: 0;
		z-index: 100;
	}
	.bg-content{
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 101;
		background: rgba(0,0,0,0.7);
	}
	.qr-code-box{
		position: absolute;
		z-index: 105;
		left: 50%;
		transform: translateX(-50%);
		top: 2rem;
	}
</style>