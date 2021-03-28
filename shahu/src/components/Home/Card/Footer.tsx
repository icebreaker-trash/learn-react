
import React from 'react'
import {
  CaretUpOutlined, CaretDownOutlined,
  StarFilled, MessageFilled, HeartFilled, ControlFilled, EllipsisOutlined
} from '@ant-design/icons'

const CardFooter = (props: {
  likeCount: number;
  commentCount: number;
  id: string;
}) => {
  const { likeCount, commentCount, id } = props
  console.log(likeCount, commentCount)
  return (
    <div className="flex select-none items-center space-x-6 mt-2 text-gray-500">
      <div className="flex space-x-1">
        <div className="cursor-pointer h-8 px-3 flex justify-center items-center bg-blue-700 bg-opacity-10 text-primary rounded hover:bg-opacity-20">
          <CaretUpOutlined></CaretUpOutlined>
          <span className="ml-1">赞同 {likeCount}</span>
        </div>
        <div className="cursor-pointer h-8 px-3 flex justify-center items-center bg-blue-700 bg-opacity-10 text-primary rounded hover:bg-opacity-20">
          <CaretDownOutlined></CaretDownOutlined>
        </div>
      </div>

      <div className="cursor-pointer">
        <MessageFilled></MessageFilled>
        <span className="ml-1">添加评论</span>
      </div>
      <div className="cursor-pointer">
        <ControlFilled></ControlFilled>
        <span className="ml-1">分享</span>
      </div>
      <div className="cursor-pointer">
        <StarFilled></StarFilled>
        <span className="ml-1">收藏</span>
      </div>
      <div className="cursor-pointer">
        <HeartFilled></HeartFilled>
        <span className="ml-1">喜欢</span>
      </div>
      <div className="cursor-pointer">
        <EllipsisOutlined></EllipsisOutlined>
      </div>
    </div>
  )
}

export default CardFooter
