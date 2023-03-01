import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api/base";
import { useNavigate } from "react-router-dom";
const TransactionCard = () => {
  let [usersNumber, setUsersNumber] = useState(0);
  let [walletsBalance, setWalletsBalance] = useState(0);
  let navigate = useNavigate();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await api.post("/AllUsers");
        setUsersNumber(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsersNumber();
  });
  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await api.get("/GetUsersWalletBalance");
        setWalletsBalance(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchUsersNumber();
  });

  return (
    <div className='col-xl-5 col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='wallet-balance-card mt-2 h-100'>
        <div className='row'>
          <div className='col-6'>
            <div className='d-flex flex-column'>
              <div className='d-flex align-items-center'>
                <i className='fa fa-circle text-grey'></i>&nbsp;&nbsp;
                <span className='text-light font-sm'>ALL USERS</span>
              </div>
              <h4 className='text-light mt-2'>{usersNumber}</h4>
              <p className='text-danger font-sm f-weight-500'>+2.5%</p>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-column align-items-end'>
              <div className='d-flex align-items-center'>
                <span className='text-light font-sm'>WALLET BALANCE</span>
                &nbsp;&nbsp;<i className='fa fa-circle text-dark'></i>
              </div>
              <h4 className='text-light mt-2'>{formatter.format(walletsBalance)}</h4>
              <p className='text-success font-sm f-weight-500'>+2.5%</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-light font-sm2'>My Card</h6>
          <a href='#'>
            <svg
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.1253 4.29486L4.72984 14.6904L1.51571 15.076L1.90141 11.8619L12.2969 1.46643C12.3061 1.46378 12.3158 1.4611 12.3258 1.45839C12.4626 1.42133 12.6605 1.38264 12.8925 1.37944C13.3367 1.37331 13.9278 1.49293 14.5133 2.07843C15.0988 2.66392 15.2184 3.25504 15.2123 3.69925C15.2091 3.93131 15.1704 4.1292 15.1334 4.266C15.1307 4.27601 15.128 4.28563 15.1253 4.29486Z'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
