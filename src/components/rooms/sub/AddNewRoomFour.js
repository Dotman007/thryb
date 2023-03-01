import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from '../../api/baseUrl'
const AddNewRoomFour = ({
  page,
  setPage,
  roomsPage,
  setRoomsPage,
  roomBanner,
  setRoomBanner,
  roomDescription,
  roomPrivacy,
  roomDate,
  roomName,
  invitedUsers,
  invitedSpeaker,
}) => {
  const navigate = useNavigate();
  let users = invitedUsers.map((item) => item?.id);
  let author = invitedSpeaker[0]?.id;
  const token = sessionStorage.getItem("token");
  let [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (
      typeof roomBanner === "object" &&
      !Array.isArray(roomBanner) &&
      roomBanner !== null
    ) {
      handleConversion();
    }
  });

  const handleConversion = () => {
    var file = roomBanner;
    var reader = new FileReader();
    reader.onloadend = function () {
      setRoomBanner(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        roomDescription &&
        roomDate &&
        typeof roomBanner !== "object" &&
        roomName
      ) {
        let body = {
          banner: roomBanner,
          roomName,
          description: roomDescription,
          privacy: roomPrivacy,
          creatorId: author,
          dateCreated: roomDate,
          memberDtos: users,
        };
        setShowSpinner(true);
        body = JSON.stringify(body);
        let result = await fetch(
          `${baseUrl()}/CreateThrybeRoomFromBackOffice`,
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
        setRoomsPage("mgt");
        toast.success("Success!");
        setShowSpinner(false);
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
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setRoomsPage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Room
                  </span>
                </li>
                <li className='mr-2'>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Room</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2'
                onClick={(e) => {
                  setRoomsPage("addnew-1");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                onClick={(e) => {
                  setRoomsPage("addnew-2");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                onClick={(e) => {
                  setRoomsPage("addnew-2");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div
                className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                onClick={(e) => {
                  setRoomsPage("addnew-4");
                }}
              >
                <span>4</span>
              </div>
              <h6 className='mt-2 ml-2'>Preview</h6>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='custom-card col-xl-5 col-md-8 ml-3'>
            <div className='custom-card'>
              <div className='mb-4'>
                <img
                  src={roomBanner}
                  alt='addroomUpload'
                  className='mb-2 room-banner-preview'
                />
                <h6 className='f-weight-800 mb-4 mt-2'>{roomName}</h6>
              </div>
              <hr className='mb-4' />
              <div className='mt-2 mb-2'>
                <div className='mb-4'>
                  <h5 className='font-sm2 f-weight-800 mt-2'>
                    <u>
                      <strong>Description</strong>
                    </u>
                  </h5>
                  <p className='font-sm'>{roomDescription}</p>
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
                    <li className='font-sm'>
                      4. No abusive word. Be respectful
                    </li>
                  </ol>
                </div>
              </div>
              <hr />
              <div className='mt-4 mb-4'>
                <img src='./assets/images/clock-icon.svg' alt='' />
                <span className='font-sm2 f-weight-800'>{roomDate}</span>
              </div>
              <hr className='mb-4' />
              <div className='d-flex flex-column mt-2 mb-4'>
                <h6 className='f-weight-700'>Room Author</h6>
                <div>
                  <img
                    src={invitedSpeaker[0]?.image}
                    alt='author-pic'
                    style={{
                      width: "50px",
                      marginRight: "-10px",
                      marginLeft: "-13px",
                    }}
                    className='add-author'
                  />
                  <span>{invitedSpeaker[0]?.name}</span>
                </div>
              </div>
              <div className='mt-3'>
                <h6 className='f-weight-700 mb-3'>Selected Users</h6>
                <div className='d-flex align-items-center pl-3'>
                  <div>
                    {invitedUsers.length >= 1 &&
                      invitedUsers
                        .slice(0, 4)
                        .map((item, index) => (
                          <img
                            src={item.image}
                            alt='membericon'
                            style={{ marginLeft: "-20px" }}
                            className='add-user-img-rooms'
                            key={index}
                          />
                        ))}
                  </div>
                  {invitedUsers.length > 4 && (
                    <span className='font-xs f-weight-700'>
                      {invitedUsers.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-1'>
              {!showSpinner && <label htmlFor='Modify'></label>}
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
      </div>
    </div>
  );
};

export default AddNewRoomFour;
