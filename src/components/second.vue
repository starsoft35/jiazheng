<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<a href="#">
					<span class="fl" onclick="window.history.go(-1)"></span>
				</a>
				<p v-text="title"></p>
			</div>
		</div>		
		<span></span>
		<div class="box-left">
			<div class="box-left-icon left-img">
				<img src="../../static/28@3x.png" v-if="orderStatus5">
				<img src="../../static/22@3x.png" v-else>
				</div>
			<div class="left-span"><img src="../../static/order/icon-span.png"></div>
			<div class="box-left-icon left-img">
				<img src="../../static/23@3x.png" v-if="orderStatus4">
				<img src="../../static/30@3x.png" v-else>
				</div>
			<div class="left-span"><img src="../../static/order/icon-span.png"></div>
			<div class="box-left-icon left-img">
				<img src="../../static/24@3x.png" v-if="orderStatus3">
				<img src="../../static/31@3x.png" v-else>
				</div>
			<div class="left-span"><img src="../../static/order/icon-span.png"></div>
			<div class="box-left-icon left-img">
				<img src="../../static/25@3x.png" v-if="orderStatus2">
				<img src="../../static/29@3x.png" v-else>
				</div>
			<div class="left-span"><img src="../../static/order/icon-span.png"></div>
			<div class="box-left-icon left-img">
				<img src="../../static/26@3x.png" v-if="orderStatus1">
				<img src="../../static/32@3x.png" v-else>
				</div>
		</div>
		<div class="box-right">
			<div class="right-wraper" v-for="item in rightItem">
			<div class="img-bg"><img src="../../static/order/icon-triangle.png" alt=""></div>
			<div class="right-item" >
				<div class="right-top">
					<span class="right-top-left" >服务完成{{item.title}}</span><span class="right-top-right">2017-07-24 10:22 {{item.time}}</span>
				</div>
				<div class="right-bottom">
					<span class="right-bottom-left" >感谢使用同城家政 {{item.info}}</span>
					<span class="right-bottom-right"><img src="../../static/27@3x.png" v-if="item.phone"></span>	
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: '我是demo',
				picked:'',
				// 订单状态
				orderStatus1:true,
				orderStatus2:false,
				orderStatus3:false,
				orderStatus4:false,
				orderStatus5:false,
				rightItem:[
					{
						title:0,
						time:0,
						info:0,
						phone:0	
					},
					{
						title:0,
						time:0,
						info:0,
						phone:0	
					},
					{
						title:0,
						time:0,
						info:0,
						phone:0	
					},
					{
						title:0,
						time:0,
						info:0,
						phone:0	
					},
					{
						title:0,
						time:0,
						info:0,
						phone:0	
					}
				]
				
			}
		}
	}
</script>

<style scoped>
	#box {
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;
	}
	
	.headPart {
		width: 100%;
		height: 0.92rem;
		background: #2d91f4;
		overflow: hidden;
	}
	
	.headCont {
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
		/*border: 1px solid red;*/
	}
	
	.headCont a {
		display: block;
	}
	
	.headCont span {
		color: #FFFFFF;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../static/return.png");
		background-size: 100% 100%;
	}
	
	.headCont p {
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/* 左边 */
	.box-left{
		float: left;
		padding-top: 0.80rem;
		width: 10.1%;
		height: 8.40rem;
	}
	.box-left .left-span{
		height: 1.20rem;
	}
	.box-left .left-span img{
		width: 0.02rem;
		height: 1.20rem;
	}
	.box-left .box-left-icon{
		height: 0.40rem;
	}
	.box-left .left-img img{
		width: 0.40rem;
		height: 0.40rem;
	}
	/* 右边 */
	.box-right{
		float: left;
		width: 89.9%;
		height: 8.20rem;
	}
	.right-wraper{
		margin: 0.4rem 0;
		height: 1.20rem;
	}
	.right-item{
		float: left;
		padding: 0 0.25rem;
		text-align: left;
		width: 5.88rem;
		height: 1.20rem;
		border-radius: 0.04rem;
		background: #fff;	
	}
	.img-bg {
		position: relative;
		float: left;
		width: 0.16rem;
		height: 1.20rem;
	}
	.img-bg img{
		float: right;
		margin-right: -0.02rem;
		margin-top: 0.46rem;
		width: 0.14rem;
		height: 0.27rem;
	}
	.right-top{
		padding-top: 0.18rem;
		padding-bottom:0.09rem; 
	}
	.right-top-left{
		font-size: 0.28rem;
		color: #222;
	}
	.right-top-right{
		font-size: 0.26rem;
		color: #999;
		float: right;
		vertical-align: middle;
	}
	.right-bottom-left{
		font-size: 0.26rem;
		color: #999;
	}
	.right-bottom-right{
		font-size: 0.26rem;
		color: #999;
		float: right
	}
	.right-bottom-right img{
		margin-top: -0.02rem;
		width: 0.4rem;
		height: 0.4rem;
	}



</style>