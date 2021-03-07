// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Input, Form, Button } from 'antd'
import UploadAvatar from '~/components/Hoc/UploadAvatar'
interface IProfileForm {
  profile: Object,
  onFinish: (values: any) => void,
  onFinishFailed: (values: any) => void
}

const ProfileForm = (props: IProfileForm) => {
  return (
    <Form
      initialValues={props.profile}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}>
      <Form.Item label="昵称" name="nickname" rules={[
        {
          required: true,
          message: '请输入您的昵称'
        }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="头像" name="avatar">
        <UploadAvatar></UploadAvatar>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          修改
       </Button>
      </Form.Item>
    </Form>
  )
}
export default ProfileForm
