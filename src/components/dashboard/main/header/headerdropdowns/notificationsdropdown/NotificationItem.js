import React from 'react'

const NotificationItem = ({item}) => {
  return (
    <>
        <a className="dropdown-item d-flex align-items-center m-r" href="#">
            {/* <img src="./assets/images/user-avatar.svg" alt="" /> */}
            <div className='w-wrap'>{item?.content}</div>
        </a>

    </>
  )
}

export default NotificationItem