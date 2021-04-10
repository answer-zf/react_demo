import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route } from './routerSource/zReactRouter'
import HomePage from './routerSource/HomePage'
import UserPage from './routerSource/UserPage'

class RouterSourcePage extends Component {
  render() {
    return (
      <div>
        <h3>RouterSourcePage</h3>
        <Router>
          <Link to="/home">home</Link>
          <Link to="/user">user</Link>

          <Route path="/home" component={HomePage} />
          <Route path="/user" component={UserPage} />
        </Router>
      </div>
    )
  }
}

export default RouterSourcePage
