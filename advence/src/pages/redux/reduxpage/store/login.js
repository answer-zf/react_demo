import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import zfSaga from './zfSaga'

const initialUserInfo = { isLogin: false, user: { name: null } }

function loginReducer(state = { initialUserInfo }, action) {
  switch (action.type) {
    case 'LOGIN_SECCUSS':
      return { isLogin: true, user: { name: 'zf' } }
    case 'LOGIN_FAILURE':
      return { isLogin: false, user: { name: null } }
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({ user: loginReducer }), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(zfSaga)

export default store
