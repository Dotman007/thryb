import React, { useState } from 'react'
import NotificationItem from './NotificationItem'
import { useEffect } from 'react'
import {fetchDataWithAxios} from '../../../../../../config/fetchDataWithAxios'
import { useNavigate } from 'react-router-dom'
import { ClickAwayListener } from '@mui/base';


const NotificationsDropdown = ({showNotifDropDown, setShowNotifDropDown,setShowMsgDropDown,setShowProfDropDown,page}) => {
	const navigate = useNavigate();
	const [notificationList,setNotificationList]= useState([]);
	const [showDropDowns, setShowDrops] = useState(false)

	useEffect(() => {
		const fetchThrybeTalks = async () => {
		  try {
			const response = await fetchDataWithAxios("get", "/GetActivityList");
			setNotificationList(response.data);
		  } catch (err) {
			console.log(err);
			sessionStorage.removeItem("token");
			sessionStorage.removeItem("img");
			sessionStorage.removeItem("pages");
			navigate("/login");
		  }
		};
		fetchThrybeTalks();
	  },[]);
  return (
			<>
				<ClickAwayListener onClickAway={() => setShowDrops(false)} mouseEvent={'onMouseDown'}>
					<div className="dropdown position-relative notification-dropdown" onClick={() => { 
						
							setShowDrops(!showDropDowns)
						}}>
						<button className="btn dropdown-button position-relative" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<img src="/assets/images/Notification.svg" alt="notification"/>
								{/* <div className="position-absolute nots-number">1</div> */}
						</button>
						<div className={`dropdown-menu mt-3 my---dropdown overflow-v ${showDropDowns && 'show'}`} aria-labelledby="dropdownMenuButton">
							<div className="position-relative drop-down-menu-inner">
								<div className="position-absolute dropdown-pointer">
									<i className="fa fa-caret-up"></i>
								</div>
								{notificationList.map((item, index) => (
								<NotificationItem key={index} item={item}/>
								))}
							</div>
						</div>
					</div>
				</ClickAwayListener>
			</>
  )
}

export default NotificationsDropdown