import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsBreadCrumb = ({ page, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className='row mb-3'>
      <div className='col-12 mt-5'>
        <div className='d-flex align-items-center'>
          <ul className='d-flex'>
            <li
              className='mr-2'
              onClick={() => {
                navigate("/");
              }}
            >
              <i className='fa fa-home'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
            </li>
            <li
              className='mr-2'
              onClick={() => {
                navigate("/settings");
              }}
            >
              <i className='fa fa-chevron-right font-xs'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1'>Settings</span>
            </li>
          </ul>
        </div>
        <div className='mt-4 d-flex align-items-center'>
          <h5>Settings</h5>
        </div>
      </div>
    </div>
  );
};

export default SettingsBreadCrumb;
