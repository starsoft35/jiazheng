<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<span class="fl" onclick="window.history.go(-1)"></span>
				<div>保存</div>
				<p v-text="title"></p>
			</div>
		</div>
		<!--添加信息-->
		<div class="addPart">
			<div class="addCont">
				<span>联系人</span>
				<input class="nameText" type="text" placeholder="请输入姓名" />
			</div>
			<div class="addCont">
				<span>联系电话</span>
				<input class="nameText" type="text" placeholder="请输入联系方式" />
			</div>
			<div class="addCont">
				<span>联系电话</span>
				<img src="../../static/34@2x.png" />
				<input class="nameText" type="text" placeholder="请输入您的小区或者大厦名称" />
			</div>
			<textarea class="positionText" placeholder="请填写详细门牌地址~"></textarea>
		</div>
		<!--设为默认地址-->
		<div class="setPosition">
			<span class="setTop">设为默认地址</span>
			<span class="setBottom">注 : 每次下单时会使用该地址</span>
			<div class="setBtn">
				<div id="div1" class="open1">
					<div id="div2" class="open2" @click="btn"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: '添加服务地址'
			}
		},
		methods: {
			btn:function() {
				var div2=document.getElementById("div2");
        		var div1=document.getElementById("div1");
				div1.className = (div1.className == "close1") ? "open1" : "close1";
				div2.className = (div2.className == "close2") ? "open2" : "close2";
				return
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
		/*background: #CCCCCC;*/
		overflow: hidden;
		margin-bottom: 0.3rem;
	}
	
	.headCont {
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
		overflow: hidden;
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
		font-size: 0.3rem;
	}
	
	.headCont div {
		display: inline-block;
		width: 0.7rem;
		height: 0.32rem;
		float: right;
		color: #FFFFFF;
		font-size: 0.26rem;
		line-height: 0.32rem;
	}
	/*添加信息*/
	
	.addPart {
		width: 7rem;
		display: inline-block;
		padding: 0 0.25rem;
		background: #FFFFFF;
	}
	
	.addCont {
		width: 7rem;
		height: 0.88rem;
		margin: auto;
		border-bottom: 2px solid #f2f2f2;
	}
	
	.addCont span {
		font-size: 0.26rem;
		color: #222222;
		float: left;
		margin-top: 0.33rem;
	}
	
	.addCont img {
		margin: 0.33rem 0 0 0.25rem;
		width: 0.12rem;
		height: 0.22rem;
		float: right;
	}
	
	.nameText {
		border: none;
		float: right;
		width: 5rem;
		font-size: 0.26rem;
		margin-top: 0.33rem;
		color: #cccccc;
		text-align: right;
	}
	/*输入框*/
	
	.positionText {
		width: 7rem;
		height: 1rem;
		border: none;
		margin: 0.3rem 0;
	}
	/*设为默认地址*/
	
	.setPosition {
		width: 7rem;
		height: 1.2rem;
		padding: 0 .25rem;
		background: #FFFFFF;
		position: relative;
		margin-top: 0.3rem;
		display: ;
	}
	
	.setTop {
		position: absolute;
		left: 0.25rem;
		top: 0.25rem;
		font-size: 0.26rem;
		color: #222222;
	}
	
	.setBottom {
		position: absolute;
		left: .25rem;
		bottom: 0.2rem;
		font-size: 0.22rem;
		color: #CFCFCF;
	}
	
	.setBtn {
		position: absolute;
		right: 0.3rem;
		top: 0.27rem;
	}
	/*按钮引入*/
	
	#div1 {
		width: 1rem;
		height: 0.6rem;
		border-radius: 0.5rem;
		position: relative;
	}
	
	#div2 {
		width: 0.56rem;
		height: 0.56rem;
		border-radius: 0.48rem;
		position: absolute;
		background: #FFFFFF;
		box-shadow: 0 0.02 0.04 rgba(0, 0, 0, 0.4);
	}
	
	.open1 {
		background: rgba(0, 184, 0, 0.8);
	}
	
	.open2 {
		top: 0.02rem;
		right: 0.01rem;
	}
	
	.close1 {
		background: rgba(255, 255, 255, 0.4);
		border: 0.02rem solid rgba(0, 0, 0, 0.15);
		border-left: transparent;
	}
	
	.close2 {
		left: 0;
		top: 0;
		border: 2px solid rgba(0, 0, 0, 0.1);
	}
</style>