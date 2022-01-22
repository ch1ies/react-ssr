import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/server'
import html from './getHtml'
import loadData from './loadData'
import makeStore from '../store'

export default async (req, res) => {
    // 每次请求时创建仓库
    let store = makeStore()
    const context = {}
    // 加载数据到仓库 根据路由匹配到的组件，调用相对应组件的loadData
    await loadData(req.path, store)

    // 不同的请求会展示不同的数据，所以组件数据应该写在请求里 然后渲染组件
    const componemtHTML = ReactDOM.renderToString(
        <App location={req.path} context={context} store={store} />
    )
    console.log(context)
    if (context.url) { // 实现重定向
        res.redirect(301, context.url)
    }
    if (context.resCode) { // 组件内部告诉服务器响应函数信息
        res.status(context.resCode)
    }
    res.send(html(componemtHTML, req.path, store))
}
