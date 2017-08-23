<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<router-link to="/Distribute">
					<span class="spanLeft fl"></span>
				</router-link>
				<router-link to="/Distribute">
					<span class="spanRight fr" @click="confirmSend(list.userId)">确认派单</span>
				</router-link>
				<p v-text="title"></p>
			</div>
		</div>

		
		<Pagination :render="render" :param="pagination" :need-token="true" uri="/user/pendingMan"  ref="pagination">
            <!--列表-->
			<div class="contList" v-for="(list,index) in list">
				<ul class="contBox">
					<li class="list_one fl">{{ list.workname }} </li>
					<li class="list_two fl">{{ list.phone }} </li>
					<li class="list_three fl">{{ list.num }}单 </li>
					<li class="list_four fr"></li>
				</ul>
			</div>
			
		</Pagination>  

		
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data(){
			return {
				title:'派单',
				
                options: [],
				
				payWayId: '',

				list:[],

				pagination: {
					content: [],
					page: 1,
					pageSize: 15,
				},
				
			}
		},
		created() {
			
			
		},
		mounted(){
      		console.log(this.$route.params) 
  		},
		methods: {

			render(response){
				for(var i in response.result.list){
					this.list.push(response.result.list[i])
				}
			},
			selectedPeople(){
				console.log(value)
			},
			confirmSend(id){
				this.$router.push('/Distribute/')
			}

		},
		


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
		border-bottom: 0.02rem #f2f2f2;
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
		background: url("../../../static/35@3x.png") no-repeat;
		background-size: 100% 100%;
	}
	/* .selected_img{
		background: url("../../../static/35@3x.png") no-repeat;
		background-color: none;
	} */
</style>