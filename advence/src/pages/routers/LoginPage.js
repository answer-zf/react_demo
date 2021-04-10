import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

import Redirect from '../routerSource/Redirect'

export default connect(
  ({ user }) => ({ isLogin: user.isLogin }),
  //
  {
    // login: () => ({ type: 'LOGIN_SECCUSS' })
    login: () => ({ type: 'login' })
  }
)(
  class LoginPage extends Component {
    render() {
      console.log(this.props)
      const { isLogin, location, login } = this.props
      const { redirect = '/' } = location.state || {}
      if (isLogin) {
        return <Redirect to={redirect} />
      } else {
        return (
          <div>
            <h3>LoginPage </h3>
            <button onClick={login}>submit</button>
          </div>
        )
      }
    }
  }
)

// export default LoginPage
