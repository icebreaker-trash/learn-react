// eslint-disable-next-line no-use-before-define
import React, { useState, FC } from 'react'
import { Upload, message } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload/interface'
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function getBase64 (img: Blob | File | undefined): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result as string))
    reader.addEventListener('error', () => {
      reject(img)
    })
    reader.readAsDataURL(img as Blob)
  })
}

function beforeUpload (file: File) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
interface AntdFormItemProps {
  value?: string,
  onChange?: (value: string) => void;
}

const UploadAvatar: FC<AntdFormItemProps> = (props: AntdFormItemProps) => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  const handleChange = async (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      const dataUrl = await getBase64(info.file.originFileObj)
      setImageUrl(dataUrl)
      setLoading(false)
      props.onChange?.(dataUrl)
    }
  }
  const handleRequest = (info: RcCustomRequestOptions) => {
    info.onSuccess(null, null)
  }
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={handleRequest}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  )
}

export default UploadAvatar
