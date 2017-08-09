<template>
	<div id="box">
		<Header title="全部服务" back="/first"></Header>
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
		height: 13.34rem;
		padding: 0px;
		margin: 0px;
		background: #fff;
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
		border-right: 1px solid #e5e5e5;
		/*background: #C9C9C9;*/
		position: absolute;
		left: 0;
		top: -0.25rem;
	}
	.boxLeft li{
		width:1.65rem ;
		height:0.5rem ;
		margin-top: 0.25rem;
		margin-bottom: 0.35rem;
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
		width: 5.25rem;
		position: absolute;
		right: 0.36rem;
		top: 0;
	}
	/*router-link 样式*/
	.router-link-active {
		color:#307cd9;
		font-size:0.24rem;
		width: 1.52rem;
		border-left: 0.06rem solid #2173d6;
	}
</style>