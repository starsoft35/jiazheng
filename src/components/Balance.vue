<template>
    <div class="">
        <Header title="我的钱包"></Header>
        <div class="head">
            <div class="title">账户余额（元）</div>
            <router-link to="/recharge" class="button">充 值</router-link>
            <div class="balance">{{getBalance}}</div>
        </div>
        <div class="blank"></div>
		<div class="page-content">
			<Pagination :render="render" :autoload="false" :param="pagination" :need-token="true" uri="/memberBill/list" ref="pagination">
	            <div class="record-container" >
	                <div class="record" v-for="(item, index) in pagination.content">
	                    <div class="amount">{{item.amount}}</div>
	                    <div class="label">{{item.label}}</div>
	                    <div class="date">{{item.date}}</div>
	                </div>
	            </div>
	            <div class="none-data-tip" v-show="pagination.content.length<1 && pagination.loadEnd">暂无消费记录</div>
	        </Pagination>
		</div>
	        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                balance: 0.0,
                pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 10
                }
            }
        },
        computed: {
            getBalance() {
                return parseFloat(this.balance).toFixed(2)
            }
        },
        mounted() {
			setTimeout(() => {
				this.$refs.pagination.refresh()
			},0)
		},
        methods: {
            render(response) {
                response.result.balance && (this.balance = response.result.balance)
                for (var i in response.result.list) {
                    this.pagination.content.push({
                        amount: response.result.list[i].bill,
                        label: response.result.list[i].title,
                        date: response.result.list[i].time
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .page-content{
		position: absolute;
		width: 100%;
		top: 3.62rem;
		bottom: 0;
		left: 0;
		overflow-y: auto;
	}
    .balance-container {
        font-size: .26rem;
    }
    .blank {
        height: 2.7rem;
    }
    .head {
        color: #FFF;
        background: url("../../static/banner.png") repeat-y top center;
        background-size: 100%;
        height: 2.7rem;
        box-sizing: border-box;
        padding: .4rem .25rem .6rem;
        width: 100%;
        position: fixed;
        z-index: 100;
        overflow: hidden;
    }
    .head .title {
        text-align: left;
        font-size: .26rem;
        margin-bottom: .3rem;
    }
    .head .balance {
        font-size: 0.8rem;
        text-align: left;
        padding-right: 1.9rem;
        overflow: hidden;
    }
    .head .button {
        font-size: .3rem;
        padding: .1rem .5rem;
        border: 1px solid #FFF;
        color: #FFF;
        border-radius: .58rem;
        float: right;
        margin: .2rem 0 0;
    }

    .record-container {
        background-color: #FFF;
    }
    .record-container .record {
        text-align: left;
        color: #666;
        border-top: 1px solid #eee;   
        padding: .3rem .25rem;
    }
    .record .label {
        font-size: .26rem;
    }
    .record .amount {
        float: right;
        font-size: .28rem;
        color: #FF5400;
        margin-top: .25rem;
    }
    .record .amount.negative {
        color: #222;
    }
    .record .date {
        color: #ccc;
        font-size: .24rem;
        margin-top: .2rem;
    }


</style>