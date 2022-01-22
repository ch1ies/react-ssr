import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 服务器端已经把渲染好的页面返回给了浏览器，此时不需要使用render重新进行渲染，而使用ReactDOM.hydrate(注水)，只进行点击等事件
// 的注册，生成虚拟DOM 而不会生成真实DOM
// ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.hydrate(<App/>, document.getElementById('root'))