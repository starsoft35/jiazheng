<template>
	<div id="box">
		<!--搜索栏-->
		<div class="head_part">
			<div class="search fl">
				<img src="../../static/search-icon.png"/>
				<form action="#" onsubmit="return false">
			    	<input type="search" ref="Input" @input="backSearch" class="input-box" v-model.trim="serviceWord" @keyup.enter="searchService" placeholder=" 搜索你要的商品"/>
				</form>
			</div>
			<a class="returnFirst fr" @click="back">取消</a>
		</div>
		<!--大家都在搜-->
		<!--<div class="search_all">
			<div class="searchList">
				<span>大家都在搜索</span>
				<ul class="searchBox">
					<li class="searchCont" v-for="(searchCont,index) in serchList" >
						<a :href="searchCont.searchSrc" v-text="searchCont.searchText"></a>
					</li>
				</ul>
			</div>
		</div>-->
		<!--历史搜索-->
		<div class="search_history" v-show="!searchStatus">
			<div class="history_title">
				<span class="fl">历史搜索</span>
				<div class="destroy fr" @click="delelt"></div>
			</div>
			<!--调用上部分样式-->
			<ul class="histroyBox">
				<li class="histroyCont" v-for="value in histroyList" @click="searchHistory(value)" >
					<a>{{value}}</a>
				</li>
			</ul>
		</div>
		<div class="thingList page-content" v-show="searchStatus">
			<Pagination :render="render" ref="pagination" :param="pagination" :autoload="false" :need-token="false" uri="/service/searchs">
	            <ul class="thingCont" v-if="pagination.content.length>0">
					<li class="things" v-for="(item,index) in pagination.content" :key="index">
						<router-link :to="'/serviceDetails/' +item.id">
							<img :src="item.listImage"/>
							<div class="thingName">
								<div>{{item.title}}</div>
								<p>{{item.abstractContent}}</p>
								<span>{{item.price}}</span>
							</div>
						</router-link>
					</li>
				</ul>
				<div class="none-data-tip" v-show="pagination.content.length<1 && pagination.loadEnd">没有数据</div>	
	        </Pagination>
			
		</div>
		<confirm-modal :show="show" 
			@cancel_modal="cancel_modal" 
			@confirm_modal="confirm_modal" 
			@closeModal="show = false" 
			message="确定删除历史记录?">
		</confirm-modal>
	</div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data(){
			return {
				show: false,
				histroyList:[],
				serviceWord: '',
				currCity: {},
				
				searchStatus: false,
				
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
//			this.initData()
		},
		mounted() {
			this.$refs.Input.focus()
		},
		methods:{
			initData() {
				let openCity = this.$storage.get('currCity')
				if(openCity) {
					this.currCity = openCity
				}
				var historyWord = this.$storage.get('serveWord')
				if(historyWord) {
					this.histroyList = historyWord
				}
			},
			back() {
				this.$router.go(-1)
			},
			delelt(){
				this.show = true
			},
			cancel_modal() {
				this.show = false
			},
			confirm_modal() {
				this.histroyList =[];
				this.$storage.remove('serveWord')
				Toast({
				  message: '删除成功',
				  position: 'bottom',
				  duration: 1000
				});
			},
			backSearch() {
				this.searchStatus = false
			},
			searchService() {
				if(!this.serviceWord) {
					Toast({
					  message: '请输入要搜索的内容',
					  position: 'bottom',
					  duration: 1500
					});
					return
				}
				this.page = 1
				this.pagination.content = []
				this.pagination.param = {
		        	params:{
					    cityName: this.currCity.name,
					    keyword: this.serviceWord,
					}
			    }
				document.activeElement.blur();
				this.searchStatus = true
				this.$refs.pagination.refresh()
			},
			render(res) {
				var flag = true
		    	this.searchStatus = true
		    	this.histroyList.forEach((value) => {
		    		if(value == this.serviceWord.trim()) {
		    			flag = false
		    			return
		    		}
		    	})
		    	if(flag) {
		    		this.histroyList.push(this.serviceWord)
		    		this.$storage.set('serveWord',this.histroyList)
		    	}
                res.result.list.forEach((item) => {
                	this.pagination.content.push(item)
                })
            },
			searchHistory(value) {
				this.serviceWord = value
				this.searchService()
			},
		},
		beforeRouteEnter (to, from, next) {
	    	if(/serviceDetails/g.test(from.fullPath)) {
	    		next()
	    	}else {
	    		next(vm=>{
	    			vm.initData()
	    			vm.serviceWord = ''
	    			vm.$refs.Input.focus()
	            	vm.searchStatus = false
	        	})
	    	}
	    	
	    	
		},
	}
</script>

<style scoped>
		.page-content{
			position: absolute;
			width: 100%;
			top: 1rem;
			bottom: 0;
			left: 0;
			overflow-y: auto;
		}
		html,body{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			position: relative;
		}
		#box {
			padding-top: 1rem;
		}
		/*顶部搜索栏*/
		.head_part{
			width: 7rem;
			height: 0.5rem;
			padding:0.25rem;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 50;
			background: #F5F5F9;
			
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
			font-size: 0.26rem;
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
			font-size:0.28rem ;
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
			font-size: 0.24rem;
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
			margin-bottom: 0.2rem;
			margin-top: 0.2rem;
			display: flex;
			justify-content: space-between;
		}
		.history_title span{
			width:1.2rem ;
			height: 100%;
			font-size:0.28rem;
			color:#4e4e4e;
			line-height:0.5rem;
		}
		/*历史记录列表*/
		.histroyBox{
			width: 7rem;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
		}
		.histroyBox a{
			display:block;
			font-size: 0.26rem;
			padding: 0.1rem 0.3rem;
			color: #222222;
			text-align: left;
		}
		.histroyCont{
			float: left;
			margin: 0 0.15rem 0.3rem 0;
			border-radius: 0.25rem;
			background:#eff0f1;
		}
		.destroy{
			width: 1rem;
			margin-right: 0.1rem;
			background: url("../../static/laji.png") no-repeat right center;
			background-size: auto 60%;
		}
		/*物品列表*/
	.thingList{
		width:100%;
		display: inline-block;
		
	}
	.thingList li{
		width: 7.1rem;
		height: 1.4rem;
		padding: 0.2rem;
		border-bottom: 1px solid #f2f2f2;
		position: relative;
		background: #FFFFFF;
	}
	.thingList a{
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
	}
	/*左边图片*/
	.thingList img{
		width:1.40rem ;
		height:1.40rem ;
		position: absolute;
		left:0rem ;
	}
	/*右边内容*/
	.thingName{
		width: 5.5rem;
		height: 1.4rem;
		position: absolute;
		left: 1.7rem;
		text-align: left;
	}
	/*商品名称*/
	.thingName div{
		width: 100%;
		height: 0.45rem;
		font-size:0.25rem ;
		line-height: 0.45rem;
		color: #222222;
		margin-bottom: 0.15rem;
	}
	/*介绍*/
	.thingName p{
		width: 100%;
		height: 0.45rem;
		font-size:0.2rem ;
		line-height: 0.45rem;
		color: #aaa;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	/*价格*/
	.thingName span{
		width: 100%;
		height: 0.36rem;
		font-size:0.28rem ;
		line-height: 0.36rem;
		color: #ff5400;
	}
</style>