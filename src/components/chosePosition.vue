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
		<!--内容-->
		<div class="contBox" v-for="(contBox,index) in positionCont">
			<div class="msgPart">
				<div class="fl">联系人：{{contBox.clientName}}</div>
				<span class="fr">{{contBox.clientMobile}}</span>
			</div>
			<p>{{contBox.clientPosition}}</p>
			<!--地址选择-->
			<div class="positionChose clear">
				<div class="partLeft fl">
					<div class="fl" id="btn">
						<!--<img src="../../static/35@2x.png"/>-->
					</div>
					<span class="fl">默认地址</span>
				</div>
				<div class="partRight fr">
					<span>编辑</span>
					<span>删除</span>
				</div>
			</div>
		</div>
		
		<div class="bottomBtn">
			<router-link to="/addPosition">添加服务地址</router-link>
		</div>
		<div class="kong"></div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				title:'服务地址',
				positionCont:[
					{
						clientName:'张三三',
						clientMobile:'17191191610',
						clientPosition:'江苏省苏州市工业园区新平街388滕飞创业产业园塔楼塔楼塔楼他咯'
					},{
						clientName:'张三三',
						clientMobile:'17191191610',
						clientPosition:'江苏省苏州市工业园区新平街388滕飞创业产业园塔楼塔楼塔楼他咯'
					},{
						clientName:'张三三',
						clientMobile:'17191191610',
						clientPosition:'江苏省苏州市工业园区新平街388滕飞创业产业园塔楼塔楼塔楼他咯'
					}
				]
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
		height: 0.92rem;
		background: #2d91f4;
		overflow: hidden;
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
	/*内容*/
	.contBox{
		width: 7.5rem;
		margin-top: 0.4rem;
		background: #FFFFFF;
		display: inline-block;
		color: #222222;
	}
	/*客户信息*/
	.msgPart{
		width: 7rem;
		height: 0.26rem;
		padding: 0 0.25rem;
		margin-top:0.28rem ;
	}
	.msgPart div{
		width:3rem;
		height: 0.26rem;
		font-size: 0.26rem;
		text-align: left;
		
	}
	.msgPart span{
		width: 3rem;
		height: 0.26rem;
		font-size: 0.22rem;
		line-height: 0.26rem;
		text-align: right;
	}
	/*地址*/
	.contBox p{
		width: 6.8rem;
		display: inline-block;
		text-align: left;
		font-size: 0.24rem;
		color: #222222;
		margin: 0.3rem 0;
	}
	/*地址操作*/
	.positionChose{
		width:7rem ;
		height:0.88rem ;
		padding: 0 0.25rem;
		background: #FFFFFF;
		border-top: 2px solid #f2f2f2;
	}
	.partLeft{
		width: 2rem;
		height:0.4rem ;
		margin-top: 0.24rem;
	}
	.partLeft div{
		width: 0.4rem;
		height: 0.4rem;
		background: url("../../static/35@2x.png") no-repeat;
		background-size: 100% 100%;
	}
	.partLeft span{
		width:1rem ;
		height: 0.4rem;
		margin-left: 0.2rem;
		font-size: 0.22rem;
		line-height: 0.4rem;
		color: #222222;
		
	}
	.partRight{
		width: 3rem;
		height: 0.22rem;
		margin-top: 0.3rem;
		color: #222222;
		font-size: 0.22rem;
	}
	.partRight span{
		width: 0.5rem;
		height:0.22rem;
		margin-left: 0.5rem;
	}
	/*底部*/
	.bottomBtn{
		width: 6.9rem;
		height: 0.8rem;
		background: #2f94f4;
		border-radius: 0.5rem;
		margin: 0.15rem 0.3rem 0.28rem;
		position: fixed;
		left: 0 ;
		bottom: 0;
	}
	.bottomBtn a{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.3rem;
		line-height: 0.8rem;
		color: #FFFFFF;
	}
</style>