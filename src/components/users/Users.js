import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import UsersMainContainer from "./UsersMainContainer";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
const Users = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, usersPage, setUsersPage, userPicture, setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  // const [usersPage, setUsersPage] = useState("mgt");
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [usersList, setUsersList] = useState("");
  let [usersNumber, setUsersNumber] = useState("...");
  let [showResult, setShowResult] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [filter, setFilter] = useState(true);
  const [userId, setUserId] = useState("");
  const [userAvatarName, setUserAvatarName] = useState("");
  const [singleUserInfo, setSingleUserInfo] = useState("");
  useEffect(() => {
    document.title = "Users Management";
    setPage("users");
  });
  useEffect(() => {
    setUsersPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);
  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await api.post("/AllUsers");
        setUsersNumber(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchUsersNumber();
  },[page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Users')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Users') && <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <UsersMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          usersNumber={usersNumber}
          setUsersList={setUsersList}
          showSpinner={showSpinner}
          filter={filter}
          setFilter={setFilter}
          setShowSpinner={setShowSpinner}
          userId={userId}
          setUserId={setUserId}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Users;
