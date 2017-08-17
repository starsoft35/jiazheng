<template>
	<div id="box">
		<!--顶部-->
		<Header title="评价列表"></Header>
		<div class="headPart">
			
				
			<!--满意度-->
			<ul class="fontPart">
				<li class="partLeft">{{percent}}%</li>
				<li class="partRight">满意</li>
			</ul>
		</div>
		<!--用户评价-->
		<div class="ping" v-for="(item,index) in evaluateList" :key="index">
			<div class="client">
				<div class="clientMessage clear">
					<!--头像-->
					<div class="clientImg fl">
						<img :src="item.headImage"/>
						<span>{{item.nickName}}</span>
					</div>
					<!--星星-->
					<ul class="clientXing fr clear">
						<li class="clientPing active" v-for="n in item.starLevel">
							<!--<img src="@../../static/39@3x.png />-->
						</li>
						<li class="clientPing" v-for="n in  5-item.starLevel">
							<!--<img src="@../../static/39@3x.png" />-->
						</li>
					</ul>
				</div>
				<span>{{item.eTime}}</span>
				<p>{{item.content}}</p>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'评价列表',
				evaluateList: [],
				serviceId: undefined,
				percent: undefined
				
			}
		},
		created() {
			this.serviceId = this.$route.params.id
			this.$api.evaluateList({
	        	params:{
				    serviceId: this.serviceId
				}
		    },(res) => {
		    	this.evaluateList = res.result.list
		    	this.percent = parseInt(res.result.percent)
		    	
		    })
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
		background: url("../../static/banner.png") repeat-y top center;
		overflow: hidden;
		position: relative;
		top: -1px;
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
	/*满意度*/
	.fontPart{
		width: 7.5rem;
		height: 2.2rem;
		display: block;
		color: #FFFFFF;
		position: relative;
	}
	.partRight{
		position: absolute;
		right: 2.25rem;
		bottom: 0.8rem;
		text-align: right;
		font-size: 0.3rem;
		width: 0.7rem;
		height:0.3rem ;
	}
	.partLeft{
		position: absolute;
		right: 3rem;
		bottom: 0.8rem;
		text-align: right;
		font-size: 0.6rem;
		width: 2.35rem;
		height:0.6rem ;
	}
	.ping{
		width: 100%;
		display: inline-block;
		margin-bottom: 0.2rem;
		background: #FFFFFF;
	}
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
		height: 0.48rem;
		border-radius: 50%;
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
		float: left;
		margin-right: 0.08rem;
	}
	.clientPing.active{
		background-image: url(../../static/39@3x.png);
	}
	.clientPing{
		background: url(../../static/40@3x.png) no-repeat center;
		background-size: 100%;
	}
	.clientXing img{
		width:0.24rem;
		/*height: 0.24rem;*/
	}
	/*时间*/
	.client>span{
		width: 3rem;
		height: 0.2rem;
		font-size: 0.2rem;
		color: #999999;
	}
	.client p{
		width: 7rem;
		height: 0.25rem;
		margin: 0.25rem 0;
		font-size: 0.25rem;
		color: #222222;
	}
</style>