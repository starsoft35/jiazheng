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
		<!--内容-->
		<div class="contTop">
			<span>头像</span>
			<div class="headPortrait">
				<img src="../../../static/10@2x.png"/>
			</div>
			<img class="imgRight" src="../../../static/34@2x.png"/>
		</div>
		<!--昵称-->
		<div class="contBottom">
			<div class="workerName">
				<span class="msgLeft fl">昵称</span>
				<img src="../../../static/34@2x.png"/>
				<span class="msgRight fr">朱小明</span>
			</div>
			<div class="workerName" style="border: none;">
				<span class="msgLeft fl">手机号绑定</span>
				<img src="../../../static/34@2x.png"/>
				<span class="msgRight fr">171****1610</span>
			</div>
		</div>
		<!--退出登录-->
		<div class="exit">退出登录</div>
		<!--底部导航-->
		<workerPart actived="four"></workerPart>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'个人中心'
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
		background: url("../../../static/return.png");
		background-size: 100% 100%;
	}
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/*内容*/
	.contTop{
		width: 7.5rem;
		height:1.6rem ;
		margin-top:0.4rem ;
		position: relative;
		background: #FFFFFF;
	}
	.contTop span{
		position: absolute;
		left:0.25rem ;
		top:0.67rem ;
		font-size:0.26rem ;
		color: #222222;
		
	}
	.headPortrait{
		position: absolute;
		right:0.6rem ;
		top:0.3rem ;
		width:0.98rem ;
		height: 0.98rem;
		border-radius: 0.5rem;
		border: 0.01rem solid #f2f2f2;
		
	}
	.headPortrait img{
		width: 100%;
		height: 100%;
	}
	.imgRight{
		position: absolute;
		right:0.25rem ;
		top:0.69rem ;
		width:0.12rem ;
		height: 0.22rem;
	}
	/*个人信息*/
	.contBottom{
		width: 7.5rem;
		display: inline-block;
		background:#FFFFFF;
		margin-top: 0.4rem;
	}
	.workerName{
		width: 7rem;
		padding: 0 0.25rem;
		height: 0.88rem;
		border-bottom: 0.02rem solid #CCCCCC;
	}
	.workerName img{
		float: right;
		width: 0.12rem;
		height: 0.22rem;
		margin-top: 0.33rem;
		margin-left: 0.25rem;
	}
	.msgLeft{
		font-size:0.26rem ;
		color:#222222 ;
		line-height: 0.88rem;
	}
	.msgRight{
		font-size:0.24rem;
		color:#666666;
		line-height: 0.88rem;
	}
	/*退出登录*/
	.exit{
		width: 7.5rem;
		height: 0.9rem;
		font-size: 0.3rem;
		color: #222222;
		background: #FFFFFF;
		line-height: 0.9rem;
		margin-top: 1.5rem;
	}
</style>