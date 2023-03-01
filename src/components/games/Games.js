import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import GamesMainContainer from "./GamesMainContainer";
import { useNavigate } from "react-router-dom";

const Games = ({ page, setPage, showNav, setShowNav,permissions, setPermissions,userPicture,
  setUserPicture}) => {
  const [showBtn, setShowBtn] = useState(true);
  const [gamesPage, setGamesPage] = useState("mgt");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Thrybe Games - Game List";
    setPage("games");
  });
  useEffect(() => {
    setGamesPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Games')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })
  
  return (
    <>
      {permissions.includes('Games') &&<>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <GamesMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Games;
