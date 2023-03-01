import React from "react";

const SingleRoomBreadCrumb = () => {
  return (
    <div className='row'>
      <div className='col-12 mt-5 mb-3'>
        <ul className='myBreadcrumb p-0'>
          <li>
            <a href='#' className='d-flex align-items-center'>
              <i className='fa fa-home text-darkGrey'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                Home
              </span>
            </a>
          </li>
          <li className=''>
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                User management
              </span>
            </a>
          </li>
          <li className='active'>
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Beautiful women lounge
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleRoomBreadCrumb;
