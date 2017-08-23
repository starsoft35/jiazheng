<template>
	<div class="box">
		
		<Pagination :render="render" :param="pagination" :need-token="true" uri="/serviceOrder/listForWorker">
			<div style="margin-bottom: 1.5rem;" v-if="pagination.content.length>0">
				<div class="contBox" v-for="(item,index) in pagination.content" :key="index">
					<!--姓名 电话-->
					<a :href="'tel:'+ item.userPhone " class="peopleName">
						<span>{{item.userName}}</span>
						<span>{{item.userPhone}}</span>
						<div></div>
					</a>
					<!--订单号-->
					<div style="padding: 0.15rem 0;">
						<div class="cont">
							<span class="contLeft">订单号：</span>
							<span class="contRight">{{item.orderNo}}</span>
						</div>
						<!--服务时间-->
						<div class="cont">
							<span class="contLeft">服务时间：</span>
							<span class="contRight">{{item.serviceTime}}</span>
						</div>
						<!--服务地址-->
						<div class="cont">
							<span class="contLeft">服务地址：</span>
							<span class="contRight position">{{item.serviceAddress.address}}</span>
							<a class="map-lnik" href="#">
								<span>去这里</span>
							</a>
						</div>
					</div>
					
					<!--服务详情-->
					<div class="thingList">
						<ul class="thingCont">
							<li class="things">
								<a>
									<img :src="item.serviceImage" />
									<div class="thingName">
										<div v-text="item.serviceTitle"></div>
										<span v-if="item.orderType.value == 1">&yen;{{parseInt(item.unitPrice).toFixed(2)}}</span>
									</div>
									<span class="counts">x{{item.serviceMount}}</span>
								</a>
							</li>
						</ul>
					</div>
					<!--合计-->
					<div class="totalMoney" v-if="item.orderType.value == 1">
						<span class="totalRight">&yen; <i>{{parseInt(item.totalPrice).toFixed(2)}}</i></span>
						<span class="tolalLeft">合计:</span>
					</div>
					<!--<div class="send" v-show="item.operation.length>0">
						<div v-for="(obj, key) in item.operation" @click="operateOrder(obj,key, item.orderNo)">{{obj.event}}</div>
					</div>-->
				</div>
				<!--<div class="kong"></div>-->
			</div>
				
        </Pagination>
		<div class="none-data-tip" v-if="pagination.content.length == 0">暂无订单</div>
		
	</div>
	

</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    param: {
                    	params:{
						    flag: 1
						}
                    }
                },
			}
		},
		created() {
//			this.$api.workerOrderList({
//	        	params:{
//				    flag: 1,
//				    page: 1,
//				    page_size: 10
//				}
//		    },(res) => {
//		    	
//		    	
//		    })
		},
		methods: {
			render(res) {
                res.result.list.forEach((item) => {
                	if(item.operation == null) {
                		item.operation = []
                	}
                	this.pagination.content.push(item)
                })
            },
            
		}
	}
</script>

<style scoped>
	.contBox {
		width: 7.5rem;
		background: #FFFFFF;
		display: inline-block;
		position: relative;
		margin-top: 0.2rem;
		overflow: hidden;
	}
	/*姓名电话*/
	
	.peopleName {
		width: 7rem;
		height: 0.78rem;
		padding: 0 .25rem;
		border-bottom: .02rem solid #f2f2f2;
		display: block;
	}
	
	.peopleName span {
		float: left;
		/*font-size: 0.24rem;*/
		color: #666;
		line-height: .78rem;
		margin-right: 0.15rem;
	}
	
	.peopleName div {
		width: 0.42rem;
		height: 0.42rem;
		background: url("../../../static/wokerPhone.png") no-repeat;
		float: right;
		background-size: 100% 100%;
		margin-top: 0.2rem;
	}
	/*订单内容*/
	
	.cont {
		width: 7rem;
		padding: 0.1rem .25rem;
		overflow: hidden;
		text-align: left;
		display: flex;
		position: relative;
	}
	
	.cont span {
		
	}
	
	.contLeft {
		color: #bbb;
		width: 1.5rem;
	}
	
	.contRight {
		color: #666;
		flex: 1;
	}
	
	.contRight.position {
		padding-right: 1rem;
		text-align: left;
		min-height: 0.76rem;
	}
	
	.positionBtn img {
		width: 0.2rem;
		height: 0.3rem;
		display: block;
		margin: 0 auto;
	}
	
	.positionBtn span {
		font-size: 0.18rem;
		color: #CCCCCC;
	}
	/*服务详情*/
	/*物品列表*/
	
	.thingList {
		width: 7rem;
		padding: 0.25rem;
		background: #f5f5f9;
		display: inline-block;
	}
	
	.thingList li {
		width: 7rem;
		position: relative;
	}
	
	.thingList a {
		width: 100%;
		height: 100%;
		display: block;
		display: flex;
	}
	/*左边图片*/
	
	.thingList img {
		width: 1.40rem;
		height: 1.40rem;
		margin-right: 0.3rem;
	}
	/*右边内容*/
	
	.thingName {
		flex: 1;
		height: 1.4rem;
		text-align: left;
	}
	/*商品名称*/
	
	.thingName div {
		width: 100%;
		height: 0.6rem;
		font-size: 0.26rem;
		line-height: 0.6rem;
		color: #222222;
	}
	/*介绍*/
	
	.thingName p {
		width: 100%;
		height: 0.45rem;
		font-size: 0.2rem;
		line-height: 0.45rem;
		color: #cfcfcf;
	}
	/*价格*/
	
	.thingName span {
		width: 100%;
		height: 0.36rem;
		font-size: 0.28rem;
		line-height: 0.36rem;
		color: #ff5400;
	}
	/*数量*/
	
	.counts {
		position: absolute;
		right: 0.25rem;
		bottom: 0.25rem;
		font-size: 0.28rem;
		color: #222222;
	}
	/*合计*/
	
	.totalMoney {
		width: 7rem;
		height: 0.78rem;
		padding: 0 0.25rem;
		border-bottom: .02rem solid #f2f2f2;
	}
	
	.totalMoney span {
		float: right;
		margin-right: 0.16rem;
	}
	
	.totalRight {
		font-size: 0.28rem;
		color: #000000;
		line-height: 0.78rem;
	}
	.totalRight>i{
		font-size: 0.32rem;
		font-style: normal;
	}
	
	.tolalLeft {
		font-size: 0.28rem;
		color: #222222;
		line-height: 0.78rem;
	}
	.map-lnik{
		position: absolute;
		right: 0.25rem;
		top: 0.1rem;
		width: 0.8rem;
		height: 0.7rem;
		font-size: 0.2rem;
		text-align: center;
		color: #666;
		padding-top: 0.42rem;
		box-sizing: border-box;
	}
	.map-lnik:before{
		position: absolute;
		content: '';
		width: 0.34rem;
		height: 0.34rem;
		left: 0.2rem;
		top: 0;
		background: url(../../../static/worker01.png) no-repeat center;
		background-size: auto 100%; 
	}
	.send {
		width: 7rem;
		overflow: hidden;
		padding: 0.25rem;
	}
	
	.send div{
		float: right;
		height: 0.56rem;
		font-size: 0.24rem;
		color: #2173d6;
		line-height: 0.56rem;
		border-radius: 0.28rem;
		border: .01rem solid #8ac4f9;
		padding: 0 0.2rem;
	}
	#qu{
		color: #222222;
		border: .01rem solid #cccccc;
	}
</style>