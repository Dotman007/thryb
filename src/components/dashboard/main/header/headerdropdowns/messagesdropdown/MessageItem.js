import React from 'react'

const MessageItem = ({item}) => {
  return (
        <>
            <a className="dropdown-item" href="#">{item?.content}</a>
            
        </>
  )
}

export default MessageItem