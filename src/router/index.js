import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import second from '@/components/second'
//搜索路由导入
import search from '@/components/search'
//全部服务路由导入
import allserve from '@/components/allServe'
//服务一 保洁服务
import serveOne from '@/components/serveOne'
//服务二 家电维修
import serveTwo from '@/components/serveTwo'
//服务三家庭维修
import serveThree from '@/components/serveThree'
//服务四家电清洗
import serveFour from '@/components/serveFour'
//服务五家居保养
import serveFive from '@/components/serveFive'
//服务六管道疏通
import serveSix from '@/components/serveSix'
//服务七搬家速运
import serveSeven from '@/components/serveSeven'
//选择地点
import positionChose from '@/components/positionChose'
//商品列表 
import serveCont from '@/components/serveCont'
//商品或者服务的详细介绍
import  serviceDetails from '@/components/ serviceDetails'
//评价列表
import peoplePing from '@/components/peoplePing'
//立即预约 确认订单
import appointment from '@/components/appointment'

// 个人中心
import ucenter from '@/components/ucenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: first
    },{
      path: '/first',
      component: first
    },{
      path: '/second',
      component: second
    },{
      path: '/search',
      component: search
    },
    //全部服务路由
    {
      path: '/allserve',
      name:'allserve',
      component: allserve,
      //子路由
      children:[
      {
      	path: '/',
	      name:'allserve/serveOne',
	      component: serveOne
      },
      {
      	path: 'serveOne',
	      name:'allserve/serveOne',
	      component: serveOne
	   
      },{
      	path: '/allserve/serveTwo',
	      name:'allserve/serveOne/serveTwo',
	      component: serveTwo
      },{
      	path: '/allserve/serveThree',
	      name:'allserve/serveOne/serveThree',
	      component: serveThree
      },{
      	path: '/allserve/serveFour',
	      name:'allserve/serveOne/serveFour',
	      component: serveFour
      },{
      	path: '/allserve/serveFive',
	      name:'allserve/serveOne/serveFive',
	      component: serveFive
      },{
      	path: '/allserve/serveSix',
	      name:'allserve/serveOne/serveSix',
	      component: serveSix
      },{
      	path: '/allserve/serveSeven',
	      name:'allserve/serveOne/serveSeven',
	      component: serveSeven
      }
      ]
	    },{
	    	//城市选择
	      path: '/positionChose',
	      component: positionChose
	    },{
	    	//服务列表 全部服务 中的a标签导向
	      path: '/serveCont',
	      component: serveCont
	    },{
	    	//服务的详细介绍
	      path: '/ serviceDetails',
	      component:  serviceDetails
	    },{
	    	//评价列表
	    	 path: '/peoplePing',
	       component: peoplePing
	    },{
	    	//评价列表
	    	 path: '/appointment',
	       component: appointment
	    }
    
      
      , {
        path: '/ucenter',
        component: ucenter
      }
  ]
})
