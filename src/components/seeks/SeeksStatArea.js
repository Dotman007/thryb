import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";

const SeeksStatArea = () => {
  const navigate = useNavigate();
  const [allSeeks, setAllSeeks] = useState("...");
  const [allActiveSeeks, setAllActiveSeeks] = useState("...");
  const [allInactiveSeeks, setAllInactiveSeeks] = useState("...");
  const [allPendingSeeks, setAllPendingSeeks] = useState("...");
  useEffect(() => {
    const fetchSeeksNumber = async () => {
      try {
        const response = await api.get("/AllSeeks");
        setAllSeeks(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchSeeksNumber();
  });
  useEffect(() => {
    const fetchAllActiveSeeks = async () => {
      try {
        const response = await api.get("/ActiveSeeks");
        setAllActiveSeeks(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchAllActiveSeeks();
  });
  useEffect(() => {
    const fetchInactiveSeeks = async () => {
      try {
        const response = await api.get("/InactiveSeeks");
        setAllInactiveSeeks(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchInactiveSeeks();
  });
  useEffect(() => {
    const fetchPendingSeeks = async () => {
      try {
        const response = await api.get("/PendingSeeks");
        setAllPendingSeeks(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchPendingSeeks();
  });
  return (
    <div className='row mt-3'>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ALL SEEKS</h6>
              <h4 className='f-weight-600 mb-0'>{allSeeks}</h4>
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
              src='./assets/images/activeSeeksIcon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ACTIVE SEEKS</h6>
              <h4 className='f-weight-600 mb-0'>{allActiveSeeks}</h4>
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
              src='./assets/images/inactiveSeeksIcon.svg'
              className='img-fluid'
              alt='User'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>INACTIVE SEEKS</h6>
              <h4 className='f-weight-600 mb-0'>{allInactiveSeeks}</h4>
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
              src='./assets/images/pending-seeks.svg'
              className='img-fluid'
              alt='User'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>PENDING SEEKS</h6>
              <h4 className='f-weight-600 mb-0'>{allPendingSeeks}</h4>
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

export default SeeksStatArea;
