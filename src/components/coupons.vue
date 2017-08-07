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
		<div class="tabPart">
			<router-link to="">
				<span class="partLeft">可用优惠券</span>
			</router-link>
			<router-link to="">
				<span class="partRight">不可用优惠券</span>
			</router-link>
		</div>
		<div class="cont">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'使用优惠券'
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
	.tabPart{
		width: 7rem;
		height:0.78rem;
		padding: 0 .25rem;
		background: #FFFFFF;
		position: relative;
		font-size: 0.26rem;
		color: #222222;
	}
	.partLeft{
		position: absolute;
		left:1.65rem ;
		top: 0;
		line-height: 0.78rem;
		border-bottom: 1px solid #2c90f4;
	}
	.partRight{
		position: absolute;
		right:1.65rem ;
		top: 0;
		line-height: 0.78rem;
	}
</style>