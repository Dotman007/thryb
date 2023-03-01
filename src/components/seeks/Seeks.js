import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import SeeksMainContainer from "./SeeksMainContainer";
import { useNavigate } from "react-router-dom";

const Seeks = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, userPicture, setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [seeksPage, setSeeksPage] = useState("mgt");
  const [seekInfo, setSeekInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Seeks";
    setPage("seeks");
  });
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Seeks')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })
  
  return (
    <>
      {permissions.includes('Seeks') && <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <SeeksMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seekInfo={seekInfo}
          setSeekInfo={setSeekInfo}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Seeks;
