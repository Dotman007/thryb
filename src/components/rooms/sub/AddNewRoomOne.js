import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Compressor from "compressorjs";

const AddNewRoomOne = ({
  page,
  setPage,
  roomsPage,
  setRoomsPage,
  roomBanner,
  setRoomBanner,
  roomDescription,
  setRoomDescription,
  roomPrivacy,
  setRoomPrivacy,
  roomDate,
  setRoomDate,
  roomName,
  setRoomName,
}) => {
  const navigate = useNavigate();
  const [compressedFile, setCompressedFile] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(compressedResult);
        handleConversion();
        return compressedResult;
      },
    });
  };

  const handleConversion = () => {
    var file = compressedFile;
    var reader = new FileReader();
    reader.onloadend = function () {
      setRoomBanner(reader.result);
    };
    reader.readAsDataURL(file);
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
                <li className='mr-2' onClick={() => setRoomsPage("mgt")}>
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
              <h5>Create a New Thrybe Room</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div className='circle purple d-flex justify-content-center align-item-center'>
                <span className='text-white'>1</span>
              </div>
              <h6 className='mt-2 ml-2'>Seeker's Details</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setRoomsPage("addnew-2");
                }}
              >
                <span>2</span>
              </div>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setRoomsPage("addnew-3");
                }}
              >
                <span>3</span>
              </div>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setRoomsPage("addnew-4");
                }}
              >
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-md-8'>
            <div className='custom-card mb-3'>
              <form className='add-user-form'>
                <div className='form-group mb-4 group-banner'>
                  <input
                    type='file'
                    name=''
                    id=''
                    accept='image/*'
                    className='room-image-input'
                    onChange={(e) => {
                      setRoomBanner(e.target.files[0]);
                      handleCompressedUpload(e);
                    }}
                  />
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmlFor='roomName'>Room Name </label>
                  <input
                    className='form_input_fields'
                    type='text'
                    value={roomName}
                    onChange={(e) => {
                      setRoomName(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form_textarea_fields ml-3'
                    style={{ width: "91%" }}
                    placeholder='Room Description'
                    value={roomDescription}
                    onChange={(e) => {
                      setRoomDescription(e.currentTarget.value);
                    }}
                  ></textarea>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmlFor='roomPrivacy'>Room Privacy</label>
                  <select
                    className='form_input_fields bg-transparent'
                    type='select'
                    onChange={(e) => setRoomPrivacy(e.currentTarget.value)}
                  >
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                  </select>
                  <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmlFor='date'></label>
                  <input
                    className='form_input_fields pr-3'
                    type='datetime-local'
                    value={roomDate}
                    onChange={(e) => {
                      setRoomDate(e.currentTarget.value);
                    }}
                  />
                </div>
                <div
                  className='form-group mt-4'
                  onClick={(e) => {
                    e.preventDefault();
                    setRoomsPage("addnew-2");
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddNewRoomOne;
