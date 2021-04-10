import React, { Component } from 'react'
import matchPath from './matchPath'
import { RouterContext } from './RouterContext'

export default class Switch extends Component {
  render() {
    // return this.props.children
    return (
      <RouterContext.Consumer>
        {context => {
          // 找出渲染的,第一个符合匹配条件的元素 存在 element
          // 优先使用 props 上的 location
          // const { location } = context
          const location = this.props.location || context.location
          let element,
            match = null
          const { children } = this.props
          React.Children.forEach(children, child => {
            if (match === null && React.isValidElement(child)) {
              element = child
              const path = child.props.path
              match = path ? matchPath(location.pathname, { ...child.props, path }) : context.match
            }
          })
          return match ? React.cloneElement(element, { location }) : null
        }}
      </RouterContext.Consumer>
    )
  }
}
