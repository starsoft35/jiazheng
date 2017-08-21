// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'
import http from './api/http'
import api from './api/api'
import storage from './api/storage'
import {isEmptyObject} from './api/tool'
import accessToken from './api/accessToken'
import workerPart from '@/components/common/workerPart'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Pagination from '@/components/common/Pagination'
import confirmModal from '@/components/common/confirmModal'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.component('Menu', Menu)
Vue.component('Header', Header)
Vue.component('workerPart', workerPart)
Vue.component('Pagination', Pagination)
Vue.component('confirmModal', confirmModal)

Vue.use(MintUI)

Vue.prototype.$token = accessToken
Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.prototype.$storage = storage
Vue.prototype.$isEmptyObject = isEmptyObject

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})