import axios from 'axios'

let config = {} 
if ( typeof window === 'undefined') {
    // 服务端环境 ,baseURL地址为真实请求的数据服务器地址
    config.baseURL = 'http://open.duyiedu.com/'
}else {
    // 浏览器环境，baseURL为前端服务器的地址，在由前端服务器做代理转发到数据服务器，若为本地服务器可不写，浏览器请求时会默认请求本地
    config.baseURL = ''
}
const instance = axios.create(config)

export default instance