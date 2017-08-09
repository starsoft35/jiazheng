<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<p v-text="title"></p>
			</div>
		</div>
		<!--消息列表-->
		<div class="messageList" v-for="(msgList,index) in msg">
			<div class="messageTime">{{msgList.msgTime}}</div>
			<div class="cont">
				<span class="contTop">{{msgList.msgTop}}</span>
				<span class="contBottom">{{msgList.msgBottom}}</span>
			</div>
		</div>
		
		<div class="kong"></div>
		<!--底部导航-->
		<workerPart actived="third"></workerPart>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'消息',
				msg:[
					{
						msgTime:'2017年10月10日',
						msgTop:'您有一笔新的订单',
						msgBottom:'您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单'
					},{
						msgTime:'2017年10月10日',
						msgTop:'您有一笔新的订单',
						msgBottom:'您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单'
					},{
						msgTime:'2017年10月10日',
						msgTop:'您有一笔新的订单',
						msgBottom:'您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单'
					},{
						msgTime:'2017年10月10日',
						msgTop:'您有一笔新的订单',
						msgBottom:'您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单您有一笔新的订单'
					},
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
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/*消息列表*/
	.messageList{
		width: 7rem;
		display: inline-block;
		margin:0.25rem 0.25rem 0;
	}
	/*时间*/
	.messageTime{
		width:2.5rem ;
		height: 0.4rem;
		background:#939395;
		color:#FFFFFF;
		font-size:0.2rem;
		line-height:0.4rem;
		border-radius: 0.3rem;
		margin: 0 auto;
	}
	.cont{
		width: 7rem;
		margin:0.2rem 0 0.4rem;
		display: inline-block;
		text-align: left;
		background: #FFFFFF;
		border-radius: 0.3rem;
	}
	.contTop{
		width: 6.3rem;
		display: inline-block;
		font-size: 0.26rem;
		color: #222222;
		margin:0.35rem 0 0 0.25rem ;
	}
	.contBottom{
		display: inline-block;
		width: 6.3rem;
		font-size: 0.22rem;
		color: #CCCCCC;
		margin:0.3rem 0 0.25rem 0.32rem ;
	}
</style>