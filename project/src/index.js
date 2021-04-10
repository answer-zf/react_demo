import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './store'

import './static/style/iconfont/iconfont.css'
import './static/js/flexible'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// // yield 在 generator 中使用，generator的标志是 function* func(){}
// // yield 定义了 内部的不同状态
// // 使用 func().next() 执行后续状态

// let a = 0
// function* zfGenerator() {
//   yield (a = 1 + 1)
// }
// console.log('a1', a)
// let zg = zfGenerator() // Generator 函数返回的遍历器对象
// console.log(zg.next()) // 只有调⽤next⽅法 才会遍历下⼀个内部状态.(惰性求值)
// console.log('a2', a)

// npm install --save react-router-dom
// npm install redux --save
// npm install react-redux --save
// npm install --save redux-saga
// npm install redux-thunk --save

// npm install node-sass sass-loader --save

// 添加多个classname的库
// npm install classnames --save
