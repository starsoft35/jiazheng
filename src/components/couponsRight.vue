<template>
	<div id="box">
		<div class="contBox" v-for="(contBox,index) in cont">
			<div class="LeftPart">
				<img src="../../static/ren.png"/>
				<span>{{contBox.moneyCounts}}</span>
			</div>
			<div class="partRight">
				<span>无门槛全场通用</span>
				<p>{{contBox.timeCont}}</p>
				<img class="rightImg" src="../../static/324234234@3x.png"/>
			</div>
		</div>
		
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'使用优惠券',
				cont:[
					{
						moneyCounts:'300',
						timeCont:'2017.05.03~2017.08.09',
						//左边背景
						LeftTrue:true,
						leftFalse:false,
						//右边图片
						rightImg:false
						
					},{
						moneyCounts:'200',
						timeCont:'2017.05.03~2017.08.09'
						
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
	.contBox{
		width:6.6rem;
		height:2rem ;
		margin:0.45rem 0.45rem 0;
		background: #FFFFFF;
		position: relative;
	}
	/*左边部分*/
	.LeftPart{
		width: 2.3rem;
		height: 2rem;
		background: url("../../static/12334@3x.png") no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	.LeftPart img{
		width:0.20rem ;
		height:0.25rem ;
		position: absolute;
		left: 0.27rem;
		bottom:0.6rem ;
	}
	.LeftPart span{
		font-size: 0.8rem;
		color: #FFFFFF;
		line-height: 0.8rem;
		position: absolute;
		left: 0.53rem;
		bottom:0.45rem ;
	}
	/*未过期右边 */
	/*右边部分*/
	.partRight{
		width: 4.3rem;
		height: 2rem;
		position: absolute;
		right:0;
		top: 0;
	}
	.partRight span{
		position: absolute;
		left:0.25rem ;
		top:0.37rem ;
		font-size:0.26rem ;
		color: #222222;
	}
	.partRight p{
		position: absolute;
		left:0.25rem;
		bottom: 0.38rem;
		font-size: 0.2rem;
		color: #999999;
	}
	/*已过期图片*/
	.rightImg{
		position: absolute;
		right: 0.5rem;
		top: 0.42rem;
		width: 2rem;
		height: 1.2rem;
		z-index: 10000;
	}
</style>