import LoginService from '../service/login'

// export const loginAction = async (dispatch, userInfo) => {
export async function loginAction(dispatch, userInfo) {
  dispatch({ type: 'LOGIN_REQUEST' }) //展示loading
  const res1 = await login(dispatch, userInfo)
  getMoreUserInfo(dispatch, res1)

  // // 去login请求
  // setTimeout(() => {
  //   dispatch({ type: 'LOGIN_SUCCESS', payload: userInfo })
  // }, 1000)
}

function login(dispatch, userInfo) {
  return LoginService.login(userInfo).then(
    res => {
      return res
      // dispatch({ type: 'LOGIN_SUCCESS', payload: res })
      // console.log(res)
    },
    err => {
      dispatch({ type: 'LOGIN_FAILURE', payload: err })
    }
  )
}

function getMoreUserInfo(dispatch, userInfo) {
  console.log(userInfo)
  LoginService.getMoreUserInfo(userInfo).then(
    res => {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { ...res, ...userInfo } })
    },
    err => {
      dispatch({ type: 'LOGIN_FAILURE', payload: err })
    }
  )
}
