<template>
	<div class="loading" v-show = "loadingStatus">
    	<mt-spinner class="loading-icon" type="snake" color="#258ef3" :size="30"></mt-spinner>
    </div>
    
</template>

<script>
export default {
	props: {
        loadingStatus: {
            type: Boolean
        }
    },
    data() {
		return {

		}
	},
    methods: {
    	
    }
   
}
</script>

<style scoped>
.loading{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: #fff;
	
}
.loading-icon{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>