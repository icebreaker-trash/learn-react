import React from 'react'
import { DownOutlined, UpOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
export interface HomeCardProps {
  id: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const HomeCard = (props: HomeCardProps) => {
  const { id, title, content, likeCount, commentCount } = props
  return (
    <div className="border-0 border-solid border-b border-gray-100 p-5">
      <div>
        <a target="_blank" className="text-gray-800 font-semibold text-lg hover:text-blue-800">{title}</a>
      </div>
      <div className="mt-2">
        {/* {75} */}
        {
          content.length > 75
            ? (
              <>
                <span className="cursor-pointer" >
                  {content.substring(0, 75)}...</span>
                <span className="text-blue-800 cursor-pointer select-none">阅读全文
                <DownOutlined></DownOutlined>
                </span>
              </>
              )
            : { content }
        }

      </div>
      <div className="flex">
        <div><CaretUpOutlined></CaretUpOutlined>赞同{likeCount}</div>
        <div>
          <CaretDownOutlined></CaretDownOutlined>
        </div>
        <div>{commentCount}条评论</div>
        <div>分享</div>
        <div>收藏</div>
        <div>喜欢</div>
        <div>...</div>
      </div>
    </div>
  )
}
export default HomeCard
