import React from 'react'
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons'
import { RouterTypes } from '@ant-design/pro-layout/lib/typings'
import { adminRoutePrefix } from '~/config/base'
// import path from 'path'
import * as R from 'ramda'
function resolve (...args: string[]) {
  return adminRoutePrefix + args.join('')
}

const routes = [
  {
    path: resolve('/welcome'),
    name: '欢迎',
    icon: <SmileOutlined />
  },
  {
    path: resolve('/manager'),
    name: '管理页',
    icon: <CrownOutlined />,
    routes: [
      {
        path: resolve('/manager', '/sub-page1'),
        name: '一级页面',
        icon: <CrownOutlined />
      },
      {
        path: resolve('/manager', '/sub-page2'),
        name: '二级页面',
        icon: <CrownOutlined />
        // component: './Welcome'
      },
      {
        path: resolve('/manager', '/sub-page3'),
        name: '三级页面',
        icon: <CrownOutlined />
        // component: './Welcome'
      }
    ]
  }
]
const RouterOptions = {
  route: {
    // path: 'admin',
    routes
  },
  location: {
    pathname: '/'
  }
}

export default RouterOptions
