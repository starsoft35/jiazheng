<template>
	<div id="box">
		<!--搜索栏-->
		<div class="head_part">
			<form action="" method="post">
				<div class="search fl">
					<img src="../../static/search-icon.png"/>
				    <input name="" type="text" class="input-box" placeholder=" 搜索你要的商品"/>
				</div>
			</form>
			<a href="#first" class="returnFirst fr">取消</a>
		</div>
		<!--大家都在搜-->
		<div class="search_all">
			<div class="searchList">
				<span>大家都在搜索</span>
				<ul class="searchBox">
					<li class="searchCont" v-for="(searchCont,index) in serchList" >
						<a :href="searchCont.searchSrc" v-text="searchCont.searchText"></a>
					</li>
				</ul>
			</div>
		</div>
		<!--历史搜索-->
		<div class="search_history">
			<div class="history_title">
				<span class="fl">历史搜索</span>
				<div class="destroy fr" @click="delelt"></div>
			</div>
			<!--调用上部分样式-->
			<ul class="histroyBox">
				<li class="histroyCont" v-for="(histroyCont,index) in histroyList" >
					<a :href="histroyCont.histroySrc" v-text="histroyCont.histroyText"></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				serchList:[
					{
						searchText:'日常保洁',
						searchSrc:'#second'
		
					},{
						searchText:'家电清洗'
					},{
						searchText:'保姆'
					},{
						searchText:'搬家货运'
					},{
						searchText:'家电清洗'
					},{
						searchText:'擦玻璃'
					},{
						searchText:'保洁'
					}
				],
				histroyList:[
					{
						histroyText:'日常保洁',
						histroySrc:'#second'
					},{
						histroyText:'日常保洁',
						histroySrc:'#second'
					},{
						histroyText:'日常保洁',
						histroySrc:'#second'
					},{
						histroyText:'日常保洁',
						histroySrc:'#second'
					}
				]
			}
		},
		methods:{
			delelt(){
				this.histroyList =[];
//				return 
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
		html,body{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			position: relative;
		}
		#box {
		width: 7.5rem;
		padding: 0px;
		margin: 0px;
		}
		/*顶部搜索栏*/
		.head_part{
			width: 7rem;
			height: 0.5rem;
			margin:0.25rem auto;
			
		}
		.search{
			width: 6.25rem;
			height: 0.5rem;
			border-radius: 0.25rem;
			border: none;
			background: #eff0f1;
			position: relative;
		}
		.search img{
			position: absolute;
			left:0.24rem;
			top: 0.12rem;
			width: 0.25rem;
			
		}
		.input-box{
			position: absolute;
			left:0.7rem ;
			top: 0;
			width: 5rem;
			height: 0.5rem;
			border: none;
			background: #eff0f1;
			
		}
		/*取消按钮*/
		.returnFirst{
			display: block;
			font-size: 0.22rem;
			color: #2173d6;
			line-height:0.5rem;
		}
		/*大家都在搜索*/
		.search_all{
			width: 100%;
			display: inline-block;
		}
		.search_all span{
			display: block;
			width: 7rem;
			height: 1rem;
			font-size:0.22rem ;
			line-height:1rem;
			margin: auto;
			color: #222222;
			text-align: left;
		}
		/*列表*/
		.searchBox{
			width: 7rem;
			margin: 0 auto;
		}
		.searchBox a{
			display:block;
			font-size: 0.2rem;
			line-height: 0.5rem;
			margin:0 30px;
			color: #222222;
		}
		.searchCont{
			float: left;
			margin: 0 0.2rem 0.2rem 0;
			border-radius: 0.25rem;
			background:#eff0f1;
			height: 0.5rem;
		}
		/*历史搜索*/
		.search_history{
			width: 7rem;
			margin: 0 auto;
			display: inline-block;
		}
		.history_title{
			width: 100%;
			height: 0.5rem;
		}
		.history_title span{
			width:1.2rem ;
			height: 100%;
			font-size:0.22rem;
			color:#4e4e4e;
			line-height:0.5rem;
		}
		/*历史记录列表*/
		.histroyBox{
			width: 7rem;
			margin: 0 auto;
		}
		.histroyBox a{
			display:block;
			font-size: 0.2rem;
			line-height: 0.5rem;
			margin:0 30px;
			color: #222222;
		}
		.histroyCont{
			float: left;
			margin: 0 0.15rem 0.2rem 0;
			border-radius: 0.25rem;
			background:#eff0f1;
			height: 0.5rem;
		}
		.destroy{
			width: 0.24rem;
			height: 0.28rem;
			background: url("../../static/laji.png") no-repeat;
			background-size: 100% 100%;
			margin-top: 0.12rem;
		}
</style>