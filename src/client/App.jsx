import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../routers/RouterApp'
import "../assets/global.css"
import makeStore from '../store'
import { Provider } from 'react-redux'

let store = makeStore() // 创建一个store仓库
export default () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>  
        </Provider>
 
    )
}
