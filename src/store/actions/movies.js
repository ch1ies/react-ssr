import  getMovies  from '../../services/getMovies'
export const actionTypes = {
    setDatas: 'movies/setDatas',
    getMovies: 'movies/getMovies'
}

export function setDatas(datas) {
    return {
        type: actionTypes.setDatas,
        payload: datas
    }
}

// 使用react-thunk中间件处理副作用函数
export function fetchMovie(page = 1, size = 10) {
    return async function (dispatch) {
        const resp = await getMovies(page, size)
        dispatch(setDatas(resp.data.findByPage))
    }
}