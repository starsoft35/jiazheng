<template>

	<div >
		<Header title="工人位置"></Header>
		<div id="allmap"></div>
	</div>

</template>
<script>
	export default {
		data() {
				return {
					center: {
						lng: 0,
						lat: 0
					},
					start_lat: undefined,
					start_lng: undefined,
					
					workerPosution: []
				}
			},
			created() {
				
			},
			mounted() {
				this.$api.workerPositionList({
		        	params:{
					    page: 1,
					    page_size: 100000
					}
			    },(res) => {
			    	this.workerPosution = res.result.workerList.list
			    	var map = new AMap.Map("allmap",{
			            resizeEnable: true
			        });
					var markers = [];
					this.workerPosution.forEach((item) => {
						if(!item.headImage) {
							item.headImage = '../../static/avatar-default.png'
						}
						if(!item.workerName) {
							item.workerName = '新工人'
						}
						if(item.longitude != null) {
							var marke  = new AMap.Marker({
										position: [item.longitude, item.latitude],
										content: '<div class="worker-point"><img src="'+item.headImage+'" />'+item.workerName.slice(0,2)+'</div>',
										map: map
									});
						}
						
					})
					 map.setFitView()
			    	
			    })
				
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