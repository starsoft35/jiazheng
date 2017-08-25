<template>
	<div id="box">
		<!--顶部-->
		<Header title="订单详情"></Header>
		<div class="orderProcess">
			<div class="orderProcess-item" v-for="(item, index) in orderFlow">
				<div class="process-left"></div>
				<div class="process-right">
					<p>
						<span class="tit">{{item.flow}}</span>
						<span>{{item.time}}</span>
					</p>
					<p>
						<span>{{item.info}}</span>
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				orderFlow: []
			}
		},
		created() {
			this.orderFlow = this.$storage.get('currOrderFlow')
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
	.orderProcess{
		padding: 0.2rem;
	}
	.orderProcess-item{
		display: flex;
		align-items: center;
		padding: 0.2rem 0;
	}
	.orderProcess-item:nth-of-type(1) .process-left{
		background-image: url(../../static/during.png);
		background-size: 100% 100%;
		border: none;
	}
	.process-left{
		width: 0.54rem;
		height: 0.54rem;
		border-radius: 50%;
		
		border: 1px solid #258ef3;
		margin-right: 0.3rem;
		position: relative;
		box-sizing: border-box;
		background: url(../../static/finish.png) no-repeat center;
		background-size: 80% 80%;
	}
	.process-left:before{
		content: '';
		position: absolute;
		width: 0;
		border-left: 1px solid #999;
		height: 1rem;
		left: 50%;
		top: -1.1rem;
		transform: translateX(-50%);
	}
	.orderProcess-item:nth-of-type(1) .process-left:before{
		display: none;
	}
	.process-right{
		flex: 1;
		padding: 0.2rem;
		background: #fff;
		position: relative;
	}
	.process-right:before{
		position: absolute;
		content: '';
		width: 0.16rem;
		height: 0.3rem;
		background: url(../../static/order/icon-triangle.png) no-repeat center;
		left: -0.16rem;
		background-size: auto 100%;
		top: 50%;
		margin-top: -0.15rem;
	}
	.process-right>p{
		display: flex;
		justify-content: space-between;
		color: #999;
		line-height: 1.8;
		font-size: 0.26rem;
	}
	.process-right>p span.tit{
		font-size: 0.28rem;
		color: #333;
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