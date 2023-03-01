import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import RolesMainContainer from "./RolesMainContainer";
import { useNavigate } from "react-router-dom";

const Roles = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, userPicture,
  setUserPicture }) => {
  const [rolesPage, setRolesPage] = useState("mgt");
  const [showBtn, setShowBtn] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Role Management";
    setPage("roles");
  });
  useEffect(() => {
    setRolesPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Roles')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Roles') &&<>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <RolesMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Roles;
