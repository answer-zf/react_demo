import React, { Component } from 'react'
import classnames from 'classnames'

// import BottomNav from '../../components/BottomNav'
// import TopBar from '../../components/TopBar'

import './index.scss'

export default class BasicLayout extends Component {
  componentDidMount() {
    const {
      title = 'default',
      shortIcon = 'https://store-images.s-microsoft.com/image/apps.64108.9007199266248398.f50070aa-ca14-4881-9e29-fb874435dc3d.a620dd2f-083d-4523-bdd5-d50a527956d4'
    } = this.props
    document.title = title
    document.getElementById('shortIcon').href = shortIcon
  }
  render() {
    const { children } = this.props
    // return (
    //   <>
    //     <Route component={BottomNav} />
    //     <Route path={path} component={component} />
    //     <Route component={TopBar} />
    //   </>
    // )
    return (
      <div className={classnames('basicLayout')}>
        {/* <TopBar title={title} /> */}
        <article>{children}</article>
        {/* <BottomNav /> */}
      </div>
    )
  }
}
