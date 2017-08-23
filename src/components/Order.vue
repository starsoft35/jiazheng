<template>
	<div id="box">
		<Header title="订单" back="hidden"></Header>

		<div class="none-message" v-if="pagination.content.length == 0">
            <div class="bg"></div>
            暂无订单消息
        </div>

		<Pagination :render="render" :param="pagination" :need-token="true" uri="/serviceOrder/list" >
			<div>
			<div class="orderBox"  v-for="(orderBox,index) in orderCont" v-show="pagination.content.length > 0" >
			<router-link :to="{ path: '/orderDetail/'+orderBox.orderNo}">
				<div class="topMessage clear">
					<span class="topLeft fl">{{orderBox.topTime}}</span>
					<span class="topRight fr">{{orderBox.topText}}</span>
				</div>
				<div class="cont">
					<!--左边图片-->
					<div class="serveLeft">
						<div class="serveBack fl">
							<img :src="orderBox.serveImg" />
						</div>
						<div class="serveTitle fl">
							<div>{{orderBox.serveTitle}}</div>
							<span v-bind:class="{spanOneStyle:orderBox.contOne,spanTwoStyle:orderBox.contTwo}">{{orderBox.serveCont}}</span>
							<p v-show="orderBox.pricePart">￥{{orderBox.pricePart}}/小时</p>
						</div>
					</div>
					<span class="numbers" v-show="orderBox.numberPart">×{{orderBox.spanTwo}}</span>
				</div>
				<div class="middlePart hr">
					<span>￥{{orderBox.spanOne}}</span>
					<span>合计:</span>
				</div>
		<div class="bottomBtn">
			<div class="send" v-show="orderBox.operation">
				<div :class="obj.event=='取消订单'?'send-color':''" v-for="(obj, key) in orderBox.operation" @click="operateOrder(obj)">{{obj.event}}</div>
			</div>
		</div>

				</router-link>
			</div>
