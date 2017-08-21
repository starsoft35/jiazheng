<template>
	<div id="box">
		<!--顶部-->
		<Header title="附近" back="hidden"></Header>
		<!--顶部导航-->
		<div class="navBox">
			<ul class="nav" :style="menuWidth">
				<li class="navCont" v-for="(item, index) in menus" @click="changeMenu(index)">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="nav-blank"></div>
		
		<Pagination :render="render" :param="pagination" :autoload="false" :need-token="true" uri="/serviceMenu/getServiceByFirstCategory" ref="pagination">
			<div class="service-container">
				<div class="service" v-for="(item, index) in pagination.content">
					<img :src="item.icon"/>
					<div class="content">
						<div class="name">{{item.title}}</div>
						<div class="description" >{{item.description}}</div>
						<div class="price">¥ {{item.price}}</div>
					</div>
				</div>
			</div>
		</Pagination>
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
				pagination: {
                    content: [],
                    page: 1, 
					pageSize: 10,
					param: {
						params: {
							firstCategoryId: 5
						}
					}
                }
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
						name: response.result.menus[i].name,
						id: response.result.menus[i].id
					})
				}
				self.pagination.param.params.firstCategoryId = self.menus[0].id
				self.$refs.pagination.refresh()
			})
		},
		methods: {
			changeMenu(index) {
				this.pagination = {
                    content: [],
                    page: 1, 
					pageSize: 10,
					param: {
						params: {
							firstCategoryId: this.menus[index].id
						}
					}
				}
				console.info(this.pagination.param.params.firstCategoryId)
				this.$refs.pagination.refresh()
			},
			render(response) {
				for (var i in response.result.list) {
					this.pagination.content.push({
						id: response.result.list[i].id,
						icon: response.result.list[i].listImage,
						title: response.result.list[i].title,
						description: response.result.list[i].abstractContent,
						price: response.result.list[i].price
					})
				}
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
	.service-container {
		padding: .22rem;
	}
	.service-container .service {
		background: #FFF;
		margin-bottom: .22rem;
		border-radius: .12rem;
		padding: .22rem;
		text-align: left;
		height: 1.4rem;
	}
	.service img {
		width: 1.4rem;
		height: 1.4rem;
		float: left;
	}
	.service .content {
		margin-left: 1.82rem;
		color: #666;
		font-size: .26rem;
	}
	.content .name {
		font-size: .28rem;
	}
	.content .description {
		font-size: .26rem;
		color: #999;
		margin-top: .2rem;
	}
	.content .price {
		color: #FF5400;
		font-size: .28rem;
		margin-top: .1rem;
	}
</style>