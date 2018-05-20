import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import {
  InfiniteScroll
} from 'mint-ui';
import Swipe from 'components/Swipe.vue'
import Foot from 'components/Foot.vue'


Vue.use(InfiniteScroll);


let app = new Vue({
    el: '#app' ,
    data: {
        lists: null,
        pageNum: 1,
        loading: false,
        allLoaded: false,
        bannerList: null
    },
    created() {
        this.getLists()
        this.getBannerList()
    },
    methods: {
        getLists() {
            if(this.allLoaded) {
                return 
            }
            
            this.loading = true
            axios.post(url.hotLists, {
              pageNum: this.pageNum,
              pageSize: this.pageSize
            }).then(res => {
                let curLists = res.data.lists
                // 判断所有数据是否加载完毕
                if(curLists.length < this.pageSize) {
                    this.allLoaded = true
                }
                if(this.lists) {
                    this.lists = this.lists.concat(curLists)
                } else {
                    this.lists = res.data.lists                    
                }
                this.pageNum++
                this.loading = false
            })
        },
        getBannerList() {
            axios.get(url.banner).then( res => {
                console.log(res)
                this.bannerList = res.data.lists;
            })
        }
    },
    components: {
        Foot, Swipe
    }
})

