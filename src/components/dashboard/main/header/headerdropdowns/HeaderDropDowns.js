import React, { useState } from 'react'
import MessagesDropDown from './messagesdropdown/MessagesDropDown'
import NotificationDropdown from './notificationsdropdown/NotificationsDropdown'
import Settings from './settings/Settings'
import Profile from './profile/Profile'

const HeaderDropDowns = ({page,setPage, setPermissions,userPicture,setUserPicture}) => {
  return (
            <div className="top-nav-dropdowns">
		  		<NotificationDropdown page={page} setPage={ setPage } />
				<MessagesDropDown />
				<Settings />
				<Profile page={page} setPage={ setPage } setPermissions={setPermissions} userPicture={userPicture} setUserPicture={setUserPicture}/>
	        </div>
  )
}

export default HeaderDropDowns