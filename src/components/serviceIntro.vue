<template>
	<section class="fullDiv">
		<Header title="图文介绍"></Header>
		<section class="content-html">
			<img :src="value" v-for="value in imgList"  />
		</section>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				imgList:[]
			}
		},
		created() {
			this.imgList = this.$storage.get('serviceIntro').split(',')
			console.log(this.imgList)
		},
	}
</script>

<style scoped>
	.content-html{
		padding: 0.3rem;
	}
	.content-html img {
		width: 100%;
		height: auto;
		display: block;
		margin-bottom: 0.4rem;
	}
</style>