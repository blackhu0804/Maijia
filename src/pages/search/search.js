import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'
import mixin from 'js/mixin.js'

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
    el: '.container',
    data: {
        searchList: null,
        keyword,
        isShow: false
    },
    created() {
        this.getSearchList()
    },
    methods: {
        getSearchList(){
            axios.post(url.searchList, {keyword, id}).then( res => {
                console.log(res)
                this.searchList = res.data.lists
            })
        },
        isShowTop() {
            if(document.documentElement.scrollTop > 100) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        },
        toTop() {
            Velocity(document.documentElement, 'scroll', { duration: 1000})
        }
    },
    mixins: [mixin]
})