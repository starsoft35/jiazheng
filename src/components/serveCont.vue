<template>
	<div id="box">
		<Header :title="serveTitle"></Header>
		
		<div class="thingList">
			<Pagination :render="render" :param="pagination" :need-token="true" uri="/service/list">
	            <ul class="thingCont" style="margin-bottom: 1.5rem;" v-if="pagination.content.length>0">
					<li class="things" v-for="(item,index) in pagination.content" :key="index">
						<router-link :to="'/serviceDetails/' +item.id">
							<img :src="item.listImage"/>
							<div class="thingName">
								<div>{{item.title}}</div>
								<p>{{item.abstractContent}}</p>
								<span>{{item.price}}</span>
							</div>
						</router-link>
					</li>
				</ul>
	        </Pagination>
				
		</div>
		<div v-if="pagination.content.length == 0" class="none-data-tip">暂无该服务</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				menuId: undefined,
				serveTitle:'',
				serviceList:[],
				
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    param: {}
                },
			}
		},
		created() {
			this.menuId = this.$route.params.id
			this.pagination.param = {
				params:{
				    menuId: this.menuId,
				}
			}
//			this.$api.serviceList({
//	        	params:{
//				    menuId: this.menuId,
//				}
//		    },(res) => {
//		    	this.serviceList = res.result.serviceList.list
//		    	this.serveTitle = res.result.menuName
//		    })
		},
		methods: {
            render(res) {
                this.serveTitle = res.result.menuName
                res.result.serviceList.list.forEach((item) => {
                	this.pagination.content.push({
                        abstractContent: item.abstractContent,
                        id: item.id,
                        listImage: item.listImage,
                        price: item.price,
                        title: item.title
                    })
                })
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
	/*物品列表*/
	.thingList{
		width:100%;
		display: inline-block;
		
	}
	.thingList li{
		width: 7.3rem;
		height: 1.4rem;
		padding: 0.2rem 0;
		margin-left: 0.2rem;
		border-bottom: 1px solid #f2f2f2;
		position: relative;
		background: #FFFFFF;
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
		left:0rem ;
		top: 0.2rem;
	}
	/*右边内容*/
	.thingName{
		width: 5.5rem;
		height: 1.4rem;
		position: absolute;
		left: 1.7rem;
		top: 0.2rem;
		text-align: left;
	}
	/*商品名称*/
	.thingName div{
		width: 100%;
		height: 0.45rem;
		font-size:0.25rem ;
		line-height: 0.45rem;
		color: #222222;
		margin-bottom: 0.15rem;
	}
	/*介绍*/
	.thingName p{
		width: 100%;
		height: 0.45rem;
		font-size:0.2rem ;
		line-height: 0.45rem;
		color: #aaa;
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