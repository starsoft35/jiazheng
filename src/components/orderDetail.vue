<template>
	<div id="box">
		<!--顶部-->
		<Header title="订单详情"></Header>
		<!--顶部提示信息-->
		<div class="headMessge">
			<div class="topPart">
				<img src="../../static/32@2x.png" />
				<div class="putItem fl">{{orderDetail.orderStatus}}</div>
				<div class="timePart fr">{{orderDetail.orderTime}}</div>
			</div>
			<div class="bottomPart">
				<div class="textLeft fl">{{orderFlow[0].info}}</div>
				<router-link to="/second">
					<img src="../../static/33@2x.png" />
					<div class="textRight fr">更多状态</div>
				</router-link>
			</div>
		</div>
		<!--订单信息-->
		<div class="serveCount">
			<div class="cont">
				<!--左边介绍-->
				<div class="serveLeft">
					<div class="serveBack fl">
						<img :src="orderDetail.serviceImage">
					</div>
					<div class="serveTitle fl">
						<div>{{orderDetail.serviceTitle}}</div>
						<span class="num">&yen;{{orderDetail.unitPrice}}
							<span class="numbers" v-if="orderDetail.priceType == 1" style="padding-right: 0.2rem;">x{{orderDetail.serviceMount}}</span>
						</span>
					</div>
				</div>
			</div>
			<div class="remark" v-if="orderDetail.remark">
				<span style="width: 1rem;">备注：</span>
				<span class="remark-text">{{orderDetail.remark}}</span>
			</div>
			<!--订单金额信息-->
			<div class="moneyMesage">
				<div class="messageList">
					<div>服务金额</div>
					<span>&yen;{{orderDetail.totalPrice}}</span>
				</div>
				<div class="messageList">
					<div>优惠金额</div>
					<span>&yen;{{orderDetail.couponPrice}}</span>
				</div>
				<div class="mesageBottom">
					<div>实付金额</div>
					<span>&yen;{{orderDetail.actualPrice}}</span>
				</div>
			</div>
		</div>
		<!--服务信息标题-->
		<div class="serveMesage">
			<p>服务信息</p>
			<div class="info-list">
				<div class="info-item">
					<span class="info-tit">联系人：</span>
					<span class="info-text">{{orderDetail.linkMan}}</span>
				</div>
				<div class="info-item">
					<span class="info-tit">服务时间：</span>
					<span class="info-text">{{orderDetail.serviceTime}}</span>
				</div>
				<div class="info-item">
					<span class="info-tit">联系电话：</span>
					<span class="info-text">{{orderDetail.linkPhone}}</span>
				</div>
				<div class="info-item">
					<span class="info-tit">服务地址：</span>
					<span class="info-text">{{orderDetail.serviceAddr}}</span>
				</div>
			</div>
		</div>
		<div class="serveMesage" v-if="orderDetail.worker != undefined">
			<p>工人信息</p>
			<div class="info-list">
				<div class="info-item">
					<span class="info-tit">联系人：</span>
					<span class="info-text">{{orderDetail.worker.nickName}}</span>
				</div>
				<div class="info-item">
					<span class="info-tit">联系电话：</span>
					<span class="info-text">{{orderDetail.worker.phone}}</span>
				</div>
			</div>
		</div>
		<div class="serveMesage">
			<p>订单信息</p>
			<div class="info-list">
				<div class="info-item">
					<span class="info-tit">订单号码：</span>
					<span class="info-text">{{orderDetail.orderNo}}</span>
				</div>
				<div class="info-item">
					<span class="info-tit">下单时间：</span>
					<span class="info-text">{{orderDetail.orderTime}}</span>
				</div>
			</div>
		</div>
		<div class="send" v-show="operation.length>0">
			<div :class="obj.event=='取消订单'?'send-color':''" v-for="(obj,key) in operation" @click="operateOrder(obj,orderDetail.orderNo)">
				<span v-if="obj.operationType != 2 ">{{obj.event}}</span>
				<span v-if="obj.operationType == 2 && isWeixin != 'yes' "><a style="color: #258ef3;" @click="callPhone(obj.workerPhone)" >{{obj.linkWorker}}</a></span>
				<span v-if="obj.operationType == 2 && isWeixin == 'yes' "><a style="color: #258ef3;" :href="'tel:' + obj.workerPhone" >{{obj.linkWorker}}</a></span>
			</div>
		</div>
		<pj-modal 
			@closeModal="show = false"
			@cancel_modal="cancel_modal" 
			@confirm_modal="confirm_modal"
			:show="show">
			
		</pj-modal>
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
import pjModal from '@/components/common/pinjiaModal'
export default {
	components: {
		pjModal
	},
	data() {
		return {
			isWeixin: this.$storage.get('isWeixinTerm'),
			orderDetail: {},
			orderFlow: [{
				info: ''
			}],
			operation: [],
			orderNo: undefined,
			
			show: false,
			currOrder: {}
		}
	},
	created() {
		this.orderNo = this.$route.params.id
		this.initData()
	},
	methods: {
		initData() {
			this.$api.serveOrderDetail(
				{ 
					params: { 
						orderNo: this.orderNo 
					} 
				},  (res) => {
					if(res.result.operation == null){
						res.result.operation=[]
					}
					this.operation=res.result.operation.reverse();				
					this.orderDetail = res.result
					this.orderFlow = res.result.orderFlow
					this.$storage.set('currOrderFlow', res.result.orderFlow)
				}
			)
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
					if(obj.flag == -1) {
						setTimeout(() => {
							this.$router.go(-1)
						},500)
					}else {
						setTimeout(() => {
							this.initData()
						},500)
					}
                    
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
					this.initData()
				},500)
			})
		},
		callPhone(phone) {
			this.$bridge.callPhone(phone)
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
	padding-bottom: 0.3rem;
}





