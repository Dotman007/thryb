import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/base";
import { dateSetter } from "../seeks/dateSetter";


const RoomsBreadCrumb = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
  setRoomsList,
  setShowSpinner,
  singleRoomInfo,
  setSingleRoomInfo,
}) => {
  let roomDescription = singleRoomInfo?.roomTitle || "not found";
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(dateSetter());
  const [endDate, setEndDate] = useState(dateSetter());
  const [result, setResult] = useState('');

  const fetchDateRange = async () => {
    if (startDate && endDate) {
      setShowSpinner(true);
      setRoomsList([]);
      let myStartDate = new Date();
      let startDateFullYear = startDate.substring(0, 4);
      let startDateMonth = startDate.substring(5, 7);
      let startDateDay = startDate.substring(8, 10);
      myStartDate.setDate(startDateDay);
      myStartDate.setMonth(startDateMonth - 1);
      myStartDate.setFullYear(startDateFullYear);
      // setStartDate(myDate);
      let myEndDate = new Date();
      let endDateFullYear = endDate.substring(0, 4);
      let endDateMonth = endDate.substring(5, 7);
      let endDateDay = endDate.substring(8, 10);
      myEndDate.setDate(endDateDay);
      myEndDate.setMonth(endDateMonth - 1);
      myEndDate.setFullYear(endDateFullYear);
      // setEndDate(myDate);
      try {
        const response = await api.get(
          `/FilterThrybeRoomByDate?dateFrom=${
            myStartDate.getMonth() + 1
          }%2F${myStartDate.getDate()}%2F${myStartDate.getFullYear()}&dateTo=${
            myEndDate.getMonth() + 1
          }%2F${myEndDate.getDate()}%2F${myEndDate.getFullYear()}`
        );
        setRoomsList(response.data);
        setResult(response.data);
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='row'>
      <div className='col-12 mt-5 mb-3'>
        <ul className='myBreadcrumb p-0'>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
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
              setRoomsPage("mgt");
            }}
          >
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Thrybe Rooms
              </span>
            </a>
          </li>
          {roomsPage == "single" && (
            <li
              className='active'
              onClick={() => {
                setRoomsPage("mgt");
              }}
            >
              <a href='#' className='d-flex align-items-center'>
                <span className='font-xs f-weight-500 mt-1 text-dark'>
                  {roomDescription}
                </span>
              </a>
            </li>
          )}
        </ul>
        {roomsPage == "mgt" && (
          <>
            <div className='mt-4 d-flex justify-content-between align-items-center'>
              <h5>Thrybe Rooms</h5>
              <a
                href='#'
                className={`btn btn-primary ${!showBtn ? "not-show" : ""}`}
                id='AddUser'
                onClick={(e) => {
                  e.preventDefault();
                  setRoomsPage("addnew-1");
                }}
              >
                Add New
              </a>
            </div>
          </>
        )}
      </div>
      {roomsPage == "mgt" && (
        <>
          <a
            href='#'
            className={`btn btn-primary margin-left ${
              !showBtn ? "not-show" : ""
            }`}
            id='AddUser'
            data-toggle='modal'
            data-target='#composeMessage'
            onClick={(e) => {
              e.preventDefault();
              if (startDate && endDate) fetchDateRange();
            }}
          >
            Search Date
          </a>
          <input
            type='date'
            className='date-search-input'
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <span className='to'>to</span>
          <input
            type='date'
            className='date-search-input'
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </>
      )}
    </div>
  );
};

export default RoomsBreadCrumb;