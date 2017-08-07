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
		<!--顶部导航-->
		<div class="navBox">
			<ul class="nav">
				<li class="navCont" v-for="(navCont,index) in navCont">
					<router-link :to="navCont.navSrc" class="routerLink">{{navCont.navText}}</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	
	
	
	
	
	export default {
		data() {
			return {
				title: '附近',
				navCont:[
					{
						navSrc:'/vicinity/vicinityOne',
						navText:'家电维修'
					},{
						navSrc:'/vicinity/vicinityTwo',
						navText:'家电清洗'
					},{
						navSrc:'/vicinity/vicinityThree',
						navText:'家电维修'
					},{
						navSrc:'/vicinity/vicinityFour',
						navText:'家电保洁'
					},{
						navSrc:'/vicinity/vicinityFive',
						navText:'家电维修'
					},{
						navSrc:'/vicinity/vicinitySix',
						navText:'清洁'
					},{
						navSrc:'/vicinity/vicinitySeven',
						navText:'家电安装'
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
		overflow: hidden;
		color: #222222;
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
	/*顶部导航*/
	
	.navBox {
		position: relative;
		width: 7.5rem;
		height: 0.8rem;
	}
	
	.nav {
		width: 20rem;
		height: 0.8rem;
		background: #FFFFFF;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	
	.nav li {

		font-size: 0.26rem;
		line-height: 0.8rem;
		float: left;
		color: #222222;
		margin-left: 0.5rem;
		
	}
	.routerLink{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.26rem;
		line-height: 0.8rem;
		color: #222222;
		
	}
	.router-link-active {
		font-size: 0.26rem;
		display: block;
		color: #2787f4;
		border-bottom: 1px solid #2787f4;
		z-index: 10000;
	}
</style>