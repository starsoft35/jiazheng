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
	import '../css/style.css'
	
    
	export default {
		name: 'app'
	}
</script>

<style>
	/* * {
		-webkit-user-select: none;
	  	-moz-user-select: none;
  		-khtml-user-select: none;
		   user-select: none;
		   -webkit-touch-callout: none;
		   -webkit-appearance: none; 
	} */

	html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #f5f5f9;
        font-size: 0.28rem;
        color:#222222;
        margin: 0;
		padding:0;
		/* -webkit-overflow-scrolling: touch; */
  		/* overflow-scrolling: touch; */
    }
    #app {
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        -webkit-font-smoothing: antialiased;
        text-align: center;
        color: #2d92f4;
        min-height: 100%;
        overflow: hidden;
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
    	font-size: 0.26rem !important; 
    }
    .picker-item.picker-selected{
    	color: #000 !important; 
    }
    .picker-item{
    	color: #999 !important; 
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
	.none-data-tip{
		padding: 0.5rem;
		color: #bbb;
	}
	.none-data-img{
		display: inline-block;
		width: 1.8rem;
		height: auto;
		margin: 0.4rem 0;
	}
	.payWay .mint-radiolist-title{
		display: none;
	}
	.payWay .mint-cell{
		min-height: auto;
		height: 1rem;
		display: flex;
		border-bottom: 1px solid #eee;
		background: none !important; 
	}
	.payWay .mint-cell-wrapper{
		font-size: 0.28rem;
		background: none !important; 
	}
	.payWay .mint-radio-core{
		width: 0.4rem;
		height: 0.4rem;
	}
	.payWay .mint-radio-core::after{
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-size: 100% 100%; 
		
	}
	.mint-radio-input:checked + .mint-radio-core::after{
		background-image: url(../static/35@3x.png)
	}
	.toast-icon{
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block !important;
		background-position: center;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.toast-icon.icon-success{
		background-image: url(../static/icon-success.png);
	}
	.toast-icon.icon-error{
		background-image: url(../static/icon-error.png);
		background-size: 70%;
	}
	.worker-point{
		width: 0.7rem;
		height: 0.7rem;
		position: relative;
		border: 1px solid #2d92f4;
		border-radius: 50%;
		line-height: 0.7rem;
		color: #fff;
		font-size: 0.26rem;
		overflow: hidden;
		box-sizing: border-box;
	}
	/*.worker-point:before{
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #000000;
		opacity: 0.3;
		left: 0;
		top: 0;
	}*/
	.worker-point img {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: -2;
	}
	.mint-loadmore-text{
		color: #666 !important;
	}
	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button {
			display: none;
	}
</style >
