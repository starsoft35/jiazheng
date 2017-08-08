<template>
	<div id="box">
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
						thingTitle:'小明西一街',
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
	/*物品列表*/
	.thingList{
		width:7rem;
		margin: 0 0.25rem;
		display: inline-block;
		
	}
	.thingList li{
		
		width: 7rem;
		height: 1.8rem;
		margin-top: 0.3rem;
		background: #FFFFFF;
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
		left:0.2rem ;
		top: 0.2rem;
	}
	/*右边内容*/
	.thingName{
		width: 5.5rem;
		height: 1.4rem;
		position: absolute;
		left: 1.85rem;
		top: 0.2rem;
		text-align: left;
	}
	/*商品名称*/
	.thingName div{
		width: 100%;
		height: 0.45rem;
		font-size:0.26rem ;
		line-height: 0.45rem;
		color: #222222;
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