<template>
    <div v-if="lists && lists.length" class="container " style="min-height: 597px;" >
        <div class="block-list address-list section section-first js-no-webview-block">
            <a 
            @click="toEdit(list)" 
            v-for="list in lists"
            :key="list.id"
            :class="{'address-item-default':list.isDefault}"
            class="block-item js-address-item address-item " >
                <div class="address-title">{{list.name}} {{list.tel}}</div>
                <p>{{list.provinceName}} {{list.cityName}}市{{list.districtName}}{{list.address}}</p>
                <a class="address-edit">修改</a>
            </a>
        </div>
        <div v-if="lists && !lists.length">
            暂无收货地址，请添加！
        </div>
        <div class="block stick-bottom-row center">
            <router-link :to="{name: 'form', query: {type: 'add'}}" class="btn btn-blue js-no-webview-block js-add-address-btn">
                新增地址
            </router-link>
        </div>
    </div>
</template>

<script>
import Address from "js/addressService.js";

export default {
    data() {
        return {
            lists: null
        }
    },
    created() {
        Address.list().then( res => {
            this.lists = res.data.lists
        })
    },
    methods: {
        toEdit(list) {
            // this.$router.push({path: '/address/form'})
            this.$router.push({name: 'form', query: {
                type: 'edit',
                instance: list
            }})
        }
    }
}
</script>


<style scoped>
    @import url('./address_base.css');
    @import url('./address.css');
</style>

