import fetch from "js/fetch.js";
import url from 'js/api.js'

class Cart {

    static getList() {
        return fetch(url.cartLists)
    }

    static add(id) {
        return fetch(url.addCart, {
            id,
            number: 1
        })
    }

    static reduce(id) {
        return fetch(url.cartReduce, {
            id,
            number: 1
        })
    }

    static remove(id) {
        return fetch(url.cartRemove, {
            id
        })
    }

    static removeLists(ids) {
        return fetch(url.cartMremove, {
            ids
        })
    }
}

export default Cart;