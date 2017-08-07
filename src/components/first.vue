<template>
	<div id="box">
		<div class="head">
			<!--地点按钮-->
			<div class="top-position">
				<a href="#positionChose">
					<span>苏州</span>
					<img src="../../static/1@3x.png"/>
				</a>
			</div>
			<!--搜索栏-->
			<div class="search">
				<!--<img src=""/>-->
				<a href="#search">
					<img src="../../static/38@3x.png"/>
					<span class="fa fa-search" aria-hidden="true">搜索你想要的商品</span>
				</a>
			</div>
			<!--右边-->
			<div class="join">
				<a href="#second">
					<img src="../../static/2@3x.png"/>
				</a>
			</div>
		</div>
		<!--banner 轮播-->
		<div class="banner">
			<!-- Swiper -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="#second">
							<img src="../../static/back.png"/>
						</a>
					</div>
					<div class="swiper-slide">
						<a href="#second">
							<img src="../../static/back.png"/>
						</a>
					</div>
					<div class="swiper-slide">
						<a href="#second">
							<img src="../../static/back.png"/>
						</a>
					</div>
					<!--<div class="swiper-slide">Slide 4</div>
					<div class="swiper-slide">Slide 5</div>
					<div class="swiper-slide">Slide 6</div>
					<div class="swiper-slide">Slide 7</div>
					<div class="swiper-slide">Slide 8</div>
					<div class="swiper-slide">Slide 9</div>
					<div class="swiper-slide">Slide 10</div>-->
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div>-->
				<!-- 如果需要滚动条 -->
				<!--<div class="swiper-scrollbar"></div>-->
			</div>
		</div>
		<!--nav-->
		<!--中部内容导航-->
		<div class="cont">
			<ul class="nav">
				<li class="nav_cont" v-for="(nav_cont,index) in data2">
					<a :href="nav_cont.goSrc">
						<img :src="nav_cont.src" alt="nav_cont.alt" />
						<span>{{nav_cont.vul}}</span>
					</a>
				</li>
			</ul>
		</div>
		<!--分享有礼与一键下单-->
		<div class="shareBox">
			<div class="share clear">
				<div class="shareCont fl">
					<a href="#second">
						<span>分享有礼</span>
						<p>分享获取优惠券</p>
						<img src="../../static/11@3x.png" alt="分享有礼"/>
					</a>
				</div>
				<div class="shareCont fr">
					<a href="#oneClick">
						<span>一键下单</span>
						<p>家电不知道怎么了</p>
						<img src="../../static/12@3x.png" alt="一键下单"/>
					</a>
				</div>
			</div>
		</div>
		<!--热门服务-->	
		<div class="serve">
			<div class="serveHead">
				<div class="serveCont">
					<img src="../../static/13@3x.png"/>
					<div>热门服务</div>
				</div>
			</div>
		</div>
		<!--热门服务菜单-->
		<ul class="serveOption">
			<li class="serveList" v-for="(serveList,index) in serve" :style="serveList.back">
				<div class="meng">
					<a :href="serveList.backSrc">
						<div v-text="serveList.title"></div>
						<span v-text="serveList.cont"></span>
						<!---->
					</a>
				</div>
<<<<<<< HEAD
			</li>
		</ul>
		<!--底部导航-->
		<ul class="nav_bottm">
			<li>
				<a href="#">
					<img src="../../static/14@3x.png" alt="首页"/>
					<div style="color: #258ef3;">首页</div>
				</a>
			</li>
			<li>
				<a href="#second">
					<img src="../../static/15@3x.png" alt="附近"/>
					<div>附近</div>
				</a>
			</li>
			<li>
				<router-link to="/third">
					<img src="../../static/16@3x.png" alt="订单"/>
					<div>订单</div>
				</router-link>
			</li>
			<li>
				<a href="#second">
					<img src="../../static/17@3x.png" alt="我的"/>
					<div>我的</div>
				</a>
			</li>
=======
			</li>
>>>>>>> aa7617a6f2de066307ca05fb12affcbc3bfcd8a2
		</ul>
		<!--底部导航-->
		<Menu></Menu>
		<!--空  撑开底部距离-->
		<div style="width: 100%;height: 1.2rem;"></div>
	</div>
</template>

<script type="text/javascript">
	window.onload = function() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			//      nextButton: '.swiper-button-next',
			//      prevButton: '.swiper-button-prev',
			paginationClickable: true,
			spaceBetween: 0,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
	}
	// 
	export default {
		data() {
			return {
				// 中间导航部分八个链接加数据
				data2: [{
						src: '@../../static/3@3x.png',
						vul: '保洁服务',
						goSrc:'#second',
						alt:''
					},
					{
						src: '@../../static/4@3x.png',
						vul: '家电维修',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/5@3x.png',
						vul: '家庭维修',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/6@3x.png',
						vul: '家电清洗',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/7@3x.png',
						vul: '管道疏通',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/8@3x.png',
						vul: '搬家速运',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/9@3x.png',
						vul: '家居保养',
						goSrc:'',
						alt:''
					},
					{
						src: '@../../static/10@3x.png',
						vul: '全部服务',
						goSrc:'#allServe',
						alt:''
					}
				],
				serve:[{
					//链接
					backSrc:'#second',
					//标题
					title:'空调清洗',
					//内容
					cont:'空调清洗时空调机的维护，保养得主要关键……',
					//背景
					back:'background: url("../../static/11@3x.png");background-size: 100% 100%;background-repeat: no-repeat;'
				},{
					backSrc:'#second',
					title:'空调清洗',
					cont:'空调清洗时空调机的维护，保养得主要关键……',
					back:'background: url("../../static/11@3x.png");background-size: 100% 100%;background-repeat: no-repeat;'
				},{
					backSrc:'#second',
					title:'空调清洗',
					cont:'空调清洗时空调机的维护，保养得主要关键……',
					back:'background: url("../../static/11@3x.png");background-size: 100% 100%;background-repeat: no-repeat;'
				}
				]
			}
		}
	}
