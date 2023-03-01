import React, { useState, useEffect } from "react";

const UsersSubNav = ({
  showBtn,
  setShowBtn,
  usersList,
  setUsersList,
  filter,
  setFilter,
  search,
  setSearch
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  let [alphabetical, setAlphabetical] = useState([]);
  let [list, setList] = useState([]);
  let [silverUsers, setSilverUsers] = useState([]);
  let [freeUsers, setFreeUsers] = useState([]);
  let [goldUsers, setGoldUsers] = useState([]);
  let [diamondUsers, setDiamondUsers] = useState([]);
  let [verifiedUsers, setVerifiedUsers] = useState([]);
  let [boostedAccountUsers, setBoostedAccountUsers] = useState([]);
  useEffect(() => {
    if (filter) {
      setList([...usersList]);
      setFilter(false);
    }
  }, [usersList]);
  
  useEffect(() => {
    setSilverUsers(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "silver";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setFreeUsers(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "free";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setDiamondUsers(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "diamond";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setVerifiedUsers(
      list.filter((item) => {
        if (item.status) {
          return item.isVerified;
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setBoostedAccountUsers(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "boosted";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setGoldUsers(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "gold";
        }
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
          <div className='position-relative'>
            <select
              className='filter-field2 font-sm'
              style={{ width: "auto" }}
              onChange={(e) => {
                if (e.currentTarget.value == "all") {
                  setUsersList(list);
                } else if (e.currentTarget.value == "gold") {
                  setUsersList(goldUsers);
                } else if (e.currentTarget.value == "diamond") {
                  setUsersList(diamondUsers);
                } else if (e.currentTarget.value == "boosted") {
                  setUsersList(boostedAccountUsers);
                } else if (e.currentTarget.value == "verified") {
                  setUsersList(verifiedUsers);
                } else if (e.currentTarget.value == "free") {
                  setUsersList(freeUsers);
                } else if (e.currentTarget.value == "silver") {
                  setUsersList(silverUsers);
                }
              }}
            >
              <option value='all'>All</option>
              <option value='gold'>Gold Users</option>
              <option value='diamond'>Diamond Users</option>
              <option value='boosted'>Boosted Accounts</option>
              <option value='verified'>Verified Users</option>
              <option value='free'>Free Users</option>
              <option value='silver'>Silver Users</option>
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
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setAlphabetical(
                      list.sort((a, b) => a.status.localeCompare(b.status))
                    );
                    setUsersList(list);
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
                  Free Review
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

export default UsersSubNav;
