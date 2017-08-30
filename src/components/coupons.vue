<template>
	<div id="box">
		<!--顶部-->
		<Header title="使用优惠卷"></Header>
		<ul class="navBox">
			<li>
				<router-link class="routerLink" :to="'/coupons/couponsLeft/' + status" replace>可用优惠劵</router-link>
			</li>
			<li>
				<router-link class="routerLink" to="/coupons/couponsRight" replace>不可用优惠券</router-link>
			</li>
		</ul>
		<div class="cont">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				status: ''
			}
		},
		created() {
			this.status = this.$route.params.status || 'useless'
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
	.headCont span{
		color: #FFFFFF;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../static/return.png");
		background-size: 100% 100%;
	}
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.3rem;
	}
	/*优惠券选择*/
	.navBox{
		width: 7.5rem;
		height: 0.78rem;
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
		border-bottom: 2px solid #2173d6;
	}
	/*子页面*/
</style>