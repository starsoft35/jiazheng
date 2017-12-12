<template>
	<div id="box">
		<!--顶部-->
		<Header title="派单" operation="确认派单" :action="pendingWorker"></Header>

		<div class="page-content">
			<Pagination :render="render" :param="pagination" :need-token="true" uri="/user/pendingMan"  ref="pagination" :autoload="false">
	            <div v-if="pagination.content.length>0">
	            	<div class="contList" v-for="(list,index) in pagination.content" :key="index" @click="selectIndex = index">
						<ul class="contBox">
							<li class="list_one fl">{{ list.workname }} </li>
							<li class="list_two fl">{{ list.phone }} </li>
							<li class="list_three fl">{{ list.num }}单 </li>
							<li class="list_four fr" :class="{'active' : selectIndex == index}"></li>
						</ul>
					</div>	
	            </div>
	            <div class="none-data-tip" v-show="pagination.content.length == 0 && pagination.loadEnd">暂无可派单员工</div>
			</Pagination>  
			
		</div>
			
		
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data(){
			return {
				orderNo: undefined,

				pagination: {
					content: [],
					page: 1,
					pageSize: 25,
					loadEnd: false
				},
				selectIndex: 0
				
			}
		},
		created(){
      		this.orderNo = this.$route.params.id
  		},
  		mounted() {
  			this.$refs.pagination.refresh()
  		},
		methods: {

			render(response){
				for(var i in response.result.list){
					this.pagination.content.push(response.result.list[i])
				}
			},
			pendingWorker() {
				
				this.$api.updateOrderStatus({
					flag: 2,
					orderNo: this.orderNo,
					type: 2,
					workerId: this.pagination.content[this.selectIndex].userId
				}, (res) => {
					Toast({
					  message: '派单成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 1000
					})
                    setTimeout(() => {
						this.$router.go(-1)
						this.$router.replace('/distribute/' + '1')
					},500)
				})
			}

		},
		


	}
</script>

<style scoped>
	.page-content{
		position: absolute;
		width: 100%;
		top: 0.92rem;
		bottom: 0;
		left: 0;
		overflow-y: auto;
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
		margin: 0.3rem 0.25rem;
		/*border: 1px solid red;*/
	}
	.headCont a{
		display: block;
	}
	.spanLeft{
		color: #FFFFFF;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../../static/return.png");
		background-size: 100% 100%;
	}
	.spanRight{
		color:#fff;
		font-size: 0.26rem;
		line-height: 0.32rem;
	}
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/*列表*/
	.contList{
		width: 7.5rem;
		height: 0.88rem;
		background: #FFFFFF;
		border-bottom: 1px solid #f2f2f2;
		overflow: hidden;
	}
	.contBox{
		width: 7rem;
		height: 0.4rem;
		margin: 0.24rem 0.25rem;
		font-size: 0.26rem;
		color: #222222;
		line-height: 0.4rem;
		text-align: left;
	}
	.list_one{
		width: 1.8rem;
	}
	.list_two{
		width: 3.1rem;
	}
	.list_four{
		width:0.4rem ;
		height:0.4rem;
		border: 1px solid #ddd;
		border-radius: 50%;
		box-sizing: border-box;
	}
	.list_four.active{
		border: 0;
		background: url("../../../static/35@3x.png") no-repeat;
		background-size: 100% 100%;
	}
	/* .selected_img{
		background: url("../../../static/35@3x.png") no-repeat;
		background-color: none;
	} */
</style>