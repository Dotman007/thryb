import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleUser from "../users/sub/singleuser/SingleUser"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import Header from "../dashboard/main/header/Header";


const UserMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  singleUserInfo,
  setSingleUserInfo,
  userId,
  setUserId,
  userPicture,
  setUserPicture
}) => {
  let navigate= useNavigate();
  const [userDetails,setUserDetails] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetchDataWithAxios('get',"/UserList");
        let singleuserDetails = response.data.filter(item => item.userId == userId)[0];
        setUserDetails(singleuserDetails);
      } catch (err) {
      }
    };
    fetchUsersList();
  }, [userId]);
  useEffect(() => {
    const fetchThrybeUsers = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/UserAvatar?id=${userId}`
        );
        setUserAvatar(response.data);
      } catch (err) {
      }
    };
    if (userId !== -1) fetchThrybeUsers();
  }, [userId]);

  useEffect(()=>{
    setSingleUserInfo({
    status : userDetails?.status || "unknown",
    email : userDetails?.email || "Loading ...",
    userid : userDetails?.userId ?? -1,
    flag : "https://countryflagsapi.com/png/" + userDetails?.location,
    avatar: userAvatar?.avatar || "/assets/images/unknown.jpeg",
    fullName :  userAvatar?.fullName || "Loading...",
    profession : userAvatar?.profession || " ",
    age : userAvatar?.age || " ",
    isVerified : userDetails?.isVerified || null,
    location : userDetails?.location ?? " ",
    })

  },[userDetails, userAvatar])
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        userPicture={userPicture}
        setUserPicture={setUserPicture}
      />
        <SingleUser
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
          userId={userId}
          setUserId={setUserId}
        />
      <ToastContainer />
    </main>
  );
};

export default UserMainContainer;
