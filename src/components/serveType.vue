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
		<!--服务列表-->
		<div class="serveList">
			<div class="serveBox" v-for="(serveBox,index) in msg">
				<div class="serveTitle fl" v-text="serveBox.serveTitle"></div>
				<div class="serveBtn fr">
					<img :src="serveBox.imgSrc" />
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: '服务类型',
				msg: [
					{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/35@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
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
	
	.serveList {
		width: 7rem;
		display: inline-block;
		padding: 0 .25rem;
		overflow: hidden;
		background: #FFFFFF;
	}
	
	.serveBox {
		width: 7rem;
		height: 0.88rem;
		border-bottom: 2px solid #f2f2f2;
		font-size: 0.26rem;
		color: #222222;
	}
	
	.serveTitle {
		width: 3rem;
		height: 0.26rem;
		margin-top: 0.33rem;
		text-align: left;
	}
	
	.serveBtn {
		width: 0.4rem;
		height: 0.4rem;
		margin-top: 0.3rem;
	}
	
	.serveBtn img {
		width: 100%;
		height: 100%;
	}
</style>