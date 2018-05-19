import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'

new Vue({
    el: '#app',
    data: {
        topList: null,
        topIndex: 0
    },
    created() {
        this.getTopList()
    },
    methods: {
        getTopList() {
            axios.post(url.topList).then( res => {
                this.topList = res.data.lists
            }).catch( res => {

            })
        },
        getSubList(id, index) {
            this.topIndex = index
        }
    },
    components: {
        Foot
    }
})