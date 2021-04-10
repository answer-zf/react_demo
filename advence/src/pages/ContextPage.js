import React, { Component } from 'react'
import ContextTypePage from './redux/context/ContextTypePage'
import { ThemeProvider } from './redux/context/ThemeContext'
import ConsumerPage from './redux/context/ConsumerPage'
import { Button } from 'antd'

import { UserProvider } from './redux/context/UserContext'
import UserPage from './redux/context/UserPage'

class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'zf'
      }
    }
  }
  changeColor = () => {
    const { themeColor } = this.state.theme
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'blue' : 'red'
      }
    })
  }
  render() {
    const { theme } = this.state
    const { user } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.changeColor}>
          changeColor
        </Button>

        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          {/* 使用 contextType 做消费 */}
          <ContextTypePage />
          {/* 使用 Consumer 做消费 */}
          <ConsumerPage />

          {/* 多组件 */}
          <UserProvider value={user}>
            <UserPage />
          </UserProvider>

          {/* 1. 创建 context => 2. 接收 provider => 3. contextType / Consumer 消费 */}
        </ThemeProvider>
      </div>
    )
  }
}

export default ContextPage
