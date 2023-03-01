import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import RoomsMainContainer from "./RoomsMainContainer";
import { useNavigate } from "react-router-dom";

const Rooms = ({ page, setPage, showNav, setShowNav,permissions, setPermissions,userPicture,setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [roomsPage, setRoomsPage] = useState("mgt");
  const [singleRoomInfo, setSingleRoomInfo] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Rooms Management";
    setPage("rooms");
  });
  useEffect(() => {
    setRoomsPage("mgt");
  }, [page]);

  useEffect(() => {
    setShowNav(false);
  }, [page]);
  
  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Rooms')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Rooms') &&<>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <RoomsMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          singleRoomInfo={singleRoomInfo}
          setSingleRoomInfo={setSingleRoomInfo}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Rooms;
