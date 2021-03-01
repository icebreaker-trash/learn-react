
// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs
function callback (key: any) {
  console.log(key)
}

const HeaderTabs: FC = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="免密码登录" key="1">
    </TabPane>
    <TabPane tab="密码登录" key="2">
    </TabPane>
  </Tabs>
)

export default HeaderTabs
