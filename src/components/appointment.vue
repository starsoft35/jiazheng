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
		<!--客户信息-->
		<div class="clientMessage">
			<!--姓名 电话-->
			<div class="clientCont clear">
				<div class="contName fl">联系人:{{clientName}}</div>
				<div class="contMobile fr" v-text="clientMobile"></div>
			</div>
			<!--地址-->
			<div class="clientPosition">
				<img class="imgLeft fl" src="../../static/37@3x.png"/>
				<span class="fl" v-text="clientposition"></span>
				<img class="imgRight fr" src="../../static/34@3x.png"/>
			</div>
			<!--底部彩条-->
			<img src="../../static/45@3x.png"/>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'确认订单',
				clientName:'朱小明',
				clientMobile:'17191191610',
				clientposition:'江苏省 苏州市 观前街 庆元坊20号'
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
	/*客户信息*/
	.clientMessage{
		width: 100%;
		background: #FFFFFF;
		display: inline-block;
		margin-bottom: 0.2rem;
	}
	/*客户姓名和电话部分*/
	.clientCont{
		width: 7.5rem;
		height: 0.25rem;
		font-size: 0.25rem;
		color: #222222;
		margin-top: 0.46rem;
		margin-bottom: 0.22rem;
	}
	.contName{
		width: 3rem;
		height: 0.25rem;
		margin-left: 0.75rem;
		text-align: left;
	}
	.contMobile{
		width: 2rem;
		height: 0.25rem;
		text-align: right;
		margin-right:0.6rem ;
	}
	/*地址   */
	.clientPosition{
		width:7rem ;
		display:inline-block;
		margin-left:0.24rem ;
		margin-bottom:0.3rem;
	}
	.clientPosition span{
		width:6rem ;
		font-size:0.25rem ;
		line-height:0.3rem ;
		color:#333333 ;
	}
	.imgLeft{
		width:0.28rem ;
		height: 0.35rem;
		margin: 0.2rem 0.25rem  0 0;
		
	}
	.imgRight{
		width: 0.13rem;
		height:0.2rem ;
		margin-top:0.12rem ;
	}
</style>