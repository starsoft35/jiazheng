<template>
	<div id="box">
		<Header title="工人位置"></Header>
		<Pagination :render="render" :param="pagination" :need-token="true" uri="/location/getList">
			<div class="worker-list" style="margin-bottom: 1.5rem;" v-if="pagination.content.length>0">
				<div class="worker-item" v-for="(item,index) in pagination.content" :key="index">
					<span class="name" v-if="item.workerName">{{item.workerName}}</span>
					<span class="name" v-if="!item.workerName">新工人</span>
					<span class="phone">{{item.workerPhone}}</span>
					<span class="address" @click="goAmap(item)"></span>
				</div>
			</div>
        </Pagination>
        <div v-if="pagination.content.length == 0" class="none-data-tip">暂无员工</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				pagination: {
                    content: [],
                    page: 1, 
                    pageSize: 20
                },
			}
		},
		methods: {
			render(res) {
                res.result.workerList.list.forEach((item) => {
                	this.pagination.content.push(item)
                })
            },
            goAmap(item) {
            	this.$storage.set('workerLocation', item)
            	this.$router.push('/amapPage')
            }
		}
	}
</script>

<style scoped>
	.worker-item{
		height: 1rem;
		display: flex;
		line-height: 1rem;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		color: #000;
		text-align: left;
		padding: 0 0.3rem;
		font-size: 0.26rem;
	}
	.worker-item .name{
		width: 2.4rem;
		
	}
	.worker-item .phone{
		width: 3rem;
		
	}
	.worker-item .address{
		flex: 1;
		position: relative;
	}
	.worker-item .address:before{
		content: '';
		position: absolute;
		width: 0.6rem;
		height: 0.6rem;
		right: 0;
		top: 0.16rem;
		background: url(../../static/worker09.png) no-repeat center;
		background-size: auto 70%;
	}
	
</style>