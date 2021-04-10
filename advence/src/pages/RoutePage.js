import React, { Component } from 'react'
// import { BrowserRouter , Link, Route, Switch } from 'react-router-dom'

import BrowserRouter from './routerSource/BrowserRouter'
import Route from './routerSource/Route'
import Link from './routerSource/Link'
import Switch from './routerSource/Switch'

// import ChildrenPage from './routers/ChildrenPage'
// import RenderPage from './routers/RenderPage'
import HomePage from './routers/HomePage'
import LoginPage from './routers/LoginPage'
import UserPage from './routers/UserPage'
import PrivateRoute from './routers/PrivateRoute'

class RoutePage extends Component {
  render() {
    return (
      <div>
        <h3>RoutePage</h3>

        {/* 网站部署在二级目录下，使用basename 做前缀配置 */}
        {/* <Router basename="/zf"> */}
        <BrowserRouter>
          <Link to="/">home</Link>
          <Link to="/user">user</Link>
          <Link to="/children">children</Link>
          <Link to="/render">render</Link>
          {/* <Link to="/login">login</Link> */}
          <Link to="/search/123">search</Link>

          {/* Route 需要包裹在 Router 内，需适应 history location 均来自router */}
          {/* path 值不写会一直匹配 */}
          {/* exact 跟路由精确匹配 */}
          {/* switch 独占路由 匹配一个 */}
          {/* 渲染优先级 有三种方式 children component render */}

          {/* 这三种⽅式互斥，只能⽤⼀种*/}
          {/*    优先级最高 */}
          {/*    children={() => <div>children</div>} */}
          {/*    优先级其次 */}
          {/*    component={HomePage} *只在当location匹配的时候渲染。 /}
          {/*    最低   */}
          {/*    render={() => <div>Not Found</div>} 当 location匹配时使用 */}
          {/* switch 中的location 参数 设置后，子路由切换，匹配的组件只能是location参数指定路由的组件，不做组件的切换 */}
          {/* <Switch location={{ pathname: '/user' }}> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/user" component={UserPage} /> */}
            <Route path="/children" children={() => <div>children</div>} />
            <Route path="/render" render={() => <div>render</div>} />

            {/* 路由守卫 */}
            <PrivateRoute path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            {/* 动态路由 */}
            <Route path="/search/:id" component={SearchComponent} />
            {/* <Route render={() => <div>Not Found</div>} /> */}
          </Switch>
        </BrowserRouter>
        {/* <br />
        <hr /> */}
        {/* 三者能接收到同样的[route props]，包括match, location
and history，但是当不匹配的时候，children的match为 null。 */}
        {/* <ChildrenPage /> */}
        {/* <br />
        <hr /> */}
        {/* render 与 component 的区别 */}
        {/* 内联写法优先使用 render，由于性能问题，component会重复卸载挂载组件 */}
        {/* <RenderPage /> */}
        <br />
        <hr />
      </div>
    )
  }
}

export default RoutePage

function SearchComponent(props) {
  // console.log(props)
  const { id } = props.match.params
  return (
    <div>
      SearchComponent----{id}
      <Link to={'/search/' + id + '/detail'}>detail</Link>
      <Route path={'/search/:' + id + '/detail'} component={DetailComponent} />
    </div>
  )
}

function DetailComponent(props) {
  return <div>DetailComponent</div>
}
