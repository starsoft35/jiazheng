<template>
	<div id="serve_box" style="padding-bottom: 0.4rem;">
		<Header title="商家入驻"></Header>
		<div class="enter-process">
			<h3>入驻流程</h3>
			<div class="tip-1">三天过审，快速上线</div>
			<div class="process-item">
				<p class="tit">1、提交资料</p>
				<p class="text">
					填写您的开店真实资料， 提交后三个工作日完成审核
				</p>
			</div>
			<div class="process-item">
				<p class="tit">2、在线签约</p>
				<p class="text">
					确认合同信息，生成电子印章，完成签约后提交法务印章
				</p>
			</div>
			<div class="process-item">
				<p class="tit">3、完善资料</p>
				<p class="text">
					在商家端完成开店任务
				</p>
			</div>
			<div class="process-item">
				<p class="tit">4、上线营业</p>
			</div>
		</div>
		<a @click="callPhone" v-if="isWeixin != 'yes'" class="enter-phone">咨询电话</a>
		<a v-if="isWeixin == 'yes'" href="tel:18079115648" class="enter-phone">咨询电话</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				isWeixin: this.$storage.get('isWeixinTerm')
			}
			
		},
		methods: {
			callPhone() {
				this.$bridge.callPhone('18079115648')
			}
		}
	}
</script>

<style scoped>
	.enter-process{
		padding: 0.4rem;
	}
	.enter-process>h3{
		color: #2173d6;
		font-size: 0.4rem;
		font-weight: 600;
	}
	.enter-process>.tip-1{
		display: inline-block;
		background: #f8b62d;
		height: 0.46rem;
		line-height: 0.46rem;
		color: #fff;
		padding: 0 0.2rem;
		border-radius: 0.23rem;
		margin: 0.3rem 0 0.4rem;
	}
	.process-item{
		width: 5rem;
		margin: 0 auto;
		color: #333;
		font-size: 0.3rem;
		padding-bottom: 1.2rem;
		position: relative;
	}
	.process-item:last-child{
		padding-bottom: 0;
	}
	.process-item:last-child:before{
		display: none;
	}
	.process-item:before{
		position: absolute;
		content: '';
		height: 1rem;
		width: 100%;
		left: 0;
		bottom: 0.1rem;
		background: url(../../static/process.png) no-repeat center;
		background-size: auto 90%; 
	}
	.process-item .tit{
		color: #666;
		padding-bottom: 0.15rem;
	}
	.process-item .text{
		font-size: 0.28rem;
	}
	.enter-phone{
		display: inline-block;
		width: 6.7rem;
		color: #fff;
		height: 0.7rem;
		line-height: 0.7rem;
		background-color: #2381f4;
		border-radius: 0.35rem;
	}
</style>