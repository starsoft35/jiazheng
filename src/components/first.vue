<template>
	<div id="box">
		<div>
			<div class="head">
				<!--地点按钮-->
				<div class="top-position">
					<a href="#positionChose">
						<span>{{currCity.name.length>2 ? currCity.name.slice(0,2) + '...' : currCity.name}}</span>
						<img src="../../static/1@3x.png"/>
					</a>
				</div>
				<!--搜索栏-->
				<div class="search">
					<!--<img src=""/>-->
					<a href="#search">
						<img src="../../static/38@3x.png"/>
						<span class="fa fa-search" aria-hidden="true">搜索你想要的商品</span>
					</a>
				</div>
				<!--右边-->
				<div class="join">
					<a href="#sellerEnter">
						<img src="../../static/2@3x.png"/>
					</a>
				</div>
			</div>
			<div style="height: 0.9rem;"></div>
		</div>
		
		<!--banner 轮播-->
		<div class="banner">
			<mt-swipe :auto="0">
				<mt-swipe-item v-for="(item, index) in homeData.banners" :key="index">
					<a @click="bannerLink(item)" class="fullEle">
						<img class="fullEle" :src="item.pic" />
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--nav-->
		<!--中部内容导航-->
		<div class="cont">
			<ul class="nav">
				<!--<li class="nav_cont" v-for="(nav_cont,index) in data2">
					<a :href="nav_cont.goSrc">
						<img :src="nav_cont.src" alt="nav_cont.alt" />
						<span>{{nav_cont.vul}}</span>
					</a>
				</li>-->
				<li class="nav_cont" v-for="(item, index) in menuList.slice(0,7)" :key="index">
					<router-link :to="'allServe/'+ item.id">
						<img :src="item.banner" />
						<span>{{item.name}}</span>
					</router-link>
				</li>
				<li class="nav_cont">
					<router-link :to="'allServe/'+ firstMenu.id">
						<img src="@../../static/10@3x.png" />
						<span>全部服务</span>
					</router-link>
				</li>
			</ul>
		</div>
		<!--分享有礼与一键下单-->
		<div class="shareBox">
			<div class="share clear">
				<div class="shareCont fl">
					<a href="#sharePage">
						<span>分享有礼</span>
						<p>分享获取优惠券</p>
						<img src="../../static/11@3x.png" alt="分享有礼"/>
					</a>
				</div>
				<div class="shareCont fr">
					<a href="#oneClick">
						<span>一键下单</span>
						<p>家电不知道怎么了</p>
						<img src="../../static/12@3x.png" alt="一键下单"/>
					</a>
				</div>
			</div>
		</div>
		<!--热门服务-->	
		<div class="serve">
			<div class="serveHead">
				<div class="serveCont">
					<img src="../../static/13@3x.png"/>
					<div>热门服务</div>
				</div>
			</div>
		</div>
		<!--热门服务菜单-->
		<ul class="serveOption">
			<li class="serveList" v-for="(item,index) in hotServices" :key="index">
				<div class="meng">
					<a :href="'#/serviceDetails/' + item.link">
						<img :src="item.pic" class="fullEle"  />
						<div>{{item.name}}</div>
						<!--<span v-text="serveList.cont"></span>-->
						
					</a>
				</div>
			</li>
		</ul>
		<div style="height: 0.5rem;"></div>
		<div id="container" style="display: none;"></div>
		<loading-part :loadingStatus="loadingStatus"></loading-part>
		<Menu actived="first"></Menu>
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				homeData: {},
				hotServices: [],
				menuList: [],
				firstMenu: {},
				currCity: {
					latitude: 0,
					longitude: 0,
					name: ''
				},
				
				roles: [],
				loadingStatus: false
			}
		},
		created() {

		},
		methods: {
			initData() {
				this.$api.homeData({
		        	params:{
					    cityName: this.currCity.name,
					    latitude: this.currCity.latitude,
					    longitude: this.currCity.longitude
					}
			    },(res) => {
			    	console.log(res)
			    	this.loadingStatus = false
			    	this.currCity.name = res.result.currentCity
			    	if(!this.$storage.get('currCity')) {
			    		this.$storage.set('currCity', this.currCity)
			    	}
					this.$storage.set('openCitys', res.result.openCitys)
					if(res.result.menus && res.result.services) {
						this.homeData = res.result
				    	this.menuList = res.result.menus
				    	this.firstMenu = this.menuList[0]
				    	this.hotServices = res.result.services.result.list
					}else {
						Toast({
						  message: '当前城市暂未开通服务， 请选择其他城市',
						  position: 'bottom',
						  duration: 3000
						})
						setTimeout(() => {
							this.$router.push('/positionChose')
						}, 800)
					}
			    	
			    	
//			    	this.currCity.name = this.currCity.name.length>2 ? this.currCity.name.slice(0,2) + '...' : this.currCity.name
			    	
			    	
			    })
			},
			firstEnter() {
				this.loadingStatus = true
				let self = this
				this.$api.findUserInfo(function (response) {
					self.roles = response.result.roles
	                if (self.roles.length > 1) {
	                    for (let i in self.roles) {
	                        if (self.roles[i].isCurrent == 1 && self.roles[i].roleName == '工人版') {
	                            self.$api.toggleRole(function(response) {
					                
					            })
	                        }
	                    }
	                }
	           })
				setTimeout(() => {
					self.getLocation()	
				},1000)
				
			},
			getLocation() {
				let self = this
				if (this.$common.isWeixin()) {
				    var map = new AMap.Map('container')
				    map.plugin('AMap.Geolocation', function() {
				        var geolocation = new AMap.Geolocation({
				            enableHighAccuracy: true,//是否使用高精度定位，默认:true
				            timeout: 12000,          //超过10秒后停止定位，默认：无穷大
				        });
				        map.addControl(geolocation);
				        geolocation.getCurrentPosition();
				        AMap.event.addListener(geolocation, 'complete', function(data) {
				        	self.currCity.name = data.addressComponent.city
				        	self.initData()
				        });//返回定位信息
				        AMap.event.addListener(geolocation, 'error', function(data) {
				        	Toast({
							  message: '定位失败，请选择城市',
							  position: 'bottom',
							  duration: 3000
							})
				        	self.initData()
				        	
				        });      //返回定位出错信息
				    });
                    return
                }
				this.$bridge.getGPS().then((res) => {
					let timer = null
					let addr = JSON.parse(res)
					if(addr.latitude == '-1.0' && addr.longitude == '-1.0') {
						timer = setTimeout(() => {
							clearTimeout(timer)
							self.getLocation()
						}, 1000)
					}else {
						self.currCity.latitude = addr.latitude
						self.currCity.longitude = addr.longitude
						clearTimeout(timer)
						self.initData()
					}
				})
			},
			bannerLink(item) {
				if(item.type == 1) {
					this.$router.push('/serviceDetails/' + item.link)
				}else if(item.type == 2) {
					this.$router.push('/serveCont/' + item.link)
				}else {
					this.$router.push('/activityDetails/' + item.link)
				}
			}
		},
		beforeRouteEnter (to, from, next) {
	    	if(from.fullPath == '/' || /login/g.test(from.fullPath) || /bind/g.test(from.fullPath)) {
	    		next(vm => {
	    			vm.firstEnter()
	    		})
	    	}else {
	    		next(vm=>{
	    			if(vm.$storage.get('currCity')) {
	    				vm.currCity = vm.$storage.get('currCity')
	    			}
	    			vm.initData()
	        	})
	    	}
	    	
	    	
		},
	}
