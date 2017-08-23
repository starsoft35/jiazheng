<template>
	<transition name="fade">
		<div class="modal-box" v-show="show">
	    	<div class="modal-bg" @click="cancel"></div>
	    	<div class="modal-content">
	    		<div class="modal-header" v-if="!has_icon && !has_input">提示</div>
	    		<div class="modal-body">
	    			<div class="modal-icon" :class="has_icon" v-if="has_icon"></div>
	    			<div class="modal-message" v-html="message" v-if="message"></div>
	    			<div class="modal-input">
	    				<span>&yen;</span>
	    				<input ref="Input" class="input" v-model="serviceMoney" type="tel" placeholder="请输入服务费用"/>
	    			</div>
	    		</div>
	    		<div class="modal-footer">
	    			<span class="cancel-btn" @click="cancel_operate">{{cancel_text}}</span>
	    			<span class="confirm-btn" v-if="!has_input" @click="confirm_operate">{{confirm_text}}</span>
	    			<span class="confirm-btn" v-if="has_input" @click="confirmInput_operate">{{confirm_text}}</span>
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
        message: {
        	type: String
        },
        has_icon: {
        	type: String,
        	default: ''
        },
        has_input: {
        	type: Boolean,
        	default: false
        },
        cancel_text: {
        	type: String,
        	default: '取消'
        },
        confirm_text: {
        	type: String,
        	default: '确认'
        }
    },
    data() {
		return {
			serviceMoney: ''
		}
	},
    methods: {
    	cancel() {
    		this.$emit('closeModal')
    		this.serviceMoney = ''
    	},
    	cancel_operate() {
    		this.$emit('closeModal')
    		this.$emit('cancel_modal')
    		this.serviceMoney = ''
    	},
    	confirm_operate() {
    		this.$emit('closeModal')
    		this.$emit('confirm_modal')
    	},
    	confirmInput_operate() {
    		if(this.serviceMoney || this.serviceMoney === 0) {
    			this.$emit('closeModal')
    			this.$emit('confirm_modal', this.serviceMoney)
    			this.serviceMoney = ''
    		}else {
    			Toast({
				  message: '请输入服务费用',
				  position: 'bottom',
				  duration: 1000
				});
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
    width: 80%;
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
	padding: 0.4rem;
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
.modal-input{
	padding: 0.3rem 0.1rem;
	display: flex;
	align-items: center;
	width: 4.4rem;
	margin: 0 auto 0.2rem;
	border-bottom: 1px solid #2173d6;
	box-sizing: border-box;
	height: 1.6rem;
}
.modal-input>span{
	font-size: 0.36rem;
	color: #2173d6;
	margin-right: 0.3rem;
	text-align: right;
	margin-top: 0.1rem;
}
.modal-input>input{
	height: 0.8rem;
	border: 0;
	outline: none;
	font-size: 0.56rem;
	color: #000;
	font-weight: 100;
	width: 3.6rem;
	vertical-align: middle;
}
input::-webkit-input-placeholder {
	font-size: 0.32rem;
	vertical-align: top;
}
</style>