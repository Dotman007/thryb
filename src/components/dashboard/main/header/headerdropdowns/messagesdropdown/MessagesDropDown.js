import React,{useState} from 'react'
import MessageItem from './MessageItem'
import { useEffect } from 'react'
import {fetchDataWithAxios} from '../../../../../../config/fetchDataWithAxios'
import { useNavigate } from 'react-router-dom'
import { ClickAwayListener } from '@mui/base';


const MessagesDropDown = () => {
    const navigate= useNavigate();
    const [showDropDowns, setShowDrops] = useState(false);
    const [messagesList,setMessagesList]= useState([]);
    let messagesNumber = 0;

    useEffect(() => {
    const fetchThrybeTalks = async () => {
        try {
        const response = await fetchDataWithAxios("get", "/GetLatestSupportMessage");
        setMessagesList(response.data);
        } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
        }
    };
    fetchThrybeTalks();
    messagesNumber=messagesList.length;
    },[]);
  return (
        <>
            <ClickAwayListener onClickAway={() => setShowDrops(false)} mouseEvent={'onMouseDown'}>
                <div className="dropdown messages-dropdown position-relative ml-4" onClick={()=>{
                    setShowDrops(!showDropDowns)}}>
                    <button
                        className="btn dropdown-button position-relative"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            src="/assets/images/Mail-black-icon.svg"
                            alt="notification"
                        />
                        {/* <div className="position-absolute nots-number">{messagesNumber > 0 ? messagesNumber : '' }</div> */}
                    </button>
                    <div className={`dropdown-menu mt-3 my---dropdown ${showDropDowns && 'show'}`} aria-labelledby="dropdownMenuButton">
                        <div className="position-relative drop-down-menu-inner">
                            <div className="position-absolute dropdown-pointer">
                                <i className="fa fa-caret-up"></i>
                            </div>
                            {messagesList.map((item,index)=>(
                            <MessageItem key={index} item={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </>
  )
}

export default MessagesDropDown