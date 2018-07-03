import axios from 'axios'

function fetch(url, data) {  
    return new Promise((resolve, reject) => {
        axios.post(url,data).then(res => {
            let status = res.data.status            
            if(res.data.status === 200) {
                resolve(res)
            } else {
                location.href = 'login.html'
                resolve(res)                
            }
            reject(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default fetch;