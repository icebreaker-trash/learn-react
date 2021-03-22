// eslint-disable-next-line no-use-before-define
import React, { PropsWithChildren } from 'react'
import { Tabs, Input } from 'antd'

const { TabPane } = Tabs
const { Search } = Input
const MainLayout = (props: PropsWithChildren<any>) => {
  return (
    <div>
      <div className="h-12 w-screen bg-white overflow-hidden">
        <div className="container mx-auto flex items-center">
          <div>傻乎</div>
          <Tabs defaultActiveKey="1" onChange={console.log}>
            <TabPane tab="首页" key="1" />
            <TabPane tab="会员" key="2" />
            <TabPane tab="发现" key="3" />
            <TabPane tab="等你来答" key="4" />
          </Tabs>
          <Search style={{ width: 400 }}></Search>

        </div>

      </div>
      <div>
        <div className="container mx-auto">
          {props.children}
        </div>

      </div>

    </div >
  )
}

export default MainLayout
