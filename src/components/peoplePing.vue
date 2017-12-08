<template>
	<div id="box">
		<!--顶部-->
		<Header title="评价列表"></Header>
		<div class="headPart">
			
				
			<!--满意度-->
			<ul class="fontPart">
				<li class="partLeft">{{percent}}%</li>
				<li class="partRight">满意</li>
			</ul>
		</div>
		<!--用户评价-->
		<Pagination :render="render" :param="pagination" :need-token="true" uri="/evaluate/list">
			<div style="margin-bottom: 1.5rem;" v-if="pagination.content.length>0">
				<div class="ping" v-for="(item,index) in pagination.content" :key="index">
					<div class="client">
						<div class="clientMessage clear">
							<!--头像-->
							<div class="clientImg fl">
								<img :src="item.headImage"/>
								<span>{{item.nickName}}</span>
							</div>
							<!--星星-->
							<ul class="clientXing fr clear">
								<li class="clientPing active" v-for="n in item.starLevel">
									<!--<img src="@../../static/39@3x.png />-->
								</li>
								<li class="clientPing" v-for="n in  5-item.starLevel">
									<!--<img src="@../../static/39@3x.png" />-->
								</li>
							</ul>
						</div>
						<span>{{item.eTime}}</span>
						<p>{{item.content}}</p>
					</div>
				</div>
			</div>
				
        </Pagination>
		<div class="none-data-tip" v-if="pagination.content.length == 0 && pagination.loadEnd">暂无评论</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'评价列表',
				evaluateList: [],
				serviceId: undefined,
				percent: undefined,
				
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    param: {},
                    loadEnd: false
                },
			}
		},
		created() {
			this.serviceId = this.$route.params.id
			this.pagination.param = {
				params:{
				    serviceId: this.serviceId
				}
			}
//			this.$api.evaluateList({
//	        	params:{
//				    serviceId: this.serviceId
//				}
//		    },(res) => {
//		    	this.evaluateList = res.result.list
//		    	this.percent = parseInt(res.result.percent)
//		    	
//		    })
		},
		methods: {
			render(res) {
                this.percent = parseInt(res.result.percent)
                res.result.list.forEach((item) => {
                	this.pagination.content.push({
                        content: item.content,
                        eTime: item.eTime,
                        headImage: item.headImage,
                        nickName: item.nickName,
                        starLevel: item.starLevel
                    })
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
	.headPart{
		width: 100%;
		background: url("../../static/banner.png") repeat-y top center;
		overflow: hidden;
		position: relative;
		top: -1px;
	}
	.headCont{
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
		/*border: 1px solid red;*/
	}
	.headCont a{
		display: block;
	}
	.headCont span{
		color: #FFFFFF;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../static/return.png");
		background-size: 100% 100%;
	}
	.headCont p{
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	/*满意度*/
	.fontPart{
		width: 7.5rem;
		height: 2.2rem;
		display: block;
		color: #FFFFFF;
		position: relative;
	}
	.partRight{
		position: absolute;
		right: 2.25rem;
		bottom: 0.8rem;
		text-align: right;
		font-size: 0.3rem;
		width: 0.7rem;
		height:0.3rem ;
	}
	.partLeft{
		position: absolute;
		right: 3rem;
		bottom: 0.8rem;
		text-align: right;
		font-size: 0.6rem;
		width: 2.35rem;
		height:0.6rem ;
	}
	.ping{
		width: 100%;
		display: inline-block;
		margin-bottom: 0.2rem;
		background: #FFFFFF;
	}
	.client{
		width: 7rem;
		padding: 0 0.25rem;
		text-align: left;
		margin-bottom: 0.2rem;
	}
	.clientMessage{
		width: 7rem;
		display: inline-block;
	}
	/*头像以及名称*/
	.clientImg{
		overflow: hidden;
		width: 5.3rem;
		height: 0.48rem;
		margin: 0.2rem 0 0.1rem 0;
		display: flex;
	}
	.clientImg img{
		width: 0.48rem;
		height: 0.48rem;
		border-radius: 50%;
	}
	.clientImg span{
		height:0.48rem ;
		flex: 1;
		overflow: hidden;
		font-size: 0.28rem;
		color: #222222;
		line-height: 0.48rem;
		margin-left: 0.2rem;
		white-space: nowrap;
	}
	/*五颗星星*/
	.clientXing{
		width: 1.7rem;
		height:0.48rem;
		margin-top: 0.32rem;
	}
	.clientXing li{
		width:0.24rem;
		height: 0.24rem;
		float: left;
		margin-right: 0.08rem;
	}
	.clientPing.active{
		background-image: url(../../static/39@3x.png);
	}
	.clientPing{
		background: url(../../static/40@3x.png) no-repeat center;
		background-size: 100%;
	}
	.clientXing img{
		width:0.24rem;
		/*height: 0.24rem;*/
	}
	/*时间*/
	.client>span{
		width: 3rem;
		height: 0.2rem;
		font-size: 0.24rem;
		color: #999999;
	}
	.client p{
		width: 7rem;
		margin: 0.25rem 0;
		font-size: 0.26rem;
		color: #222222;
	}
</style>