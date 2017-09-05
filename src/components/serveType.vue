<template>
	<div id="box">
		<div @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove">长按</div>
	</div>
		
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: '服务类型',
				msg: [
					{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/35@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					},{
						serveTitle:'保洁服务',
						imgSrc:'@../../static/36@2x.png'
					}
				],
				timeout: 0
			}
		},
		methods: {
			touchstart(e) {
				console.log('1')
				this.timeout = setTimeout(() => {
					alert('2222')
				},2000)
			 	e.preventDefault()
			},
			touchmove() {
				console.log('2')
	            clearTimeout(this.timeout)
			    this.timeout = 0
			},
			touchend(){
				console.log('3')
		   		clearTimeout(this.timeout)
				if(this.timeout!=0){ 
				    alert("你这是点击，不是长按")
				} 
				return false 
			}
		},
		mounted() {
//			var map = new AMap.Map("box", {
//		        resizeEnable: true,
//		        zoom:11
//		    });
//		    var oldMarker = new AMap.Marker({
//	            map: map,
//	            position: [120.60, 31.60]
//	        });
//		    var clickEventListener = map.on('click', function(e) {
//		    	map.remove(oldMarker);
//		        map.setZoomAndCenter(11, [e.lnglat.getLng(), e.lnglat.getLat()]);
//		        oldMarker = new AMap.Marker({
//		            map: map,
//		            position: [e.lnglat.getLng(), e.lnglat.getLat()]
//		        });
//		    });
//			let self = this
//			this.$bridge.getGPS().then((res) => {
//				let addr = JSON.parse(res)
//				self.startAddr.latitude = addr.latitude
//				self.startAddr.longitude = addr.longitude
//				let button = document.getElementById('panel');
//				AMap.service('AMap.Driving',function(){//回调函数
//				    var map = new AMap.Map("allmap", {
//				        resizeEnable: true,
//				    }); 
//				    var driving = new AMap.Driving({
//				        map: map,
//				        panel: "panel"
//				    })
//				    driving.search(new AMap.LngLat(self.startAddr.longitude, self.startAddr.latitude), new AMap.LngLat(self.addr.longitude, self.addr.latitude));
//				    map.setFitView()
//				})  
//			})	
		},
	}
</script>

<style scoped>
	#box {
		width: 100%;
		height: 100vh;
		padding: 0px;
		margin: 0px;
	}
	
	.headPart {
		width: 100%;
		height: 0.92rem;
		background: #2d91f4;
		overflow: hidden;
	}
	
	.headCont {
		width: 7rem;
		height: 0.32rem;
		margin: 0.25rem;
		/*border: 1px solid red;*/
	}
	
	.headCont a {
		display: block;
	}
	
	.headCont span {
		color: #FFFFFF;
		width: 0.32rem;
		height: 0.32rem;
		background: url("../../static/return.png");
		background-size: 100% 100%;
	}
	
	.headCont p {
		height: 0.32rem;
		color: #FFFFFF;
		font-size: 0.32rem;
	}
	
	.serveList {
		width: 7rem;
		display: inline-block;
		padding: 0 .25rem;
		overflow: hidden;
		background: #FFFFFF;
	}
	
	.serveBox {
		width: 7rem;
		height: 0.88rem;
		border-bottom: 2px solid #f2f2f2;
		font-size: 0.26rem;
		color: #222222;
	}
	
	.serveTitle {
		width: 3rem;
		height: 0.26rem;
		margin-top: 0.33rem;
		text-align: left;
	}
	
	.serveBtn {
		width: 0.4rem;
		height: 0.4rem;
		margin-top: 0.3rem;
	}
	
	.serveBtn img {
		width: 100%;
		height: 100%;
	}
</style>