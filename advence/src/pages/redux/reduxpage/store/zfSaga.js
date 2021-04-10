// redux-saga 管理应用程序副作用的库
// 类比 redux-thunk
// 调用 异步操作：call
// 状态更新 {dispatch} put
// 监听 takeEvery

import { call, put, takeEvery } from 'redux-saga/effects'

// worker saga
// eslint-disable-next-line require-yield
function* loginHandle(action) {
  const res = yield call(UserService.login, { name: 'zf' })
  console.log(res)
  yield put({ type: 'LOGIN_SECCUSS' })
}

// watch sage
function* zfSaga(props) {
  // console.log('zfSaga')
  yield takeEvery('login', loginHandle)
}
export default zfSaga

// 模拟登录接口
export const UserService = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === 'zf') {
          resolve({ id: 123, name: 'omg原来是小明' })
        } else {
          reject({ msg: '用户名或密码错误' })
        }
      }, 1000)
    })
  },
}
