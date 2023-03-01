import React from "react";
import { useNavigate } from "react-router-dom";
import Speakers from "./Speakers";
import { fetchDataWithAxios } from "../../../config/fetchDataWithAxios";
import { useState, useEffect } from "react";
import UsersList from "../../users/UsersList";

const AddNewTalkTwo = ({
  page,
  setPage,
  talksPage,
  setTalksPage,
  usersList,
  setUsersList,
  talksSelectedSpeakers,
  setTalksSelectedSpeakers,
  speakerSearch,
  setSpeakerSearch,
}) => {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={(e) => {
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
          <div className='col-md-6 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div
                className='circle purple d-flex justify-content-center align-item-center'
                onClick={() => {
                  setTalksPage("addnew-1");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2'>
                <span>2</span>
              </div>
              <h6 className='mt-2 ml-2'>Invite Speakers</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setTalksPage("addnew-3");
                }}
              >
                <span>3</span>
              </div>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setTalksPage("addnew-4");
                }}
              >
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='custom-card col-md-6 ml-3'>
            <form className='add-user-form'>
              <div className='search-user position-relative w-100 mb-4 mt-2'>
                <input
                  type='text'
                  className='search-user-field w-100'
                  placeholder='Search'
                  value={speakerSearch}
                  onChange={(e) => setSpeakerSearch(e.currentTarget.value)}
                />
                <button
                  className='btn position-absolute'
                  style={{ right: "2px", top: "0" }}
                >
                  <img
                    src='./assets/images/searchIcon.svg'
                    style={{ height: "24px", width: "24px" }}
                    alt=''
                  />
                </button>
              </div>
              <div className='d-flex flex-column'>
                {usersList.length >= 1 &&
                  usersList.map((item, index) => (
                    <Speakers
                      key={index}
                      item={item}
                      usersList={usersList}
                      setUsersList={setUsersList}
                      talksSelectedSpeakers={talksSelectedSpeakers}
                      setTalksSelectedSpeakers={setTalksSelectedSpeakers}
                      speakerSearch={speakerSearch}
                      talksPage={talksPage}
                    />
                  ))}
              </div>

              <div
                className='form-group mt-4'
                onClick={() => {
                  setTalksPage("addnew-3");
                }}
              >
                <label htmlFor='submit'></label>
                <input
                  type='submit'
                  className='btn btn-continue'
                  value='Continue'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTalkTwo;
