import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddNewSeekThree = ({
  page,
  setPage,
  seeksPage,
  setSeeksPage,
  seekerKeyInfo,
  interestedPersonKeyInfo,
  aboutSeeker,
}) => {
  const navigate = useNavigate();
  const seekerInfo = seekerKeyInfo.map((item) => item.value);
  const interestedPersonInfo = interestedPersonKeyInfo.map(
    (item) => item.value
  );
  const [showSpinner, setShowSpinner] = useState(false);
  const token = sessionStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    try {
      if (
        seekerInfo.length > 0 &&
        interestedPersonInfo.length > 0 &&
        aboutSeeker
      ) {
        let body = {
          postAs: "Anonymous",
          aboutMe: aboutSeeker,
          whoAreYouInterestedIn: interestedPersonInfo,
          aboutTheSeeker: seekerInfo,
        };
        body = JSON.stringify(body);
        let result = await fetch(
          "https://thrybe.azurewebsites.net/api/BackofficeUser/AddSeek",
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
        setSeeksPage("mgt");
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
                  onClick={(e) => {
                    setPage("login");
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li className='mr-2' onClick={() => setSeeksPage("mgt")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Seek
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
          <div className='col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div
                className='circle purple d-flex justify-content-center align-items-center'
                onClick={() => setSeeksPage("addnew-1")}
              >
                <i className='fa fa-check text-white'></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-items-center ml-2'
                onClick={() => setSeeksPage("addnew-2")}
              >
                <i className='fa fa-check text-white'></i>
              </div>
              <div className='circle purple d-flex justify-content-center align-item-center ml-2'>
                <span>3</span>
              </div>
              <h6 className='mt-2 ml-2'>Preview</h6>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-md-8'>
            <div className='custom-card'>
              <form>
                <div className='px-4'>
                  <div>
                    <h6 className='f-weight-600'>About Seeker</h6>
                    <p className='font-sm'>{aboutSeeker}</p>
                    <hr />
                    <div className='px-2'>
                      <ul style={{ listStyleType: "none" }}>
                        {seekerKeyInfo.map((item, index) => (
                          <li key={index}>
                            <span className='font-sm2 f-weight-600'>
                              {index + 1}. &nbsp;&nbsp;Special Feature
                            </span>
                            <p className='font-sm'>{item?.value ?? ""}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <h6 className='f-weight-600'>Interested Person must</h6>
                    <p className='font-sm'>
                      Mauris convallis, leo eget dignissim semper, orci ipsum
                      maximus dolor.
                    </p>
                    <hr />
                    <div className='px-2'>
                      <ul style={{ listStyleType: "none" }}>
                        {interestedPersonKeyInfo.map((item, index) => (
                          <li key={index}>
                            <span className='font-sm2 f-weight-600'>
                              {index + 1}. &nbsp;&nbsp;Special Feature
                            </span>
                            <p className='font-sm'>{item?.value ?? ""}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {!showSpinner && (
                    <div className='form-group mt-4 px-3'>
                      <label htmlFor='submit'></label>
                      <input
                        type='submit'
                        className='btn btn-continue'
                        value='Submit'
                        onClick={(e) => {
                          if (
                            seekerInfo.length > 0 &&
                            interestedPersonInfo.length > 0 &&
                            aboutSeeker
                          )
                            handleSubmit(e);
                          else {
                            toast.error("All fields are required!");
                          }
                        }}
                      />
                    </div>
                  )}
                  {showSpinner && <div className='spinner'></div>}
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSeekThree;
