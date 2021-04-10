import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import { ThemeConsumer } from './ThemeContext'

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
        <ThemeConsumer>
          {theme => <UserConsumer>{user => <div className={theme.themeColor}>{user.name}</div>}</UserConsumer>}
        </ThemeConsumer>
      </div>
    )
  }
}
