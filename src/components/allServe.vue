<template>
	<div id="box">
		<Header title="全部服务"></Header>
		<!--内容部分-->
		<div class="serveBox">
			<ul class="boxLeft" id="box_Left">
				<li 
					v-for="(item, index) in menuList" 
					:class="currIndex == index ? 'active' : ''"  
					@click="selectMenu(index)"
					:key="index">
					<span>{{item.name}}</span>
				</li>
				
			</ul>
			<div class="boxRight">
				<div id="serve_box">
					<div class="serveImg">
						<img :src="currMenu.banner"/>
					</div>
					<div class="serveTitle">{{currMenu.name}}</div>
					<ul class="servePart">
						<li class="serve_list fl" v-for="(item,index) in currMenu.childList" :key="index">
							<router-link :to="'/serveCont/'+ item.id">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {				
				menuId: undefined,
				menuList: [],
				currMenu: {},
				currIndex: 0
			}
		},
		methods:{
			
		},
		created() {
//			this.menuId = this.$route.params.id
//			this.$api.serviceMenuList({
//	        	params:{
//				    menuId: this.menuId,
//				}
//		    },(res) => {
//		    	this.menuList = res.result
//		    	res.result.forEach((item, index) => {
//		    		if(item.isDefault == 1) {
//		    			this.currMenu = item
//		    			this.currIndex = index
//		    		}
//		    	})
//		    })
		},
		beforeRouteEnter (to, from, next) {
	    	if(/first/g.test(from.fullPath) || from.fullPath == '/') {
	    		next(vm=>{
	    			vm.initData()
	    		})
	    	}else {
	    		next()
	    	}
	    	
	    	
		},
		methods: {
			initData() {
				this.menuId = this.$route.params.id
				this.$api.serviceMenuList({
		        	params:{
					    menuId: this.menuId,
					}
			    },(res) => {
			    	this.menuList = res.result
			    	res.result.forEach((item, index) => {
			    		if(item.isDefault == 1) {
			    			this.currMenu = item
			    			this.currIndex = index
			    		}
			    	})
			    })
			},
			selectMenu(index) {
				this.currIndex = index
				this.currMenu = this.menuList[index]
			}
		}
	}
</script>

<style scoped>
	#box {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: #fff;
	}
	/*内容服务部分*/
	.serveBox{
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0.92rem;
		width: 100%;
		display: flex;
	}
	/*左边部分*/
	.boxLeft{
		width: 1.65rem;
		border-right: 1px solid #e5e5e5;
		padding-top: 0.1rem;
		overflow-y: auto;
	}
	.boxLeft li{
		width:1.65rem ;
		height:1rem;
		line-height: 1rem;
		color:#4e4e4e ;
		position: relative;
	}
	.boxLeft li.active{
		color:#307cd9;
	}
	.boxLeft li.active:before{
		content: '';
		width: 0.06rem;
		height: 0.5rem;
		background: #307cd9;
		position: absolute;
		left: 0;
		top: 0.25rem;
	}
	
	/*右边部分*/
	.boxRight{
		flex: 1;
	}
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
		font-size: 0.28rem;
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
		background: #fafafa;
		margin-bottom: 0.2rem;
	}
	.serve_list a{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.26rem;
		line-height: 0.6rem;
		text-align: center;
		color: #7a7a7a;
	}
</style>