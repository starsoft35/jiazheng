<template>
	<div id="box">
		<Header title="派单" back="hidden"></Header>
		<ul class="navBox">
			<li v-for="(item, index) in menus" @click="changeMenu(index)">
				<div class="routerLink" :class="{active: item.actived}">{{item.name}}</div>
			</li>
		</ul>
		
		<Pagination :render="render" :param="pagination" :need-token="true" uri="/serviceOrder/pend">

		</Pagination>

		<div class="contBox" v-for="(contBox,index) in pagination.content">
			<!--姓名 电话-->
			<div class="contact">
				<span>{{contBox.Name}}</span>
				<span>{{contBox.Phone}}</span>
				<div></div>
			</div>
			<!--订单号-->
			<div class="cont">
				<span class="contLeft">订单编号:</span>
				<span class="contRight">{{contBox.ordeCounts}}</span>
			</div>
			<!--服务时间-->
			<div class="cont">
				<span class="contLeft">服务时间:</span>
				<span class="contRight">{{contBox.timeOne}}</span>
				<span class="contRight">{{contBox.timeOne}}</span>
			</div>
			<!--服务地址-->
			<div class="cont">
				<span class="contLeft">服务地址:</span>
				<span class="contRight position">{{contBox.servePosition}}</span>
			</div>
			<!--备注-->
			<div class="cont" v-show="contBox.remarkTrue">
				<span class="contLeft">备&nbsp;&nbsp;&nbsp;&nbsp;注:</span>
				<span class="contRight position">{{contBox.remark}}</span>
			</div>
			<!--右边去这里按钮-->
			<div class="positionBtn">
				<img src="../../../static/worker01.png" />
				<span>去这里</span>
			</div>
			<!--服务详情-->
			<div class="thingList">
				<ul class="thingCont">
					<li class="things">
						<a :href="contBox.thingSrc">
							<img :src="contBox.thingImg" />
							<div class="thingName">
								<div v-text="contBox.thingTitle"></div>
								<p v-text="contBox.thingIntro"></p>
								<span v-text="contBox.thingSprice"></span>
							</div>
							<span class="counts">×5</span>
						</a>
					</li>
				</ul>
			</div>
			<!--合计-->
			<div class="totalMoney">
				<span class="totalRight">￥150.00</span>
				<span class="tolalLeft">合计:</span>
			</div>
			<!--派单-->
			<div class="send">
				<div>派单</div>
			</div>
		</div>
		<div class="kong"></div>

		<!--底部导航-->
		<workerPart actived="second"></workerPart>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				menus: [
					{
						name: '待派单',
						type: 1,
						actived: true
					}, 
					{
						name: '已派单',
						type: 2,
						actived: false
					}
				],
				pagination: {
					page: 1,
					pageSize: 10,
					param: {
						params: {
							type: 1
						}
					},
					content: [
						{
							Name: '朱小明',
							Phone: '17191191610',
							//订单号
							ordeCounts: '123145645145',
							//服务地址
							servePosition: '江苏省 苏州市 工业园区 新平街288号汉嘉大厦 2013室',
							//备注
							remark: '暂无备注',
							//是否有备注
							remarkTrue: true,
							thingSrc: '#serviceDetails',
							thingImg: '@../../static/11@3x.png',
							thingTitle: '小明西一街',
							thingIntro: '内芯及外表清洗',
							thingSprice: '￥30.00/台',
							//购买数量
							counts: '5',
							//服务时间
							timeOne: '2017-08-08',
							timeTwo: '06:10~09:14'
						}, {
							Name: '朱小明',
							Phone: '17191191610',
							//订单号
							ordeCounts: '123145645145',
							//服务地址
							servePosition: '外交部以文件形式正式发布《印度边防部队在中印边界锡金段越界进入中国领土的事实和中国的立场》，其中将该事件的起因经过、印方所持借口，以书面形式历述清晰',
							//备注
							remark: '外交部以文件形式正式发布《印度边防部队在中印边界锡金段越界进入中国领土的事实和中国的立场》，其中将该事件的起因经过、印方所持借口，以书面形式历述清晰',
							//是否有备注
							remarkTrue: false,
							thingSrc: '#serviceDetails',
							thingImg: '@../../static/11@3x.png',
							thingTitle: '小明西一街',
							thingIntro: '内芯及外表清洗',
							thingSprice: '￥30.00/台',
							//购买数量
							counts: '5',
							//服务时间
							timeOne: '2017-08-08',
							timeTwo: '06:10~09:14'
						}
					]
				}
			}
		},
		methods: {
			changeMenu(index) {
				for (let i in this.menus) {
					this.menus[i].actived = false
					if (i == index) {
						this.menus[i].actived = true
					}
				}
			},
			render(response) {
				
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
	.navBox{
		width: 7.5rem;
		height: 0.78rem;
		border-bottom: 0.02rem solid #f2f2f2;
		background: #FFFFFF;
		display: flex;
		-webkit-box-orient: horizontal;
		display: -webkit-box;
	}
	.navBox li{
		-webkit-box-flex: 1;
	}
	.routerLink{
		font-size: 0.26rem;
		color:#666;
		line-height:0.78rem ;
		display: inline-block;
	}
	.routerLink.active {
		color: #2173d6;
		border-bottom: 0.02rem solid #2173d6;
	}

	.contBox {
		width: 7.5rem;
		background: #FFFFFF;
		display: inline-block;
		position: relative;
		margin-top: 0.2rem;
		overflow: hidden;
	}
	
	.contact {
		width: 7rem;
		height: 0.78rem;
		padding: 0 .25rem;
		border-bottom: 1px solid #f2f2f2;
		margin-bottom: .2rem;
	}
	.contact span {
		float: left;
		font-size: 0.26rem;
		color: #666;
		line-height: .78rem;
		margin-right: 0.15rem;
	}
	.contact div {
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
		padding: 0 .25rem;
		display: inline-block;
	}
	
	.cont span {
		float: left;
		margin-top: 0.12rem;
		margin-right: 0.15rem;
	}
	
	.contLeft {
		font-size: 0.26rem;
		width: 1.2rem;
		color: #CCCCCC;
		text-align: left;
		line-height: 0.26rem;
	}
	
	.contRight {
		font-size: 0.26rem;
		color: #666;
		line-height: 0.3rem;
	}
	
	.position {
		width: 4.7rem;
		text-align: left;
	}
	/*右边去这里按钮*/
	
	.positionBtn {
		position: absolute;
		top: 2.5rem;
		right: 0.25rem;
		width: 0.75rem;
		height: 0.65rem;
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
		width: 7.06rem;
		padding: .22rem;
		background: #f5f5f9;
		display: inline-block;
	}
	
	.thingList li {
		width: 7rem;
		height: 1.6rem;
		position: relative;
	}
	
	.thingList a {
		width: 100%;
		height: 100%;
		display: block;
	}
	/*左边图片*/
	
	.thingList img {
		width: 1.6rem;
		height: 1.6rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	/*右边内容*/
	
	.thingName {
		width: 5.5rem;
		height: 1.6rem;
		position: absolute;
		left: 1.82rem;
		top: 0;
		text-align: left;
	}
	/*商品名称*/
	
	.thingName div {
		width: 100%;
		height: 0.45rem;
		font-size: 0.26rem;
		line-height: 0.45rem;
		color: #666;
	}
	/*介绍*/
	
	.thingName p {
		width: 100%;
		height: 0.45rem;
		font-size: 0.24rem;
		line-height: 0.45rem;
		color: #cfcfcf;
		margin-top: .3rem;
	}
	/*价格*/
	
	.thingName span {
		width: 100%;
		height: 0.36rem;
		font-size: 0.26rem;
		line-height: 0.36rem;
		color: #ff5400;
	}
	/*数量*/
	
	.counts {
		position: absolute;
		right: 0.25rem;
		bottom: 0.1rem;
		font-size: 0.26rem;
		color: #666;
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
		font-size: 0.26rem;
		color: #666;
		line-height: 0.78rem;
	}
	
	.tolalLeft {
		font-size: 0.26rem;
		color: #666;
		line-height: 0.78rem;
	}
	
	.send {
		width: 7rem;
		height: 0.78rem;
		padding: 0 .25rem;
	}
	
	.send div {
		float: right;
		width: 1.28rem;
		height: 0.48rem;
		font-size: 0.26rem;
		color: #258ef3;
		line-height: 0.48rem;
		border-radius: 0.3rem;
		border: 1px solid #258ef3;
		margin-top: 0.14rem;
	}
</style>