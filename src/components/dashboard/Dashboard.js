import React, { Component, useState, useEffect } from "react";
import Main from "./main/Main";
import SideNav from "./sidenav/SideNav";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import { isAuthorized } from "./isAuthorized";
const Dashboard = ({ page, setPage, showNav, setShowNav, permissions, setPermissions, userPicture,setUserPicture }) => {
  const navigate = useNavigate();
  let [pages, setPages] = useState(" ");
  let [userImg, setUserImg] = useState(" ");
  let [token, setToken] = useState(" ");
  const [usersSection, setUsersSection] = useState(false);
  const [giftsSection, setGiftsSection] = useState(false);
  const [talksSection, setTalksSection] = useState(false);
  const [roomsSection, setRoomsSection] = useState(false);
  const [newestUsersSection, setNewestUsersSection] = useState(false);
  const [trendingTalksSection, setTrendingTalksSection] = useState(false);
  const [barChartSection, setBarChartSection] = useState(false);
  const [authorized, setAuthorized]= useState(true);

  useEffect(() => {
    document.title = "Dashboard";
    setPage("dashboard");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  // useEffect(() => {
  //   setUserImg(sessionStorage.getItem("img"));
  //   if (!userImg) {
  //     setPage("login");
  //     navigate("/login");
  //   }
  // },[page]);

  // useEffect(() => {
  //   setToken(sessionStorage.getItem("token"));
  //   if (!token) {
  //     setPage("login");
  //     navigate("/login");
  //   }
  // },[page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Dashboard')){
        setPermissions([]);
        navigate('/login');
      }
    }else{
      navigate('/login')
    }
  })
  // useEffect(()=>{
  //   if (!permissions.includes('Dashboard')){
  //     setPermissions([]);
  //     navigate('/login');
  //   }
  // },[permissions])

  return (
    <>
      {permissions.includes('Dashboard') && <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <Main
          showNav={showNav}
          setShowNav={setShowNav}
          page={page}
          setPage={setPage}
          setTrendingTalksSection={setTrendingTalksSection}
          setNewestUsersSection={setNewestUsersSection}
          setBarChartSection={setBarChartSection}
          setUsersSection={setUsersSection}
          setGiftsSection={setGiftsSection}
          setTalksSection={setTalksSection}
          setRoomsSection={setRoomsSection}
          setPermissions={setPermissions}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Dashboard;
