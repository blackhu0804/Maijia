import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transition.css'

import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Swipe from 'components/Swipe.vue'

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']

new Vue({
  el: '#app',
  data: {
    details: null,
    detailTab,
    tabIndex: 0,
    dealLists: null,
    bannerList: null,
    skuType: 1,
    showSku: false
  },
  created() {
    this.getDetails()
  },
  methods: {
    getDetails() {
      axios.post( url.details, {id}).then(res => {
        this.details = res.data.data
        
        this.bannerList = []
        this.details.imgs.forEach(item => {
          this.bannerList.push({
            clickUrl: '',
            img: item
          })
        });
      })
    },
    changeTab(index) {
      this.tabIndex = index
      if(index === 1) {
        this.getDeal()
      }
    },
    getDeal() {
      axios.post(url.deal, {id}).then( res => {
        this.dealLists = res.data.data.lists
      })
    },
    chooseSku(type) {
      this.skuType = type
      this.showSku = true
    }
  },
  watch: {
    showSku(val, oldVal) {
      document.body.style.overflow = val ? 'hidden' : 'auto'
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
      document.body.style.height = val ? '100%' : 'auto'
      document.querySelector('html').style.height = val ? '100%' : 'auto'




    }
  },
  components: {
    Swipe
  },
  mixins: [mixin]
})

