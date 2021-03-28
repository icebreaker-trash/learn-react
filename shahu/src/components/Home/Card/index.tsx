import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import Footer from './Footer'
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
      <div className="mt-2 text-gray-800" style={{ fontSize: 15 }}>
        {
          content.length > 75
            ? (
              <>
                <span className="cursor-pointer" >
                  {content.substring(0, 75)}...</span>
                <span className="text-blue-800 cursor-pointer select-none text-sm">阅读全文
                <DownOutlined></DownOutlined>
                </span>
              </>
              )
            : { content }
        }

      </div>
      <Footer {...{ id, likeCount, commentCount }}></Footer>
    </div>
  )
}
export default HomeCard