</div>
		</Pagination>
		
		<Menu actived="third"></Menu>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				hidden:true,
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10
                },
				orderCont:[
				//有价格待付款样式
					// {
					// 	topTime:'2017-07-09 01:25',
					// 	topText:'待付款',
					// 	serveImg:'@../../static/back.png',
					// 	serveTitle:'家庭保洁',
					// 	serveCont:'等待工人与您确认服务信息',
					// 	spanOne:'0.00',
					// 	spanTwo:'1',
					// 	rightBtn:'去支付',
					// 	rightBtnSrc:'/paySubmitTwo',
					// 	leftBtnSrc:'/first',
					// 	//按钮的有颜色
					// 	oneStyle:false,
					// 	twoStyle:true,
					// 	//有价格时价格和数量的显示
					// 	pricePart:true,
					// 	numberPart:true,
					// 	//有价格时左边的按钮
					// 	bottomBtn:true,
					// 	//有价格时单价上面文字样式
					// 	textOne:false,
					// 	textTwo:true,
					// 	//有价格时图片右边中间span的样式
					// 	contOne:false,
					// 	contTwo:true
					// },
					// //有价格已付款样式
					// {
					// 	topTime:'2017-07-09 01:25',
					// 	topText:'服务完成',
					// 	serveImg:'@../../static/back.png',
					// 	serveTitle:'家庭保洁',
					// 	serveCont:'等待工人与您确认服务信息',
					// 	spanOne:'0.00',
					// 	spanTwo:'1',
					// 	rightBtn:'评价',
					// 	rightBtnSrc:'/paySubmitTwo',
					// 	leftBtnSrc:'/first',
					// 	//按钮的有颜色
					// 	oneStyle:false,
					// 	twoStyle:true,
					// 	//有价格时价格和数量的显示
					// 	pricePart:true,
					// 	numberPart:true,
					// 	//有价格时左边的按钮
					// 	bottomBtn:false,
					// 	//有价格时单价上面文字样式
					// 	textOne:false,
					// 	textTwo:true,
					// 	//有价格时图片右边中间span的样式
					// 	contOne:false,
					// 	contTwo:true
					// },
					// //无价格等待派遣工人
					// {
					// 	topTime:'2017-07-09 01:25',
					// 	topText:'等待派遣工人',
					// 	serveImg:'@../../static/back.png',
					// 	serveTitle:'家庭保洁',
					// 	serveCont:'等待工人与您确认服务信息',
					// 	spanOne:'0.00',
					// 	spanTwo:'1',
					// 	rightBtn:'取消订单',
					// 	rightBtnSrc:'/paySubmitTwo',
					// 	leftBtnSrc:'/first',
					// 	//按钮的有颜色
					// 	oneStyle:true,
					// 	twoStyle:false,
					// 	//价格和数量的显示
					// 	pricePart:false,
					// 	numberPart:false,
					// 	//有价格时左边的按钮
					// 	bottomBtn:false,
					// 	//有价格时单价上面文字样式
					// 	textOne:false,
					// 	textTwo:true,
					// 	//有价格时图片右边中间span的样式
					// 	contOne:true,
					// 	contTwo:false
					// },
					// //无价格等待确认服务完成
					// {
					// 	topTime:'2017-07-09 01:25',
					// 	topText:'等待确认服务完成',
					// 	serveImg:'@../../static/back.png',
					// 	serveTitle:'家庭保洁',
					// 	serveCont:'等待工人与您确认服务信息',
					// 	spanOne:'300.00',
					// 	spanTwo:'1',
					// 	rightBtn:'确认支付',
					// 	rightBtnSrc:'/paySubmitTwo',
					// 	leftBtnSrc:'/first',
					// 	//按钮的有颜色
					// 	oneStyle:false,
					// 	twoStyle:true,
					// 	//价格和数量的显示
					// 	pricePart:false,
					// 	numberPart:false,
					// 	//有价格时左边的按钮
					// 	bottomBtn:false,
					// 	//有价格时单价上面文字样式
					// 	textOne:false,
					// 	textTwo:true,
					// 	//有价格时图片右边中间span的样式
					// 	contOne:true,
					// 	contTwo:false
					// },
					// //无价格评价
					// {
					// 	topTime:'2017-07-09 01:25',
					// 	topText:'服务完成',
					// 	serveImg:'@../../static/back.png',
					// 	serveTitle:'家庭保洁',
					// 	serveCont:'等待工人与您确认服务信息',
					// 	spanOne:'300.00',
					// 	spanTwo:'1',
					// 	rightBtn:'评价',
					// 	rightBtnSrc:'/paySubmit',
					// 	leftBtnSrc:'/first',
					// 	//按钮的有颜色
					// 	oneStyle:false,
					// 	twoStyle:true,
					// 	//价格和数量的显示
					// 	pricePart:false,
					// 	numberPart:false,
					// 	//有价格时左边的按钮
					// 	bottomBtn:false,
					// 	//有价格时单价上面文字样式
					// 	textOne:false,
					// 	textTwo:true,
					// 	//有价格时图片右边中间span的样式
					// 	contOne:true,
					// 	contTwo:false
					// }
				]
			}
		},
		methods: {
			render(res) {
				console.info(res)
				let orderCont= res.result.list
				if (res.err_code=="0") {
					this.orderCont== orderCont
				for (let i in orderCont) {
					orderCont[i].operation.reverse()
                    this.orderCont.push({
						topTime: orderCont[i].orderTime,
						topText:orderCont[i].orderStatus,
						serveImg:orderCont[i].serviceImage,
						serveTitle:orderCont[i].serviceTitle,
						//暂无接口
						// serveCont:orderCont[i].orderStatus, 
						spanOne:orderCont[i].totalPrice,
						spanTwo:orderCont[i].serviceMount,
						rightBtn:orderCont[i].orderStatus,
						rightBtnSrc:orderCont[i].orderStatus,
						leftBtnSrc:orderCont[i].orderStatus,
						// 订单编码
						orderNo:orderCont[i].orderNo,
						//按钮事件
						operation:orderCont[i].operation,
						//按钮的有颜色
						oneStyle:false,
						twoStyle:true,
						//有价格时价格和数量的显示
						pricePart:orderCont[i].unitPrice,
						numberPart:true,
						//有价格时左边的按钮
						bottomBtn:true,
						//有价格时单价上面文字样式
						textOne:false,
						textTwo:true,
						//有价格时图片右边中间span的样式
						contOne:false,
						contTwo:true
                    });
					this.pagination.content.push({
						orderNo:orderCont[i].orderNo	
					});
                }} else {					
				}
			},
			operateOrder(obj) {
			this.$api.updateOrderStatus({
				flag: obj.flag,
				orderNo: this.orderNo,
				type: obj.type
			}, (res) => {
				console.log(res)
			})
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
	
	/*订单*/
	.orderBox {
		width: 7.5rem;
		display: inline-block;
		background: #FFFFFF;
		color: #222222;
		margin-top: 0.2rem;
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
	}
	.numbers{
		float: right;
		font-size: 0.26rem;
		color: #666;
		margin-top:1.1rem ;
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
	}
	
	.serveBack img {
		width: 100%;
		height: 100%;
	}
	
	.serveTitle {
		width: 3rem;
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

	.bottomBtn {
		height: 0.8rem;
		background: #FFFFFF;
	}


	.send {
		width: 7.25rem;
		overflow: hidden;
		padding: 0.16rem 0;
	}

	.send div{
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
		border: .01rem solid #888;
	}
</style>