<template>
	<div id="box">
		<Header title="订单" back="hidden"></Header>

		<div class="none-message" v-show="pagination.content.length == 0 && pagination.loadEnd">
            <div class="bg"></div>
            	暂无订单消息
        </div>

		<Pagination :render="render" :param="pagination" :autoload="false" :need-token="true" uri="/serviceOrder/list" ref="pagination" >
			<div style="margin-bottom: 0.4rem;" v-show="pagination.content.length > 0">
				<div class="orderBox"  v-for="(orderBox,index) in pagination.content"  >
					<router-link :to="{ path: '/orderDetail/'+orderBox.orderNo}">
						<div class="topMessage clear">
							<span class="topLeft fl">{{orderBox.orderTime}}</span>
							<span class="topRight fr">{{orderBox.orderStatus}}</span>
						</div>
						<div class="order-addr">
							<span style="width: 1rem;">地址：</span>
							{{orderBox.serviceAddr}}</div>
						<div class="cont">
							<!--左边图片-->
							<div class="serveLeft">
								<div class="serveBack fl">
									<img :src="orderBox.serviceImage" />
								</div>
								<div class="serveTitle fl">
									<div>{{orderBox.serviceTitle}}</div>
									<p class="num">&yen;{{orderBox.unitPrice}}/小时
										<span class="numbers">x{{orderBox.serviceMount}}</span>
									</p>
									<div class="remark" v-if="orderBox.remark">
										<span style="width: 1rem;">备注：</span>
										<span class="remark-text">{{orderBox.remark}}</span>
									</div>
								</div>
							</div>
							
						</div>
						
						<div class="middlePart ">
							<span>&yen;{{orderBox.totalPrice}}</span>
							<span>合计:</span>
						</div>
						
	
					</router-link>
					<div class="send" v-show="orderBox.operation.length>0">
						<div :class="obj.event=='取消订单'?'send-color':''" v-for="(obj,key) in orderBox.operation" @click="operateOrder(obj,orderBox.orderNo)">
							<span v-if="obj.operationType != 2 ">{{obj.event}}</span>
							<span v-if="obj.operationType == 2 "><a style="color: #258ef3;" :href="'tel:' + obj.workerPhone" >{{obj.linkWorker}}</a></span>
						</div>
					</div>
				</div>
			</div>
		</Pagination>
		<pj-modal 
			@closeModal="show = false"
			@cancel_modal="cancel_modal" 
			@confirm_modal="confirm_modal"
			:show="show">
			
		</pj-modal>
		<Menu actived="third"></Menu>
	</div>
</template>

