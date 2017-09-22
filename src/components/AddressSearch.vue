<template>
    <div class="address-search">
        <Header title="服务搜索"></Header>

        <div class="search-bar">
        	<form action="#" onsubmit="return false">
           		<input class="search" v-model="search" maxlength="20" placeholder="请输入地址名称" type="search"  @input="doSearch">
            </form>
            <div class="close" @click="clearSearch">&times;</div>
        </div>

        <div class="result-container">
            <div class="result-item" v-for="(item, index) in content" @click="select(index)">
                <div class="icon"></div>
                <div class="content">
                    <div class="title">{{item.title}}</div>
                    <div class="detail">{{item.address}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            content: []
        }
    },
    methods: {
        clearSearch() {
            this.search = ''
            this.content = []
        },
        doSearch() {
            if (this.search) {
                let self = this
                this.$api.searchAddress(this.search, function(response) {
                    self.content = []
                    for (var i in response.result) {
                        self.content.push({
                            longitude: response.result[i].Longitude,
                            latitude: response.result[i].Latitude,
                            title: response.result[i].name,
                            address: response.result[i].address
                        })
                    }
                })
            }
        },
        select(index) {
            this.$storage.set('search_result', this.content[index])
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.result-container {
    background-color: #FFF;
    color: #666;
    font-size: .26rem;
}
.result-item {
    text-align: left;
}
.result-item .icon {
    height: 1rem;
    width: .8rem;
    float: left;
    background: url('../../static/37@3x.png') no-repeat center center;
    background-size: .3rem;
}
.result-item .content {
    padding: .2rem 0;
    margin-left: .8rem;
    border-top: 1px solid #eee;
}
.result-item:first-child .content {
    border-top: 0;
}
.result-item .content .detail {
    color: #aaa;
}
.search-bar {
    /* background: #eaeaea; */
    padding: .16rem .22rem;  
    position: relative;
}
.search-bar .search {
    width: 100%;
    height: .6rem;
    /* line-height: .6rem; */
    border: 0;
    border-radius: .3rem;
    box-sizing: border-box;
    font-size: .26rem;
    padding-left: .6rem;
    background: url("/../../static/38@3x.png") no-repeat .2rem center;
    background-size: .3rem;
    background-color: #FFF;
    color: #666;
    appearance: none;
    -webkit-appearance: none;
}
.search-bar .close {
    background-color: #777;
    width: .4rem;
    height: .4rem;
    border-radius: .2rem;
    font-size: .26rem;
    line-height: .4rem;
    color: #FFF;
    float: right;
    position: absolute;
    right: .36rem;
    top: .26rem;
}
.input::-ms-clear { display: none; }
</style>

