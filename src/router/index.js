import Vue from 'vue'
import Router from 'vue-router'
import token from '../api/accessToken'
import storage from '../api/storage'

import first from '@/components/first'
import sellerEnter from '@/components/sellerEnter'
import second from '@/components/second'
//搜索路由导入
import search from '@/components/search'
//全部服务路由导入
import allserve from '@/components/allServe'

//选择地点
import positionChose from '@/components/positionChose'
//商品列表 
import serveCont from '@/components/serveCont'
//商品或者服务的详细介绍
import serviceDetails from '@/components/serviceDetails'

//活动详情
import activityDetails from '@/components/activityDetails'

//图文介绍
import serveIntro from '@/components/serviceIntro'
//评价列表
import peoplePing from '@/components/peoplePing'
//立即预约 确认订单
import appointment from '@/components/appointment'
//优惠券 
import coupons from '@/components/coupons'
//优惠券下一
import couponsLeft from '@/components/couponsLeft'
//优惠券下二
import couponsRight from '@/components/couponsRight'
//服务地址
import chosePosition from '@/components/chosePosition'
//添加服务地址
import addPosition from '@/components/addPosition'
//订单详情
import orderDetail from '@/components/orderDetail'
//订单支付页面
import paySubmit from '@/components/paySubmit'
//订单支付页二  加优惠券
import paySubmitTwo from '@/components/paySubmitTwo'
//一键下单
import oneClick from '@/components/oneClick'
//分享
import sharePage from '@/components/sharePage'
//分享邀请进入
import shareEnter from '@/components/shareEnter'
//服务类型
import serveType from '@/components/serveType'
// 订单
import Order from '@/components/Order'
//附近
import Nearby from '@/components/Nearby'

//工人端
//订单
import orderPart from '@/components/worker/orderPart'
//派单
import Distribute from '@/components/worker/Distribute'
//派送给个人
import sendPeople from '@/components/worker/sendPeople'
//消息
import workerMessage from '@/components/worker/workerMessage'
//我的
import WorkerUCenter from '@/components/worker/UCenter'
//我的
import Location from '@/components/location'
//地图工人位置
import amapPage from '@/components/amapPage'
//地图导航
import amap from '@/components/amap'



