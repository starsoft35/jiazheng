<template>
    <mt-loadmore :bottom-method="loadBottom" :top-method="loadTop" :bottom-all-loaded="allLoaded" :bottomDistance="40" ref="loadmore">
        <slot></slot>
    </mt-loadmore>
</template>

<script>
import {Loadmore} from 'mint-ui'
export default {
    props: {
        render: {
            type: Function,
            required: true
        },
        param: {
            type: Object,
            required: true
        },
        needToken: {
            type: Boolean,
            default: true
        },
        uri: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            allLoaded: false
        }
    },
    methods: {
        // 下拉分页加载
        loadBottom() {
            this.loadPage(false)
        },
        // 上拉刷新加载
        loadTop() {
            this.loadPage(true)
        },
        // 加载分页
        loadPage(isRefresh) {
            let self = this
            setTimeout(function() {
                self.$http.page(self.needToken, self.uri, self.param, function(response) {
                    if (isRefresh) {
                        self.param.page = 1
                        self.param.content = []
                    }

                    self.render(response)

                    if (response.result.page >= response.result.total_page) {
                        // 设置加1
                        self.allLoaded = true
                    } else {
                        self.param.page++
                    }

                    if (isRefresh) {
                        self.$refs.loadmore.onTopLoaded()
                    } else {
                        self.$refs.loadmore.onBottomLoaded()
                    }
                })
            }, 600)
            
        }
    }
}
</script>

<style scoped>

</style>


