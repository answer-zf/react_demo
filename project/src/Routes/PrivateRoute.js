import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

export default connect(
  //mapStateToProps
  ({ user }) => ({
    isLogin: user.isLogin
  })
)(function PrivateRoute({ children, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? children : <Redirect to={{ pathname: '/login', state: { redirect: location.pathname } }} />
      }
    />
  )
})

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Redirect, Route } from 'react-router-dom'

// export default connect(({ user }) => ({ isLogin: user.isLogin }))(
//   class PrivateRoute extends Component {
//     render() {
//       const { isLogin, path, component } = this.props
//       if (isLogin) {
//         return <Route path={path} component={component} />
//       } else {
//         return <Redirect to={{ pathname: '/login', state: { redirect: path } }} />
//       }
//     }
//   }
// )
