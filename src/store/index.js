import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { fetchMovie } from '../store/actions/movies'

// 一个项目中只能有一个仓库，一个仓库中传入的是总的reducers
// 为了让服务端每次不同的请求都会创建一个新的store,需要导出一个storec创建函数
function makeStore() {
    let store
    if (global.document) { // 当前为浏览器环境，浏览器环境为了利于使用redux进行调试，加上一句话
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            reducer,
            window.pageDatas, // 服务器脱水，浏览器注水，保证仓库数据一致
            composeEnhancers(applyMiddleware(thunk))
        )
    } else {
        store = createStore(reducer, applyMiddleware(thunk))
    }

    if (typeof window !== 'undefined') {
        // 用于在浏览器中使用redux插件调试代码
        window.store = store
        window.fetchMovie = fetchMovie
    }
    return store
}


export default makeStore