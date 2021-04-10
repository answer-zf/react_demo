import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class ContextTypePage extends Component {
  // 静态属性两种写法
  // static contextType = ThemeContext;
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // console.log(this);
    // this.context 在任何生命周期返回null
    const { themeColor } = this.context
    return (
      <div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}

// 只能订阅一个context 且必须是类组件
ContextTypePage.contextType = ThemeContext

export default ContextTypePage
