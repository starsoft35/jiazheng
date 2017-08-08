<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<router-link to="/first">
					<span class="fl"></span>
				</router-link>
				<p v-text="title"></p>
			</div>
		</div>
		<!--订单-->
		<div class="orderBox" v-for="(orderBox,index) in orderCont" v-show="hidden">
			<div class="topMessage clear">
				<span class="topLeft fl">{{orderBox.topTime}}</span>
				<span class="topRight fr">{{orderBox.topText}}</span>
			</div>
			<div class="cont">
				<!--左边图片-->
				<div class="serveLeft">
					<div class="serveBack fl">
						<img :src="orderBox.serveImg" />
					</div>
					<div class="serveTitle fl">
						<div>{{orderBox.serveTitle}}</div>
						<span v-bind:class="{spanOneStyle:orderBox.contOne,spanTwoStyle:orderBox.contTwo}">{{orderBox.serveCont}}</span>
						<p v-show="orderBox.pricePart">￥30.00/小时</p>
					</div>
				</div>
				<span class="numbers" v-show="orderBox.numberPart">×5</span>
			</div>
			<div class="middlePart">
				<span>￥{{orderBox.spanOne}}</span>
				<span>合计:</span>
				<span>共计{{orderBox.spanTwo}}项服务</span>
			</div>
			<div class="bottomPart">
				<router-link :to="orderBox.rightBtnSrc">
					<div v-bind:class="{ colorOne: orderBox.oneStyle, colorTwo: orderBox.twoStyle }">{{orderBox.rightBtn}}</div>
				</router-link>
				<router-link :to="orderBox.leftBtnSrc">
					<div class="colorOne" v-show="orderBox.bottomBtn">取消订单</div>
				</router-link>
			</div>
		</div>
		
		<div class="kong"></div>
		<!--底部导航-->
		<ul class="nav_bottm">
			<li>
				<a href="#">
					<img src="../../static/21@3x.png" />
					<div>首页</div>
				</a>
			</li>
			<li>
				<a href="#second">
					<img src="../../static/15@3x.png" alt="附近" />
					<div>附近</div>
				</a>
			</li>
			<li>
				<router-link to="/third">
					<img src="../../static/19@3x.png" />
					<div style="color: #258ef3;">订单</div>
				</router-link>
			</li>
			<li>
				<a href="#second">
					<img src="../../static/17@3x.png" alt="我的" />
					<div>我的</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: '订单',
				hidden:true,
				orderCont:[
				//有价格待付款样式
					{
						topTime:'2017-07-09 01:25',
						topText:'待付款',
						serveImg:'@../../static/back.png',
						serveTitle:'家庭保洁',
						serveCont:'等待工人与您确认服务信息',
						spanOne:'0.00',
						spanTwo:'1',
						rightBtn:'去支付',
						rightBtnSrc:'/paySubmitTwo',
						leftBtnSrc:'/first',
						//按钮的有颜色
						oneStyle:false,
						twoStyle:true,
						//有价格时价格和数量的显示
						pricePart:true,
						numberPart:true,
						//有价格时左边的按钮
						bottomBtn:true,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:false,
						contTwo:true
					},
					//有价格已付款样式
					{
						topTime:'2017-07-09 01:25',
						topText:'服务完成',
						serveImg:'@../../static/back.png',
						serveTitle:'家庭保洁',
						serveCont:'等待工人与您确认服务信息',
						spanOne:'0.00',
						spanTwo:'1',
						rightBtn:'评价',
						rightBtnSrc:'/paySubmitTwo',
						leftBtnSrc:'/first',
						//按钮的有颜色
						oneStyle:false,
						twoStyle:true,
						//有价格时价格和数量的显示
						pricePart:true,
						numberPart:true,
						//有价格时左边的按钮
						bottomBtn:false,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:false,
						contTwo:true
					},
					//无价格等待派遣工人
					{
						topTime:'2017-07-09 01:25',
						topText:'等待派遣工人',
						serveImg:'@../../static/back.png',
						serveTitle:'家庭保洁',
						serveCont:'等待工人与您确认服务信息',
						spanOne:'0.00',
						spanTwo:'1',
						rightBtn:'取消订单',
						rightBtnSrc:'/paySubmitTwo',
						leftBtnSrc:'/first',
						//按钮的有颜色
						oneStyle:true,
						twoStyle:false,
						//价格和数量的显示
						pricePart:false,
						numberPart:false,
						//有价格时左边的按钮
						bottomBtn:false,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:true,
						contTwo:false
					},
					//无价格等待确认服务完成
					{
						topTime:'2017-07-09 01:25',
						topText:'等待确认服务完成',
						serveImg:'@../../static/back.png',
						serveTitle:'家庭保洁',
						serveCont:'等待工人与您确认服务信息',
						spanOne:'300.00',
						spanTwo:'1',
						rightBtn:'确认支付',
						rightBtnSrc:'/paySubmitTwo',
						leftBtnSrc:'/first',
						//按钮的有颜色
						oneStyle:false,
						twoStyle:true,
						//价格和数量的显示
						pricePart:false,
						numberPart:false,
						//有价格时左边的按钮
						bottomBtn:false,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:true,
						contTwo:false
					},
					//无价格评价
					{
						topTime:'2017-07-09 01:25',
						topText:'服务完成',
						serveImg:'@../../static/back.png',
						serveTitle:'家庭保洁',
						serveCont:'等待工人与您确认服务信息',
						spanOne:'300.00',
						spanTwo:'1',
						rightBtn:'评价',
						rightBtnSrc:'/paySubmit',
						leftBtnSrc:'/first',
						//按钮的有颜色
						oneStyle:false,
						twoStyle:true,
						//价格和数量的显示
						pricePart:false,
						numberPart:false,
						//有价格时左边的按钮
						bottomBtn:false,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:true,
						contTwo:false
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
	/*订单*/
	
	.orderBox {
		width: 7.5rem;
		display: inline-block;
		background: #FFFFFF;
		color: #222222;
		margin-top: 0.2rem;
	}
	
	.topMessage {
		width: 7rem;
		padding: 0 .25rem;
		height: 0.8rem;
		padding: 0 0.25rem;
	}
	
	.topLeft {
		font-size: 0.2rem;
		text-align: left;
		line-height: 0.8rem;
	}
	.topRight {
		font-size: 0.22rem;
		color: #2173d6;
		text-align: right;
		line-height: 0.8rem;
	}
	/*图片*/
	
	.cont {
		width: 7rem;
		padding: 0 .25rem;
		display: inline-block;
		padding-bottom: 0.2rem;
		background: #F9F9F9;
	}
	.numbers{
		float: right;
		font-size: 0.2rem;
		color: #222222;
		margin-top:1.3rem ;
	}
	/*左边部分*/
	
	.serveLeft {
		display: inline-block;
		float: left;
	}
	/*服务图片*/
	
	.serveBack {
		width: 1.4rem;
		height: 1.4rem;
		margin-top: 0.2rem;
	}
	
	.serveBack img {
		width: 100%;
		height: 100%;
	}
	
	.serveTitle {
		width: 3rem;
		height: 1.4rem;
		margin: .2rem 0 0 .25rem;
		text-align: left;
	}
	
	.serveTitle div {
		width: 5rem;
		height: 0.45rem;
		font-size: 0.26rem;
		line-height: 0.45rem;
		color: #222222;
	}
	/*中间部分样式 */
	/*样式一*/
	/*无价格*/
	.spanOneStyle{
		width: 6rem;
		display: block;
		font-size: 0.22rem;
		color: #000000;
		margin-top: 0.2rem;
	}
	/*有价格时的 单价*/
	.serveTitle p{
		font-size: 0.26rem;
		color: #222222;
		margin-top: 0.2rem;
	}
	/*样式二*/
	/*有价格*/
	.spanTwoStyle{
		width: 6rem;
		display: block;
		font-size: 0.2rem;
		color: #acacac;
		margin-top: 0.1rem;
	}
	.middlePart {
		width: 7rem;
		height: 0.8rem;
		padding: 0 .25rem;
	}
	.middlePart span {
		float: right;
		font-size: 0.24rem;
		color: #222222;
		line-height: 0.8rem;
		margin: 0 0.05rem;
	}
	.bottomPart{
		border-top: 2px solid #e5e5e5;
		width: 7rem;
		height: 0.8rem;
		margin: 0 .25rem;
	}
	.bottomPart div{
		width: 1.3rem;
		height: 0.5rem;
		float: right;
		/*color: #222222;*/
		font-size: 0.24rem;
		line-height: 0.5rem;
		border-radius: 0.5rem;
		/*border: 1px solid #e5e5e5;*/
		margin-top: 0.1rem;
		margin-left: 0.2rem;
	}
	/*取消订单样式*/
	.colorOne{
		border: 1px solid #c5c5c5;
		color: #222222;
		font-size: 0.24rem;
	}
	/*有颜色样式*/
	.colorTwo{
		border: 1px solid #4d8fde;
		color: #4d8fde;
		font-size: 0.24rem;
	}
	.bottomPart a{
		display: block;
	}
</style>