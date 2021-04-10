import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

import matchPath from './matchPath' // 库文件

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          // 触发监听事件，刷新 路由
          const { children, component, render } = this.props
          // 由于库做了兼容 ，使用 history 库中的 location，而不使用 window.location
          // const match = context.location.pathname === path
          const location = this.props.location || context.location
          const match = matchPath(location.pathname, this.props)
          // children、component、render 能接收 match location history，使用 props 传递
          const props = {
            ...context,
            location,
            match,
          }
          // console.log('match', match)
          // console.log('component', component)
          // match 匹配 渲染 children、component、render 或 null
          //           children 存在：function 或者 children 本身（节点）
          //       不必配 渲染 children 或 null
          return (
            // 用最近的覆盖最外层value
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === 'function'
                ? children(props)
                : null}
              {/* return match ? React.createElement(component, this.props) : null */}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}
