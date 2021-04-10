import { applyMiddleware, createStore, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
import { userReducer } from './userReducer'
import createSagaMiddleware from 'redux-saga'
import loginSaga from '../action/loginSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({ user: userReducer }),
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(loginSaga)
export default store
