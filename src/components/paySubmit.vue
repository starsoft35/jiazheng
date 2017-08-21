<template>
	<div id="box">
		<!--顶部-->
		<Header title="订单支付"></Header>
		<!--banner-->
		<div class="reminder">
			<span>订单提交成功，只差最后一步</span>
			<p>请尽快完成支付，超时该订单将会自动被取消！</p>
		</div>
		
		<!--订单号和金额-->
		<div class="order">
			<div class="partTop clear">
				<div class="fl">订单号</div>
				<span class="fr">{{orderDetail.orderNo}}</span>
			</div>
			
			<div class="partBottom">
				<div class="fl">实付金额</div>
				<span class="fr">&yen;{{orderDetail.actualPrice}}</span>
			</div>
		</div>
		<div class="serveBottom" v-if="orderKind.value == 2">
			<span class="fl">优惠券</span>
			<router-link to="/coupons/couponsLeft/use">
				<img class="fr" src="../../static/34@3x.png"/>
				<div class="fr" v-show="useCouponStatus">{{parseInt(currCoupon.price)}}元优惠券</div>
				<div class="fr" v-show="!useCouponStatus">使用优惠券</div>
			</router-link>
				
		</div>
		<!--选择支付方式-->
		<div class="payWay">
			<span>请选择支付方式</span>
			<mt-radio
			  align="right"
			  v-model="payWayId"
			  :options="options">
			</mt-radio>
		</div>
		<div class="kong"></div>
		<!---->
		<div class="bottomBtn">
			<router-link to="/paySubmit">确认支付</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				orderSn: undefined,
				orderDetail: {},
				orderKind: {},
				currCoupon: {
		        	price: 0
		        },
		        useCouponStatus: false,
		        
		        options: [
				  {
				    label: '余额支付',
				    value: '1'
				  },
				  {
				    label: '微信支付',
				    value: '2'
				  },
				  {
				    label: '支付宝支付',
				    value: '3'
				  }
				],
				
				payWayId: '1'
			}
		},
		created() {
			this.orderSn = this.$route.params.id
			if(this.$storage.get('currCoupon')) {
				this.currCoupon = this.$storage.get('currCoupon')
				this.useCouponStatus = true
				this.$storage.remove('currCoupon')
			}
			this.$api.serveOrderDetail({
	        	params:{
				    orderNo: this.orderSn
				}
		    },(res) => {
		    	this.orderDetail = res.result
		    	this.orderKind = res.result.orderType
		    })
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
		background: url("../../static/paybackTwo.png") no-repeat;
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
		top: 0.6rem;
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
		position: absolute;
		left: 0.25rem;
		top: 0.3rem;
		color: #888;
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
	/*支付列表*/
	.payChose{
		width: 7rem;
		height: 0.9rem;
		border-bottom: 2px solid #f2f2f2;
		margin:0 auto;
		overflow: hidden;
	}
	.payLeft{
		width:5rem;
		height: 0.4rem;
		margin: 0.3rem 0 0 0.05rem;
	}
	.payLeft img{
		width: 0.4rem;
		height: 0.4rem;
		float: left;
	}
	.payText{
		width:4rem;
		height: 0.4rem;
		font-size: 0.26rem;
		line-height: 0.4rem;
		margin-left: 0.3rem;
	}
	.payMoney{
		width:2rem ;
		height:0.4rem ;
		font-size: 0.26rem;
		line-height: 0.4rem;
		float: left;
	}
	.payRight{
		width: 0.4rem;
		height:0.4rem;
		margin-top:0.3rem;
	}
	
	.payRight img{
		width: 100%;
		height: 100%;
	}
	/*底部按钮*/
	.bottomBtn{
		width: 6.9rem;
		height: 0.8rem;
		background: #2f94f4;
		border-radius: 0.5rem;
		margin: 0rem 0.3rem 0.3rem;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.bottomBtn a{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.3rem;
		line-height: 0.8rem;
		color: #FFFFFF;
	}
	/*新增*/
	.serveBottom{
		width: 7rem;
		padding: 0 0.25rem;
		border-top: 2px solid #f2f2f2;
		height: 0.88rem;
		display: block;
		background: #FFFFFF;
		margin-bottom: 0.3rem;
	}
	.serveBottom span{
		width:1rem;
		height:0.88rem;
		color:#222222 ;
		font-size: 0.26rem;
		text-align: left;
		line-height: 0.88rem;
	}
	.serveBottom a{
		width: 3.5rem;
		height: 0.88rem;
		display: block;
		float: right;
	}
	.serveBottom img{
		width: 0.12rem;
		height:0.22rem ;
		margin-top:0.33rem ;
	}
	.serveBottom div{
		width:2rem ;
		height: 0.88rem;
		text-align: right;
		color: #222222;
		font-size: 0.26rem;
		line-height: 0.88rem;
		margin-right: 0.2rem;
	}
</style>