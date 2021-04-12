// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './index.less'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'
import Signin from './components/Signin/index'
import Term from './components/Term/index'
import Home from './components/Home/index'
import store from './store'
import { Provider } from 'react-redux'
import MainLayout from '~/components/Layout'
import AdminLayout from '~/components/Layout/AdminLayout'
import Welcome from '~/components/Admin/Welcome'
import RxjsIndex from '~/pages/rxjs/index'
import { ConfigProvider } from 'antd'
import { adminRoutePrefix } from '~/config/base'
// import { createBrowserHistory } from 'history'
// const customHistory = createBrowserHistory()
import './init.ts'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Router>
          {/* 排外的 */}
          <Switch>
            <Route exact path="/">
              <MainLayout>
                <Home />
              </MainLayout>
            </Route>

            <Route path="/term">
              <Term />
            </Route>

            <Route path="/signin">
              <Signin />
            </Route>

            <Route path="/rxjs">

              <RxjsIndex />
            </Route>

            <Route path={adminRoutePrefix}>
              <AdminLayout >
                <Welcome></Welcome>
              </AdminLayout>

            </Route>
          </Switch>

        </Router>
      </ConfigProvider>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
