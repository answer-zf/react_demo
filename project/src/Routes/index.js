import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import TopBar from '../components/TopBar'
// import BasicLayout from '../layout/BasicLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import _404 from '../pages/_404'
import PrivateRoute from './PrivateRoute'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route component={TopBar} />
        <Switch>
          {/* <BasicLayout path="/" component={HomePage} /> */}
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/user" component={UserPage} /> */}
          {/* <PrivateRoute path="/user" component={UserPage} /> */}
          <PrivateRoute path="/user">
            <UserPage />
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route component={_404} />
        </Switch>
        <Route component={BottomNav} />
      </Router>
    )
  }
}
