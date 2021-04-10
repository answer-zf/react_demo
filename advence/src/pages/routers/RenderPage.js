import React, { Component, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import BrowserRouter from './routerSource/BrowserRouter'
// import Route from './routerSource/Route'

export default class RouteComponePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h3>RouteComponePage</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 })
          }}
        >
          click change count {count}
        </button>
        <BrowserRouter>
          {/* 渲染component的时候会调⽤ React.createElement，如果使⽤下⾯这种匿名函数的形 式，每次都会⽣成⼀个新的匿名的函数， 导致⽣成的组件的type总是不相同，这个时候会 产⽣重复的卸载和挂载 */}
          {/* 错误 child的 didMount和willUnmount函数 click 事件触发 便立即执行 */}
          {/* <Route component={() => <Child count={count} />} /> */}
          {/* <Route component={() => <FunctionChild count={count} />} /> */}
          {/* 正确 */}
          <Route render={() => <Child count={count} />} />
          {/* <Route render={() => <FunctionChild count={count} />} /> */}
          {/* children 呢 */}
          {/* <Route children={() => <Child count={count} />} /> */}
          <Route children={() => <FunctionChild count={count} />} />
        </BrowserRouter>
      </div>
    )
  }
}
class Child extends Component {
  componentDidMount() {
    console.log('componentDidMount') //sy-log
  }
  componentWillUnmount() {
    console.log('componentWillUnmount') //sylog
  }
  render() {
    return <div>child-{this.props.count}</div>
  }
}
// hook
function FunctionChild(props) {
  useEffect(() => {
    return () => {
      console.log('WillUnmount') //sy-log
    }
  }, [])
  return <div>child-{props.count}</div>
}
