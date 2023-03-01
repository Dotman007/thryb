import React from "react";
import { useRef } from "react";
import api from "../api/base";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AccountSetting = ({userPicture,setUserPicture}) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const token = sessionStorage.getItem("token");
  const img = sessionStorage.getItem("img");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileInput?.size > 10000) {
      setShowSpinner(false);
      setFileInput("");
      toast.error("Image too large!");
    }
    try {
      if (
        fileInput.size <= 10000 &&
        fileInput?.type?.includes("image") 
      ) {
        setShowSpinner(true);

        var reader = new FileReader();
        reader.onloadend = async () => {
          reader = reader.result;
          let body = {
            image: reader,
            fullName: fullName || '',
            description: description || '',
          };
          
          body = JSON.stringify(body);
          let result = await fetch(
            "https://thrybe.azurewebsites.net/api/BackofficeUser/AccountSetting",
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
          setUserPicture(reader)
          sessionStorage.setItem('img',reader);
          // toast.info('Please login to see changes');
          setShowSpinner(false);
          setFullName('');
          setDescription('');
        };
        reader.readAsDataURL(fileInput);
      }else{
        // toast.error('All fields are required!');
        setShowSpinner(false);
      }
    } catch (error) {
      toast.error("An Error Occured!");
      setShowSpinner(false);
    }
  };
  return (
    <div className='custom-card mb-3'>
      <form className='add-user-form'>
        <h6 className='mb-3'>Account Settings</h6>
        <div className='form-group d-flex align-items-center mb-3'>
          <img
            src={`${img}`}
            alt='settings-avatar'
            className='mr-1 settings-img'
          />
          <div className='d-flex ml-4'>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                setShowForm(!showForm);
              }}
            >
              <img
                src='./assets/images/Edit.svg'
                className='img-fluid'
                alt=''
              />
            </a>
            <a href='#' className='ml-4'>
              <img
                src='./assets/images/delete-icon-black.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
        </div>
        {showForm && (
          <input
            type='file'
            className='image-input'
            onChange={(event) => {
              setFileInput(event.target.files[0]);
            }}
          />
        )}
        <div className='form-group position-relative mb-3 px-3'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            className='form_input_fields'
            type='text'
            name='fullName'
            value={fullName}
            onChange={(e) => {
              setFullName(e.currentTarget.value);
            }}
          />
        </div>
        <div className='form-group position-relative px-3 mb-2'>
          <textarea
            className='form_textarea_fields pt-3 w-100'
            placeholder='Tell us description yourself'
            name='userBio'
            value={description}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className='form-group m-1 px-3'>
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default AccountSetting;