</script>

<style scoped>
	/*外部*/
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	#box {
		width: 100%;
		padding: 0px;
		margin: 0px;
		background: #f5f5f9;
	}
	/*头部*/
	
	.head {
		width: 100%;
		height: 0.5rem;
		padding: 0.2rem 0rem;
		background: #2d92f4;
		position: relative;
	}
	/*地点按钮*/
	.top-position {
		width: 1.2rem;
		height: 0.9rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	.top-position span{
		width: 0.5rem;
		height: 0.9rem;
		font-size: 0.25rem;
		color: #FFFFFF;
		line-height: 0.9rem;
		position: absolute;
		left: 0.25rem;
		top: 0rem;
	}
	.top-position img{
		width:0.18rem ;
		height: 0.15rem;
		position: absolute;
		right:0.23rem ;
		top:0.35rem ;
	}
	/*搜索栏*/
	.search{
		margin-left: 1.23rem;
		width: 5.5rem;
		height: 0.5rem;
		background: #FFFFFF;
		border-radius: 0.25rem;
	}
	.search a{
		height: 100%;
		width: 95%;
		margin:0 auto;
		display: block;
		font-size: 0.21rem;
		color: #c9c9c9;
		line-height: 0.5rem;
	}
	.search img{
		width: 0.26rem;
		height: 0.26rem;
		margin: 0.15rem 0.1rem 0 0.24rem;
		float: left;
	}
	.search span{
		height:0.5rem;
		font-size: 0.25rem;
		line-height: 0.5rem;
		float: left;
	}
	/*右边商家入驻链接*/
	.join{
		width: 0.3rem;
		height: 0.13rem;
		position: absolute;
		right:0.24rem ;
		top:0.3rem ;
	}
	.join img{
		width: 0.3rem;
		height: 0.3rem;
	}
	/*轮播图*/
	.banner {
		width: 100%;
		height: 2.9rem;
		background: #CCCCCC;
		position: relative;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-slide a{
		width: 100%;
		height: 100%;
		display: block;
	}
	.swiper-slide img{
		width: 100%;
		height: 110%;
	}
	/*中间样式导航 八个链接*/
	.cont{
		width: 7.2rem;
		background: #FFFFFF;
		height: 3.6rem;
		margin:0 auto;
		display: block;
		border-radius: 0.35rem;
	}
	.nav {
		width: 100%;
		height: 100%;
		margin: auto;

	}
	
	.nav_cont {
		width: 1.5rem;
		height: 1.50rem;
		margin-left: 0.25rem;
		float: left;
		/*background: cadetblue;*/
	}
	.nav_cont a{
		display: block;
	}
	
	.nav_cont img {
		width: 0.8rem;
		/*height: 100px;*/
		margin: 0.2rem 0.3rem 0.1rem 0.3rem;
	}
	
	.nav_cont span {
		width: 100%;
		height: 0.25rem;
		color: #222222;
		text-align: center;
		font-size: 0.25rem;
		display: block;
	}
	/*分享有礼与一键下单*/
	.shareBox{
		width: 100;
		height: 2rem;
		margin: 0.2rem 0;
	}
	.share{
		width:7.3rem;
		height: 2rem;
		margin: 0 auto;
	}
	.shareCont{
		width: 3.6rem;
		height:2rem;
		position: relative;
		background: #FFFFFF;
	}
	.shareCont a{
		width: 100%;
		height: 100%;
		display: block;
	}
	.shareCont span{
		position: absolute;
		left: 0.18rem;
		top: 0.43rem;
		font-size: 0.28;
		color: #222222;
		display: block;
	}
	.shareCont p{
		position: absolute;
		left:0.18rem;
		top:1rem ;
		font-size:0.23rem ;
		color:#999999 ;
		display: block;
	}
	.shareCont img{
		width: 1.3rem;
		height: 1.3rem;
		position: absolute;
		right: 0.16rem;
		top: 0.5rem;
	}
	/*热门服务*/
	.serve{
		width: 100%;
	}
	/*热门服务顶部*/
	.serveHead{
		width: 100%;
		height: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
	}
	.serveCont{
		width:1.6rem ;
		height:0.3rem ;
	}
	.serveCont img{
		width: 0.30rem;
		float: left;
	}
	.serveCont div{
		width: 1.2rem;
		height:0.29rem;
		font-size:0.25rem ;
		float: right;
		color: #222222;
	}
	/*热门服务菜单*/
	.serveOption{
		width: 100%;
	}
	.serveList{
		width: 100%;
		height:2.6rem ;
		margin-bottom: 0.1rem;
		position: relative;
	}
	.meng{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.4;
	}
	.serveList a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.meng div{
		position: absolute;
		left:0.33rem ;
		bottom:0.7rem ;
		font-size: 0.28rem;
		color: #f7f7f8;
		
	}
	.serveList span{
		position: absolute;
		left:0.33rem ;
		bottom:0.25rem ;
		font-size: 0.2rem;
		color: #ababab;
	}
	
</style>