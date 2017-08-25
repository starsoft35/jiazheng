<template>
	<transition name="fade">
		<div class="modal-box" v-show="show">
	    	<div class="modal-bg" @click="cancel"></div>
	    	<div class="modal-content">
	    		<div class="modal-body">
	    			<div class="level">
	    				<span>服务态度:</span>
	    				<div class="star">
	    					<span class="active" v-for="i in star" @click="changeStar(i, -1)"></span>
	    					<span v-for="n in 5-star" @click="changeStar(n+star, 1)"></span>
	    				</div>
	    			</div>
	    			<textarea class="advice" v-model.trim="advice" placeholder="点评一下吧，您的意见很重要哦！"></textarea>
	    		</div>
	    		<div class="modal-footer">
	    			<span class="cancel-btn" @click="cancel_operate">取消评价</span>
	    			<span class="confirm-btn" @click="confirm_operate">确定评价</span>
	    		</div>
	    	</div>
	    </div>
	</transition>
    
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	
	props: {
        show: {
            type: Boolean
        },
    },
    data() {
		return {
			star: 0,
			advice: ''
		}
	},
    methods: {
    	cancel() {
    		this.$emit('closeModal')
    		this.star = 0
    		this.advice = ''
    	},
    	cancel_operate() {
    		this.$emit('closeModal')
    		this.$emit('cancel_modal')
    		this.star = 0
    		this.advice = ''
    	},
    	confirm_operate() {
    		this.$emit('closeModal')
    		this.$emit('confirm_modal', this.star, this.advice)
    		this.star = 0
    		this.advice = ''
    	},
    	changeStar(index, status) {
    		if(status < 0 && this.star == index) {
    			this.star = index - 1
    		}else {
    			this.star = index
    		}
    	}
    }
   
}
</script>

<style scoped>
.modal-box{
	position: absolute;
	z-index: 800;
	transition: opacity .2s ease-out;
}
.modal-bg{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,0.4);
}
.modal-box.fade-enter-avtive,.modal-box.fade-leave{
    opacity: 1;
}
.modal-box.fade-enter{
    opacity: 0;
}
.modal-box.fade-leave-active{
	opacity: 0;
}
.modal-content{
	position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    width: 88%;
    border-radius: 0.06rem;
    font-size: 0.32rem;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    color: #333;
}
.modal-content *{
	font-size: 0.32rem;
}
.modal-header{
	padding-top: 0.3rem;
}
.modal-body{
	padding: 0.3rem 0.6rem;
    border-bottom: 1px solid #ddd;
    min-height: 36px;
    position: relative;
}

.modal-icon{
	width: 1rem;
	height: 1rem;
	margin: 0 auto 0.3rem;
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
}
/*.modal-icon.success{
	background-image: url(../../../static/image/success.png);
}
.modal-icon.integral{
	background-image: url(../../../static/image/integral.png);
}
.modal-icon.warn{
	background-image: url(../../../static/image/warn.png);
}*/
.modal-footer{
	display: flex;
    height: 0.8rem;
    line-height: 0.8rem;
}
.modal-footer span{
	line-height: 0.76rem;
    display: block;
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0;
    border: 0;
}
.modal-footer .cancel-btn{
	border-right: 1px solid #ddd;
	width: 50%;
}
.modal-footer .confirm-btn{
	color: #26a2ff;
    width: 50%;
    color: #2173d6;
}

.level{
	text-align: left;
	display: flex;
	align-items: center;
	padding-bottom: 0.2rem;
	border-bottom: 1px solid #eee;
}
.level>span{
	width: 1.5rem;
}
.star{
	flex: 1;
	display: flex;
}
.star>span{
	width: 0.6rem;
	height: 0.6rem;
	background: url(../../../static/40@3x.png) no-repeat center;
	background-size: 75% 75%;
	margin-left: 0.1rem;
}
.star>span.active{
	background-image: url(../../../static/39@3x.png);
}
.advice{
	width: 100%;
	text-align: left;
	padding: 0.3rem 0;
	outline: none;
	border: none;
	height: 1.5rem;
}
</style>