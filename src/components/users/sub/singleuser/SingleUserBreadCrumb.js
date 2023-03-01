import React from "react";
import { useNavigate } from "react-router-dom";


const SingleUserBreadCrumb = ({page,singleUserInfo,setUsersPage}) => {
  const navigate = useNavigate();
  return (
    <ul className='myBreadcrumb p-0'>
      <li onClick={(e)=>{
        e.preventDefault();
        navigate('/dashboard');
      }}>
        <a href='#' className='d-flex align-items-center'>
          <i className='fa fa-home text-darkGrey'></i>
          <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>Home</span>
        </a>
      </li>
      <li className='' onClick={(e)=>{
        e.preventDefault();
        if (page == 'User'){
          navigate('/users');
        }else{
          setUsersPage('mgt');
        }
      }}>
        <a href='#' className='d-flex align-items-center'>
          <span className='font-xs f-weight-500 mt-1 text-dark'>
            User management
          </span>
        </a>
      </li>
      <li className='active'>
        <a href='#' className='d-flex align-items-center'>
          <span className='font-xs f-weight-500 mt-1 text-dark'>
            {singleUserInfo.fullName}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SingleUserBreadCrumb;
