// redux 原理:自定义redux

export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let currentListener = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    // 监听
    currentListener.forEach(listener => listener())
  }
  // 可多次订阅
  function subscribe(listener) {
    // 每次订阅，把回调放入回调数组中
    currentListener.push(listener)
  }
  // type 的取值 不能和reducer中定义的规则 重复
  dispatch({ type: '@INIT/REDUX-KKB' })
  return { getState, dispatch, subscribe }
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const middleApi = {
      getState: store.getState,
      dispatch
    }
    const middlewareChain = middlewares.map(middleware => middleware(middleApi))
    dispatch = compose(...middlewareChain)(dispatch)
    return {
      ...store,
      // 覆盖 store中的 dispatch
      dispatch
    }
  }
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