</script>

<style scoped>
	/*外部*/
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	#box {
		width: 100%;
		padding: 0px;
		margin: 0px;
		background: #f5f5f9;
	}
	/*头部*/
	
	.head {
		width: 100%;
		height: 0.5rem;
		padding: 0.2rem 0rem;
		background: #2d92f4;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 40;
	}
	/*地点按钮*/
	.top-position {
		width: 1.2rem;
		height: 0.9rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	.top-position span{
		width: 0.75rem;
		height: 0.9rem;
		font-size: 0.24rem;
		color: #FFFFFF;
		line-height: 0.9rem;
		position: absolute;
		left: 0.25rem;
		top: 0rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.top-position img{
		width:0.18rem ;
		height: 0.15rem;
		position: absolute;
		right:0.1rem ;
		top:0.35rem ;
	}
	/*搜索栏*/
	.search{
		width: 5.5rem;
		height: 0.5rem;
		background: #FFFFFF;
		position: absolute;
		left: 1.2rem;
		top: 0.2rem;
		border-radius: 0.25rem;
	}
	.search a{
		height: 100%;
		width: 100%;
		display: block;
		font-size: 0.24rem;
		color: #c9c9c9;
		line-height: 0.5rem;
		position: relative;
		text-align: left;
		padding-left: 0.65rem;
		box-sizing: border-box;
	}
	.search img{
		width: 0.26rem;
		height: 0.26rem;
		position: absolute;
		left: 0.2rem;
		top: 50%;
		margin-top: -0.13rem;
	}
	.search span{
		height:0.5rem;
		font-size: 0.25rem;
		line-height: 0.54rem;
		display: block;
	}
	/*右边商家入驻链接*/
	.join{
		width: 0.6rem;
		height: 0.6rem;
		position: absolute;
		right:0.1rem ;
		top:0.15rem ;
	}
	.join a{
		display: block;
		width: 0.6rem;
		height: 0.6rem;
	}
	.join img{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
		left: 0.15rem;
		top: 0.15rem;
	}
	/*轮播图*/
	.banner {
		width: 100%;
		height: 2.9rem;
		background: #CCCCCC;
		position: relative;
	}
	
	
	/*中间样式导航 八个链接*/
	.cont{
		width: 7.2rem;
		background: #FFFFFF;
		height: 3.6rem;
		margin:0.15rem auto 0;
		display: block;
		border-radius: 0.35rem;
	}
	.nav {
		width: 100%;
		height: 100%;
		margin: auto;
		overflow: hidden;
		padding: 0.15rem 0;
		box-sizing: border-box;

	}
	
	.nav_cont {
		width: 1.5rem;
		height: 1.50rem;
		margin-left: 0.25rem;
		float: left;
		margin-bottom: 0.15rem;
		/*background: cadetblue;*/
	}
	.nav_cont a{
		display: block;
	}
	
	.nav_cont img {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		margin: 0.2rem 0.3rem 0.1rem 0.3rem;
	}
	
	.nav_cont span {
		width: 100%;
		height: 0.25rem;
		color: #222222;
		text-align: center;
		font-size: 0.25rem;
		display: block;
	}
	/*分享有礼与一键下单*/
	.shareBox{
		width: 100;
		height: 2rem;
		margin: 0.2rem 0;
	}
	.share{
		width:7.2rem;
		height: 2rem;
		margin: 0 auto;
	}
	.shareCont{
		width: 3.55rem;
		height:2rem;
		position: relative;
		background: #FFFFFF;
	}
	.shareCont a{
		width: 100%;
		height: 100%;
		display: block;
	}
	.shareCont span{
		position: absolute;
		left: 0.18rem;
		top: 0.43rem;
		font-size: 0.28;
		color: #222222;
		display: block;
	}
	.shareCont p{
		position: absolute;
		left:0.18rem;
		top:1rem ;
		font-size:0.23rem ;
		color:#999999 ;
		display: block;
	}
	.shareCont img{
		width: 1.3rem;
		height: 1.3rem;
		position: absolute;
		right: 0.16rem;
		top: 0.5rem;
	}
	/*热门服务*/
	.serve{
		width: 100%;
	}
	/*热门服务顶部*/
	.serveHead{
		width: 100%;
		height: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
	}
	.serveCont{
		width:1.6rem ;
		height:0.3rem ;
	}
	.serveCont img{
		width: 0.30rem;
		float: left;
	}
	.serveCont div{
		width: 1.2rem;
		height:0.29rem;
		font-size:0.28rem ;
		float: right;
		line-height: 1;
		color: #222222;
	}
	/*热门服务菜单*/
	.serveOption{
		width: 100%;
	}
	.serveList{
		width: 100%;
		height:2.6rem ;
		margin-bottom: 0.1rem;
		position: relative;
	}
	.meng{
		width: 100%;
		height: 100%;
	}
	.serveList a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.meng div{
		position: absolute;
		left:50% ;
		top:50% ;
		font-size: 0.34rem;
		color: #f7f7f8;
		z-index: 10;
		padding: 0.1rem 0.2rem;
		background: rgba(0,0,0,0.6);
		transform: translate(-50%, -50%);
		border-radius: 0.1rem;
		/*line-height: 2rem;*/
		
	}
	.serveList span{
		position: absolute;
		left:0.33rem ;
		bottom:0.25rem ;
		font-size: 0.2rem;
		color: #ababab;
	}
	
</style>