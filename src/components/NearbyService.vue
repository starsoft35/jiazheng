<template>
	<Pagination :render="render" :param="pagination" :need-token="true" uri="/serviceMenu/getServiceByFirstCategory">
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
	
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				pagination: {
                    content: [],
                    page: 1, 
					pageSize: 10,
					param: {
						params: {
							firstCategoryId: 1
						}
					}
                }
			}
		},
		methods: {
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