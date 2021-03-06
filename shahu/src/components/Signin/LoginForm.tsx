// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import PhonePrefixSelecter from './PhonePrefixSelecter'

// 验证码code or 语音
export enum GetCodeEnum {
  // eslint-disable-next-line no-unused-vars
  Mobile,
  // eslint-disable-next-line no-unused-vars
  Voice
}

const LoginForm: FC = () => {
  const [GetCodeFlag, setGetCodeFlag] = useState(GetCodeEnum.Mobile)

  const isMobileCode = GetCodeFlag === GetCodeEnum.Mobile

  const toggleGetcode = (e: any) => {
    isMobileCode ? setGetCodeFlag(GetCodeEnum.Voice) : setGetCodeFlag(GetCodeEnum.Mobile)
  }

  const getCodeSlot = (
    <span className="cursor-pointer text-blue-900 hover:text-gray-500">获取{isMobileCode ? '短信' : '语音'}验证码</span>
  )

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form

      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item className="border-b border-solid border-gray-100">
        <Input prefix={
          <PhonePrefixSelecter></PhonePrefixSelecter>
        } maxLength={50} bordered={false} placeholder="手机号"></Input>
      </Form.Item>
      <Form.Item className="border-b border-solid border-gray-100">
        <Input suffix={
          getCodeSlot
        } bordered={false} maxLength={50} placeholder="输入6位短信验证码"></Input>
      </Form.Item>
      <div className="flex justify-end mb-4" style={{
        paddingRight: '11px'
      }}>
        <span onClick={toggleGetcode} className="cursor-pointer text-gray-600 hover:text-gray-700">接受{isMobileCode ? '语音' : '短信'}验证码</span>
      </div>
      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">登录/注册</Button>
      </Form.Item>
    </Form >
  )
}

export default LoginForm
