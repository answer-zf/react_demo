import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect, Route } from 'react-router-dom'

import Route from '../routerSource/Route'
import Redirect from '../routerSource/Redirect'

export default connect(({ user }) => ({ isLogin: user.isLogin }))(
  class PrivateRoute extends Component {
    render() {
      const { isLogin, path, component } = this.props
      if (isLogin) {
        return <Route path={path} component={component} />
      } else {
        return <Redirect to={{ pathname: '/login', state: { redirect: path } }} />
      }
    }
  }
)

// export default PrivateRoute
