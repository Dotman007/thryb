import React from "react";
import { useRef } from "react";
import api from "../api/base";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import baseUrl from '../api/baseUrl'


const PasswordSetting = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const img = sessionStorage.getItem("img");
  const [showSpinner, setShowSpinner] = useState(false);
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password) {
        let body = {
          password,
        };
        setShowSpinner(true);

        body = JSON.stringify(body);
        let result = await fetch(
          `${baseUrl()}/PasswordSetting`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: body,
          }
        );
        result = await result;
        toast.success("Success!");
        setShowSpinner(false);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }else{
        toast.error('All fields are required!')
      }
    } catch (error) {
      toast.error("An Error Occurred!");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("img");
      sessionStorage.removeItem("pages");
      navigate("/login");
    }
  };

  return (
    <div className='custom-card mb-3'>
      <form>
        <h6>Password Management</h6>
        <div className='form-group px-3 position-relative mt-3 mb-1'>
          <input
            type={`${!show ? "password" : "text"}`}
            className='form_input_fields'
            placeholder='*****'
            id='login-password'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <div className='position-absolute d-flex input-decor align-items-center'>
            <img
              src='./assets/images/Lock-black-icon.svg'
              className='img-fluid'
              alt='mail'
            />
            <div className='pl-4'>
              <img
                src='./assets/images/black-line-vert.svg'
                className='img-fluid'
                alt='vert-line'
              />
            </div>
          </div>
          <a
            href='#'
            id='passwordVisibility'
            className='position-absolute input-decor2'
          >
            <img
              src='./assets/images/View-password-icon.svg'
              className='img-fluid'
              alt='view-passowrd'
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
            />
          </a>
        </div>
        <div className='form-group px-3'>
          {!showSpinner && <label htmlFor='Modify'></label>}
          {!showSpinner && (
            <input
              type='submit'
              className='btn btn-continue'
              value='Modify'
              onClick={(e) => handleSubmit(e)}
            />
          )}
          {showSpinner && <div className='spinner'></div>}
        </div>
      </form>
    </div>
  );
};

export default PasswordSetting;
