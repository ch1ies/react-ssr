import express from 'express'
import render from './render'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

// 请求静态资源时进行处理
app.use(express.static("./public"))

// 进行代理转发
app.use(
    "/api",
    createProxyMiddleware({
        target: 'http://open.duyiedu.com',
        changeOrigin: true
    })
)
// 匹配任何请求路径
app.get("*", render)
app.listen(1234, () => {
    console.log('server start on 1234')
})