import React, { useEffect,useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import { useNavigate } from "react-router-dom";
import SettingsMainContainer from "./SettingsMainContainer";

const Settings = ({ page, setPage, showNav, setShowNav, setPermissions, permissions, userPicture,setUserPicture }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Settings";
    setPage("settings");
  });
  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Settings')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })
  return (
    <>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <SettingsMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav} 
        setShowNav={setShowNav}
        userPicture={userPicture}
        setUserPicture={setUserPicture}
      />
    </>
  );
};

export default Settings;
