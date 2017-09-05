<template>

	<div >
		<Header :title="title"></Header>
		<div id="allmap"></div>
		<div id="panel" @click="openMap">导航</div>
	</div>

</template>
<script>
import { Toast } from 'mint-ui'
	export default {
		data() {
				return {
					title: '地址',
					addr: {},
					startAddr: {
						latitude: 31.903719,
						longitude: 120.427281
					}
				}
			},
			created() {
				let self = this
				this.addr = this.$storage.get('currAddr')
				this.title = this.addr.address
				this.title = this.title.length>10 ? this.title.slice(0,10) + '...' : this.title
				
			},
			mounted() {
				let self = this
				this.$bridge.getGPS().then((res) => {
					let addr = JSON.parse(res)
					self.startAddr.latitude = addr.latitude
					self.startAddr.longitude = addr.longitude
					let button = document.getElementById('panel');
					AMap.service('AMap.Driving',function(){//回调函数
					    var map = new AMap.Map("allmap", {
					        resizeEnable: true,
					    }); 
					    var driving = new AMap.Driving({
					        map: map,
					        panel: "panel"
					    })
					    driving.search(new AMap.LngLat(self.startAddr.longitude, self.startAddr.latitude), new AMap.LngLat(self.addr.longitude, self.addr.latitude));
					    map.setFitView()
					})  
				})	
			},
			methods: {
				openMap() {
					var self = this
					this.$bridge.openGaoDeMap(self.addr).then(res => {
                        if (res == 'false') {
                            Toast({
							  message: '您未安装高德地图客户端',
							  position: 'middle'
							})
                        }
                    })
				}

			}
	}
</script>
<style scoped>
	#allmap {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0.92rem;
		bottom: 0;
	}
	#panel{
		position: fixed;
		bottom: 0.4rem;
		right: 0.3rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #2d92f4;
		line-height: 1rem;
		color: #fff;
		overflow: hidden;
	}
</style>