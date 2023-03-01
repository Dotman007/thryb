import React from "react";
import { useNavigate } from "react-router-dom";

const WalletBreadCrumb = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const navigate = useNavigate();

  return (
    <div className='row'>
      <div className='col-12 mt-5 mb-3'>
        <ul className='myBreadcrumb p-0'>
          <li
            onClick={(e) => {
              e.preventDefault();
              setPage("login");
              navigate("/");
            }}
          >
            <div
              href='#'
              className='d-flex align-items-center'
              onClick={(e) => {
                e.preventDefault();
                setPage("login");
                navigate("/");
              }}
            >
              <i className='fa fa-home text-darkGrey'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                Home
              </span>
            </div>
          </li>
          <li
            className='active'
            onClick={() => {
              setWalletPage("mgt");
            }}
          >
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Wallet management
              </span>
            </a>
          </li>
        </ul>
        <div className='mt-4 d-flex justify-content-between align-items-center'>
          <h5>Wallet Management</h5>
        </div>
      </div>
    </div>
  );
};

export default WalletBreadCrumb;
