// eslint-disable-next-line no-use-before-define
import React, {
  FC, useState,
  useEffect
} from 'react'
import { Button, Form, Input } from 'antd'
import PhonePrefixSelecter from './PhonePrefixSelecter'
import styles from './LoginForm.module.scss'
import { login } from '~/api/account/login'
import { useHistory } from 'react-router-dom'
// 验证码code or 语音
export enum GetCodeEnum {
  // eslint-disable-next-line no-unused-vars
  Mobile,
  // eslint-disable-next-line no-unused-vars
  Voice
}

export enum UsernameCustomError {
  // eslint-disable-next-line no-unused-vars
  Success,
  // eslint-disable-next-line no-unused-vars
  Required,
  // eslint-disable-next-line no-unused-vars
  Format
}
let ptr = 0
const LoginForm: FC = () => {
  const [GetCodeFlag, setGetCodeFlag] = useState(GetCodeEnum.Mobile)
  const [CustomError, setCustomError] = useState(UsernameCustomError.Success)
  const [Countdown, setCountdown] = useState(0)
  const [LoginBtnLoading, setLoginBtnLoading] = useState(false)
  const isMobileCode = GetCodeFlag === GetCodeEnum.Mobile
  const history = useHistory()
  const toggleGetCode = (e: any) => {
    isMobileCode ? setGetCodeFlag(GetCodeEnum.Voice) : setGetCodeFlag(GetCodeEnum.Mobile)
  }
  const isCustomErrorSuccess = CustomError === UsernameCustomError.Success

  useEffect(() => {
    if (Countdown > 0) {
      ptr = window.setTimeout(() => {
        setCountdown(Countdown - 1)
      }, 1000)
    }
  }, [Countdown])
  const getCode = (e: any) => {
    // if (isMobileCode) {
    //   if (Countdown === 0) {
    //     window.clearTimeout(ptr)
    //     ptr = 0
    //     setCountdown(60)
    //   }
    // } else {
    //   // 获取语音
    // }
    if (Countdown === 0) {
      window.clearTimeout(ptr)
      ptr = 0
      setCountdown(60)
    }
  }
  const getCodeSlot = (
    <span className={Countdown > 0 ? styles.getCodeDisibled : styles.getCode} onClick={getCode}>
      {
        Countdown > 0 ? `${Countdown}秒后可重发` : `获取${isMobileCode ? '短信' : '语音'}验证码`
      }
    </span>
  )

  const onFinish = async (values: any) => {
    console.log('Success:', values)
    if (values.username) {
      try {
        setLoginBtnLoading(true)
        await login(values)
        setLoginBtnLoading(false)
        history.push('/')
      } catch (err) {
        console.error(err)
        setLoginBtnLoading(false)
      }
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const CustomUsernameSlot = (
    <span className="text-sm text-red-600">请输入{CustomError === UsernameCustomError.Format ? '正确的' : ''}手机号</span>
  )
  return (
    <Form

      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="username" className="border-0 border-b border-solid  border-gray-100 overflow-hidden mb-3" validateStatus="success" rules={[
        () => {
          return {
            validator: async (rule, value) => {
              if (!value) {
                setCustomError(UsernameCustomError.Required)
              } else {
                setCustomError(UsernameCustomError.Success)
              }
            }
          }
        }
      ]}>
        <Input prefix={
          <PhonePrefixSelecter></PhonePrefixSelecter>
        } maxLength={50} bordered={false} placeholder="手机号" suffix={
          isCustomErrorSuccess ? undefined : CustomUsernameSlot
        }></Input>
      </Form.Item>
      <Form.Item name="password" className="border-0 border-b border-solid border-gray-100 overflow-hidden mb-3" >
        <Input suffix={
          getCodeSlot
        } bordered={false} maxLength={50} placeholder="输入 6 位短信验证码"></Input>
      </Form.Item>
      <div className="flex justify-end mb-4" style={{
        paddingRight: '11px'
      }}>
        <span onClick={toggleGetCode} className="cursor-pointer text-gray-500 hover:text-gray-600">接受{isMobileCode ? '语音' : '短信'}验证码</span>
      </div>
      <Form.Item>
        <Button loading={LoginBtnLoading} className="w-full" type="primary" htmlType="submit">登录/注册</Button>
      </Form.Item>
    </Form >
  )
}

export default LoginForm
