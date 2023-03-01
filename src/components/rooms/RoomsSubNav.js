import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const RoomsSubNav = ({
  showBtn,
  setShowBtn,
  roomsList,
  setRoomsList,
  filter,
  setFilter,
  search,
  setSearch
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  let [list, setList] = useState([]);
  let [alphabetical, setAlphabetical] = useState([]);
  let [activeRooms, setActiveRooms] = useState([]);
  let [inactiveRooms, setInactiveRooms] = useState([]);
  let [pendingRooms, setPendingRooms] = useState([]);
  useEffect(() => {
    if (filter) {
      setList([...roomsList]);
      setAlphabetical(
        roomsList.sort((a, b) => a.roomTitle.localeCompare(b.roomTitle))
      );
      setFilter(false);
    }
  }, [roomsList]);
  useEffect(() => {
    setActiveRooms(
      list.filter((item) => {
        return item.status.toLowerCase() == "active";
      })
    );
  }, [list]);
  useEffect(() => {
    setInactiveRooms(
      list.filter((item) => {
        return item.status.toLowerCase() == "inactive";
      })
    );
  }, [list]);
  useEffect(() => {
    setPendingRooms(
      list.filter((item) => {
        return item.status.toLowerCase() == "pending";
      })
    );
  }, [list]);

  return (
    <div className='row justify-content-between align-items-center'>
      <div className='col-lg-4 mt-3'>
        <div className='search-user position-relative'>
          <input
            type='text'
            className='search-user-field'
            placeholder='Search'
            value={search}
            onChange={(e)=>{
              setSearch(e.currentTarget.value)
            }}
          />
          <button
            className='btn position-absolute'
            style={{ right: "2px", top: "0" }}
          >
            <img
              src='./assets/images/searchIcon.svg'
              style={{ height: "24px", width: "24px" }}
              alt=''
            />
          </button>
        </div>
      </div>
      <div className='col-lg-5 mt-3'>
        <div
          className={`align-items-center justify-content-end ${
            !showBtn ? "not-show" : ""
          }`}
          id='users-filter'
        >
          <label htmlFor='filter' className='font-sm mb-0'>
            Filter by:
          </label>
          &nbsp;&nbsp;&nbsp;
          <select
            className='filter-field2 font-sm'
            style={{ width: "auto" }}
            onChange={(e) => {
              if (e.currentTarget.value == "all") {
                setRoomsList(list);
              }
              if (e.currentTarget.value == "active") {
                setRoomsList(activeRooms);
              } else if (e.currentTarget.value == "pending") {
                setRoomsList(pendingRooms);
              } else if (e.currentTarget.value == "inactive") {
                setRoomsList(inactiveRooms);
              }
            }}
          >
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='pending'>Pending</option>
            <option value='inactive'>Inactive</option>
          </select>
          &nbsp;&nbsp;&nbsp;
          <select className='filter-field2 font-sm' style={{ width: "auto" }}>
            <option value=''>Date and Time</option>
          </select>
          <div className='dropdown messages-dropdown ml-4'>
            <button
              className='btn dropdown-button position-relative'
              type='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              style={{ width: "auto" }}
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <span className='font-sm'>Sort By</span>&nbsp;&nbsp;
              <img src='./assets/images/filter-icon.svg' alt='notification' />
            </button>
            <div
              className={`dropdown-menu mt-3 ${showDropDown && "block"}`}
              aria-labelledby='dropdownMenuButton'
            >
              <div className='position-relative drop-down-menu-inner'>
                <div className='position-absolute dropdown-pointer'>
                  <i className='fa fa-caret-up'></i>
                </div>
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setRoomsList(alphabetical);
                  }}
                >
                  Alphabetical Order
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`align-items-center ${showBtn ? "not-show" : "flex"}`}
          id='users-actions'
        >
          <button className='btn btn-danger'>
            Delete &nbsp; &nbsp;
            <img src='./assets/images/delete-icon.svg' alt='delete' />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className='btn btn-suspend'>
            Suspend &nbsp; &nbsp;
            <img src='./assets/images/suspend-icon.svg' alt='delete' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsSubNav;
