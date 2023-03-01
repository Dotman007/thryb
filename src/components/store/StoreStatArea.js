import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";

const StoreStatArea = () => {
  const navigate = useNavigate();
  const [allGifts, setAllGifts] = useState("...");
  const [allActiveGifts, setAllActiveGifts] = useState("...");
  const [allInactiveGifts, setAllInactiveGifts] = useState("...");
  const [allPendingGifts, setAllPendingGifts] = useState("...");
  useEffect(() => {
    const fetchGiftsNumber = async () => {
      try {
        const response = await api.post("/AllGifts");
        setAllGifts(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGiftsNumber();
  },[]);
  useEffect(() => {
    const fetchAllActiveGifts = async () => {
      try {
        const response = await api.post("/ActiveGifts");
        setAllActiveGifts(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchAllActiveGifts();
  });
  useEffect(() => {
    const fetchInactiveGifts = async () => {
      try {
        const response = await api.post("/InactiveGifts");
        setAllInactiveGifts(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchInactiveGifts();
  },[]);
  useEffect(() => {
    const fetchPendingGifts = async () => {
      try {
        const response = await api.post("/PendingGifts");
        setAllPendingGifts(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchPendingGifts();
  });
  return (
    <div className='row mt-3'>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/allUsersIcon.svg'
              className='img-fluid'
              alt='User'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ALL GIFTS</h6>
              <h4 className='f-weight-600 mb-0'>{allGifts}</h4>
            </div>
          </div>
          {/* <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a> */}
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/active-users.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>MOST USED GIFTS</h6>
              <h4 className='f-weight-600 mb-0'>{allPendingGifts}</h4>
            </div>
          </div>
          {/* <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a> */}
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/inActive-users.svg'
              className='img-fluid'
              alt='User'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ACTIVE GIFTS</h6>
              <h4 className='f-weight-600 mb-0'>{allActiveGifts}</h4>
            </div>
          </div>
          {/* <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a> */}
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/pending-users.svg'
              className='img-fluid'
              alt='User'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>INACTIVE GIFTS</h6>
              <h4 className='f-weight-600 mb-0'>{allInactiveGifts}</h4>
            </div>
          </div>
          {/* <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default StoreStatArea;
