// 使用 redux `npm install redux --save`
// 使用异步 安装中间件 `npm install redux-thunk redux-logger --save`
// 在创建store中使用中间件
import React, { Component } from 'react'
import store from './redux/reduxpage/store'
export default class ReduxPage extends Component {
  componentDidMount() {
    // 订阅：视图同步更新（state 发生改变，都会调用该函数）
    store.subscribe(() => {
      // 强制更新视图
      this.forceUpdate()
    })
  }
  add = () => {
    // 派发: 类似与 vuex 中的 commit
    store.dispatch({ type: 'ADD' })
  }
  // 添加中间件后redux可支持异步
  asyncAdd = () => {
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({ type: 'ADD' })
      }, 1000)
    })
  }
  minus = () => {
    store.dispatch({ type: 'MINUS' })
  }
  render() {
    console.log('store', store)
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* 获取数据 */}
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    )
  }
}
