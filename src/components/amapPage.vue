<template>

	<div >
		<Header title="工人位置"></Header>
		<div id="allmap"></div>
	</div>

</template>
<script>
import { Toast } from 'mint-ui'
	export default {
		data() {
				return {
					center: {
						lng: 0,
						lat: 0
					},
					start_lat: undefined,
					start_lng: undefined,
				}
			},
			created() {
				
			},
			mounted() {
				let item = this.$storage.get('workerLocation')
		    	var map = new AMap.Map("allmap",{
		            resizeEnable: true
		        });
				if(!item.headImage) {
					item.headImage = '../../static/avatar-default.png'
				}
				if(!item.workerName) {
					item.workerName = '新工人'
				}
				if(item.longitude) {
					new AMap.Marker({
						position: [item.longitude, item.latitude],
						content: '<div class="worker-point"><img src="'+item.headImage+'" />'+item.workerName.slice(0,2)+'</div>',
						map: map
					});
				}else {
					Toast({
					  message: '该工人暂未上传位置信息',
					  position: 'bottom',
					  duration: 2000
					})
				}
					
				 map.setFitView()
				
			},
			methods: {
				ready() {
					var map = new BMap.Map("allmap");
					var geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition((r) => {
						console.log(r)
						this.center.lng = r.point.lng
						this.center.lat = r.point.lat
						var point = new BMap.Point(this.center.lng, this.center.lat);
						map.centerAndZoom(point, 15);
						var p1 = new BMap.Point(this.start_lng, this.start_lat);
						var driving = new BMap.DrivingRoute(map, {
							renderOptions: {
								map: map,
								autoViewport: true
							}
						});
						driving.search(point, p1);
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
	
</style>