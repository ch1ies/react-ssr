import React, { useState } from 'react'
import styles from './index.css'
import pngUrl from '../../assets/xiaoyezi.png'
import { connect } from 'react-redux'
import { increase, decrease } from '../../store/actions/counter'
import { fetchMovie } from '../../store/actions/movies'

function compareCounter ({storeNumber, onIncrease, onDecrease}) {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <img className={styles.img} src={pngUrl} alt="logo" />
            <h1> 服务端渲染SSR</h1>
            {/* <div className={styles.bg}></div> */}
            <div>
                <h2>hook 自身维护的状态</h2>
                {number}
                <button
                    className={styles.beautybutton}
                    onClick={() => {
                        setNumber(number + 1)
                    }}>点击</button>
            </div>
            <div>
                <h2>redux 仓库维护的状态</h2>
                <button onClick={onIncrease}>同步加</button>
                {storeNumber}
                <button onClick={onDecrease}>同步减</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        storeNumber: state.Counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch(increase())
        },
        onDecrease() {
            dispatch(decrease())
        }
    }

}
// 使用connect 连接仓库和react组件
export default connect(mapStateToProps, mapDispatchToProps)(compareCounter)