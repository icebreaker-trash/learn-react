// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Select } from 'antd'
import styles from './PhonePrefixSelecter.module.scss'
const { Option } = Select
const PhonePrefixSelecter: FC = () => {
  function handleChange (value: any) {
    console.log(`selected ${value}`)
  }
  return (<Select className={styles.prefixSelect} bordered={false} defaultValue={86} style={{ width: 100 }} onChange={handleChange}>
    {
      Array(50).fill(null).map((x, idx) => {
        return <Option key={idx} value={idx + 86}>中国 +86</Option>
      })
    }
  </Select>)
}

export default PhonePrefixSelecter
