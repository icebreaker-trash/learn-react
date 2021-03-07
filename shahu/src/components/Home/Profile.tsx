// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { saveProfile2LocalDb } from '~/store/slice/profile'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import ProfileForm from './ProfileForm'
export default function ProfileEditor () {
  const profile = useSelector(state => state.profile)

  const dispatch = useDispatch()
  useEffect(() => {
    console.log(profile)
  }, [profile])
  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch(saveProfile2LocalDb(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const props = {
    profile,
    onFinish,
    onFinishFailed
  }
  return (
    <>

      <div>This is HomePage Page</div>
      <div>Hello {profile.nickname}</div>
      <div>avatar:
        <Avatar size={30} shape="square" icon={<UserOutlined />} src={profile.avatar} />
      </div>
      <div className="w-64">
        <ProfileForm {...props}></ProfileForm>
      </div>

    </>)
}