<script type="text/javascript">
    import { MessageBox, Toast } from 'mint-ui'
	import pjModal from '@/components/common/pinjiaModal'
	export default {
		components: {
			pjModal
		},
		data() {
			return {
				show: false,
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    loadEnd: false
                },
				
				currOrder: {}
			}
		},
		mounted() {
			this.$refs.pagination.refresh()
		},
		methods: {
			render(res) {
				for(var i in res.result.list){
					if(res.result.list[i].operation == null) {
                		res.result.list[i].operation = []
                	}
					res.result.list[i].operation.reverse()
					this.pagination.content.push(res.result.list[i])
				}
			},
			operateOrder(obj,orderNo) {
				if(obj.operationType=='1'){
					this.$api.updateOrderStatus({
						flag: obj.flag,
						orderNo: orderNo,
						type: obj.type
					}, (res) => {
						Toast({
						  message: '操作成功',
						  position: 'middle',
						  iconClass: 'toast-icon icon-success',
						  duration: 1000
						})
                        setTimeout(() => {
                        	this.pagination = {
			                    content: [],
			                    page: 1, 
								pageSize: 10,
								loadEnd: false
							}
							this.$refs.pagination.refresh()
						},500)
					})
				}else if(obj.operationType=='4'){		
					this.$router.push('/paySubmit/'+ orderNo)
				}else if(obj.operationType=='5'){	
					this.show = true
					this.currOrder = {
						flag: obj.flag,
						type: obj.type,
						orderNo: orderNo
					}
				}
					

			},
			cancel_modal() {
				console.log('取消')
			},
			confirm_modal(star, advice) {
				this.$api.updateOrderStatus({
					evaluateContent: advice,
					starLevel: star,
					flag: this.currOrder.flag,
					orderNo: this.currOrder.orderNo,
					type: this.currOrder.type
				}, (res) => {
					Toast({
					  message: '评价成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 1000
					})
                    setTimeout(() => {
                    	this.pagination = {
		                    content: [],
		                    page: 1, 
							pageSize: 10,
							loadEnd: false
						}
						this.$refs.pagination.refresh()
					},500)
				})
			},

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
	
	/*订单*/
	.orderBox {
		width: 7.5rem;
		display: inline-block;
		background: #FFFFFF;
		color: #222222;
		margin-top: 0.3rem;
	}
	
	.topMessage {
		width: 7.06rem;
		padding: 0 .22rem;
		height: 0.8rem;
	}
	
	.topLeft {
		font-size: 0.26rem;
		text-align: left;
		color: #666;
		line-height: 0.8rem;
	}
	.topRight {
		font-size: 0.26rem;
		color: #258ef3;
		text-align: right;
		line-height: 0.8rem;
	}
	/*图片*/
	
	.cont {
		width: 7.06rem;
		padding: .22rem;
		display: inline-block;
		padding-bottom: 0.2rem;
		background: #F9F9F9;
		position: relative;
	}
	.numbers{
		padding-right: 0.2rem;
		color: #666;
	}
	/*左边部分*/
	
	.serveLeft {
		display: flex;
		position: relative;
		
	}
	.order-addr{
		padding: 0.15rem 0.2rem;
		text-align: left;
		color: #666;
		border-top: 1px solid #eee;
		display: flex;
	}
	/*服务图片*/
	
	.serveBack {
		width: 1.4rem;
		height: 1.4rem;
	}
	
	.serveBack img {
		width: 100%;
		height: 100%;
	}
	
	.serveTitle {
		flex: 1;
		height: 1.4rem;
		margin: 0 0 0 .22rem;
		text-align: left;
	}
	
	.serveTitle div {
		width: 5rem;
		height: 0.45rem;
		font-size: 0.26rem;
		line-height: 0.45rem;
		color: #666;
	}
	/*中间部分样式 */
	/*样式一*/
	/*无价格*/
	.spanOneStyle{
		width: 6rem;
		display: block;
		font-size: 0.24rem;
		color: #666;
		margin-top: 0.2rem;
	}
	/*有价格时的 单价*/
	.serveTitle p{
		font-size: 0.28rem;
		color: #666;
		margin-top: 0.1rem;
	}
	.serveTitle p.num{
		display: flex;
		justify-content: space-between;
		color: #FF5400;
	}
	/*样式二*/
	/*有价格*/
	.spanTwoStyle{
		width: 6rem;
		display: block;
		font-size: 0.26rem;
		color: #acacac;
		margin-top: 0.1rem;
	}
	.middlePart {
		width: 7.06rem;
		height: 0.8rem;
		padding: 0 .22rem;
		border-bottom: 1px solid #f2f2f2
	}
	.middlePart span {
		float: right;
		font-size: 0.26rem;
		color: #666;
		line-height: 0.8rem;
		margin: 0 0.05rem;
	}
	.bottomPart{
		border-top: 1px solid #eee;
		width: 7.06rem;
		height: 0.55rem;
		padding: .22rem;
	}
	.bottomPart div{
		width: 1.4rem;
		height: 0.5rem;
		float: right;
		color: #666;
		font-size: 0.26rem;
		line-height: 0.5rem;
		border-radius: 0.25rem;
		margin-left: 0.2rem;
	}
	/*取消订单样式*/
	.colorOne{
		border: 1px solid #c5c5c5;
		color: #222222;
		font-size: 0.24rem;
	}
	/*有颜色样式*/
	.colorTwo{
		border: 1px solid #258ef3;
		color: #258ef3 !important;
		font-size: 0.26rem;
	}
	.bottomPart a{
		display: block;
	}
	.none-message {
        margin: 2rem auto;
        font-size: .26rem;
        color: #ccc;
        width: 2rem;
        height: 3rem;
    }
    .none-message .bg {
        width: 2rem;
        background: url("../../static/43@3x.png") no-repeat center center;
        background-size: 1.5rem;
        height: 2.2rem;
	}
	
	/*底部按钮*/



	.send {
		width: 7.25rem;
		overflow: hidden;
		padding: 0.16rem 0;
		color: #2d92f4
	}

	.send div{
		float: right;
		margin-left: 0.2rem;
		font-size: 0.26rem;
		height: 0.56rem;
		line-height: 0.58rem;
		border-radius: 0.28rem;
		border: 1px solid #8ac4f9;
		color:#2173d6;
		padding: 0 0.24rem;
	}
	.send div span, .send div a{
		display: block;
		width: 100%;
		height: 100%;
	}

	.send .send-color{
		color: #888;
		border: 1px solid #666;
	}
	.remark{
		text-align: left;
		/*border-bottom: 1px solid #eee;*/
		display: flex;
		color: #666;
		font-size: 0.24rem;
	}
	.remark-text{
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
</style>