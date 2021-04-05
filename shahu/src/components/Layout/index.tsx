// eslint-disable-next-line no-use-before-define
import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { Tabs, Input, Avatar, Button, AutoComplete } from 'antd'
import { MessageFilled, BellFilled, SearchOutlined } from '@ant-design/icons'
// import { useSelector } from 'react-redux'
import defaultAvatar from '~/assets/image/icon.png'
const { TabPane } = Tabs
const { Search } = Input
const MainLayout = (props: PropsWithChildren<any>) => {
  const history = useHistory()
  return (
    <div>
      <div className="w-full bg-white shadow-sm min-w-full" style={{ height: 52 }}>
        <div style={{ width: 1200 }} className="mx-auto flex items-center justify-between px-4 bg-white">
          <div className="flex items-center">
            <div onClick={
              () => {
                history.push('/')
              }
            } className="text-3xl tracking-widest cursor-pointer" style={{ color: '#0066FF' }}>傻乎</div>
            <div className="ml-6 mr-4">
            </div>

            <Tabs className="no-transparent-line " size="middle" tabBarStyle={
              {
                marginBottom: 0,
                height: 52
              }
            } defaultActiveKey="1" onChange={console.log}>
              <TabPane tab="首页" key="1" />
              <TabPane tab="会员" key="2" />
              <TabPane tab="发现" key="3" />
              <TabPane tab="等你来答" key="4" />
            </Tabs>
          </div>
          <div className="flex items-center">
            {/* <Search style={{ width: 400 }}></Search> */}
            <AutoComplete placeholder="搜索你感兴趣的内容…" style={{ width: 400 }}>
              <Input className="ant-rounded bg-gray-50 focus-within:bg-white " style={{ width: 400 }} suffix={
                <SearchOutlined></SearchOutlined>
              }></Input>
              {/* <Search className="rounded" style={{ width: 400 }} ></Search> */}
            </AutoComplete>
            <Button className="ml-3" style={{ width: 70 }} shape="round" type="primary">提问</Button>
          </div>
          <div className="flex items-center space-x-10">
            <div className="text-gray-500 text-2xl cursor-pointer hover:text-gray-600">
              <BellFilled></BellFilled>
            </div>
            <div className="text-gray-500 text-xl cursor-pointer hover:text-gray-600">
              <MessageFilled></MessageFilled>
            </div>

            <Avatar className="cursor-pointer" shape="square" src={defaultAvatar}></Avatar>
          </div>

        </div>

      </div>
      <div style={{ marginTop: 10 }}>
        <div className="mx-auto" style={{ width: 1000 }}>
          {props.children}
        </div>

      </div>

    </div >
  )
}

export default MainLayout
