import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect, bindActionCreators } from './redux/reduxpage/zReactRedux'

// import { bindActionCreators } from 'redux'

export default connect(
  // mapStateToProps function(state,[ownProps]) 将 state 映射到 props 上
  // state => ({ count: state }),
  (state, ownProps) => {
    // ownProps 是组件本身的props
    // ! ownProps 谨慎使用。 ownProps 发生变化，mapStateToProps 会重新执行，state会被重新计算，影响性能
    console.log(ownProps)
    return { count: state }
  },
  // mapDispatchToProps 若不指定 默认 props 会被 注入 dispatch 本身
  // object: dispatch 本身不会被注入props
  // {
  //   add: () => ({ type: 'ADD' })
  // }
  // function(dispatch,[ownProps]):
  dispatch => {
    // ! ownProps 谨慎使用。 ownProps 发生变化，mapDispatchToProps 会重新执行，影响性能
    // // dispatch 内的方法做映射
    // let res = {
    //   add: () => dispatch({ type: 'ADD' }),
    //   minus: () => dispatch({ type: 'MINUS' })
    // }
    let res = {
      add: () => ({ type: 'ADD' }),
      minus: () => ({ type: 'MINUS' })
    }
    // 使用库提供的函数统一处理
    res = bindActionCreators(res, dispatch)
    return { dispatch, ...res }
  }
  // // mergeProps 不常用
  // (stateProps, dispatchProps, ownProps) => {
  //   return {
  //     omg: 'omg',
  //     ...stateProps,
  //     ...dispatchProps,
  //     ...ownProps
  //   }
  // }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props)
      // const { count, dispatch, add, minus } = this.props
      const { count, add, minus } = this.props
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{count}</p>
          {/* <button onClick={() => dispatch({ type: 'ADD' })}>add</button> */}
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      )
    }
  }
)

// 1. 安装 `npm install react-redux --save`
// 2. 使用
//    1. 入口文件 引入 Provider
//    2. 创建 Provider 组件 引入 store，将 跟组件包含在内
//       - 把 Provider 放在根组件的外层，使子组件都能获取到 store
//    3. 组件 获取 store 中的内容
//       - 引入 connect（本质，hoc）,一个组件，返回一个新组件
//       - connet 入参：mapStateToProps（state的映射），mapDispatchToProps（dispatch的映射）
