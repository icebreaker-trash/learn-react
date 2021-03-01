// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import styles from './index.module.scss'
import { Button, Form, Input } from 'antd'
import PhonePrefixSelecter from './PhonePrefixSelecter'
import HeaderTabs from './HeaderTabs'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined
} from '@ant-design/icons'
const getCodeSlot = (
  <span className="cursor-pointer text-blue-900 hover:text-gray-500">获取短信验证码</span>
)
// import SigninBg from '~/assets/image/sign_bg.png'
const SigninPage: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (

    <div className={styles.fullScreenEle}>

      <div className={styles.withoutFooter}>
        <div className="text-center mb-6">
          <h1 className="text-7xl text-primary">傻乎</h1>
          <h3 className="mt-2 text-gray-700 font-semibold">
            <span className="text-sm tracking-widest mr-2">没问题</span>
            <span className="text-sm tracking-widest">就创造问题</span>
          </h3>
        </div>

        <div className="bg-white w-96 flex flex-col items-center rounded-sm shadow px-6 pt-2">
          <div className="self-stretch">
            <HeaderTabs></HeaderTabs>
            <Form

              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item className="border-b border-solid border-gray-100">
                <Input prefix={
                  <PhonePrefixSelecter></PhonePrefixSelecter>
                } bordered={false} placeholder="手机号"></Input>
              </Form.Item>
              <Form.Item className="border-b border-solid border-gray-100">
                <Input suffix={
                  getCodeSlot
                } bordered={false} placeholder="输入6位短信验证码"></Input>
              </Form.Item>
              <Form.Item>
                <Button className="w-full" type="primary" htmlType="submit">登录/注册</Button>
              </Form.Item>
            </Form>
            <div className="text-xs text-gray-500 pb-4 border-b border-solid border-gray-100">未注册手机验证后自动登录，注册即代表同意<span className="cursor-pointer">《傻乎乎协议》</span></div>
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
          </div>

        </div>
      </div>

    </div>)
}

export default SigninPage
