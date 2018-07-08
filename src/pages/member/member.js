import './member.css'
//1.使用Vue-router
import Vue from "vue";
import Router from 'vue-router'
import member from "./components/member.vue";
import address from "./components/address.vue";
import all from './components/all.vue'
import form from './components/form.vue'
Vue.use(Router)

let routes = [{
    path: '/',
    component: member
},{
    path: '/address',
    component: address,
    children: [{
        path: '',
        // component: all,
        redirect: 'all'
    },{
        path: 'all',
        name: 'all',
        component: all,
    },{
        path: 'form',
        name: 'form',
        component: form,
    }]
}]

// 2.创建实例
let router = new Router({
    routes
})

// 3.根组件注入
new Vue({
    el: '#app',
    router
})