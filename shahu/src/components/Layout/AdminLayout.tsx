import React, { useState, PropsWithChildren } from 'react'
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd'
import { LikeOutlined, UserOutlined } from '@ant-design/icons'
import { useHistory, useLocation, Link } from 'react-router-dom'
import type { ProSettings } from '@ant-design/pro-layout'
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout'
import defaultProps from './_defaultProps'

// const content = (
//   <Descriptions size="small" column={2}>
//     <Descriptions.Item label="创建人">张三</Descriptions.Item>
//     <Descriptions.Item label="联系方式">
//       <a>421421</a>
//     </Descriptions.Item>
//     <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
//     <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
//     <Descriptions.Item label="备注">中国浙江省杭州市西湖区古翠路</Descriptions.Item>
//   </Descriptions>
// )

export default (props: PropsWithChildren<{}>) => {
  const location = useLocation()
  // console.log(location)
  const history = useHistory()
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true, fixedHeader: true })

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh'
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname: location.pathname
        }}

        // waterMarkProps={{
        //   content: 'Pro Layout'
        // }}

        // onMenuHeaderClick={(e) => console.log(e)}
        menuHeaderRender={() => {
          return null
        }}
        menuItemRender={(item, dom) => (
          <Link to={item.path}> {dom}</Link>
        )}
        {...settings}
      >
        <PageContainer
        // content={props.children}

        >
          {props.children}
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={location.pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
        disableUrlParams
      />
    </div>
  )
}
