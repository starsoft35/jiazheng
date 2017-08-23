import Vue from 'vue'
import Router from 'vue-router'
import token from '../api/accessToken'
import storage from '../api/storage'

import first from '@/components/first'
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
//服务类型
import serveType from '@/components/serveType'
// 订单
import Order from '@/components/Order'
//附近
import Nearby from '@/components/Nearby'

//工人端
//订单
import orderPart from '@/components/worker/orderPart'
//待服务
import orderPartOne from '@/components/worker/orderPartOne'
//服务中
import orderPartTwo from '@/components/worker/orderPartTwo'
//已完成
import orderPartThree from '@/components/worker/orderPartThree'
//已取消
import orderPartFour from '@/components/worker/orderPartFour'
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
//地图
import amapPage from '@/components/amapPage'



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
            component: first
        }, {
            path: '/first',
            component: first
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
                keepAlive: true
            }
        }, {
            //优惠券
            path: '/coupons',
            component: coupons,
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
            component: chosePosition
        }, {
            //添加服务地址
            path: '/addPosition',
            component: addPosition
        }, {
            //订单详情
            path: '/orderDetail',
            component: orderDetail
        }, {
            //订单支付
            path: '/paySubmit/:id',
            component: paySubmit
        }, {
            //订单支付
            path: '/paySubmitTwo',
            component: paySubmitTwo
        }, {
            //一键下单
            path: '/oneClick',
            component: oneClick,
            meta: {
                keepAlive: true
            }
        }, {
            //分享
            path: '/sharePage',
            component: sharePage
        }, {
            //服务类型
            path: '/serveType',
            component: serveType
        }, {
            //订单
            path: '/orders',
            component: Order
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
            children: [{
                path: '/orderPart',
                redirect: 'orderPartOne'
            }, {
                path: 'orderPartOne',
                component: orderPartOne
            }, {
                path: 'orderPartTwo',
                component: orderPartTwo
            }, {
                path: 'orderPartThree',
                component: orderPartThree
            }, {
                path: 'orderPartFour',
                component: orderPartFour
            }]
        }, {
            //工人端派单
            path: '/distribute',
            component: Distribute
        }, {
            //派单
            path: '/sendPeople',
            component: sendPeople,
        }, {
            //工人端消息
            path: '/workerMessage',
            component: workerMessage,
        }, {
            //工人个人中心
            path: '/worker/ucenter',
            component: WorkerUCenter,
        }, {
            //地图
            path: '/amapPage',
            component: amapPage,
        }, {
            //工人位置
            path: '/location',
            component: Location,
        },








        {
            //我的
            path: '/ucenter',
            component: UCenter
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
            component: Login
        }, {
            // 绑定手机号码
            path: '/bind/mobile',
            component: BindMobile,
            meta: {
                requireAuth: false
            }
        }, {
            // 地址搜索
            path: '/addr/search',
            component: AddressSearch,
            meta: {
                requireAuth: true,
                keepAlive: true
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