/*顶部提示信息*/

.headMessge {
	width: 7rem;
	height: 1.55rem;
	padding: 0 .25rem;
	background: #FFFFFF;
	overflow: hidden;
}

.topPart {
	width: 7rem;
	height: 0.4rem;
	margin-top: .3rem;
}

.topPart img {
	width: 0.4rem;
	height: 0.4rem;
	float: left;
}

.putItem {
	width: 3.5rem;
	height: 0.4rem;
	font-size: 0.28rem;
	line-height: 0.4rem;
	text-align: left;
	color: #222222;
	margin-left: 0.2rem;
}

.timePart {
	width: 2.5rem;
	height: 0.4rem;
	font-size: 0.26rem;
	text-align: right;
	line-height: 0.4rem;
	color: #c9c9c9;
}

.bottomPart {
	width: 7rem;
	margin-top: 0.2rem;
	font-size: 0.26rem;
	overflow: hidden;
}

.textLeft {
	width: 4.5rem;
	color: #c9c9c9;
	text-align: left;
	margin-left: 0.6rem;
	overflow: hidden;
}

.bottomPart img {
	width: 0.15rem;
	height: 0.20rem;
	margin-top: 0.08rem;
	float: right;
	margin-left: 0.13rem;
}

.textRight {
	width: 1.5rem;
	color: #89d395;
	text-align: right;
}

.bottomPart a {
	float: right;
	display: block;
}
.num{
	display: flex;
	justify-content: space-between;
	color: #FF5400;
}




/*订单信息*/

.serveCount {
	width: 7rem;
	display: inline-block;
	padding: 0 .25rem;
	background: #FFFFFF;
	overflow: hidden;
	margin-top: 0.2rem;
}

.cont {
	width: 100%;
	display: inline-block;
	padding-bottom: 0.2rem;
}





/*左边部分*/

.serveLeft {
	display: flex;
}





/*服务图片*/

.serveBack {
	width: 1.4rem;
	height: 1.4rem;
	margin-top: 0.2rem;
}

.serveBack img {
	width: 100%;
	height: 100%;
}

