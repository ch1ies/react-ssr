// const fs = require('fs')   在node环境中使用commonJS 语法导出，但是会用webpack进行打包，所以统一使用ES语法
import fs from 'fs'


/**
 * 该函数用于生成一个scritp脚本，放置于服务器返回给浏览器的页面页面进行引用，
 * 便于浏览器后续请求，接管页面的渲染等功能上的需求
 */
 export default function () { //同步读取文件,放置于一个数组内
    const result = fs.readdirSync('./public/js').filter(file => file.endsWith('.js')).map(file => `<script src="/js/${file}"></script>`)
    return result.join('\n')
}

export function getCssStyle() { // 导出一个css样式脚本
    const result = fs.readdirSync('./public/css').filter(file => file.endsWith('.css')).map(file => `<link rel="stylesheet" href="/css/${file}"></link>`)
    return result.join('\n')
}