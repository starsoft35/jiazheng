<template>
	<div id="box">
		<Header title="派单" back="hidden"></Header>
			
		<div>
			<ul class="navBox">
				<li v-for="(item, index) in menus" @click="changeMenu(index)">
					<div class="routerLink" :class="{active: item.actived}">{{item.name}}</div>
				</li>
			</ul>
			<div style="height: 0.8rem;"></div>
		</div>
		<Pagination :render="render" :param="pagination" :autoload="false" :need-token="true" uri="/serviceOrder/pend"  ref="pagination">
			<div style="margin-bottom: 1.3rem; padding-top: 0px;">
				<div class="contBox" v-for="(contBox,index) in pagination.content">
					<!--姓名 电话-->
					<a :href="'tel:' + contBox.linkPhone" class="contact">
						<span>{{contBox.linkName}}</span>
						<span>{{contBox.linkPhone}}</span>
						<div></div>
					</a>
					<!--订单号-->
					<div class="cont">
						<span class="contLeft">订单编号:</span>
						<span class="contRight">{{contBox.orderNo}}</span>
					</div>
					<!--服务时间-->
					<div class="cont">
						<span class="contLeft">服务时间:</span>
						<span class="contRight">{{contBox.serviceTime}}</span>
					</div>
					<!--服务地址-->
					<div class="cont" style="padding-bottom: 0.25rem;">
						<span class="contLeft">服务地址:</span>
						<span class="contRight position" style="line-height: 1.4;">{{contBox.serviceAddr}}</span>
						<a class="map-lnik" href="#">
							<span>去这里</span>
						</a>
					</div>
					
					<!--服务详情-->
					<div class="thingList">
						<ul class="thingCont">
							<li class="things">
								<a>
									<img :src="contBox.sImage" />
									<div class="thingName">
										<div v-text="contBox.sTitle"></div>
										<span v-if="contBox.orderType == 1">&yen;{{parseInt(contBox.price).toFixed(2)}}</span>
									</div>
									<span class="counts">x{{contBox.mount}}</span>
								</a>
							</li>
						</ul>
					</div>
					<!--合计-->
					<div class="totalMoney" v-if="contBox.orderType == 1">
						<span class="totalRight">&yen;{{parseInt(contBox.total).toFixed(2)}}</span>
						<span class="tolalLeft">合计:</span>
					</div>
					<!--派单-->
					<div class="send" v-if="type == 1">
						<div @click="orderMenu(contBox.orderNo)">派单</div>
					</div>
				</div>
			</div>
				
		</Pagination>
		<div class="none-data-tip" v-if="pagination.content.length == 0">暂无派单</div>

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
				type: 1,
				pagination: {
					content: [],
					page: 1,
					pageSize: 6,
					param: {
						params: {
							type: 1
						}
					},
					
					
				}
			}
		},
		mounted() {
			this.changeMenu(0)
		},

		
		methods: {
			changeMenu(index) {
				this.type = index + 1
				this.pagination = {
                    content: [],
                    page: 1, 
					pageSize: 6,
					param: {
						params: {
							type: this.type
						}
					}
				}

				for (var i in this.menus) {
					this.menus[i].actived = false
					if (i == index) {
						this.menus[i].actived = true
					}
				}

				this.$refs.pagination.refresh()
			},
			
			//跳转工人页面
			orderMenu(id) {
				this.$router.push('/sendPeople/'+ id)
			},
		

			render(response) {
				for(var i in response.result.list){
					this.pagination.content.push(response.result.list[i])
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
	.navBox{
		position: fixed;
		left: 0;
		top: 0.92rem;
		width: 7.5rem;
		height: 0.78rem;
		border-bottom: 0.02rem solid #f2f2f2;
		background: #FFFFFF;
		display: flex;
		-webkit-box-orient: horizontal;
		display: -webkit-box;
		z-index: 50;
	}
	.navBox li{
		-webkit-box-flex: 1;
	}
	.routerLink{
		font-size: 0.26rem;
		color:#666;
		line-height:0.78rem ;
		display: inline-block;
		padding: 0 0.2rem;
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
		display: block;
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
		position: relative;
	}
	
	.cont>span {
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
		min-height: 0.75rem;
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
		padding-bottom: 0.3rem;
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
		line-height: 0.5rem;
		border-radius: 0.3rem;
		border: 1px solid #258ef3;
		margin-top: 0.14rem;
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
</style>