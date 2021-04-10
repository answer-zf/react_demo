import React, { Component } from 'react'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

export default HomePage
