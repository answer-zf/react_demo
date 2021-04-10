import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasicLayout from '../../layout/BasicLayout'

export default connect(({ user }) => ({ user }))(
  class UserPage extends Component {
    render() {
      const { user } = this.props
      const { userInfo, loading, err, tip } = user
      const shortIcon = 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1'
      return (
        <BasicLayout title="user" shortIcon={shortIcon}>
          <h3>UserPage</h3>
          <p>name: {userInfo.name}</p>
          <p>id: {userInfo.id}</p>
          <p>money: {userInfo.money}</p>
        </BasicLayout>
      )
    }
  }
)
