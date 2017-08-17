<template>
    <div class="">
        <Header title="我的钱包"></Header>
        <div class="head">
            <div class="title">账户余额（元）</div>
            <router-link to="/recharge" class="button">充 值</router-link>
            <div class="balance">{{getBalance}}</div>
        </div>
        <div class="blank"></div>

        <Pagination :render="render" :param="pagination" :need-token="true" uri="/memberBill/list">
            <div class="record-container" >
                <div class="record" v-for="(item, index) in pagination.content">
                    <div class="amount">{{item.amount}}</div>
                    <div class="label">{{item.label}}</div>
                    <div class="date">{{item.date}}</div>
                </div>
            </div>
        </Pagination>
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
                },
            }
        },
        computed: {
            getBalance() {
                return parseFloat(this.balance).toFixed(2)
            }
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
    }
    .head .title {
        text-align: left;
        font-size: .26rem;
        margin-bottom: .3rem;
    }
    .head .balance {
        font-size: 1rem;
        text-align: left;
    }
    .head .button {
        font-size: .3rem;
        padding: .1rem .5rem;
        border: 1px solid #FFF;
        color: #FFF;
        border-radius: .58rem;
        float: right;
        margin: .3rem 0 0;
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