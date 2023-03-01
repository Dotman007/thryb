import React, { useState, useEffect } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import FormBottom from "./FormBottom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/base";

const Form = ({
  page,
  setPage,
  showModal,
  setShowModal,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  setShowLoader,
  permissions,
  setPermissions
}) => {
  const navigate = useNavigate();
  let myArray = [];
  let img = "";
  let token = "";

  const fetchUser = async () => {
    try {
      const response = await api.post("/LoginUser", {
        userName: email,
        password: password,
      });
      if (response.data.jwtToken) {
        myArray = response.data.userPermission.map((i) => i.pageName);
        setPermissions(myArray)
        myArray.toString();
        img = response.data.picture;
        token = response.data.jwtToken;
        sessionStorage.setItem("pages", myArray);
        sessionStorage.setItem("img", img);
        sessionStorage.setItem("token", token);
        setPassword("");
        navigate("/dashboard");
      } else {
        toast.error("incorrect login details");
        setEmail("");
        setPassword("");
        setShowLoader(false);
      }
    } catch (err) {
      console.log(err);
      setShowLoader(false);
      toast.error("an error occurred");
    }
  };



  function loginFunction() {
    if (password != "" && email != "") {
      fetchUser();
      setShowLoader(true);
    }
  }
  

  return (
    <div className='login-form'>
      <form action=''>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button
          page={page}
          setPage={setPage}
          showModal={showModal}
          setShowModal={setShowModal}
          loginFunction={loginFunction}
        />
        <FormBottom
          remember={remember}
          setRemember={setRemember}
          page={page}
          setPage={setPage}
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
