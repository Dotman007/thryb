import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNewSeekInput from "./singleseek/AddNewSeekInput";

const AddNewSeekOne = ({
  page,
  setPage,
  seeksPage,
  setSeeksPage,
  seekerKeyInfoInputs,
  setSeekerKeyInfoInputs,
  seekerKeyInfo,
  setSeekerKeyInfo,
  aboutSeeker,
  setAboutSeeker,
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
                <li
                  className='mr-2'
                  onClick={() => {
                    setPage("seeks");
                    setSeeksPage("mgt");
                    navigate("/seeks");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Seek Management
                  </span>
                </li>
                <li className='mr-2' onClick={() => setSeeksPage("addnew-1")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Seek</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div
              className='d-flex align-item-center ml-2 basic-info-inner'
              onClick={() => setSeeksPage("addnew-1")}
            >
              <div className='circle purple d-flex justify-content-center align-item-center'>
                <span className='text-white'>1</span>
              </div>
              <h6 className='mt-2 ml-2'>Seeker’s Details</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setSeeksPage("addnew-2")}
              >
                <span>2</span>
              </div>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setSeeksPage("addnew-3")}
              >
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-md-8'>
            <div className='custom-card mb-3'>
              <form className='add-user-form'>
                <h5 htmlFor='userBio' className='mb-3 f-weight-600 px-3 mt-3'>
                  Details about the Seeker
                </h5>

                <div className='mt-4 poster-div d-flex align-items-center position-relative mb-4'>
                  <h6 className='mb-0'>Post as</h6>
                  <div
                    className='position-absolute'
                    style={{ right: "-18px", top: "0" }}
                  >
                    <div
                      className='form-group position-relative mb-4 pl-3 pr-3'
                      style={{ minWidth: "200px" }}
                    >
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='gender'
                        style={{
                          border: "none",
                          borderRadius: "20px",
                          outline: "none",
                        }}
                      >
                        <option>Anonymous</option>
                        <option>Select a user</option>
                      </select>
                      <i
                        className='fa fa-angle-down position-absolute form-select-dropdown'
                        style={{ top: "23px" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className='form-group position-relative mb-4 px-3'>
                  <label htmlFor='firstName'>About Me</label>
                  <input
                    className='form_input_fields'
                    type='text'
                    name='firstName'
                    value={aboutSeeker}
                    onChange={(e) => setAboutSeeker(e.target.value)}
                  />
                </div>
                <p className='font-sm mb-5'>
                  Kindly highlight key details about yourself using the box
                  below. e.g: Blood Genotype, Disabilities, special needs etc.
                  (NOTE: You can add as many as possible)
                </p>
                {seekerKeyInfoInputs.map((item, index) => (
                  <AddNewSeekInput
                    key={index}
                    index={index}
                    seekerKeyInfo={seekerKeyInfo}
                    setSeekerKeyInfo={setSeekerKeyInfo}
                  />
                ))}
                <div
                  className='px-3'
                  onClick={(e) => {
                    e.preventDefault();
                    setSeekerKeyInfoInputs([
                      ...seekerKeyInfoInputs,
                      seekerKeyInfoInputs.length + 1,
                    ]);
                  }}
                >
                  <button className='btn btn-add-more'>Add more</button>
                </div>
                <div
                  className='form-group mt-4 px-3'
                  onClick={(e) => {
                    e.preventDefault();
                    setSeeksPage("addnew-2");
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
    </div>
  );
};

export default AddNewSeekOne;
