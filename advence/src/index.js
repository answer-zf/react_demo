import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
// import { Provider } from './pages/redux/reduxpage/zReactRedux'
// import store from './pages/redux/reduxpage/store'

// 登录 redux
import store from './pages/redux/reduxpage/store/login'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
  <Provider store={store}>
    Component
    <App />
  </Provider>,
  document.getElementById('root')
)
