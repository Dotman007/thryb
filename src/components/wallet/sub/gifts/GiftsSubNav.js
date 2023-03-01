import React, { useState } from "react";

const GiftsSubNav = ({ showBtn, setShowBtn }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='row justify-content-between align-items-center'>
      <div className='col-lg-4 mt-3'>
        <div className='search-user position-relative'>
          <input
            type='text'
            className='search-user-field'
            placeholder='Search'
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
          className='align-items-center justify-content-end'
          id='users-filter'
        >
          <label htmlFor='filter' className='font-sm mb-0'>
            Filter by:
          </label>
          &nbsp;&nbsp;&nbsp;
          <div className='position-relative'>
            <select className='filter-field2 font-sm' style={{ width: "auto" }}>
              <option value=''>Status</option>
              <option value=''>Gold Gifts</option>
              <option value=''>Diamond Gifts</option>
              <option value=''>Boosted Accounts</option>
              <option value=''>Verified Gifts</option>
            </select>

            <i
              className='position-absolute fa fa-angle-down'
              style={{ top: "10px", right: "10px" }}
            ></i>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className='position-relative'>
            <select
              className='filter-field2 font-sm px-4'
              style={{ width: "auto" }}
              defaultValue='Custom Date'
            >
              <option value=''>Active period</option>
              <option value=''>Last 7 days</option>
              <option value=''>Last 1 month</option>
              <option value=''>Last 1 year</option>
              <option value=''>Custom Date</option>
            </select>
            <i
              className='position-absolute fa fa-angle-down'
              style={{ top: "10px", right: "5px" }}
            ></i>
          </div>
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
                <a className='dropdown-item' href='#'>
                  Alphabetical Order
                </a>
                <a className='dropdown-item' href='#'>
                  Date Registered
                </a>
                <a className='dropdown-item' href='#'>
                  Active Gifts
                </a>
                <a className='dropdown-item' href='#'>
                  Suspended Gifts
                </a>
                <a className='dropdown-item' href='#'>
                  Pending Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSubNav;