.serveTitle {
	flex: 1;
	height: 1.4rem;
	margin: .2rem 0 0 .25rem;
	text-align: left;
}

.serveTitle div {
	height: 0.45rem;
	font-size: 0.26rem;
	line-height: 0.45rem;
	color: #4e4e4e;
	margin-bottom: 0.2rem;
}

.serveTitle p {
	height: 0.5rem;
	font-size: 0.2rem;
	line-height: 0.5rem;
	color: #adadad;
}

.serveTitle span {
	font-size: 0.26rem;
	color: #ff5400;
}
.numbers{
	color: #666 !important;
}




/*右边*/

.serveRight {
	width: 2rem;
	height: 1.4rem;
}

.serveBtn {
	width: 1rem;
	height: 0.2rem;
	margin-top: 1.3rem;
	font-size: 0.2rem;
	color: #222222;
	text-align: right;
}





/*订单金额信息*/

.moneyMesage {
	width: 7rem;
	display: inline-block;
	padding-top: 0.2rem;
	border-top: 1px solid #f2f2f2;
	padding-bottom: 0.2rem;
}

.messageList {
	width: 6.9rem;
	/*height: 0.24rem;*/
	padding: 0 0.05rem 0.12rem;
	color: #999999;
	overflow: hidden;
}

.messageList div {
	width: 1.5rem;
	height: 0.24rem;
	font-size: 0.24rem;
	float: left;
	text-align: left;
}

.messageList span {
	line-height: 0.24rem;
	font-size: 0.22rem;
	display: block;
	float: right;
}

.mesageBottom {
	width: 6.9rem;
	height: 0.26rem;
	padding: 0.1rem 0.05rem 0.12rem;
}

.mesageBottom div {
	width: 1.5rem;
	height: 0.26rem;
	font-size: 0.26rem;
	float: left;
	text-align: left;
	color: #222222;
}

.mesageBottom span {
	line-height: 0.26rem;
	font-size: 0.28rem;
	display: block;
	float: right;
	color: #ff5400;
}





/*服务信息标题*/

.serveMesage {
	width: 7.5rem;
	text-align: left;
	color: #666;
	
}
.serveMesage>p{
	height: 0.7rem;
	color: #333;
	line-height: 0.7rem;
	padding: 0 0.25rem;
}




/*客户具体信息*/

.clientMessage {
	width: 7rem;
	display: inline-block;
	background: #FFFFFF;
	padding: 0 0.25rem;
}

.clientMessage :nth-of-type(1) {
	border: none;
}

.contList {
	width: 7rem;
	line-height: 0.86rem;
	display: inline-block;
	border-top: 1px solid #f2f2f2;
}

.contList div {
	float: left;
	font-size: 0.28rem;
	color: #7a7a7a;
}

.contList span {
	float: left;
	display: inline-block;
	font-size: 0.28rem;
	color: #222222;
	width: 5.6rem;
	text-align: left;
}



/*底部按钮*/

.bottomBtn {
	height: 0.8rem;
	margin-top: 0.33rem;
	background: #FFFFFF;
}


.send {
	width: 7.25rem;
	overflow: hidden;
	padding: 0.16rem 0.25rem 0.16rem 0;
	color: #2d92f4;
	background: #fff;
	margin-top: 0.2rem;
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
.info-list{
	padding: 0 0.25rem;
	background: #fff;
}
.info-item{
	color: #999;
	display: flex;
	padding: 0.2rem 0;
	border-bottom: 1px solid #F5F5F9;
	font-size: 0.24rem;
}
.info-item>span{
	vertical-align: middle;
	line-height: 0.32rem;
}
.info-item>span.info-tit{
	width: 1.3rem;
}
.info-item>span.info-text{
	color: #333;
	flex: 1;
}
.remark{
	text-align: left;
	/*border-bottom: 1px solid #eee;*/
	display: flex;
	color: #666;
	font-size: 0.24rem;
	padding: 0.15rem 0;
}
.remark-text{
	flex: 1;
}
</style>