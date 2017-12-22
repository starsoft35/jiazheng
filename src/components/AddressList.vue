<template>
    <div class="address-list">
        <Header title="地址管理"></Header>
		<div class="page-content">
			
	       
	            <div class="address-container">
	                <div class="item" v-for="(item, index) in addressList">
	                    <div class="info" @click="selectAddr(index)">
	                        <div class="mobile">{{item.mobile}}</div>
	                        <div class="consigee">联系人：{{item.consignee}}</div>
	                        <div class="location">{{item.location}} &nbsp; {{item.detailAddr}}</div>
	                        <div class="street">{{item.address}}</div>
	                    </div>
	                    <div class="operation">
	                        <div class="edit" @click="remove(index)">
	                            删除
	                        </div>
	                        <div class="edit" @click="edit(index)">
	                            编辑
	                        </div>
	                        <div class="default" :class="{active : item.isDefault}" @click="defaultAddr(index)">
	                            默认地址
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="none-content" v-if="addressList.length == 0">暂无地址信息</div>
		</div>
	        
        
        <div class="bottom">
            <router-link to="/address" class="button">添加服务地址</router-link>
        </div>
    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
    export default {
        data() {
            return {
                addressList: [],
                status: '',
                
            }
        },
        created() {
        	const self = this
        	this.status = this.$route.params.id
        	this.$api.getAddressList(function (response) {
				self.addressList = response.result.list
            })
        },
        methods: {
            // 编辑菜单
            edit(index) {
                this.$router.push('/address/' + this.addressList[index].id)
            },
            // 删除菜单
            remove(index) {
                let self = this
                MessageBox.confirm('确认要删除此地址吗？').then(action => {
                    self.$api.deleteAddress(self.addressList[index].id, function(response) {
                        self.addressList.splice(index, 1)
                    })
                })
            },
            // 设置默认地址
            defaultAddr(index) {
                let self = this
                this.$api.updateDefaultAddress(this.addressList[index].id, function(response) {
                    self.addressList[index].isDefault = 1

                    for (var i in self.addressList) {
                        if (self.addressList[i].isDefault == 1) {
                            self.addressList[i].isDefault = 0
                        }
                        if (i == index) {
                            self.addressList[i].isDefault = 1
                        }
                    }
                    if(self.status == 'select') {
                    	self.$router.go(-1)
                    }
                })
            },
            selectAddr(index) {
            	let self = this
            	if(self.status == 'select') {
                	this.$api.updateDefaultAddress(this.addressList[index].id, function(response) {
	                    self.addressList[index].isDefault = 1	
	                    for (var i in self.addressList) {
	                        if (self.addressList[i].isDefault == 1) {
	                            self.addressList[i].isDefault = 0
	                        }
	                        if (i == index) {
	                            self.addressList[i].isDefault = 1
	                        }
	                    }
	                    self.$router.go(-1)
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
		top: 0.92rem;
		bottom: 1.7rem;
		left: 0;
		overflow-y: auto;
	}
    .address-container {
        margin-bottom: 1.5rem;
    }

    .address-container .item {
        margin-top: .3rem;
        background-color: #FFF;
        font-size: .26rem;
        text-align: left;
        color: #666;
    }
    .item .info {
        padding: .22rem;
    }
    .item .mobile {
        float: right;
    }
    .item .location{
    	padding-top: 0.2rem;
    	color: #333;
    	white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    }
    .item .street {
        margin-top: .1rem;
        color: #999;
    }
    .item .operation {
        border-top: 1px solid #EEE;
        padding: .22rem;
    }
    .operation .edit {
        float: right;
        margin-left: .4rem;
    }
    .operation .default {
        padding-left: .5rem;
        background: url("../../static/36@3x.png") no-repeat left center;
        background-size: .3rem;
    }
    .operation .default.active {
        background: url("../../static/35@3x.png") no-repeat left center;
        background-size: .3rem;
        color: #258ef3;
    }
    
  
    .bottom {
        width: 100%;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding-bottom: .3rem;
    }
    .button {
        display: block;
        height: .8rem;
        line-height: .8rem;
        margin: 0 .3rem;
        background-color: #258ef3;
        color: #FFF;
        border-radius: .8rem;
        font-size: .26rem;
    }
</style>