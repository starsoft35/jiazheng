<template>
	<div id="box">
		<!--顶部-->
		<Header title="分享有礼" operation="我的二维码" :action="showMyCode"></Header>
		<div class="sharePage-content">
			<img src="../../static/sa@3x.png" class="fullAuto"  />
			<p class="share-tip">新人注册即可获取优惠</p>
			<p class="share-btn" @click="share">分享新人领取优惠</p>
			<div class="shareUserList">
				<div class="shareUser-tit"></div>
				<div class="shareUser">
					<div class="shareUser-item" v-for="(item, index) in userShareList">
						<img :src="item.headImage" v-if="item.headImage != null"  />
						<img src="../../static/avatar-default.png" v-if="item.headImage == null" />
						<div class="shareUser-info">
							<p class="nickName" v-if="item.nickName != null">{{item.nickName}}</p>
							<p class="nickName" v-if="item.nickName == null">新用户</p>
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
					:value="showUrl" 
					:options="{ size: 170 }">
				</qrcode>
				<p style="padding: 0.2rem; color: #fff;">（ 扫码邀请好友 ）</p>
			</div>
				
			
		</div>
		<div class="shareTip" v-show="show" @click="cancel">
	    	<img src="../../static/share.png" />
	    </div>
		
	</div>
</template>

<script type="text/javascript">
import Qrcode from 'vue-qrcode'
import wx from 'weixin-js-sdk'
	export default {
		components: {
		  qrcode: Qrcode
		},
		data() {
			return {
				userShareList: [],
				showCode: false,
				showUrl: '',
				show: false
			}
		},
		created() {
			this.$api.userMyShared(null,(res) => {
		    	this.userShareList = res.result.list
		    	this.showUrl = 'http://' + window.location.host + '/#/shareEnter/' + res.result.inviterId
		    	if (this.$common.isWeixin()) {
		    		this.wxShare(this.showUrl)
		    	}
		    	
		    })
		},
		methods: {
			wxShare(showUrl) {
				let self = this
				this.$api.shareSign({
					params: {
						url: window.location.href.split('#')[0]
					}
				}, (res) => {
					wx.config({
		                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		                appId: res.result.appId, // 必填，公众号的唯一标识
		                timestamp: res.result.timestamp, // 必填，生成签名的时间戳
		                nonceStr: res.result.nonceStr, // 必填，生成签名的随机串
		                signature: res.result.signature, // 必填，签名，见附录1
		                jsApiList: ['uploadImage', 'getLocation', 'chooseImage', 'previewImage', 'uploadImage', 'scanQRCode', 'chooseWXPay', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		            })
					wx.ready(function (res) {
		                wx.onMenuShareAppMessage({
		                    title: '全城到家大放价', // 分享标题
		                    desc: '现金优惠券大礼包', // 分享描述
		                    link: showUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		                    imgUrl: 'http://od10yjz2i.bkt.clouddn.com/ic_launcher.png', // 分享图标
		                    type: '', // 分享类型,music、video或link，不填默认为link
		                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		                    trigger: function (res) {
		                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
		                    },
		                    success: function (res) {
		                        // alert('分享给朋友成功')
		                    },
		                    cancel: function (res) {
		                        // alert('你没有分享给朋友')
		                    },
		                    fail: function (res) {
		                        console.log(JSON.stringify(res))
		                    }
		                })
		                wx.onMenuShareTimeline({
		                    title: '全城到家大放价', // 分享标题
		                    desc: '现金优惠券大礼包', // 分享描述
		                    link: showUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		                    imgUrl: 'http://od10yjz2i.bkt.clouddn.com/ic_launcher.png', // 分享图标
		                    type: '', // 分享类型,music、video或link，不填默认为link
		                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		                    trigger: function (res) {
		                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
		                    },
		                    success: function (res) {
		                        // alert('分享给朋友成功')
		                    },
		                    cancel: function (res) {
		                        // alert('你没有分享给朋友')
		                    },
		                    fail: function (res) {
		                        console.log(res)
		                    }
		                })
		            })
				})
			},
			showMyCode() {
				this.showCode = !this.showCode
			},
			share() {
				let self = this
				if (self.$common.isWeixin()) {
					this.show = true
				}else {
					this.$bridge.share({
	                    link: self.showUrl,
	                    title: '全城到家大放价',
	                    desc: '现金优惠券大礼包',
	                    icon: 'http://od10yjz2i.bkt.clouddn.com/ic_launcher.png'
	                }).then(ret => {
	                    
	                })
				}
					
			},
			cancel() {
	    		this.show = false
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
	.shareTip{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,0.4);
		padding: 0 15px;
		z-index: 100;
	}
	.shareTip img{
		display: block;
		width: 100%;
	}
</style>