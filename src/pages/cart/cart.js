import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from "vue";
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'


new Vue({
    el: '.container',
    data: {
        lists: null,
        total: 0,
        editingShop: null,
        editingShopIndex: -1
    },
    computed: {
        allSelected: {
            get() {
                if(this.lists && this.lists.length) {
                    return this.lists.every( shop => {
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal) {
                this.lists.forEach( shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach( good => {
                        good.checked = newVal
                    })
                })
            }
        },
        selectLists() {
            if(this.lists && this.lists.length) {
                let arr = []
                let total = 0
                this.lists.forEach( shop => {
                    shop.goodsList.forEach( good => {
                        if(good.checked) {
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        removeLists() {

        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            axios.post(url.cartLists).then( res => {
                let lists = res.data.cartList 
                lists.forEach( shop => {
                    shop.checked = true
                    shop.removeChecked = false
                    shop.editing = false
                    shop.editingMsg = '编辑'
                    shop.goodsList.forEach(good => {
                        good.checked = true
                        good.removeChecked = false
                    })
                })
                this.lists = lists
                
            })
        },
        selectGood(shop, good) {
            good.checked = !good.checked
            shop.checked = shop.goodsList.every( good => {
                return good.checked
            })
        },
        selectShop(shop) {
            shop.checked = !shop.checked
            shop.goodsList.forEach( good => {
                good.checked = shop.checked
            })
        },
        selectAll() {
            this.allSelected = !this.allSelected
        },
        edit(shop, shopIndex) {
            shop.editing = !shop.editing
            shop.editingMsg = shop.editing ? '完成' : '编辑'
            this.lists.forEach ( (item, i) => {
                if(shopIndex !== i) {
                    item.editing = false
                    item.editingMsg = shop.editing ? '' : '编辑'
                }
            })

            this.editingShop = shop.editing ? shop : null
            this.editingShopIndex = shp.editing ? shopIndex : -1
        }
    },
    mixins: [mixin]
})