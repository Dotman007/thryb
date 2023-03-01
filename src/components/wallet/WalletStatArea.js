import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
import { useEffect } from "react";
import TransactionCard from "./TransactionCard";
const WalletStatArea = () => {
  const navigate = useNavigate();
  const [inflows, setInflows] = useState("");
  const [outflows, setOutflows] = useState("");
  const [allTransactions, setAllTransactions] = useState("");
  const [usersNumber, setUsersNumber] = useState("...");
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  useEffect(() => {
    const fetchAllTransactionsCount = async () => {
      try {
        const response = await api.get("/AllTranasctionsCount");
        setAllTransactions(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTransactionsCount();
  });
  useEffect(() => {
    const fetchAllTransactionInflows = async () => {
      try {
        const response = await api.get("/AllTranasctionInflows");
        setInflows(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchAllTransactionInflows();
  });
  useEffect(() => {
    const fetchAllTransactionOutflows = async () => {
      try {
        const response = await api.get("/AllTranasctionOutflows");
        setOutflows(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchAllTransactionOutflows();
  });
  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await api.post("/AllUsers");
        setUsersNumber(response.data);
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
    <div className='row'>
      {/* <!-- transaction card --> */}
      <TransactionCard />

      {/* <!-- all transactions area --> */}
      <div className='col-xl-2 col-md-6 mb-3 d-flex flex-column flex-grow-1'>
        <div className='custom-card h-100'>
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className=''>
              <h6 className='font-sm2 f-weight-500'>ALL TRANSACTIONS</h6>
              <h6 className='f-weight-600 mb-0 font-sm2'>{formatter.format(allTransactions)}</h6>
            </div>
            <a href='#'>
              <i className='fa fa-angle-right text-dark'></i>
            </a>
          </div>
          <div className='trend-div mt-4'>
            <img
              src='./assets/images/AllUsersChartImg.png'
              className='img-fluid'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* <!-- all inflows area --> */}
      <div className='col-xl-2 col-md-6 mb-3 d-flex flex-column flex-grow-1'>
        <div className='custom-card h-100'>
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className=''>
              <h6 className='font-sm2 f-weight-500'>ALL INFLOWS</h6>
              <h6 className='f-weight-600 mb-0 font-sm2 text-success'>
                +{inflows}
              </h6>
            </div>
            <a href='#'>
              <i className='fa fa-angle-right text-dark'></i>
            </a>
          </div>
          <div className='trend-div mt-4'>
            <img
              src='./assets/images/allTalkChartImg.png'
              className='img-fluid'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* <!-- all outflows area --> */}
      <div className='col-xl-2 col-md-6 mb-3 d-flex flex-column flex-grow-1'>
        <div className='custom-card h-100'>
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className=''>
              <h6 className='font-sm2 f-weight-500'>ALL OUTFLOWS</h6>
              <h6 className='f-weight-600 mb-0 font-sm2 text-danger'>
                -{outflows}
              </h6>
            </div>
            <a href='#'>
              <i className='fa fa-angle-right text-dark'></i>
            </a>
          </div>
          <div className='trend-div mt-4'>
            <img
              src='./assets/images/allRoomsChartImg.png'
              className='img-fluid'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletStatArea;
