import React from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
export default function index( {route} ) {
    return (
        <div>
            Admin  后台总页面
            <nav>
                <Link to="/">前台页面</Link>
                <Link to="/admin/user" style={{ marginLeft: 50}}>用户管理</Link>
                <Link to="/admin/system" style={{ marginLeft:50}}>系统管理</Link>
            </nav>
            {renderRoutes(route.routes)}
        </div>
    )
}
