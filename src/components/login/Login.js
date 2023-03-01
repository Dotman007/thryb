import React, { useState } from "react";
import { useEffect } from "react";
import LoginContainer from "./LoginContainer";
import Modal from "./Modal/Modal";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
const Login = ({
  page,
  setPage,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  setUserDetails,
  permissions,
  setPermissions
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setPage("login");
    document.title = "Thrybe || Login";
  });
  // useEffect(() => {
  //   if (
  //    permissions.length > 0
  //   ) {
  //     setPage("dashboard");
  //     navigate("/dashboard");
  //   }
  // }, []);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      navigate("/dashboard");
    }
  })

  return (
    <>
      {<div className='login_wrapper position-relative'>
        <div className={`container ${showLoader ? "not-show" : "show"}`}>
          <LoginContainer
            page={page}
            setPage={setPage}
            showModal={showModal}
            setShowModal={setShowModal}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            remember={remember}
            setRemember={setRemember}
            setUserDetails={setUserDetails}
            setShowLoader={setShowLoader}
            permissions={permissions}
            setPermissions={setPermissions}
          />
        </div>
        <div className={`${showLoader ? "show" : "not-show"}`}>
          <Loader />
        </div>
      </div>}
    </>
  );
};

export default Login;
