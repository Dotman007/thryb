import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../dashboard/sidenav/SideNav";
import SupportMainContainer from "./SupportMainContainer";

const Support = ({ page, setPage, showNav, setShowNav,permissions, setPermissions,userPicture,
  setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [supportPage, setSupportPage] = useState("mgt");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Support Management";
    setPage("support");
  });
  useEffect(() => {
    setSupportPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Support')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Support') &&<>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <SupportMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Support;
