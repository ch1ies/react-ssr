import React from 'react'
import { renderRoutes } from 'react-router-config'
import Head from '../components/Header'
import { Link } from 'react-router-dom'

// react-router-config 配置时，父路由会向自路由传递一个route对象信息，从中可以得到自路由信息
export default function Front({ route }) {
    return (
        <div>
            <Head />
            {renderRoutes(route.routes)}
        </div>
    )
}
