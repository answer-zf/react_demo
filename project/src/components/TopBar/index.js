import React from 'react'
import { useHistory } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import './index.scss'

// export default class TopBar extends Component {
//   constructor(props) {
//     super(props)
//     this.history = createBrowserHistory()
//   }

//   render() {
//     const { title } = this.props
//     return (
//       <div className="topBar">
//         <span onClick={() => this.history.go(-1)} className="iconfont icon-jiantou-copy"></span>
//         <div className="menuItem">{title}</div>
//       </div>
//     )
//   }
// }

export default function TopBar({ title }) {
  const history = useHistory()
  // console.log('routes', props)
  // const { title } = props
  return (
    <div className="topBar">
      <span onClick={() => history.go(-1)} className="iconfont icon-jiantou-copy"></span>
      <div className="menuItem">{title}</div>
    </div>
  )
}
