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
		<!--banner-->
		<div class="reminder">
			<span>订单提交成功，只差最后一步</span>
			<p>请尽快完成支付，超时该订单将会自动被取消！</p>
		</div>
		<!--订单号和金额-->
		<div class="order">
			<div class="partTop clear">
				<div class="fl">订单号</div>
				<span class="fr">12346546587987</span>
			</div>
			<div class="partBottom">
				<div class="fl">实付金额</div>
				<span class="fr">￥140.00</span>
			</div>
		</div>
		<!--选择支付方式-->
		<div class="payWay">
			<span>请选择支付方式</span>
			<div class="payChose">
				<img src="../../static/41@2x.png"/>
				<span>余额支付</span>
				<!--<div class="btn">
					<img src="../../static/35@2x.png"/>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'订单支付',
				payWay:[
					{	
						backSrc:'@../../static/41@2x.png',
						wayChose:'余额支付',
						paySrc:'@../../static/36@2x.png'
					},{	
						backSrc:'@../../static/55@2x.png',
						wayChose:'微信支付',
						paySrc:'../../static/35@2x.png'
					},{	
						backSrc:'@../../static/56@2x.png',
						wayChose:'支付宝支付',
						paySrc:'../../static/35@2x.png'
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
		font-size: 0.32rem;
	}
	.reminder{
		width:7.5rem;
		height: 2rem;
		background: url("../../static/payback.png") no-repeat;
		background-size: 100% 100%;
		color: #FFFFFF;
		text-align: left;
		position: relative;
	}
	.reminder span{
		display: block;
		width: 7rem;
		height: 0.26rem;
		font-size: 0.26rem;
		position: absolute;
		left: 0.25rem;
		top: 0.7rem;
	}
	.reminder p{
		width: 7rem;
		height: 0.26rem;
		font-size: 0.22rem;
		position: absolute;
		left: 0.25rem;
		top: 1.2rem;
	}
	/*点单号和金额*/
	.order{
		width:7rem ;
		height:1.4rem ;
		padding:0 0.25rem;
		margin: 0.2rem 0;
		background: #FFFFFF;
		position: relative;
	}
	.partTop{
		width: 7rem;
		height: 0.24rem;
		position: absolute;
		left: 0.25rem;
		top: 0.3rem;
		color: #c9c9c9;
	}
	.partBottom{
		width: 7rem;
		height: 0.26rem;
		position: absolute;
		left: 0.25rem;
		top: 0.9rem;
	}
	.partBottom div{
		color: #222222;
	}
	.partBottom span{
		color: #ff5400;
	}
	/*选择支付方式*/
	.payWay{
		width: 7.5rem;
		display: inline-block;
		background: #FFFFFF;
		color: #222222;
		font-size: 0.26rem;
		text-align:left;
		overflow: hidden;
		position: relative;
	}
	.payWay span{
		width: 100%;
		display: block;
		height:0.88rem ;
		padding: 0 0.25rem;
		border-bottom:2px solid #f2f2f2 ;
		line-height: 0.88rem;
	}
	
	
</style>