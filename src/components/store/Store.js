import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../dashboard/sidenav/SideNav";
import StoreMainContainer from "./StoreMainContainer";

const Store = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, userPicture, setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [storePage, setStorePage] = useState("mgt");
  const [giftId, setGiftId] = useState("");
  const navigate= useNavigate();
  useEffect(() => {
    document.title = "Store Management";
    setPage("store");
  });
  useEffect(() => {
    setStorePage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Store')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
    {permissions.includes('Store') && <>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <StoreMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        storePage={storePage}
        setStorePage={setStorePage}
        giftId={giftId}
        setGiftId={setGiftId}
        userPicture={userPicture}
        setUserPicture={setUserPicture}
      />
      </>}
    </>
  );
};

export default Store;
