<template>
  <div id="app">
    <!--路由-->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script >
	//引入外部文件
	import '../css/reset.css'
	import '../js/rem.js'
	import '../css/swiper.min.css'
	import '../js/swiper.min.js'
	import '../css/style.css'
    
    
export default {
  name: 'app'
}
</script>

<style>
	html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #f5f5f9;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 0.28rem;
        color:#222222;
        margin: 0;
        padding:0;
    }
    #app {
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-align: center;
        color: #2d92f4;
        min-height: 100%
    }
    .router-link-active {
    	 color:#ccc;
    	 font-size:0.22rem;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #ccc;
    }
    a:active,div {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .fullEle{
    	display: block;
    	width: 100%;
    	height: 100%;
    }
    .picker-slot{
    	font-size: 0.3rem;
    }
    .picker-item{
    	color: #999;
    }
    
    /*服务时间弹框*/
    .service-time{
		width: 100%;
		background: #F5F5F9;
	}
	.showTime-header{
		display: flex;
		height: 0.9rem;
		background: #fff;
		line-height: 0.9rem;
		text-align: left;
		
	}
	.showTime-header span{
		flex: 1;
		font-size: 0.32rem;
		padding: 0 0.4rem;
	}
	.showTime-header span:last-child{
		text-align: right;
	}
	.showTime-body{
		padding: 0.5rem 0.3rem;
	}

</style >
