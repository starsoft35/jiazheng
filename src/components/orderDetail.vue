<template>
	<div id="box">
		<!--顶部-->
		<div class="headPart">
			<div class="headCont">
				<a href="#">
					<span class="fl" onclick="window.history.go(-1)"></span>
				</a>
				<p v-text="title"></p>
			</div>
		</div>
		<!--顶部提示信息-->
		<div class="headMessge">
			<div class="topPart">
				<img src="../../static/32@2x.png" />
				<div class="putItem fl">{{orderStatus}}</div>
				<div class="timePart fr">{{orderTime}}</div>
			</div>
			<div class="bottomPart">
				<div class="textLeft fl">您的订单已提交，请立即支付</div>
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
						<img :src="serviceImage">
					</div>
					<div class="serveTitle fl">
						<div>{{serviceTitle}}</div>
						<p >内芯及外表清洗</p>
						<span>￥30/小时</span>
					</div>
				</div>
				<!--右边选择数量-->
				<div class="serveRight fr">
					<div class="serveBtn fr">×{{serviceMount}}</div>
				</div>
			</div>
			<!--订单金额信息-->
			<div class="moneyMesage">
				<div class="messageList">
					<div>服务金额</div>
					<span>￥{{totalPrice}}</span>
				</div>
				<div class="messageList">
					<div>优惠金额</div>
					<span>￥ {{couponPrice}}</span>
				</div>
				<div class="mesageBottom">
					<div>实付金额</div>
					<span>￥{{actualPrice}}</span>
				</div>
			</div>
		</div>
		<!--服务信息标题-->
		<div class="serveMesage clear">
			<span>服务信息</span>
		</div>
		<!--客户具体信息-->
		<div class="clientMessage">
			<div class="contList clear" v-for="(contList,index) in msg">
				<div>{{contList.leftMsg}}</div>
				<span>{{contList.rightMsg}}</span>
			</div>
		</div>
		<!--订单信息标题-->
		<div class="serveMesage clear">
			<span>服务信息</span>
		</div>
		<!--订单具体信息-->
		<div class="clientMessage">
			<div class="contList  " v-for="(contList,index) in positionMsg">
				<div>{{contList.theLeft}}
				<span>{{contList.theRight}}</span>
				</div>
			</div>
		</div>
		<!--底部-->
		<div class="bottomBtn">
			<!-- <div class="btnLeft">
				<router-link :to="{ path: '/paySubmit/'+orderNo}">去支付</router-link>
			</div>
			<div class="btnRight">
				<div @click="goBack">取消订单</div>
			</div> -->
			<div class="send" v-show="operation">
				<div :class="obj.event=='取消订单'?'send-color':''" v-for="(obj, key) in operation" @click="operateOrder(obj)">{{obj.event}}</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			title: '订单详情',
			msg: [],
			name:true,
			actualPrice: 0,
			couponPrice: 0,
			orderStatus: 0,
			totalPrice:0,
			serviceMount:0,
			orderTime:0,
			orderNo:0,
			serviceTitle:'',
			serviceImage: '',
			operation:'',
			positionMsg: [],
		}
	},
	created() {
		let type = this.$route.params.id
		this.$api.serveOrderDetail(
			{ params: { orderNo: type } },
			(res) => {
				console.log(res.result)
				let result = res.result
				if (res.err_code == '0') {
					this.msg = [{
						leftMsg: '联系人:',
						rightMsg: result.linkMan
					}, {
						leftMsg: '服务时间:',
						rightMsg: result.serviceTime
					}, {
						leftMsg: '联系电话:',
						rightMsg: result.linkPhone
					}, {
						leftMsg: '服务地址:',
						rightMsg: result.serviceAddr
					}]

					this.positionMsg = [{
						theLeft: '订单号码',
						theRight: result.orderNo
					}, {
						theLeft: '下单时间',
						theRight: result.orderTime
					}]

					// 订单当前状态
					this.orderStatus = result.orderStatus;
					// 实付金额
					this.actualPrice = result.actualPrice;
					// 优惠卷
					this.couponPrice = result.couponPrice;
					//服务图片
					this.serviceImage = result.serviceImage;
					//服务数量
					this.serviceMount=result.serviceMount;
					//总价
					this.totalPrice=result.totalPrice;
					//服务标题
					this.serviceTitle=result.serviceTitle;
					// 订单编号
					this.orderNo=result.orderNo;
					//下单时间
					this.orderTime=result.orderTime;
					//按钮状态
					if(result.operation=='null'){
						result.operation=[]
					}
					this.operation=result.operation.reverse();				
				}
				
			},
		)
	},
	methods: {
		goBack(){
			// this.$api.updateOrderStatus(
			// 	{ 
			// 		flag:flag,
			// 		orderNo:this.prderNo,
			// 		type:1
			// 	},
			// 	(res)=>{
			// 		console.log(res)
			// 	}
			// )

			// console.log(this.$route)	
		},
		operateOrder(obj) {
		if(obj.operationType=='1'){
		this.$api.updateOrderStatus({
			flag: obj.flag,
			orderNo: this.orderNo,
			type: obj.type
		}, (res) => {
			console.log(res)
		// 	Toast({
		// 	message: '请输入昵称',
		// 	position: 'bottom'
		// })
		})
		}else if(obj.operationType=='2'){
			window.location.href="tel:"+obj.linkPhone
		}else if(obj.operationType=='4'){		
			this.$router.push({path: '/orderDetail/'+orderNo})
		}else if(obj.operationType=='5'){	
			this.$api.updateOrderStatus({
			flag: obj.flag,
			orderNo: this.orderNo,
			type: obj.type
		}, (res) => {

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
	width: 1.5rem;
	height: 0.4rem;
	font-size: 0.26rem;
	line-height: 0.4rem;
	text-align: left;
	color: #222222;
	margin-left: 0.2rem;
}

.timePart {
	width: 2rem;
	height: 0.4rem;
	font-size: 0.2rem;
	text-align: right;
	line-height: 0.4rem;
	color: #c9c9c9;
}

.bottomPart {
	width: 7rem;
	height: 0.24rem;
	margin-top: 0.2rem;
	font-size: 0.24rem;
}

.textLeft {
	width: 3.5rem;
	height: 0.24rem;
	color: #c9c9c9;
	text-align: left;
	margin-left: 0.6rem;
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
	height: 0.24rem;
	color: #89d395;
	text-align: right;
}

.bottomPart a {
	float: right;
	display: block;
}





/*订单信息*/

.serveCount {
	width: 7rem;
	display: inline-block;
	padding: 0 .25rem;
	background: #FFFFFF;
	overflow: hidden;
}

.cont {
	width: 100%;
	display: inline-block;
	padding-bottom: 0.2rem;
}





/*左边部分*/

.serveLeft {
	display: inline-block;
	float: left;
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
	width: 3rem;
	height: 1.4rem;
	margin: .2rem 0 0 .25rem;
	text-align: left;
}

.serveTitle div {
	width: 3rem;
	height: 0.45rem;
	font-size: 0.24rem;
	line-height: 0.45rem;
	color: #4e4e4e;
	margin-bottom: 0.1rem;
}

.serveTitle p {
	width: 3rem;
	height: 0.5rem;
	font-size: 0.2rem;
	line-height: 0.5rem;
	color: #adadad;
}

.serveTitle span {
	width: 3rem;
	height: 0.26rem;
	font-size: 0.26rem;
	color: #ff5400;
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
	border-top: 0.01rem solid #f2f2f2;
}

.messageList {
	width: 6.9rem;
	height: 0.24rem;
	padding: 0 0.05rem 0.12rem;
	color: #999999;
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
	height: 0.7rem;
}

.serveMesage span {
	float: left;
	margin-left: 0.3rem;
	font-size: 0.24rem;
	line-height: 0.7rem;
	display: block;
	color: #222222;
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
	border-top: 0.01rem solid #f2f2f2;
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
	height: 0.86rem;
}

.send div{
	margin-top: 0.15rem;
	float: right;
	margin-left: 0.2rem;
	font-size: 0.24rem;
	line-height: 0.42rem;
	border-radius: 0.28rem;
	border: .01rem solid #8ac4f9;
	padding: 0 0.2rem;
}

.send .send-color{
	color: #888;
	border: .01rem solid #999;
}
</style>