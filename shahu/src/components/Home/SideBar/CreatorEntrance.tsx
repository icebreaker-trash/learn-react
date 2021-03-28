import React, { useState, useEffect } from 'react'
import { EditFilled, RightOutlined, UpCircleFilled } from '@ant-design/icons'
const CreatorEntrance = () => {
  return (
    <div className="bg-white px-4 shadow">
      <div className="flex justify-between items-center h-12">
        <span>
          <span className="text-gray-500 mr-2"><EditFilled /></span>

          <span className="mr-2">创作中心</span>
          <span className="text-primary">
            Lv 3
          </span>
        </span>
        <span className="text-gray-500">
          <RightOutlined></RightOutlined>
        </span>
      </div>
      <div className="flex justify-between pt-1 pb-5 text-gray-500 text-xs text-center">
        <div className="w-1/2 border-0 border-solid border-r border-gray-100">
          <div className="">昨日阅读（播放）数</div>
          <div className="text-lg font-semibold text-gray-900">250</div>
          <div>
            <span>较前日</span>
            <span className="mx-1 text-primary">
              <UpCircleFilled></UpCircleFilled>
            </span>
            <span className="text-gray-900 font-semibold">25%</span>
          </div>
        </div>
        <div className="w-1/2">
          <div>昨日赞同数</div>
          <div className="text-lg font-semibold text-gray-900">5</div>
          <div>较前日 --</div>
        </div>
      </div>
      <div className="text-gray-500 px-2 py-3 text-center border-0 border-solid border-t border-gray-100">
        XX保镖为你的创作提供持续保护
      </div>
    </div>
  )
}

export default CreatorEntrance
