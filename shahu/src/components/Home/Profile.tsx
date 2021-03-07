// eslint-disable-next-line no-use-before-define
import React from 'react'
import { actions, IUserProfile } from '~/bus/Profile'
import { Input, Form, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
export default function HomePage () {
  const Profile = useSelector<IUserProfile, IUserProfile>(state => state)
  const dispatch = useDispatch()
  console.log(Profile)
  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch(actions.updateProfile(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>

      <div>This is HomePage Page</div>
      <div>Hello {Profile.nickname}</div>
      <div>avatar: {Profile.avatar}</div>
      <div className="w-64">
        <Form
          initialValues={Profile}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item label="昵称" name="nickname" rules={[
            {
              required: true,
              message: '请输入您的昵称'
            }
          ]}>
            <Input />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              修改
        </Button>
          </Form.Item>
        </Form>
      </div>

    </>)
}
