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
						<img :src="currMenu.picture"/>
					</div>
					<div class="serveTitle">{{currMenu.name}}</div>
					<ul class="servePart">
						<li class="serve_list fl" v-for="(item,index) in currMenu.childList" :key="index">
							<router-link :to="'/serveCont/'+ item.id">
								<div class="img-box">
									<img :src="item.picture" />
								</div>
								
								<p>{{item.name}}</p>
							</router-link>
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
					    cityName: this.$storage.get('currCity').name
					}
			    },(res) => {
			    	this.menuList = res.result
			    	res.result.forEach((item, index) => {
			    		if(item.isDefault == 1) {
			    			this.currMenu = item
			    			this.currIndex = index
			    		}
			    		if(!item.picture) {
			    			item.picture = '../../static/sda23@3x.png'
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
		overflow-y: auto;
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
		text-align: center;
		
	}
	/*服务列表*/
	.servePart{
		width: 5.45rem;
		display: flex;
		flex-wrap: wrap;
	}
	.serve_list{
		width: 33.33%;
		margin-bottom: 0.4rem;
	}
	.serve_list a{
		display: block;
		color: #777;
	}
	.serve_list a .img-box{
		width: 0.68rem;
		height: 0.68rem;
		position: relative;
		margin: 0 auto;
	}
	.serve_list a .img-box img{
		position: absolute;
		height: 100%;
		max-width: 100%;
		width: auto;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.serve_list a p{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-top: 0.14rem;
		font-size: 0.24rem;
	}
</style>