import React from 'react'
import {StaticRouter} from 'react-router-dom'
import Router from '../routers/RouterApp'
import { Provider } from 'react-redux'

// context 会被传递到后续的属性,让开发者有机会在组件内部加信息传递到服务器
export default ({ location, context, store}) => {
    //为了让服务端也有切换路由的效果， 服务端的路由切换信息需要根据，客户端访问的请求地址动态去获取得到
    return (
        <Provider store={store}>
            <StaticRouter location= {location} context={context}>
                <Router />
            </StaticRouter>
        </Provider>

    )
}