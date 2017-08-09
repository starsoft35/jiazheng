<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<p v-text="title"></p>
			</div>
		</div>
		<ul class="navBox">
			<li>
				<router-link class="routerLink" to="/orderPart/orderPartOne">待服务</router-link>
			</li>
			<li>
				<router-link class="routerLink" to="/orderPart/orderPartTwo">服务中</router-link>
			</li>
			<li>
				<router-link class="routerLink" to="/orderPart/orderPartThree">已完成</router-link>
			</li>
			<li>
				<router-link class="routerLink" to="/orderPart/orderPartFour">已取消</router-link>
			</li>
		</ul>
		<router-view></router-view>
		<!--底部导航-->
		<workerPart actived="first"></workerPart>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'订单'
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
	.headPart{
		width: 100%;
		height: 0.92rem;
		background: #2d91f4;
		overflow: hidden;
	}
	.headCont{
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
		/*border: 1px solid red;*/
	}
	.headCont a{
		display: block;
	}
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/*顶部导航*/
	.navBox{
		width: 7.5rem;
		height: 0.78rem;
		border-bottom: 0.02rem solid #f2f2f2;
		background: #FFFFFF;
		display: flex;
		-webkit-box-orient: horizontal;
		display: -webkit-box;
	}
	.navBox li{
		-webkit-box-flex: 1;
	}
	.routerLink{
		font-size: 0.26rem;
		color:#222222;
		line-height:0.78rem ;
		display: inline-block;
	}
	.router-link-active {
		color: #2173d6;
		border-bottom: 0.02rem solid #2173d6;
	}
</style>