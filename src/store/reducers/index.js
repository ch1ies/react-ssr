import { combineReducers } from 'redux'
import Counter from './counter'
import Movies from './movies'

// 整合多个reducer 成一个总的reducer,combinReducers传递的是一个对象
export default combineReducers({
    Counter,
    Movies
})