<template>
	<div id="box">
		<Header title="活动详情"></Header>
		<div class="banner">
			<mt-swipe :auto="0">
				<mt-swipe-item v-for="(item, index) in activity_banner" :key="index">
					<div  class="fullEle">
						<img class="fullEle" :src="item.image" />
					</div>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="coupon-list">
			<div class="coupon-item" v-for="(item,index) in coupon_list" :key="index">
				<div class="contBox" @click="getCoupon(item)" >
					<div class="LeftPart" :class="item.couponStatus == 1 ? '' : 'not-get'">
						<img src="../../static/ren.png"/>
						<span>{{parseInt(item.price)}}</span>
					</div>
					<div class="partRight">
						<span>{{item.content}}</span>
						<p>{{item.validTime}}</p>
						<img class="rightImg" v-show="item.couponStatus == 0" src="../../static/2313435@3x.png"/>
						<img class="rightImg" v-show="item.couponStatus == -1" src="../../static/as1asd@3x.png"/>
					</div>
				</div>
			</div>
				
		</div>
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				activity_banner: [],
				coupon_list: []
			}

		},
	    created() {
	  		this.activityId = this.$route.params.id
			this.$api.activityDetail({
	        	params:{
					    activityId: this.activityId,
					}
			    },(res) => {
			    	this.activity_banner = res.result.images
			    	res.result.coupons.forEach((item) => {
			    		if(item.left>0 && item.got == 0) {
			    			item.couponStatus = 1 //可领取
			    		}else if(item.got == 1) {
			    			item.couponStatus = 0 //已领取
			    		}else if(item.left == 0 && item.got == 0) {
			    			item.couponStatus = -1 //已领完
			    		}
			    		this.coupon_list.push(item)
			    	})
		    	})
	   },
	   methods: {
	   		getCoupon(item) {
	   			if(item.couponStatus !== 1) {
	   				return
	   			}
	   			this.$api.getCpupon({
					couponId: item.id,
				}, (res) => {
					Toast({
					  message: '领取成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 500
					})  
					item.couponStatus = 0
				})
	   		}
	   }
	}
</script>

<style scoped>
	.banner {
		width: 100%;
		height: 3.3rem;
	}
	
	.banner img {
		width: 100%;
		height: 100%;
	}
	.contBox{
		width:6.6rem;
		height:2rem ;
		margin:0.45rem 0.45rem 0;
		background: #FFFFFF;
		position: relative;
	}
	/*左边部分*/
	.LeftPart{
		width: 2.3rem;
		height: 2rem;
		background: url("../../static/2112@3x.png") no-repeat;
        background-size: 100% 100%;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	.LeftPart.not-get{
		background-image: url("../../static/12334@3x.png");
	}
	.LeftPart img{
		width:0.20rem ;
		height:0.25rem ;
		position: absolute;
		left: 0.2rem;
		bottom:0.6rem ;
	}
	.LeftPart span{
		font-size: 0.6rem;
		color: #FFFFFF;
		line-height: 0.8rem;
		position: absolute;
		left: 0.53rem;
		bottom:0.45rem ;
	}
	/*未过期右边 */
	/*右边部分*/
	.partRight{
		width: 4.3rem;
		height: 2rem;
		position: absolute;
		right:0;
		top: 0;
	}
	.partRight span{
		position: absolute;
		left:0.25rem ;
		top:0.37rem ;
		font-size:0.26rem ;
		color: #222222;
		z-index: 5;
	}
	.partRight p{
		position: absolute;
		left:0.25rem;
		bottom: 0.38rem;
		font-size: 0.2rem;
		color: #999999;
		z-index: 5;
	}
	/*已过期图片*/
	.rightImg{
		position: absolute;
		right: 0.5rem;
		top: 0.42rem;
		width: 2rem;
		height: 1.2rem;
		z-index: 0;
	}
</style>