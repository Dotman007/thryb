import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from '../../api/baseUrl'
const AddNewTalkFour = ({
  page,
  setPage,
  talksPage,
  setTalksPage,
  talkDate,
  setTalkDate,
  talkDescription,
  setTalkDescription,
  talkTitle,
  setTalkTitle,
  talkPrivacy,
  setTalkPrivacy,
  selectedUsers,
  talksSelectedSpeakers,
}) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [showSpinner, setShowSpinner] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        talkTitle &&
        talkDescription &&
        talkDate &&
        talkPrivacy &&
        talksSelectedSpeakers &&
        selectedUsers
      ) {
        setShowSpinner(true);
        let body = {
          talkTitle,
          description: talkDescription,
          eventDate: talkDate,
          privacy: talkPrivacy,
          speaker: talksSelectedSpeakers,
          talkUsers: selectedUsers,
        };
        console.log(body);
        body = JSON.stringify(body);
        let result = await fetch(
          `${baseUrl()}/AddThrybeTalk`,
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
        setTalksPage("talks");
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
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={() => {
                    setPage("login");
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li className='mr-2' onClick={() => setTalksPage("talks")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Talk
                  </span>
                </li>
                <li className='mr-2' onClick={() => setTalksPage("addnew-1")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Talk</h5>
            </div>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col-md-6 d-flex align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2'
                onClick={() => {
                  setTalksPage("addnew-1");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                onClick={() => {
                  setTalksPage("addnew-2");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                onClick={() => {
                  setTalksPage("addnew-3");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'>
                <span>4</span>
              </div>
              <h6 className='mt-2 ml-2'>Preview</h6>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='custom-card col-md-6 ml-3'>
            <div className='mt-3 mb-4'>
              <h4 className='f-weight-800 mb-2'>{talkTitle}</h4>
            </div>
            <hr />
            <div className='mt-2 mb-2'>
              <div className='mb-4'>
                <h5 className='font-sm2 f-weight-800 mt-2'>
                  <u>
                    <strong>Description</strong>
                  </u>
                </h5>
                <p className='font-sm'>{talkDescription}</p>
              </div>
              <div>
                <h6 className='font-sm2 f-weight-600'>
                  <u>Rules</u>
                </h6>
                <ol className='pl-2'>
                  <li className='font-sm'>
                    1. Always Keep quiet when the speaker talk
                  </li>
                  <li className='font-sm'>
                    2. Mute your mic to avert distractions
                  </li>
                  <li className='font-sm'>
                    3. Raise hand when you want to speak
                  </li>
                  <li className='font-sm'>4. No abusive word. Be respectful</li>
                </ol>
              </div>
            </div>
            <hr />
            <div className='mt-2 mb-2'>
              <img src='./assets/images/clock-icon.svg' alt='' />
              <span className='font-sm2 f-weight-800'>{talkDate}</span>
            </div>
            <hr />
            {/* <div className='d-flex mt-2 mb-2'>
              <div className='w-50 m-1 position-relative'>
                <img
                  className='w-100'
                  src='./assets/images/main-profile-pic.svg'
                  alt=''
                />
                <div className='position-absolute w-100 inner-image'>
                  <h6 className='text-white f-weight-600 mb-0 pl-1'>
                    Farouk, 23
                    <img
                      className='pl-1 pb-1'
                      src='./assets/images/verified-icon.svg'
                      alt='verified-icon'
                    />
                  </h6>
                  <span className='text-white font-sm2 f-weight-600 pl-1'>
                    Blogger
                  </span>
                </div>
              </div>
              <div className='w-50 m-1 position-relative'>
                <img
                  className='w-100'
                  src='./assets/images/main-profile-pic.svg'
                  alt=''
                />
                <div className='position-absolute w-100 inner-image'>
                  <h6 className='text-white f-weight-600 mb-0 pl-1'>
                    Noura, 29
                    <img
                      className='pl-1 pb-1'
                      src='./assets/images/verified-icon.svg'
                      alt='verified-icon'
                    />
                  </h6>
                  <span className='text-white pl-1 font-sm2 f-weight-600'>
                    Journalist
                  </span>
                </div>
              </div>
            </div> */}
            <div className='form-group mt-4'>
              {!showSpinner && <label htmlFor='Submit'></label>}
              {!showSpinner && (
                <input
                  type='submit'
                  className='btn btn-continue'
                  value='Submit'
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                />
              )}
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddNewTalkFour;
