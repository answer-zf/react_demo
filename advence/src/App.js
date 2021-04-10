import React from 'react'
import RoutePage from './pages/RoutePage'
// import RouterSourcePage from './pages/RouterSourcePage'
// import ReactReduxPage from './pages/ReactReduxPage'
// import ReduxPage from './pages/ReduxPage'
// import ContextPage from './pages/ContextPage'
// import DialogPage from './pages/DialogPage';
// import FormPage from './pages/FormPage';
// import FormPageCreate from './pages/FormPageCreate';
// import MyFormPage from './pages/MyFormPage';
// import HocPage from './pages/HocPage';

function App() {
  // const [num, setNum] = useState(0)

  return (
    <div className="App">
      {/* 高级组件 */}
      {/* <HocPage /> */}

      {/* antd 表单 */}
      {/* 使用 state 做的数据绑定 */}
      {/* <FormPage /> */}
      {/* 使用create */}
      {/* <FormPageCreate /> */}
      {/* 实现 create */}
      {/* <MyFormPage /> */}
      {/* antd 弹框 */}
      {/* <DialogPage /> */}

      {/* redux */}
      {/* context */}
      {/* <ContextPage /> */}
      {/* redux */}
      {/* <ReduxPage /> */}
      {/* react-redux */}
      {/* <button onClick={() => setNum(num + 1)}>setNum{num}</button> ownProps 性能测试
      <ReactReduxPage num={num} /> */}

      {/* router */}
      <RoutePage />
      {/* 源码 */}
      {/* <RouterSourcePage /> */}
    </div>
  )
}

export default App