// 个人中心
import UCenter from '@/components/UCenter'
// 余额
import Balance from '@/components/Balance'
// 充值
import Recharge from '@/components/Recharge'
// 消息
import Message from '@/components/Message'
// 关于我们 
import Aboutus from '@/components/Aboutus'
// 个人资料
import Profile from '@/components/Profile'
// 服务地址
import AddressList from '@/components/AddressList'
// 编辑服务地址
import Address from '@/components/Address'
// 登录页面
import Login from '@/components/Login'
// 用户协议
import agreeMent from '@/components/agreeMent'
// 绑定手机号码
import BindMobile from '@/components/BindMobile'
// 地址搜索
import AddressSearch from '@/components/AddressSearch'
// 微信OAuth
import OAuth from '@/components/OAuth'


Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: '/first'
        }, {
            path: '/first',
            component: first,
            meta: {
                keepAlive: true
            }
        }, {
            path: '/sellerEnter',
            component: sellerEnter
        }, {
            path: '/second',
            component: second
        }, {
            path: '/search',
            component: search,
            meta: {
                keepAlive: true
            }
        },
        //全部服务路由
        {
            path: '/allserve/:id',
            component: allserve,
            meta: {
                keepAlive: true
            }

        }, {
            //城市选择
            path: '/positionChose',
            component: positionChose
        }, {
            //服务列表 全部服务 中的a标签导向
            path: '/serveCont/:id',
            component: serveCont
        }, {
            //服务的详细介绍
            path: '/serviceDetails/:id',
            component: serviceDetails
        }, {
            //活动详情
            path: '/activityDetails/:id',
            component: activityDetails,
            meta: {
                requireAuth: true
            }
        }, {
            //服务的详细介绍
            path: '/serveIntro',
            component: serveIntro
        }, {
            //评价列表
            path: '/peoplePing/:id',
            component: peoplePing
        }, {
            //确认订单 提交预约
            path: '/appointment/:id',
            component: appointment,
            meta: {
                keepAlive: true,
                requireAuth: true
            }
        }, {
            //优惠券
            path: '/coupons',
            component: coupons,
            meta: {
                requireAuth: true
            },
            children: [{
                    path: '/coupons',
                    redirect: '/coupons/couponsLeft/useless'
                }, {
                    path: '/coupons/couponsLeft/:status',
                    component: couponsLeft
                }, {
                    path: '/coupons/couponsRight',
                    component: couponsRight
                }

            ]
        }, {
            //服务地址
            path: '/chosePosition',
            component: chosePosition,
            meta: {
                requireAuth: true
            }
        }, {
            //添加服务地址
            path: '/addPosition',
            component: addPosition,
            meta: {
                requireAuth: true
            }
        }, {
            //订单详情
            path: '/orderDetail/:id',
            component: orderDetail,
            meta: {
                requireAuth: true
            }
        }, {
            //订单支付
            path: '/paySubmit/:id',
            component: paySubmit,
            meta: {
                keepAlive: true,
                requireAuth: true
            }
        }, {
            //订单支付
            path: '/paySubmitTwo',
            component: paySubmitTwo
        }, {
            //一键下单
            path: '/oneClick',
            component: oneClick,
            meta: {
                keepAlive: true,
                requireAuth: true
            }
        }, {
            //分享
            path: '/sharePage',
            component: sharePage,
            meta: {
                requireAuth: true
            }
        }, {
            //分享
            path: '/shareEnter/:id',
            component: shareEnter
        }, {
            //服务类型
            path: '/serveType',
            component: serveType
        }, {
            //订单
            path: '/orders',
            component: Order,
            meta: {
                requireAuth: true
            }
            
        }, {
            //附近
            path: '/nearby',
            component: Nearby,
            meta: {
                keepAlive: true
            }
        }, {
            //工人端首页
            path: '/orderPart',
            component: orderPart,
            meta: {
                keepAlive: true,
                requireAuth: true
            }
            
        }, {
            //工人端派单
            path: '/distribute/:id',
            component: Distribute,
            meta: {
                keepAlive: true,
                requireAuth: true
            }
        }, {
            //派单
            path: '/sendPeople/:id',
            component: sendPeople,
            meta: {
                requireAuth: true
            }
        }, {
            //工人端消息
            path: '/workerMessage',
            component: workerMessage,
            meta: {
                requireAuth: true
            }
        }, {
            //工人个人中心
            path: '/worker/ucenter',
            component: WorkerUCenter,
            meta: {
                requireAuth: true
            }
        }, {
            //地图工人位置
            path: '/amapPage',
            component: amapPage,
            meta: {
                requireAuth: true
            }
        }, {
            //工人位置
            path: '/location',
            component: Location,
            meta: {
                requireAuth: true
            }
        }, {
            //地图导航
            path: '/amap',
            component: amap,
            meta: {
                requireAuth: true
            }
        },








        {
            //我的
            path: '/ucenter',
            component: UCenter,
            meta: {
                requireAuth: true
            }
        }, {
            // 余额
            path: '/balance',
            component: Balance,
            meta: {
                requireAuth: true
            }
        }, {
            // 充值
            path: '/recharge',
            component: Recharge,
            meta: {
                requireAuth: true
            }
        }, {
            // 消息
            path: '/message',
            component: Message,
            meta: {
                requireAuth: true
            }
        }, {
            // 关于我们
            path: '/aboutus',
            component: Aboutus
        }, {
            // 个人资料
            path: '/profile',
            component: Profile,
            meta: {
                requireAuth: true
            }
        }, {
            // 地址列表
            path: '/addresses/:id',
            component: AddressList,
            meta: {
                requireAuth: true
            }
        }, {
            // 编辑地址
            path: '/address/:id',
            component: Address,
            meta: {
                requireAuth: true,
                keepAlive: true
            }
        }, {
            // 编辑地址
            path: '/address',
            component: Address,
            meta: {
                requireAuth: true,
                keepAlive: true
            }
        }, {
            // 手机登录
            path: '/login',
            component: Login,
            meta: {
                keepAlive: true
            }
        }, {
            // 用户协议
            path: '/agreeMent',
            component: agreeMent
        }, {
            // 绑定手机号码
            path: '/bind/mobile',
            component: BindMobile
        }, {
            // 地址搜索
            path: '/addr/search',
            component: AddressSearch,
            meta: {
                requireAuth: true
            }
        }, {
            // 微信OAuth
            path: '/oauth',
            component: OAuth
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !token.getAccessToken()) {
        storage.set('history_url', to.fullPath)
        next('/login')
    }

    next()
})

export default router