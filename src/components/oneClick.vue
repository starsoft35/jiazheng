<template>
	<div id="box">
		<!--顶部-->
		<Header title="确认订单"></Header>
		<!--客户信息-->
		<a class="clientMessage" href="#/addresses/select">
			<!--姓名 电话-->
			<div class="clientCont clear" v-if="hasDefaultAddr">
				<div class="contName fl">联系人:{{defaultAddr.name}}</div>
				<div class="contMobile fr">{{defaultAddr.phone}}</div>
			</div>
			<!--地址-->
			<div class="clientPosition" v-if="hasDefaultAddr">
				<a  style="display:inline-block; position: relative; padding-left: 0.5rem;">
					<img class="imgLeft fl" src="../../static/37@3x.png"/>
					<span class="fl">{{defaultAddr.address}} {{defaultAddr.detail}}</span>
					<img class="imgRight fr" src="../../static/34@3x.png"/>
				</a>
			</div>
			<router-link v-if="!hasDefaultAddr" to="/addresses/select" style="line-height: 1.8rem; font-size: 0.32rem; color: #2d92f4; padding: 0.5rem 1rem;">添加地址</router-link>
			<!--底部彩条-->
			<div class="imgBottom"></div>
			
		</a>
		<div class="messageBox">
			<!--服务类型-->
			<div class="serveTime borderBottom">
				<span class="fl">服务类型</span>
				<a @click="showService = true" >
					<img src="../../static/34@3x.png" />
					<div class="fr" v-show="!serviceSelect.name">请选择服务类型</div>
					<div class="fr" style="color: #000;" v-show="serviceSelect.name">{{serviceSelect.name}}</div>
				</a>
			</div>
			<!--服务时间-->
			<div class="serveTime">
				<span class="fl">服务时间</span>
				<a @click="showTime = true">
					<img src="../../static/34@3x.png"/>
					<div class="fr" v-show="serveDataSelect.length<1">请选择服务时间</div>
					<div class="fr" style="color: #000;" v-show="serveDataSelect.length == 2">{{serveData}}</div>
				</a>
			</div>
		</div>
		<!--备注-->
		<div class="comment">
			<div>备注 :</div>
			<textarea class="textCont" v-model="remark" placeholder="描述你的服务内容及要求"></textarea>
		</div>
		<!--底部-->
		<div class="kong"></div>
		<!--按钮-->
		<div class="bottomBtn">
			<span @click="addOneButtonOrder" v-show="!disabledBtn">提交预约</span>
			<span class="disable" v-show="disabledBtn">提交预约</span>
		</div>
		<mt-popup v-model="showTime" class="service-time" position="bottom">
			<div class="showTime-content">
				<div class="showTime-header">
					<span @click="showTime = false">取消</span>
					<span @click="serveDataConfirm">确定</span>
				</div>
				<div class="showTime-body">
					<mt-picker 
						:slots="dateSlots" 
						:itemHeight="32" 
						:value-key="'name'"
						@change="onDataChange">
					</mt-picker>
				</div>
			</div>
		</mt-popup>
		<mt-popup v-model="showService" class="service-time" position="bottom">
			<div class="showTime-content">
				<div class="showTime-header">
					<span @click="showService = false">取消</span>
					<span @click="serviceConfirm">确定</span>
				</div>
				<div class="showTime-body">
					<mt-picker 
						:slots="serviceSlots" 
						:itemHeight="32" 
						:value-key="'name'"
						@change="onServiceChange">
					</mt-picker>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script type="text/javascript">
	import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				defaultAddr: {},
				hasDefaultAddr: true,
				showTime: false,
				dateSlots: [
		          {
		            flex: 1,
		            values: [],
		            className: 'slot1',
		            textAlign: 'center'
		          }, {
		            divider: true,
		            content: '-',
		            className: 'slot2'
		          }, {
		            flex: 1,
		            values: [],
		            className: 'slot3',
		            textAlign: 'center'
		          }
		        ],
		        serveDataChange: [],
		        serveDataSelect: [],
		        serveData: '',
		        
		        showService: false,
		        serviceSlots: [
		          {
		            flex: 1,
		            values: [],
		            className: 'slot1',
		            textAlign: 'center'
		          }],
		        serviceChange: {},
		        serviceSelect: {},
		        
		        remark: '',
		        dateObj: [],
		        
		        disabledBtn: false
			}
		},
		created() {
//			this.initData()	
		},
		activated() {
			this.disabledBtn = false
//			this.$api.serveConfirmOrder(null, (res) => {
//		    	this.defaultAddr = res.result.defaultAddr
//		    	this.hasDefaultAddr = this.$isEmptyObject(res.result.defaultAddr)
//		    })
		},
		beforeRouteEnter (to, from, next) {
	    	if(/orders/g.test(from.fullPath) || /addresses/g.test(from.fullPath)) {
	    		next(vm=>{
	    			vm.$api.serveConfirmOrder(null, (res) => {
				    	vm.defaultAddr = res.result.defaultAddr
				    	vm.hasDefaultAddr = vm.$isEmptyObject(res.result.defaultAddr)
				    })
	    		})
	    	}else {
	    		next(vm=>{
	    			vm.showTime = false
	    			vm.showService = false
	    			vm.dateSlots[0].values = []
	    			vm.dateSlots[2].values = []
	    			vm.serviceSlots[0].values = []
	    			vm.remark = ''
	    			vm.serveDataChange = []
			        vm.serveDataSelect = []
			        vm.serveData = ''
			        vm.serviceChange = {}
		       	    vm.serviceSelect = {}
		       	    vm.initData()
	        	})
	    	}
	    	
	    	
		},
		methods:{
			initData() {
				this.$api.serveConfirmOrder(null, (res) => {
			    	this.defaultAddr = res.result.defaultAddr
			    	this.hasDefaultAddr = this.$isEmptyObject(res.result.defaultAddr)
			    	res.result.nextTenDays.forEach((item, index) => {
			    		item.index = index
			    	})
			    	this.dateObj = res.result.nextTenDays
			    	this.dateSlots[0].values = res.result.nextTenDays
			    	
			    })
				this.$api.serviceMenuList({
		        	params:{
					    menuId: null,
					}
			    },(res) => {
			    	this.serviceSlots[0].values = res.result
			    })
			},
			onDataChange(picker, values) {
				let self = this
				let index = 0
				if(values[0]) {
					index = values[0].index
					picker.setSlotValues(1, self.dateObj[index].intervals)
					this.serveDataChange = values
				}
//				this.serveDataChange = values
			},
			serveDataConfirm() {
				this.serveDataSelect = this.serveDataChange.concat()
				this.serveData = this.serveDataSelect[0].name.slice(0,6) + ' ' + this.serveDataSelect[1].name
				this.showTime = false
			},
			onServiceChange(picker, values) {
				this.serviceChange = values[0]
				console.log(values)
			},
			serviceConfirm() {
				this.serviceSelect = this.serviceChange
				this.showService = false
			},
			addOneButtonOrder() {
				if(!this.hasDefaultAddr) {
					Toast({
	                    message: '请选择服务地址',
	                    position: 'bottom',
	                    duration: 1000
	                })
					return
				}
				if(!this.serviceSelect.name) {
					Toast({
	                    message: '请选择服务类型',
	                    position: 'bottom',
	                    duration: 1000
	                })
					return
				}
				if(this.serveDataSelect.length !== 2) {
					Toast({
	                    message: '请选择服务时间',
	                    position: 'bottom',
	                    duration: 1000
	                })
					return
				}
				this.disabledBtn = true
				this.$api.addOneButtonOrder({
					addressId: this.defaultAddr.id,
					contactName: this.defaultAddr.name,
					contactPhone: this.defaultAddr.phone,
					remark: this.remark,
					detailAddr: this.defaultAddr.address,
					serviceDate: this.serveDataSelect[0].timestamp,
//					serviceId: this.serviceId,
					serviceFirstCategoryId: this.serviceSelect.id,
					timeInterval: this.serveDataSelect[1].name,
					timeIntervalId: this.serveDataSelect[1].id
				}, (res) => {
					
					Toast({
					  message: '预约成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 800
					})  
					setTimeout(() => {
						this.$router.replace('/orders')
					},500)
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
	/*客户信息*/
	
	.clientMessage {
		width: 100%;
		background: #FFFFFF;
		display: inline-block;
		margin-bottom: 0.2rem;
		height: 2rem;
		position: relative;
	}
	/*客户姓名和电话部分*/
	
	.clientCont {
		width: 7.5rem;
		height: 0.25rem;
		font-size: 0.25rem;
		color: #222222;
		margin-top: 0.46rem;
		margin-bottom: 0.22rem;
	}
	
	.contName {
		width: 3rem;
		height: 0.25rem;
		margin-left: 0.75rem;
		text-align: left;
	}
	
	.contMobile {
		width: 2rem;
		height: 0.25rem;
		text-align: right;
		margin-right: 0.6rem;
	}
	/*地址   */
	
	.clientPosition {
		width: 7rem;
		display: inline-block;
		margin-left: 0.24rem;
		margin-bottom: 0.3rem;
		position: relative;
	}
	
	.clientPosition span {
		width: 6rem;
		font-size: 0.25rem;
		line-height: 0.3rem;
		color: #333333;
		text-align: left;
		margin-top: 0.1rem;
	}
	
	.imgLeft {
		width: 0.28rem;
		height: 0.35rem;
		margin: 0.2rem 0.25rem 0 0;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -0.17rem;
	}
	
	.imgRight {
		width: 0.13rem;
		height: 0.2rem;
		margin-top: 0.12rem;
	}
	/*底部彩条*/
	
	.imgBottom {
		width: 100%;
		height: 0.06rem;
		background: url("../../static/45@3x.png") no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	/* 服务类型  选择时间 */
	.messageBox{
		width: 7.5rem;
		background: #FFFFFF;
		display: inline-block;
	}
	.serveTime {
		width: 7rem;
		height: 0.9rem;
		margin: 0 .25rem;
		background: #FFFFFF;
		display: inline-block;
	}
	
	.borderBottom {
		border-bottom: 1px solid #f2f2f2;
	}
	
	.serveTime a {
		display: inline-block;
		float: right;
	}
	
	.serveTime span {
		width: 1.2rem;
		height: 0.9rem;
		padding-left: 0.07rem;
		font-size: 0.24rem;
		line-height: 0.9rem;
		text-align: left;
		color: #4E4E4E;
	}
	
	.serveTime img {
		width: 0.12rem;
		height: 0.22rem;
		margin-top: 0.34rem;
		float: right;
	}
	
	.serveTime div {
		width: 4rem;
		height: 100%;
		text-align: right;
		font-size: 0.26rem;
		line-height: 0.9rem;
		color: #d6d6d6;
		margin-right: 0.28rem;
	}
	/*备注*/
	.comment{
		width:7rem;
		height:2rem ;
		padding: 0 0.25rem;
		background: #FFFFFF;
		margin-top:0.2rem;
		overflow: hidden;
	}
	.comment div{
		width: 0.75rem;
		height: 0.26rem;
		margin-top: 0.26rem;
		font-size: 0.26rem;
		color: #222222;
		float: left;
	}
	.textCont{
		width: 6rem;
		height:1.7rem ;
		margin-top: 0.24rem;
		font-size: 0.24rem;
		border: none;
		float: left;
	}
	/*底部*/
	/*底部按钮*/
	.bottomBtn{
		width: 6.9rem;
		height: 0.8rem;
		background: #2f94f4;
		border-radius: 0.5rem;
		margin: 0rem 0.3rem 0.3rem;
		position: fixed;
		left: 0;
		bottom: 0;
		overflow: hidden;
	}
	.bottomBtn span{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.3rem;
		line-height: 0.8rem;
		color: #FFFFFF;
	}
	.bottomBtn span.disable{
		background: #ddd;
		color: #aaa;
	}
</style>