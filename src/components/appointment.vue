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
				<a href="#chosePosition" style="display:inline-block;">
					<img class="imgLeft fl" src="../../static/37@3x.png"/>
					<span class="fl" v-text="clientposition"></span>
					<img class="imgRight fr" src="../../static/34@3x.png"/>
				</a>
			</div>
			<!--底部彩条-->
			<div class="imgBottom"></div>
			
		</div>
		<!--服务时间-->
		<div class="serveTime">
			<span class="fl">服务时间</span>
			<a href="#second">
				<img src="../../static/34@3x.png"/>
				<div class="fr">请选择服务时间</div>
			</a>
		</div>
		<!--选择服务数量-->
		<div class="serveCount">
			<div class="cont">
				<!--左边介绍-->
				<div class="serveLeft">
					<div class="serveBack fl">
						<img src="../../static/back.png"/>
					</div>
					<div class="serveTitle fl">
						<div>家庭保洁</div>
						<p>内芯及外表清洗</p>
						<span>￥30/小时</span>
					</div>
				</div>
				<!--右边选择数量-->
				<div class="serveRight fr">
					<div class="serveBtn">
						<div class="btnLeft fl" @click="reduce" >-</div>
						<span>{{score}}</span>
						<div class="btnRight fr" @click="add" >+</div>
					</div>
				</div>
			</div>
			<!--优惠券-->
			<div class="serveBottom">
				<span class="fl">优惠券</span>
				<a href="#secon fr">
					<img class="fr" src="../../static/34@3x.png"/>
					<div class="fr">{{youhui}}元优惠券</div>
				</a>
			</div>
		</div>
		<!--结账-->
		<div class="footPart">
			<div class="partPrice">
				<div class="fl">服务金额</div>
				<span class="fr">￥{{payOne}}</span>
			</div>
			<div class="partPrice">
				<div class="fl">优惠金额</div>
				<span class="fr">- ￥{{youhui}}.00</span>
			</div>
			<div class="pay">
				<div class="fl">实付金额</div>
				<span class="fr">￥140.00</span>
			</div>
		</div>
		<!--提交预约-->
		<div class="bottomBtn">
			<router-link to="/paySubmit">提交预约</router-link>
			<!--<a href="#appointment">提交预约</a>-->
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				score:1,
				title:'确认订单',
				//客户姓名
				clientName:'朱小明',
				//联系电话
				clientMobile:'17191191610',
				//地址
				clientposition:' 苏州市 观前街 庆元坊20号江苏省 苏州市 观前街 庆元坊20号',
				//优惠券
				youhui:10,
				payOne:150.00,
				//实付金额
				payLast:''
			}
		},
		methods:{
			add:function(){
				this.score++; 
			},
			reduce:function(){
				if(this.score==1){
					return false;
				}
				this.score--;
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
		position: relative;
	}
	.clientPosition span{
		width:6rem ;
		font-size:0.25rem ;
		line-height:0.3rem ;
		color:#333333 ;
		text-align: left;
		margin-top: 0.1rem;
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
	/*底部彩条*/
	.imgBottom{
		width: 100%;
		height: 0.06rem;
		background: url("../../static/45@3x.png") no-repeat;
		background-size: 100% 100%;
	}
	/*选择时间*/
	.serveTime{
		width:7rem ;
		height:0.9rem ;
		padding: 0 .25rem;
		margin-bottom: 0.2rem;
		background: #FFFFFF;
		display: inline-block;
	}
	.serveTime a{
		display: inline-block;
		float: right;
	}
	.serveTime span{
		width:1.2rem ;
		height: 0.9rem;
		padding-left: 0.07rem;
		font-size: 0.24rem;
		line-height: 0.9rem;
		text-align: left;
		color: #4E4E4E;
		
	}
	.serveTime img{
		width:0.12rem;
		height:0.22rem;
		margin-top:0.34rem ;
		float: right;
	}
	.serveTime div{
		width: 4rem;
		height: 100%;
		text-align: right;
		font-size: 0.26rem;
		line-height: 0.9rem;
		color: #d6d6d6;
		margin-right: 0.28rem;
	}
	
	/*选择服务数量*/
	.serveCount{
		width: 7rem;
		display: inline-block;
		padding: 0 .25rem;
		background: #FFFFFF;
		overflow: hidden;
		margin-bottom: 0.2rem;
	}
	.cont{
		width: 100%;
		display: inline-block;
		padding-bottom: 0.2rem;
	}
	/*左边部分*/
	.serveLeft{
		display: inline-block;
		float: left;
	}
	/*服务图片*/
	.serveBack{
		width:1.4rem ;
		height:1.4rem ;
		margin-top: 0.2rem;
	}
	.serveBack img{
		width: 100%;
		height: 100%;
	}
	.serveTitle{
		width:3rem ;
		height: 1.4rem;
		margin: .2rem 0 0 .25rem;
		text-align: left;
		
	}
	.serveTitle div{
		width: 3rem;
		height: 0.45rem;
		font-size:0.24rem ;
		line-height:0.45rem ;
		color:#4e4e4e ;
		margin-bottom: 0.1rem;
		
	}
	.serveTitle p{
		width:3rem ;
		height:0.5rem ;
		font-size: 0.2rem;	
		line-height:0.5rem ;
		color: #adadad;
	}
	.serveTitle span{
		width: 3rem;
		height: 0.26rem;
		font-size: 0.26rem;
		color:#ff5400 ;
	}
	/*右边*/
	.serveRight{
		width: 2rem;
		height:1.4rem;
	}
	.serveBtn{
		width: 2rem;
		height: 0.6rem;
		margin-top: 1rem;
	}
	.serveBtn div{
		width: 0.6rem;
		height: 0.6rem;
		background: #efefef;
		font-size:0.25rem ;
		line-height: 0.6rem;
	}
	.btnLeft{
		color:#aaaaaa;
	}
	.btnRight{
		color:#666666;
	}
	.serveBtn span{
		width: 0.7rem;
		height: 0.6rem;
		background:#efefef ;
		display: inline-block;
		font-size: 0.3rem;
		color: #333333;
		line-height:0.6rem ;
	}
	/*优惠卷*/
	.serveBottom{
		width: 7rem;
		border-top: 2px solid #f2f2f2;
		height: 0.88rem;
		display: block;
		background: #FFFFFF;
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
	/*金额*/
	.footPart{
		width: 7rem;
		padding: 0 0.25rem;
		background: #FFFFFF;
		display: inline-block;
		
	}
	.partPrice{
		width: 7rem;
		height: 0.24rem;
		margin-top: 0.28rem;
		display: block;	
	}
	.partPrice div{
		width:1.5rem;
		height: 0.24rem;
		font-size: 0.24rem;
		text-align: left;
		color:#adadad ;
	}
	.partPrice span{
		width:1.5rem;
		height: 0.24rem;
		font-size: 0.24rem;
		text-align: right;
		color:#adadad ;
	}
	/*支付金额*/
	.pay{
		width: 7rem;
		height: 0.88rem;
		border-top: 2px solid #f2f2f2;
		margin-top: 0.28rem;
	}
	.pay div{
		width:1.5rem;
		height: 0.26rem;
		font-size: 0.26rem;
		text-align: left;
		color:#222222 ;
		line-height: 0.88rem;
	}
	.pay span{
		width:1.5rem;
		height: 0.26rem;
		font-size: 0.26rem;
		text-align: right;
		color:#ff8244 ;
		line-height: 0.88rem;
	}
	/*提交预约*/
	.bottomBtn{
		width: 6.9rem;
		height: 0.8rem;
		background: #2f94f4;
		border-radius: 0.5rem;
		margin: 2.6rem 0.3rem 0.28rem;
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