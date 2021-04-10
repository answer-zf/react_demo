// import { createStore } from '../zRedux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))
export default store

// // 存储数据
// // 引入中间件（使redux 支持异步）
// // const store = createStore(countReducer)
// const store = createStore(countReducer, applyMiddleware(thunk, logger))
// export default store

// function logger({ getState, dispatch }) {
//   return dispatch => action => {
//     console.log(action.type + 'run')
//     return dispatch(action)
//   }
// }
// function thunk({ getState, dispatch }) {
//   return dispatch => action => {
//     // action 可以是 对象 函数 不同形式操作不同
//     if (typeof action === 'function') {
//       return action(dispatch, getState)
//     } else {
//       return dispatch(action)
//     }
//   }
// }
