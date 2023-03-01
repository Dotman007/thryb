import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SingleSupport = ({supportPage, setSupportPage, item, setSingleSupport}) => {
  const navigate = useNavigate();
  const [reply, setReply] = useState("off");
  let messageType = item?.messageType || "unknown";
  let composer = item.composer || "unknown";
  let date = item.date || "unknown";
  let subject = item.subject || "unknown";
  let messageBody = item.messageBody || "unknown";
  let status = item.status;
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-2'>
          <div className='col-12 mt-5 mb-3'>
            <ul className='myBreadcrumb p-0'>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <i className='fa fa-home text-darkGrey'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                    Home
                  </span>
                </a>
              </li>
              <li
                className='active'
                onClick={(e) => {
                  e.preventDefault();
                  setSupportPage('mgt');
                  navigate("/support");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Support
                  </span>
                </a>
              </li>
            </ul>
            <div className='mt-4 d-flex align-items-center'>
              <h5>
                Neque Porro quisquam est qui dolorem ipsum quia dolor sit
                <br />
                amet, cosectetur, adipiscii velit.
              </h5>
            </div>
          </div>
        </div>

        <div className='row flex-column mt-2 mb-3'>
          <div className='col-xl-8 col-lg-10'>
            <div className='d-flex justify-content-between align-items-center px-3'>
              <div
                className='d-flex align-items-center'
                style={{ gap: "25px" }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  className='img-fluid'
                  src='./assets/images/back-arrow-icon.svg'
                  alt=''
                />
                <span>Filter By</span>
                <i className='fa fa-trash'></i>
                <img
                  className='img-fluid'
                  src='./assets/images/arrow-squareup.svg'
                  style={{ width: "20px", height: "20px" }}
                  alt='arrow-squareup'
                />
                {reply == "off" && (
                  <>
                    <img
                      className='img-fluid'
                      src='./assets/images/check-icon.svg'
                      style={{ width: "20px", height: "20px" }}
                      alt='check-icon'
                    />
                    <img
                      className='img-fluid'
                      src='./assets/images/arrow-curveback.svg'
                      style={{ width: "20px", height: "20px" }}
                      alt='arrow-curveback'
                      onClick={() => setReply("on")}
                    />
                  </>
                )}
              </div>
              {/* <div
                className='d-flex align-items-center'
                style={{ gap: "20px" }}
              >
                <img
                  className='img-fluid'
                  src='./assets/images/back-icon.svg'
                  style={{ width: "20px", height: "20px" }}
                  alt='back-icon'
                />
                <span>1 of 36</span>
                <img
                  className='img-fluid'
                  src='./assets/images/front-icon.svg'
                  style={{ width: "20px", height: "13px" }}
                  alt='front-icon'
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='col-xl-8 col-lg-10 p-2'>
            <div className='custom-card' style={{ backgroundColor: "#f7f5fa" }}>
              <div className='d-flex justify-content-between mb-3 pr-3'>
                <div className='d-flex'>
                  <img
                    src='./assets/images/members-avatar1.svg'
                    className='img-fluid'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column pl-2'>
                    <span className='f-weight-600 font-sm2'>From {composer}</span>
                    <span className='font-sm'>Support</span>
                  </div>
                </div>
                <div>
                  <img src='./assets/images/calender-icon.svg' alt='calendar' />
                  <span className='f-weight-600 font-sm2 ml-2'>
                    {date}
                  </span>
                </div>
              </div>
              <div
                className='p-4 mb-3'
                style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
              >
                <p className='font-sm2'>
                  {messageBody}
                </p>
                
              </div>
              {reply == "on" && (
                <div
                  className='p-3'
                  style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
                >
                  <form>
                    <div className='form-group d-flex flex-column mt-2'>
                      <label for='reply' className='font-sm2 mb-2'>
                        <img
                          src='./assets/images/arrow-curveback.svg'
                          alt='arrow-curveback'
                          className='img-fluid'
                          onClick={() => setReply("off")}
                        />
                        <span className='ml-2'> Replying Ret SILO </span>
                      </label>
                      <textarea
                        name='reply'
                        className='p-2'
                        style={{ borderRadius: "15px", height: "100px" }}
                        placeholder='Enter Your Reply'
                      ></textarea>
                    </div>
                    <div className='form-group p-2 d-flex justify-content-between'>
                      <div className='d-flex' style={{ gap: "10px" }}>
                        <button
                          className='btn btn-md'
                          style={{
                            border: "1px solid",
                            backgroundColor: "#842a83",
                            color: "#ffffff",
                          }}
                        >
                          Send
                        </button>
                        <button
                          className='btn-sm'
                          style={{
                            border: "1px solid #f2f2f2",
                            backgroundColor: "#ffffff",
                            color: "#ffffff",
                          }}
                        >
                          <img
                            src='./assets/images/file-upload-icon.svg'
                            alt='file-upload-icon'
                            className='img-fluid'
                          />
                        </button>
                        <button
                          className='btn-sm'
                          style={{
                            border: "1px solid #f2f2f2",
                            backgroundColor: "#ffffff",
                            color: "#ffffff",
                          }}
                        >
                          <img
                            src='./assets/images/link-icon.svg'
                            alt='link-icon'
                            className='img-fluid'
                          />
                        </button>
                      </div>
                      <div onClick={() => setReply("off")}>
                        <i className='fa fa-trash'></i>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSupport;
