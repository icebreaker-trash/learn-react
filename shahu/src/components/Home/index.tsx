// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
// import ProfileStore from '~/bus/Profile'
// import { Provider } from 'react-redux'
// import Profile from './Profile'
import { mockCardData } from './mockData'
// import { BackTop } from 'antd';
import HomeCard from './Card'
import SideBarIndex from './SideBar'
function getTabClass (active: boolean) {
  const res = ['cursor-pointer']
  if (active) {
    res.push('text-primary')
  }
  return res.join(' ')
}

export default function HomePage () {
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <div className="flex">
      <div className="bg-white shadow" style={{
        width: 694,
        marginRight: 10
      }}>

        <div className="border-0 border-solid border-b border-gray-100 text-base flex space-x-12 items-center px-6" style={{
          height: 60
        }}>
          {
            ['推荐', '关注', '热榜'].map((x, idx) => {
              return <span key={idx} className={getTabClass(activeIdx === idx)} onClick={() => {
                setActiveIdx(idx)
              }}>{x}</span>
            })
          }

        </div>

        {
          mockCardData.map(x => {
            return <HomeCard key={x.id} {...x}></HomeCard>
          })
        }

      </div>
      <div
        style={{
          width: 296
        }}>
        <SideBarIndex></SideBarIndex>
      </div>
    </div>
  )
}
