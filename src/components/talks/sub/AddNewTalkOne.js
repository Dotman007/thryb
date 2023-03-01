import React from "react";
import { useNavigate } from "react-router-dom";

const AddNewTalkOne = ({
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
              <div className='circle purple d-flex justify-content-center align-item-center'>
                <span className='text-white'>1</span>
              </div>
              <h6 className='mt-2 ml-2'>Basic Information</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setTalksPage("addnew-2")}
              >
                <span>2</span>
              </div>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setTalksPage("addnew-3")}
              >
                <span>3</span>
              </div>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setTalksPage("addnew-4")}
              >
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='custom-card col-md-6 ml-3'>
            <form className='add-user-form'>
              <div className='mb-5 ml-4 mt-3'>
                <h4 className='mb-2 f-weight-800'>Basic Info</h4>
              </div>
              <div className='form-group position-relative mb-4 pl-3 pr-3'>
                <label htmlFor='talkTitle'>Talk Title</label>
                <input
                  className='form_input_fields'
                  type='text'
                  name='talkTitle'
                  onChange={(e) => setTalkTitle(e.currentTarget.value)}
                  value={talkTitle}
                />
              </div>
              <div className='form-group position-relative mb-4 pl-3 pr-3'>
                <label htmlFor='talk'></label>
                <textarea
                  className='form_textarea_fields pl-4 pt-3 w-100'
                  placeholder='Talk description'
                  name='talk'
                  onChange={(e) => setTalkDescription(e.currentTarget.value)}
                  value={talkDescription}
                ></textarea>
              </div>
              <div className='form-group position-relative mb-4 pl-3 pr-3'>
                <label htmlFor='date'></label>
                <input
                  className='form_input_fields pr-3'
                  type='datetime-local'
                  name='date'
                  onChange={(e) => setTalkDate(e.currentTarget.value)}
                  value={talkDate}
                />
              </div>
              <div className='form-group position-relative mb-4 pl-3 pr-3'>
                <label htmlFor='privacy'>Privacy</label>
                <select
                  className='form_input_fields bg-transparent'
                  type='select'
                  name='privacy'
                  onChange={(e) => {
                    setTalkPrivacy(e.currentTarget.value);
                  }}
                  value={talkPrivacy}
                >
                  <option value='open'>Open</option>
                  <option value='closed'>Closed</option>
                </select>
                <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
              </div>
              <div
                className='form-group mt-4'
                onClick={() => {
                  setTalksPage("addnew-2");
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

export default AddNewTalkOne;
