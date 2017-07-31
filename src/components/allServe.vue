<template>
	<div id="box">
		<div class="headPart">
			<div class="headCont">
				<a href="#first">
					<span class="fl"></span>
				</a>
				<p>全部服务</p>
			</div>
		</div>
		<!--内容部分-->
		<div class="serveBox">
			<ul class="boxLeft" id="box_Left">
				<li>
					<router-link to="/allServe/serveOne" class="routerLink">保洁服务</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveTwo" class="routerLink">家电维修</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveThree" class="routerLink">家电维修</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveFour" class="routerLink">家电维修</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveFive" class="routerLink">家电维修</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveSix" class="routerLink">家电维修</router-link>
				</li>
				<li>
					<router-link to="/allServe/serveSeven" class="routerLink">家电维修</router-link>
				</li>
				
			</ul>
			<div class="boxRight">
				<router-view></router-view>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				author:"我是一",
				liColor:'red',
				nowIndex:0
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#box {
		width: 100%;
		padding: 0px;
		margin: 0px;
		background: #f5f5f9;
	}
	/*头部导航条*/
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
	/*内容服务部分*/
	.serveBox{
		width: 100%;
		margin-top: 0.25rem;
		position: relative;
	}
	/*左边部分*/
	.boxLeft{
		width: 1.65rem;
		border-left: 1px solid #e5e5e5;
		/*background: #C9C9C9;*/
		position: absolute;
		left: 0;
		top: 0;
	}
	.boxLeft li{
		width:1.65rem ;
		height:0.5rem ;
		margin-bottom: 0.6rem;
		color:#4e4e4e ;
	}
	.routerLink{
		width:1.65rem ;
		height:0.5rem ;
		font-size:0.25rem;
		color: #7a7a7a;
		line-height: 0.5rem;
		display: block;
	}
	
	/*右边部分*/
	.boxRight{
		width: 5.45rem;
		position: absolute;
		right: 0.36rem;
		top: 0;
	}
	/*router-link 样式*/
	.router-link-active {
		color:#307cd9;
		font-size:0.22rem;
	}
</style>