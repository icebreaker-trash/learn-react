// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import styles from './index.module.scss'
import { Button, Form, Input } from 'antd'
// import SigninBg from '~/assets/image/sign_bg.png'
const SigninPage: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const getCodeSlot = (
    <span className="cursor-pointer text-blue-900 hover:text-gray-500">获取短信验证码</span>
  )

  return (

    <div className={styles.fullScreenEle}>

      <div className={styles.withoutFooter}>
        <div className="text-center mb-6">
          <h1 className="text-7xl text-primary">傻乎</h1>
          <h3 className="mt-2 ">
            <span className="text-sm tracking-widest mr-2">没问题</span>
            <span className="text-sm tracking-widest">就会变傻</span>
          </h3>
        </div>

        <div className="bg-white w-96 flex flex-col items-center rounded-sm shadow">
          <Form

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <Input prefix="中国 +86" bordered={false} placeholder="手机号"></Input>
            </Form.Item>
            <Form.Item>
              <Input suffix={
                getCodeSlot
              } bordered={false} placeholder="输入6位短信验证码"></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">登录/注册</Button>
            </Form.Item>
          </Form>

        </div>
      </div>

    </div>)
}

export default SigninPage
