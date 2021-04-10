import React, { Component } from 'react'

const ValueContext = React.createContext()

export class Provider extends Component {
  render() {
    return <ValueContext.Provider value={this.props.store}>{this.props.children}</ValueContext.Provider>
  }
}

export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WrappedComponent => {
  return class extends Component {
    // 组件跨层级通信
    // 此时组件的所有生命周期都能获得 this.context
    static contextType = ValueContext
    constructor(props) {
      super(props)
      this.state = {
        props: {}
      }
    }
    componentDidMount() {
      const { subscribe } = this.context
      this.update()
      // 订阅（dispatch的监听）
      subscribe(() => {
        this.update()
      })
    }

    update = () => {
      const { getState, dispatch } = this.context
      let stateProps = mapStateToProps(getState())
      let dispatchProps
      if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      } else if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch, this.props)
      } else {
        // 默认
        dispatchProps = { dispatch }
      }
      this.setState({
        props: { ...stateProps, ...dispatchProps }
      })
    }

    render() {
      console.log('--this.context')
      console.log(this.context)
      return <WrappedComponent {...this.state.props} />
    }
  }
}

function bindActionCreator(creator, dispatch) {
  // {
  //   add: () => ({ type: 'ADD' })
  // }
  // =>
  // {
  //   add: () => dispatch({ type: 'ADD' }),
  // }
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
  let obj = {}
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}
