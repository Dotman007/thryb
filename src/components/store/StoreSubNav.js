import React, { useState, useEffect } from "react";

const StoreSubNav = ({
  showBtn,
  setShowBtn,
  setFilter,
  giftsList,
  setGiftsList,
  filter,
  page,
  search,
  setSearch
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  let [list, setList] = useState([]);
  let [alphabetical, setAlphabetical] = useState([]);
  let [activeGifts, setActiveGifts] = useState([]);
  let [expiredGifts, setExpiredGifts] = useState([]);
  useEffect(() => {
    if (filter) {
      setList([...giftsList]);
      setFilter(false);
    }
  }, [giftsList]);
  useEffect(() => {
    setActiveGifts(
      list.filter((item) => {
        return item.status;
      })
    );
  }, [list]);
  useEffect(() => {
    setExpiredGifts(
      list.filter((item) => {
        return !item.status;
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
          &nbsp;&nbsp;&nbsp;
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
            <div className='position-relative'>
              <select
                className='filter-field2 font-sm'
                style={{ width: "auto" }}
                onChange={(e) => {
                  if (e.currentTarget.value == "all") {
                    setGiftsList(list);
                  } else if (e.currentTarget.value == "active") {
                    setGiftsList(activeGifts);
                  } else if (e.currentTarget.value == "expired") {
                    setGiftsList(expiredGifts);
                  }
                }}
              >
                <option value='all'>All</option>
                <option value='active'>Active</option>
                <option value='expired'>Expired</option>
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
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setAlphabetical(
                      list.sort((a, b) => a.giftName.localeCompare(b.giftName))
                    );
                    setGiftsList(list);
                  }}
                >
                  Alphabetical Order
                </a>
                <a className='dropdown-item' href='#'>
                  Date Registered
                </a>
                <a className='dropdown-item' href='#'>
                  Active Users
                </a>
                <a className='dropdown-item' href='#'>
                  Suspended Users
                </a>
                <a className='dropdown-item' href='#'>
                  Pending Review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`align-items-center ${showBtn ? "not-show" : "flex"}`}
          id='users-actions'
        >
          <button className='btn btn-danger' style={{ width: "50%" }}>
            Delete selected&nbsp; &nbsp;{" "}
            <img src='./assets/images/delete-icon.svg' alt='delete' />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className='btn btn-suspend' style={{ width: "50%" }}>
            Suspend selected&nbsp; &nbsp;{" "}
            <img src='./assets/images/suspend-icon.svg' alt='delete' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreSubNav;
