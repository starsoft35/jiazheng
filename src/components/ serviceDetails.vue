<template>
	<div id="box">
		<div class="headPart">
			<div class="headCont">
				<a href="#">
					<span class="fl" onclick="window.history.go(-1)"></span>
				</a>
				<p v-text="title"></p>
			</div>
		</div>
		<!--顶部图片-->
		<div class="banner">
			<img :src="banner"/>
		</div>
		<!--服务名称以及价格-->
		<div class="serve_title">
			<div v-text="title"></div>
			<p v-text="cont"></p>
			<span v-text="price">￥60.00/小时</span>
		</div>
		<!--图文介绍-->
		<div class="textIntro clear">
			<a href="#second">
				<span class="fl">图文介绍</span>
				<img  class="fr" src="../../static/34@2x.png"/>
			</a>
		</div>
		<!--评价-->
		<div class="pingLun">
			<div class="ping clear">
				<span class="fl">评价({{ping}})</span>
				<div class="goodPing fr">
					<a href="#peoplePing">
						<p class="fl">好评度<span v-text="goodPing"></span></p>
						<img class="fr" src="../../static/34@2x.png"/>
					</a>
				</div>
			</div>
			<!--客户的评价-->
			<div class="client">
				<div class="clientMessage clear">
					<!--头像-->
					<div class="clientImg fl">
						<img :src="headPortrait"/>
						<span v-text="name"></span>
					</div>
					<!--星星-->
					<ul class="clientXing fr clear">
						<li class="clientPing" v-for="(clientPing,index) in pingImg">
							<img :src="clientPing.imgSrc"/>
						</li>
						
					</ul>
				</div>
				<span v-text="time"></span>
				<p v-text="comments"></p>
			</div>
		</div>
		<!--服务内容-->
		<div class="serveCont">
			<div class="serveTitle">
				<span class="fl"></span>
				<div>服务内容</div>
				<span class="fr"></span>
			</div>
			<!--服务内容文字介绍-->
			<div class="textBox" v-for="(textBox,index) in wrokCont">
				<p class="serveText" v-text="textBox.WorkerCont">
					1.客厅/卧室：地面、天花板、灯具无尘、窗帘吸尘。
				</p>
			</div>
		</div>
		<!--订购须知-->
		<div class="serveCont">
			<div class="serveTitle">
				<span class="fl"></span>
				<div>订购须知</div>
				<span class="fr"></span>
			</div>
			<!--订购须知内容-->
			<div class="textBox">
				<p class="serveText" v-text="reminder">
					
				</p>
			</div>
		</div>
		<!--立即预约按钮-->
		<div class="bottomBtn">
			<a href="#appointment">立即预约</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				//服务主题
				title:'家庭保洁',
				//服务图片
				banner:'@../../static/11@3x.png',
				//服务内容
				cont:'价格透明，服务周到',
				//价格
				price:'￥60.00/小时',
				//评价
				ping:'665',
				//好评度
				goodPing:'100%',
				//头像
				headPortrait:'@../../static/41@2x.png',
				//昵称
				name:'游来游去的鱼',
				pingImg:[
					{
						imgSrc:'@../../static/39@3x.png'
					},{
						imgSrc:'@../../static/39@3x.png'
					},{
						imgSrc:'@../../static/39@3x.png'
					},{
						imgSrc:'@../../static/39@3x.png'
					},{
						imgSrc:'@../../static/39@3x.png'
					}
				],
				//时间 
				time:'2017-07-20',
				//服务评价
				comments:'服务太棒了，打扫的非常棒，棒！',
				wrokCont:[
					{
						WorkerCont:'1.客厅/卧室：地面、天花板、灯具无尘、窗帘吸尘。'
					},
					{
						WorkerCont:'1.客厅/卧室：地面、天花板、灯具无尘、窗帘吸尘。'
					},
					{
						WorkerCont:'1.客厅/卧室：地面、天花板、灯具无尘、窗帘吸尘。'
					},
					{
						WorkerCont:'1.客厅/卧室：地面、天花板、灯具无尘、窗帘吸尘。'
					}
				],
				//订购须知
				reminder:'客厅/卧室：地面、天花板、灯具无尘、窗帘客厅/卧室：地面、天花板、灯具无尘、窗帘客厅/卧室：地面、天花板、灯具无尘、窗帘'
				
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
	/*顶部图片*/
	.banner{
		width:100%;
		height:3.3rem;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	/*服务名称以及价格*/
	.serve_title{
		width: 7rem;
		height: 1.63rem;
		padding: 0 0.25rem;
		background: #FFFFFF;
		text-align: left;
	}
	.serve_title div{
		width: 100%;
		height: 0.75rem;
		font-size: 0.25rem;
		line-height: 0.75rem;
		color: #333333;
	}
	.serve_title p{
		width: 100%;
		height:0.25rem ;
		font-size: 0.25rem;
		color: #999999;
	}
	.serve_title span{
		width: 100%;
		height:0.7rem;
		font-size: 0.3rem;
		color: #f55f11;
		line-height: 0.7rem;
	}
	/*图文介绍*/
	.textIntro{
		width: 7rem;
		height: 0.88rem;
		padding: 0 0.25rem;
		margin:0.2rem 0;
		background: #FFFFFF;
	}
	.textIntro a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.textIntro span{
		width: 2rem;
		height: 100%;
		line-height: 0.88rem;
		font-size: 0.25rem;
		color:#222222 ;
		text-align: left;
	}
	.textIntro img{
		width: 0.15rem;
		height: 0.2rem;
		line-height: 0.8rem;
		margin-top:0.35rem;
	}
	/*评价*/
	.pingLun{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		display: inline-block;
	}
	.ping{
		width: 7rem;
		height: 0.8rem;
		padding: 0 0.25rem;
		border-bottom: 0.02rem solid #ebebeb;
	}
	.ping span{
		width: 2.5rem;
		height: 100%;
		font-size: 0.22rem;
		color: #222222;
		text-align: left;
		line-height: 0.8rem;
	}
	.goodPing{
		width: 1.8rem;
		height: 100%;
	}
	.goodPing p{
		height: 0.8rem;
		font-size: 0.25rem;
		text-align: left;
		color: #222222;
		line-height:0.8rem ;
	}
	.goodPing span{
		color: #FF5400;
	}
	.goodPing img{
		width:0.15rem ;
		height:0.22rem ;
		margin-top:0.3rem ;
	}
	/*用户评价*/
	
	.client{
		width: 7rem;
		padding: 0 0.25rem;
		text-align: left;
		margin-bottom: 0.2rem;
	}
	.clientMessage{
		width: 7rem;
		display: inline-block;
	}
	/*头像以及名称*/
	.clientImg{
		width: 3.5rem;
		height: 0.48rem;
		margin: 0.2rem 0 0.1rem 0;
	}
	.clientImg img{
		width: 0.48rem;
		float: left;
	}
	.clientImg span{
		height:0.48rem ;
		float: left;
		font-size: 0.2px;
		color: #222222;
		line-height: 0.48rem;
		margin-left: 0.2rem;
	}
	/*五颗星星*/
	.clientXing{
		width: 1.7rem;
		height:0.48rem;
		margin-top: 0.32rem;
	}
	.clientXing li{
		width:0.24rem;
		height: 0.24rem;
		float: right;
		margin-right: 0.08rem;
	}
	.clientXing img{
		width:0.24rem;
		/*height: 0.24rem;*/
	}
	/*时间*/
	.client>span{
		width: 3rem;
		height: 0.16rem;
		font-size: 0.16rem;
		color: #999999;
	}
	.client p{
		width: 7rem;
		height: 0.25rem;
		margin: 0.25rem 0;
		font-size: 0.25rem;
		color: #222222;
	}
	/*服务内容*/
	.serveCont{
		width: 7rem;
		padding: 0.3rem 0.25rem 0.1rem;
		background: #FFFFFF;
		margin-top: 0.2rem;
		display: inline-block;
	}
	/*标题*/
	.serveTitle{
		width: 7rem;
		height: 0.22rem;
		/*position: relative;*/
	}
	.serveTitle span{
		width:2.3rem ;
		height:0.1rem ;
		border-bottom: 1px solid #e5e5e5;
	}
	.serveTitle div{
		position: absolute;
		width: 7rem;
		height: 0.22rem;
		text-align: center;
		font-size: 0.22rem;
		color: #222222;
		
	}
	/*服务内容 订购须知*/
	.textBox{
		width: 7rem;
		text-align: left;
		display: inline-block;
		margin: 0.2rem 0;
	}
	.textBox p{
		width: 7rem;
		height: 0.22rem;
		margin-top: 0.2rem;
		font-size: 0.22rem;
		color:#b4b4b4 ;
	}
	/*立即预约*/
	.bottomBtn{
		width: 6.9rem;
		height: 0.8rem;
		background: #2f94f4;
		border-radius: 0.5rem;
		margin: 0.15rem 0.3rem 0.28rem;
	}
	.bottomBtn a{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.3rem;
		line-height: 0.8rem;
		color: #FFFFFF;
	}
	
</style>