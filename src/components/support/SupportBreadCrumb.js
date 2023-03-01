import React from "react";
import { useNavigate } from "react-router-dom";

const SupportBreadCrumb = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  setModal,
}) => {
  const navigate = useNavigate();
  return (
    <div className='row'>
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
            onClick={() => {
              setSupportPage("mgt");
            }}
          >
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Support
              </span>
            </a>
          </li>
        </ul>
        <div className='mt-4 d-flex justify-content-between align-items-center'>
          <h5>Support</h5>
          <a
            href='#'
            className={`btn btn-primary ${!showBtn ? "not-show" : ""}`}
            id='AddUser'
            data-toggle='modal'
            data-target='#composeMessage'
            onClick={(e) => {
              e.preventDefault();
              setModal("one");
            }}
          >
            Compose New
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportBreadCrumb;
