import React from 'react'
import { FileOutlined } from '@ant-design/icons'

const Bars = [
  {
    title: '回答问题',
    icon: <FileOutlined></FileOutlined>,
    color: 'text-primary bg-primary'
  },
  {
    // #06F
    title: '发视频',
    icon: <FileOutlined></FileOutlined>,
    color: 'text-yellow-600 bg-yellow-600'
  },
  {
    // #06F
    title: '写文章',
    icon: <FileOutlined></FileOutlined>,
    color: 'text-yellow-400 bg-yellow-400'
  },
  {
    // #06F
    title: '写想法',
    icon: <FileOutlined></FileOutlined>,
    color: 'text-green-500 bg-green-500'
  }
]

const ActionBtns = [
  {
    link: '',
    text: '稍后答'
  },
  {
    link: '',
    text: '草稿箱'
  }
]

const GlobalWrite = () => {
  return (
    <div className="shadow bg-white">
      <div className="flex px-4 py-5">
        {
          Bars.map((x, idx) => {
            return <div key={idx} className={'w-1/4 flex  items-center justify-center flex-col cursor-pointer select-none'}>
              <div className={'h-10 w-10 flex rounded-full items-center justify-center text-xl  bg-opacity-20 '.concat(
                x.color// ['text-' + x.color, 'bg-' + x.color].join(' ')
              )} >
                {
                  x.icon
                }
              </div>
              <div className="text-xs mt-3">{x.title}</div>
            </div>
          })
        }

      </div>
      <div className="border-0 border-t border-gray-100  border-solid text-sm text-center">
        {
          ActionBtns.map((x, idx) => {
            return (
              <a target="_blank" className={'inline-block w-1/2 text-gray-400 py-4 '.concat(idx === 0 ? 'border-0 border-r border-gray-100 border-solid' : '')} key={idx}>
                {x.text}
              </a>
            )
          })
        }

      </div>
    </div>
  )
}

export default GlobalWrite
