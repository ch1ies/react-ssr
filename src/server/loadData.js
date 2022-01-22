import { matchRoutes } from 'react-router-config'
import routeConfig from '../routers/RouterConfig'

/**
 * 负责服务端渲染前的加载
 */
export default function( pathname, store ) {
    // 匹配到的请求路径，可能会有多个，因为是模糊匹配
    const matchs = matchRoutes(routeConfig, pathname)
    const props = []
    for (const match of matchs) {
        if (match.route.component.loadData) {
            // 转化promise
            props.push(Promise.resolve(match.route.component.loadData(store)))
        }
    }
    return Promise.all(props)
}