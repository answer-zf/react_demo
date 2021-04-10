// 调用异步 call(阻塞) fork(无阻塞)
//   call :用于顺序执行
// 状态更新（dispatch）put
// 做监听 take

import { call, put, take, takeEvery, fork } from 'redux-saga/effects'
import LoginService from '../service/login'

// worker saga
function* loginHandle(action) {
  console.log('action', action)
  yield put({ type: 'LOGIN_REQUEST' }) // loading
  try {
    const res1 = yield call(LoginService.login, action.payload) // api 请求
    const res2 = yield call(LoginService.getMoreUserInfo, res1) // api 请求
    yield put({ type: 'LOGIN_SUCCESS', payload: { ...res2, ...res1 } }) //状态更新
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: error })
  }
}

// watcher saga
function* loginSaga(params) {
  // yield takeEvery('loginSaga', loginHandle)

  const action = yield take('loginSaga')
  yield fork(loginHandle, action)
}

export default loginSaga

// 编辑 saga 文件
// 1. 导入 相应 api
// 2. 做监听
// 3. 创建监听使用的第二个参数（函数：数据操作）
// 4. 导出 监听函数

// 由于 saga 是 redux的中间件，在 store/index.js 做 中间件配置 ，并运行
//
