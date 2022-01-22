import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.css'
console.log(style,'======')
export default function index() {
    return (
        <div className={style.header}>
            <Link to='/'> 首页 </Link>
            <Link to='/movies'> 学生列表 </Link>
            <Link to='/admin' >后台管理页</Link>
        </div>
    )
}