import React, { useEffect, useState } from "react";

const TalksSubNav = ({
  showBtn,
  setShowBtn,
  thrybeTalks,
  setThrybeTalks,
  page,
  filter,
  setFilter,
  search,
  setSearch
}) => {
  let [talksList, setTalksList] = useState([]);
  let [alphabetical, setAlphabetical] = useState([]);
  let [activeTalks, setActiveTalks] = useState([]);
  let [pendingTalks, setPendingTalks] = useState([]);
  useEffect(() => {
    if (filter) {
      setTalksList([...thrybeTalks]);
      setFilter(false);
    }
  }, [thrybeTalks]);
  useEffect(() => {
    setActiveTalks(
      talksList.filter((item) => {
        return item.status.toLowerCase() == "active";
      })
    );
  }, [talksList]);
  useEffect(() => {
    setPendingTalks(
      talksList.filter((item) => {
        return item.status.toLowerCase() == "pending";
      })
    );
  }, [talksList]);
  const [showDropDown, setShowDropDown] = useState(false);
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
                setThrybeTalks(talksList);
              }
              if (e.currentTarget.value == "active") {
                setThrybeTalks(activeTalks);
              } else if (e.currentTarget.value == "pending") {
                setThrybeTalks(pendingTalks);
              }
            }}
          >
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='pending'>Pending</option>
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
                    setAlphabetical(
                      talksList.sort((a, b) =>
                        a.talkName.localeCompare(b.talkName)
                      )
                    );
                    setThrybeTalks(talksList);
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
            Delete &nbsp; &nbsp;{" "}
            <img src='./assets/images/delete-icon.svg' alt='delete' />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className='btn btn-suspend'>
            Suspend &nbsp; &nbsp;{" "}
            <img src='./assets/images/suspend-icon.svg' alt='delete' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalksSubNav;
