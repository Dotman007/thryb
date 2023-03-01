import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import PlansMainContainer from "./PlansMainContainer";
import { useNavigate } from "react-router-dom";

const Plans = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, userPicture,
  setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [plansPage, setPlansPage] = useState("mgt");
  const [planInfo, setPlanInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Plans Management";
    setPage("plans");
  });
  useEffect(() => {
    setPlansPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Plans')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Plans') &&  <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <PlansMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
          planInfo={planInfo}
          setPlanInfo={setPlanInfo}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Plans;
