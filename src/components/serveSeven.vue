<template>
	<div id="serve_box">
		<div class="serveImg">
			<img :src="serveImg"/>
		</div>
		<div class="serveTitle" v-text="serveFont"></div>
		<ul class="servePart">
			<li class="serve_list fl" v-for="(serve_list,index) in listPart">
				<a :href="serve_list.listSrc" v-text="serve_list.list"></a>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				serveImg:'@../../static/15@3x.png',
				serveFont:'家电维修',
				listPart:[
					{
						list:'擦玻璃',
						listSrc:'#second'
					},{
						list:'厨房高温保洁',
						listSrc:'#second'
					},{
						list:'卫生间保洁',
						listSrc:'#second'
					},{
						list:'垃圾清理',
						listSrc:'#second'
					},{
						list:'垃圾清理',
						listSrc:'#second'
					},{
						list:'垃圾清理',
						listSrc:'#second'
					},{
						list:'垃圾清理',
						listSrc:'#second'
					}
				]
			}
		}
	}
</script>

<style scoped>
	#serve_box{
		width:5.45rem;
		display: inline-block;
	}
	.serveImg{
		width:5.15rem ;
		height:1.95rem ;
		margin:0.13rem 0.17rem 0.08rem 0.14rem;
	}
	.serveImg img{
		width: 5.15rem;
		height: 1.95rem;
		margin: 0;
		padding: 0;
	}
	.serveTitle{
		width: 100%;
		height: 0.97rem;
		font-size: 0.24rem;
		color: #222222;
		text-align: left;
		line-height: 0.97rem;
		
	}
	/*服务列表*/
	.servePart{
		width: 5.45rem;
		display: inline-block
	}
	.serve_list{
		width:1.7rem ;
		height:0.6rem ;
		margin-right: 0.1rem;
		margin-top:0.15rem;
		background: #fafafa;
	}
	.serve_list a{
		width: 100%;
		height: 100%;
		font-size: 0.2rem;
		line-height: 0.6rem;
		text-align: center;
		color: #7a7a7a;
	}
	
</style>