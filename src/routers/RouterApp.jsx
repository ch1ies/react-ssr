import React from 'react'
// import { Link, Router ,Route, Switch} from 'react-router-dom'
import Routers from './RouterConfig'
import { renderRoutes } from 'react-router-config'  // 更好的方便路由配置式的书写多级路由

export default function RouterApp() {
    return (
        <div>
            {renderRoutes(Routers)}
        </div>   
    )
}
