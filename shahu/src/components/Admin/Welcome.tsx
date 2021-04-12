import React from 'react'
const Welcome = (props) => {
  const { count = 0 } = props
  const handleClick = () => {
    setTimeout(() => {
      alert(count)
    }, 3000)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Alert Count</button>
    </div>
  )
}

export default Welcome
