// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined
} from '@ant-design/icons'
const ThirdPartyLogin: FC = () => {
  return (
    <div className="flex justify-between items-center h-14">
      <div className="text-gray-500">社交账号登录</div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center cursor-pointer">
          <WechatOutlined style={{ color: '#60c84d', fontSize: '20px' }} ></WechatOutlined>
          <span className="ml-2">微信</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <QqOutlined style={{ color: '#50c8fd', fontSize: '20px' }}></QqOutlined>
          <span className="ml-2">QQ</span>

        </div>
        <div className="flex items-center cursor-pointer">
          <WeiboOutlined style={{ color: '#fb6622', fontSize: '20px' }}></WeiboOutlined>
          <span className="ml-2">微博</span>
        </div>
      </div>
    </div>
  )
}

export default ThirdPartyLogin
