<template>
	<div id="box">
		<Header :title="serveTitle"></Header>
		
		<div class="thingList">
			<Pagination :render="render" :param="pagination" :need-token="true" uri="/service/list">
	            <ul class="thingCont" style="margin-bottom: 1rem;" v-show="pagination.content.length>0">
					<li class="things" v-for="(item,index) in pagination.content" :key="index">
						<router-link :to="'/serviceDetails/' +item.id">
							<img :src="item.listImage"/>
							<div class="thingName">
								<div>{{item.title}}</div>
								<p v-html="item.abstractContent"></p>
								<span>&yen;{{item.price}}</span>
							</div>
						</router-link>
					</li>
				</ul>
	        </Pagination>
				
		</div>
		<div v-show="pagination.content.length == 0 && pagination.loadEnd" class="none-data-tip">暂无该服务</div>
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
                    param: {},
                    loadEnd: false
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
                res.result.list.forEach((item) => {
                	this.pagination.content.push(item)
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
		width: 100%;
		height: 1.8rem;
		padding: 0.2rem;
		border-bottom: 1px solid #f2f2f2;
		position: relative;
		background: #FFFFFF;
		padding-right: 0.5rem;
		box-sizing: border-box;
	}
	.thingList li:after{
		content: '';
		position: absolute;
		width: 0.3rem;
		height: 0.3rem;
		top: 50%;
		margin-top: -0.15rem;
		right: 0.2rem;
		background: url(../../static/34@3x.png) no-repeat center;
		background-size: auto 100%; 
	}
	.thingList a{
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
	}
	/*左边图片*/
	.thingList img{
		width:1.40rem ;
		height:1.40rem ;
		position: absolute;
		left:0rem ;
		box-sizing: border-box;
		border: 1px solid #eee;
	}
	/*右边内容*/
	.thingName{
		width: 5rem;
		height: 1.4rem;
		position: absolute;
		left: 1.7rem;
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
	.thingName>p{
		width: 100%;
		height: 0.45rem;
		font-size:0.24rem ;
		line-height: 0.45rem;
		color: #aaa;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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