import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionsBreadCrumb = ({
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
            className=''
            onClick={(e) => {
              e.preventDefault();
              setWalletPage("mgt");
            }}
          >
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Wallet management
              </span>
            </a>
          </li>
          <li className='active'>
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Payments & Transactions
              </span>
            </a>
          </li>
        </ul>
        <div className='mt-4 d-flex justify-content-between align-items-center'>
          {walletPage == "transactions-list" && (
            <h5>Payments & Transactions</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsBreadCrumb;
