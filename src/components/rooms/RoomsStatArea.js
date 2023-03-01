import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";

const RoomsStatArea = () => {
  const navigate = useNavigate();
  const [allRooms, setAllRooms] = useState("...");
  const [allActiveRooms, setAllActiveRooms] = useState("...");
  const [allInactiveRooms, setAllInactiveRooms] = useState("...");
  const [allPendingRooms, setAllPendingRooms] = useState("...");
  useEffect(() => {
    const fetchRoomsNumber = async () => {
      try {
        const response = await api.post("/AllRooms");
        setAllRooms(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchRoomsNumber();
  });
  useEffect(() => {
    const fetchAllActiveRooms = async () => {
      try {
        const response = await api.get("/AllActiveRooms");
        setAllActiveRooms(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchAllActiveRooms();
  });
  useEffect(() => {
    const fetchInactiveRooms = async () => {
      try {
        const response = await api.get("/AllInactiveRooms");
        setAllInactiveRooms(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchInactiveRooms();
  });
  useEffect(() => {
    const fetchPendingRooms = async () => {
      try {
        const response = await api.get("/AllPendingRooms");
        setAllPendingRooms(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchPendingRooms();
  });
  return (
    <div className='row mt-3'>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/allRoomsIcon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>All Rooms</h6>
              <h4 className='f-weight-600 mb-0'>{allRooms}</h4>
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
              src='./assets/images/allRoomsActive-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ACTIVE ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>{allActiveRooms}</h4>
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
              src='./assets/images/allRoomInactive-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>INACTIVE ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>{allInactiveRooms}</h4>
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
              src='./assets/images/allRoomPending-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>PENDING ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>{allPendingRooms}</h4>
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

export default RoomsStatArea;
