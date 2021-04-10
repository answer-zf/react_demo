import React from 'react'
import { ThemeConsumer } from './ThemeContext'

function ConsumerPage(props) {
  return (
    <div>
      <h3>ConsumerPage</h3>
      <ThemeConsumer>{ctx => <div className={ctx.themeColor}>text</div>}</ThemeConsumer>
    </div>
  )
}

export default ConsumerPage
