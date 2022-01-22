import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { fetchMovie } from '../../store/actions/movies'

function Page({ stuents = [], loadStu }) {
    // 如果服务器处理了数据则浏览器不加载，否则则加载数据
    // 通过给window加属性告诉浏览器
    if (typeof window !== 'undefined' && window.requestPath === '/movies') {
        // 不需要加载数据
        console.log('不需要加载数据')
    } else {
        // 加载数据
        console.log('需要加载数据')
        useEffect(() => {
            loadStu && loadStu()
        }, [])
    }
    return (
        <div>
            <h1>学生列表</h1>
            <ul>
                {stuents.map(stu => (
                    <li key={stu.id}>{stu.name}</li>
                ))}
            </ul>
        </div>
    )
}
// 组件在服务端渲染之前需要运行的函数
Page.loadData = async function (store) {
    try {
        await store.dispatch(fetchMovie())
    } catch (error) {
        console.log(error)
    }
}

function mapStateToProps(state) {
    return {
        stuents: state.Movies
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadStu() {
            dispatch(fetchMovie())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)
