<template>
	<div id="box">
		<div class="headPart">
			<div class="headCont">
				<a href="#first">
					<span class="fl"></span>
				</a>
				<p>城市选择</p>
			</div>
		</div>
		<!--城市列表-->
		<div class="cityChose">
			<span>已开通城市</span>
			<ul class="positionCont">
				<li class="cityList fl" v-for="(item,index) in cityList" :key="index">
					<span @click="chooseCity(item)">{{item.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				cityList:[]
			}
		},
		created() {
			if(this.$storage.get('openCitys')) {
				this.cityList = this.$storage.get('openCitys')
				console.log(this.cityList)
			}
		},
		methods: {
			chooseCity(item) {
				this.$storage.set('currCity', item)
				this.$router.go(-1)
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
	/*头部*/
	.headPart{
		width: 100%;
		height: 0.92rem;
		background: #FFFFFF;
		overflow: hidden;
	}
	.headCont{
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
	}
	.headCont a{
		display: block;
	}
	.headCont span{
		color: #222222;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../static/close.png");
		background-size: 100% 100%;
	}
	.headCont p{
		height: 0.32rem;
		color: #222222;
		font-size: 0.32rem;
	}
	/*已开通城市*/
	.cityChose{
		width: 100%;
		height: 12.42rem;
		display: inline-block;
		background:#f5f5f9;
	}
	.cityChose span{
		width: 7.04rem;
		height: 0.96rem;
		font-size: 0.22rem;
		color: #4c4c4d;
		line-height: 0.96rem;
		text-align: left;
		display: block;
		margin: 0 auto;
	}
	.positionCont{
		width: 7.2rem;
		margin-left: 0.25rem;
		overflow: hidden;
	}
	.positionCont li{
		width: 2.2rem;
		height: 0.7rem;
		margin: 0 0.2rem 0.2rem 0;
		background: #FFFFFF;
	}
	.positionCont span{
		text-align: center;
		width: 100%;
		height: 100%;
		display: block;
		font-size: 0.28rem;
		line-height:0.7rem;
		color:#222222 ;
		
	}
</style>