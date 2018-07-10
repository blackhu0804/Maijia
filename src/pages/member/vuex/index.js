// 使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Address from 'js/addressService.js'

// 创建Store实例
// 应用层级的状态应该集中到单个store对象中
const store = new Vuex.Store({
    state: {
        lists: null
    },
    mutations: {
        // 提交mutations是更改状态的唯一方法，并且这个过程是同步的
        init(state, lists) {
            state.lists = lists
        },
        add(state, instance) {
            state.lists.push(instance)
        },
        remove(state, id) {
            let lists = state.lists
            let index = lists.findIndex(item => {
                return item.id == id
            })
            lists.splice(index, 1)
        },
        update(state, instance) {
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item => {
              return item.id == instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state, id) {
            let lists = state.lists
            lists.forEach(item => {
                item.isDefault = item.id == id ? true : false
            })
        }
    },
    actions: {
        // 异步逻辑都应该封装到action里面
        getLists({commit}) {
            Address.list().then( res => {
                commit('init', res.data.lists)
            })
        },
        addAction({commit}, instance) {
            Address.add(instance).then( res => {
                // 模拟添加id，理论应后台返回id
                instance.id = parseInt(Math.random()*10000)
                commit('add', instance)
            })
        },
        removeAction({commit}, id) {
            Address.remove(id).then( res => {
                commit('remove', id)
            })
        },
        updateAction({commit}, instance) {
            Address.update(instance).then( res => {
                commit('update', instance)
            })
        },
        setDefaultAction({commit}, id) {
            Address.setDefault(id).then( res => {
                commit('setDefault', id)
            })
        }
    }
})

export default store