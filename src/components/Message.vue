<template>
    <div class="message-container">
        <Header title="消息"></Header>

        <div class="none-message" v-show="pagination.content.length == 0 && pagination.loadEnd">
            <div class="bg"></div>
            暂无消息
        </div>
        <Pagination :render="render" :param="pagination" :autoload="false" :need-token="true" uri="/notice/list" ref="pagination">
			<div style="margin-bottom: 1rem;" v-show="pagination.content.length > 0">
				<div v-for="item in pagination.content">
	                <div class="date">{{item.date}}</div>
	                <div class="message">
	                    <div class="title">{{item.label}}</div>
	                    <div class="content">{{item.content}}</div>
	                </div>
	            </div>
			</div>
				
        </Pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10,
                    loadEnd: false
                }
            }
        },
        mounted() {
			this.$refs.pagination.refresh()
		},
        methods: {
            render(response) {
                for (var i in response.result.list) {
                    this.pagination.content.push({
                        date: response.result.list[i].send_time,
                        label: response.result.list[i].title,
                        content: response.result.list[i].content
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .message-container {
        font-size: .26rem;
        color: #666;
    }
    .none {
        display: none;
    }
    .none-message {
        margin: 2rem auto;
        font-size: .26rem;
        color: #ccc;
        width: 2rem;
        
        height: 2.5rem;
    }
    .none-message .bg {
        width: 100%;
        background: url("../../static/44@3x.png") no-repeat top center;
        background-size: 100%;
        height: 2rem;
    }
    .date {
        font-size: .22rem;
        color: #FFF;
        background: #999;
        padding: .05rem .25rem;
        display: inline-block;
        border-radius: .42rem;
        margin: .24rem auto;
    }
    .message {
        background: #FFF;
        border-radius: .15rem;
        padding: .2rem;
        margin: 0 .22rem .3rem;
        font-size: .26rem;
        text-align: left;
    }
    .message .title {
        font-size: .28rem;
        font-weight: 600;
        margin-bottom: .2rem;
    }
</style>