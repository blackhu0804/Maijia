let url = {
    hotLists :'/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    rankList: '/category/rank',
    subList: '/category/subList',
    searchList :'/search/list',
    details :'/goods/details',
    deal : '/goods/deal',
    addCart : '/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMremove: '/cart/mrremove',
    addressList: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
}

//  开发环境和真是环境的切换
// let host = ''
let host = 'http://rap2api.taobao.org/app/mock/7058'

for(let key in url) {
    if(url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url