import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import UserMainContainer from "./UserMainContainer";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/base";
const User = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, setUsersPage, usersPage,userPicture, setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const navigate = useNavigate();
  const [singleUserInfo, setSingleUserInfo] = useState({});
  const {id} = useParams();
  const [userId, setUserId]= useState('');

  useEffect(() => {
    document.title = "User";
    setPage("User");
  });
  useEffect(() => {
    setUsersPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);
  

  useEffect(()=>{
    setUserId(id);
  },[id])

  return (
    <>
      {userId && <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <UserMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
          userId={userId}
          setUserId={setUserId}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default User;
