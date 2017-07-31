<template>
	<div id="box">
		<div class="headPart">
			<div class="headCont">
				<a href="#">
					<span class="fl" onclick="window.history.go(-1)"></span>
				</a>
				<p v-text="serveTitle"></p>
			</div>
		</div>
		<div class="thingList">
			<ul class="thingCont">
				<li class="things" v-for="(things,index) in things">
					<a :href="things.thingSrc">
						<img :src="things.thingImg"/>
						<div class="thingName">
							<div v-text="things.thingTitle"></div>
							<p v-text="things.thingIntro"></p>
							<span v-text="things.thingSprice"></span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				serveTitle:'洗衣机精洗',
				things:[
					{
						thingSrc:'# serviceDetails',
						thingImg:'@../../static/11@3x.png',
						thingTitle:'波轮洗衣机',
						thingIntro:'内芯及外表清洗',
						thingSprice:'￥30.00/台'
					},{
						thingSrc:'#second',
						thingImg:'@../../static/11@3x.png',
						thingTitle:'波轮洗衣机',
						thingIntro:'内芯及外表清洗',
						thingSprice:'￥30.00/台'
					},{
						thingSrc:'#second',
						thingImg:'@../../static/11@3x.png',
						thingTitle:'波轮洗衣机',
						thingIntro:'内芯及外表清洗',
						thingSprice:'￥30.00/台'
					},{
						thingSrc:'#second',
						thingImg:'@../../static/11@3x.png',
						thingTitle:'波轮洗衣机',
						thingIntro:'内芯及外表清洗',
						thingSprice:'￥30.00/台'
					},{
						thingSrc:'#second',
						thingImg:'@../../static/11@3x.png',
						thingTitle:'波轮洗衣机',
						thingIntro:'内芯及外表清洗',
						thingSprice:'￥30.00/台'
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
	/*物品列表*/
	.thingList{
		width:100%;
		display: inline-block;
		background: #FFFFFF;
	}
	.thingList li{
		width: 7.3rem;
		height: 1.4rem;
		padding: 0.2rem 0;
		margin-left: 0.2rem;
		border-bottom: 1px solid #f2f2f2;
		position: relative;
	}
	.thingList a{
		width: 100%;
		height: 100%;
		display: block;
	}
	/*左边图片*/
	.thingList img{
		width:1.40rem ;
		height:1.40rem ;
		position: absolute;
		left:0rem ;
		top: 0.2rem;
	}
	/*右边内容*/
	.thingName{
		width: 5.5rem;
		height: 1.4rem;
		position: absolute;
		left: 1.7rem;
		top: 0.2rem;
		text-align: left;
	}
	/*商品名称*/
	.thingName div{
		width: 100%;
		height: 0.45rem;
		font-size:0.25rem ;
		line-height: 0.45rem;
		color: #222222;
		margin-bottom: 0.15rem;
	}
	/*介绍*/
	.thingName p{
		width: 100%;
		height: 0.45rem;
		font-size:0.2rem ;
		line-height: 0.45rem;
		color: #cfcfcf;
	}
	/*价格*/
	.thingName span{
		width: 100%;
		height: 0.36rem;
		font-size:0.28rem ;
		line-height: 0.36rem;
		color: #ff5400;
	}
</style>