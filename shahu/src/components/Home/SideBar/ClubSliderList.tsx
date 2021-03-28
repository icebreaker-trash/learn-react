import React, { useState, useEffect } from 'react'
import defaultClubUrl from '~/assets/image/icon.png'
import { Pagination } from 'antd'
import { FileAddOutlined } from '@ant-design/icons'
const defaultClubUrlDom = <img className="w-10 h-10" src={defaultClubUrl} />
const MockedClubs = Array(10).fill(0).map((x, idx) => {
  return {
    dom: defaultClubUrlDom,
    title: '我的圈子' + idx
  }
})
const defaultPageSize = 4
const ClubSliderList = () => {
  const [PageIndex, setPageIndex] = useState(1)
  const [Clubs, setClubs] = useState<typeof MockedClubs>([])
  useEffect(() => {
    setClubs(MockedClubs.slice((PageIndex - 1) * defaultPageSize, PageIndex * defaultPageSize))
  }, [PageIndex])
  return (
    <div className="bg-white shadow">
      <div className="text-gray-400 p-4">
        <FileAddOutlined></FileAddOutlined>
        <span className="ml-3">我的圈子</span>
      </div>
      <div className="flex px-4 my-2">
        {
          Clubs.map((x, idx) => {
            return (
              <div key={PageIndex + idx} className="w-1/4 text-center">
                <div className="mb-1">{x.dom}</div>
                <div className="text-xs text-gray-800">{x.title}</div>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-center pt-3 py-6">
        <Pagination size="small" onChange={(page) => {
          setPageIndex(page)
        }} simple defaultCurrent={PageIndex} defaultPageSize={defaultPageSize} showQuickJumper={false} total={MockedClubs.length} />
      </div>
    </div>
  )
}

export default ClubSliderList
