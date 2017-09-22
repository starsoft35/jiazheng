<template>
	<div id="box">
		<Pagination :render="render" :autoload="false" :param="pagination" :need-token="true" uri="/userCoupon/list" ref="pagination">
			<div style="margin-bottom: 1.5rem;" v-if="pagination.content.length > 0">
				<div class="contBox" v-for="(item,index) in pagination.content" :key="index">
					<div class="LeftPart">
						<img src="../../static/ren.png"/>
						<span>{{item.price}}</span>
					</div>
					<div class="partRight">
						<span>{{item.content}}</span>
						<p>{{item.timeLimit}}</p>
						<img class="rightImg" src="../../static/shixiao@3x.png"/>
					</div>
				</div>
			</div>
				
        </Pagination>
        <div class="none-data-tip" v-if="pagination.content.length == 0 && pagination.loadEnd">
			<img class="none-data-img" src="../../static/42@2x.png" />
			<p>暂无不可使用优惠卷</p>
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
						    flag: 2
						}
                    },
                    loadEnd: false
                },
                
			}
		},
		created() {

		},
		
		mounted() {
			setTimeout(() => {
				this.$refs.pagination.refresh()
			},0)
		},
		methods: {
            render(res) {
                res.result.list.forEach((item) => {
                	this.pagination.content.push({
                        price: Number(item.price),
                        id: item.id,
                        content: item.content,
                        timeLimit: item.timeLimit
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
		background: url("../../static/12334@3x.png") no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	.LeftPart img{
		width:0.20rem ;
		height:0.25rem ;
		position: absolute;
		left: 0.27rem;
		bottom:0.6rem ;
	}
	.LeftPart span{
		font-size: 0.8rem;
		color: #FFFFFF;
		line-height: 0.8rem;
		position: absolute;
		left: 0.53rem;
		bottom:0.45rem ;
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
		z-index: 10;
	}
	.partRight p{
		position: absolute;
		left:0.25rem;
		bottom: 0.38rem;
		font-size: 0.2rem;
		color: #999999;
		z-index: 10;
	}
	/*已过期图片*/
	.rightImg{
		position: absolute;
		right: 0.5rem;
		top: 0.42rem;
		width: 2rem;
		height: 1.2rem;
		z-index: 1;
	}
</style>