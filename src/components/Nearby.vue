<template>
	<div id="box">
		<!--顶部-->
		<Header title="附近" back="hidden"></Header>
		<!--顶部导航-->
		<div class="navBox">
			<ul class="nav" :style="menuWidth">
				<li class="navCont" v-for="(item, index) in menus">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="nav-blank"></div>
		
		<router-view></router-view>
		<!--底部导航-->
		<Menu actived="second"></Menu>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		data() {
			return {
				// 一级菜单
				menus: [],
				title: '附近',
				navCont:[
					{
						navSrc:'/nearby/vicinityOne',
						navText:'家电维修'
					},{
						navSrc:'/nearby/vicinityTwo',
						navText:'家电清洗'
					},{
						navSrc:'/nearby/vicinityThree',
						navText:'家电维修'
					},{
						navSrc:'/nearby/vicinityFour',
						navText:'家电保洁'
					},{
						navSrc:'/nearby/vicinityFive',
						navText:'家电维修'
					},{
						navSrc:'/nearby/vicinitySix',
						navText:'清洁'
					},{
						navSrc:'/nearby/vicinitySeven',
						navText:'家电安装'
					}
				]
			}
		},
		computed: {
			menuWidth() {
				let menuWidth = this.menus.length * 1.5
				if (menuWidth < 7.5) {
					menuWidth = 7.5
				}
				return {width: menuWidth + 'rem'}
			}
		},
		created() {
			let self = this
			this.$api.getNearbyMenu(function(response) {
				for (var i in response.result.menus) {
					self.menus.push({
						name: response.result.menus[i].name
					})
				}
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
		overflow: hidden;
		color: #222222;
		position: relative;
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
	.nav-blank {
		height: .8rem;
	}
	.navBox {
		position: fixed;
		top: .92rem;
		width: 7.5rem;
		height: 0.8rem;
		overflow-x: auto;
	}
	
	.nav {
		height: 0.8rem;
		background: #FFFFFF;
	}
	
	.nav li {
		font-size: 0.26rem;
		line-height: 0.8rem;
		float: left;
		color: #666;
		margin-left: 0.3rem;
		
	}
	.routerLink{
		display: block;
		width: 1.2rem;
		height: 100%;
		font-size: 0.26rem;
		line-height: 0.8rem;
		color: #666;
		
	}
	.router-link-active {
		font-size: 0.26rem;
		display: block;
		color: #2787f4;
		border-bottom: 1px solid #2787f4;
		z-index: 10000;
	}
</style>