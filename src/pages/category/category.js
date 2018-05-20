import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'
Vue.prototype.$http = axios
new Vue({
    el: '#app',
    data: {
        topList: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    created() {
        this.getTopList()
        this.getSubList(0)
        this.getRankList()
    },
    methods: {
        getTopList() {
            axios.post(url.topList).then( res => {
                this.topList = res.data.lists
            }).catch( res => {

            })
        },
        getSubList( index, id) {
            this.topIndex = index
            if(index === 0) {
                this.getRankList()
            } else {
                axios.post(url.subList, { id }).then(res => {
                    this.subData = res.data.data
                })
            }
        },
        getRankList() {
            axios.post(url.rankList).then(res => {
                this.rankData = res.data.data
            })
        }
    },
    components: {
        Foot
    },
    filters: {
        money(val) {
            val = val.toString().replace(/\$|\,/g, '');
            if (isNaN(val)) {
                val = "0";
            }
            let sign = (val == (val = Math.abs(val)));
            val = Math.floor(val * 100 + 0.50000000001);
            let cents = val % 100;
            val = Math.floor(val / 100).toString();
            if (cents < 10) {
                cents = "0" + cents
            }
            for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
                val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
            }

            return (((sign) ? '' : '-') + val + '.' + cents);
        }
    }
})