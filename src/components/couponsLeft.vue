<template>
	<div id="box">
		<div class="page-content">
			
			<Pagination :render="render" :autoload="false" :param="pagination" :need-token="true" uri="/userCoupon/list" ref="pagination">
				<div class="unUse" v-show = "pagination.content.length>0 && couponStatus == 'use'" @click="unUse">
					不使用优惠券
				</div>
				<div v-if="pagination.content.length>0">
					<div class="contBox" v-for="(item,index) in pagination.content" :key="index" @click="useCoupon(item)">
						<div class="LeftPart">
							<img class="status" v-show="item.validType" src="../../static/2112@3x.png"  />
							<img class="status" v-show="!item.validType" src="../../static/12334@3x.png"  />
							<img class="money-icon" src="../../static/ren.png"/>
							<span>{{parseInt(item.price)}}</span>
						</div>
						<div class="partRight">
							<span>{{item.content}}</span>
							<p>{{item.timeLimit}}</p>
						</div>
						<img v-if="item.selected" src="../../static/select.png" class="selected"  />
					</div>
				</div>
				<div class="none-data-tip" v-if="pagination.content.length == 0 && pagination.loadEnd">
					<img class="none-data-img" src="../../static/42@2x.png" />
					<p>暂无可使用优惠券</p>
				</div>
	        </Pagination>
			
		</div>
			
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    param: {
                    	params:{
						    flag: 1
						}
                    },
                    loadEnd: false
                },
                currCoupon: {},
                loadEnd: false,
                couponStatus: ''
			}
		},
		created() {
			this.couponStatus = this.$route.params.status
			if(this.couponStatus == 'use') {
				let currServeCoupon = this.$storage.get('currServeCoupon')
				this.pagination = {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    param: {
                    	params:{
										    flag: 1,
										    serviceId: currServeCoupon.serviceId,
										    serviceNum: currServeCoupon.serviceNum,
										    orderSn: currServeCoupon.orderSn
											}
                    },
                    loadEnd: false
                }
				if(this.$storage.get('currCoupon')) {
					this.currCoupon = this.$storage.get('currCoupon')
				}
			}
		},
		mounted() {
			setTimeout(() => {
				this.$refs.pagination.refresh()
			},0)
		},
		methods: {
            render(res) {
                res.result.list.forEach((item) => {
                	item.selected = item.id == this.currCoupon.id
                	if (!item.validType && item.selected) {
			          item.selected = false
			          this.$storage.remove('currCoupon')
			        }
                	this.pagination.content.push({
                        price: Number(item.price),
                        id: item.id,
                        content: item.content,
                        timeLimit: item.timeLimit,
                        selected: item.selected,
                        validType: item.validType
                    })
                })
                console.log(this.pagination.content)
            },
            useCoupon(item) {
            	if(this.$route.params.status !== 'use') {
            		return
            	}
            	if(!item.validType) {
            		return
            	}
            	this.currCoupon.id = item.id
            	this.currCoupon.price = item.price
            	this.$storage.set('currCoupon', this.currCoupon)
            	this.$router.go(-1)
            	this.$storage.remove('currServeCoupon')
            },
            unUse() {
            	this.$storage.remove('currCoupon')
            	this.$router.go(-1)
            	this.$storage.remove('currServeCoupon')
            }
        }
	}
</script>

<style scoped>
	.page-content{
		position: absolute;
		width: 100%;
		top: 1.76rem;
		bottom: 0;
		left: 0;
		overflow-y: auto;
		padding-bottom: 0.4rem;
	}
	.unUse{
		width: 6.7rem;
		height: 0.7rem;
		line-height: 0.7rem;
		text-align: center;
		color: #222;
		border: 1px solid #999;
		margin: 0.5rem auto 0.2rem;
		border-radius: 0.16rem;
	}
	.contBox{
		width:6.6rem;
		height:2rem ;
		margin:0.45rem 0.45rem 0;
		background: #FFFFFF;
		position: relative;
	}
	/*左边部分*/
	.LeftPart{
		width: 2.3rem;
		height: 2rem;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	.LeftPart img.status{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.LeftPart img.money-icon{
		width:0.20rem ;
		height:0.25rem ;
		position: absolute;
		left: 0.27rem;
		bottom:0.6rem ;
		z-index: 10;
	}
	.LeftPart span{
		font-size: 0.8rem;
		color: #FFFFFF;
		line-height: 0.8rem;
		position: absolute;
		left: 0.53rem;
		bottom:0.45rem ;
		z-index: 10;
	}
	/*未过期右边 */
	/*右边部分*/
	.partRight{
		width: 4.3rem;
		height: 2rem;
		position: absolute;
		right:0;
		top: 0;
	}
	.partRight span{
		position: absolute;
		left:0.25rem ;
		top:0.37rem ;
		font-size:0.26rem ;
		color: #222222;
	}
	.partRight p{
		position: absolute;
		left:0.25rem;
		bottom: 0.38rem;
		font-size: 0.2rem;
		color: #999999;
	}
	.selected{
		position: absolute;
		right: -0.1rem;
		top: -0.1rem;
		width: 0.6rem;
	}
</style>