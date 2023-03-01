import React, { useState } from "react";
import { useEffect } from "react";
const SeeksSubNav = ({
  showBtn,
  setShowBtn,
  seeksList,
  setSeeksList,
  filter,
  setFilter,
  search,
  setSearch,
  searchList,
  setSearchList,
  listMode,
  setListMode
}) => {
  let [list, setList] = useState([]);
  let [filterList, setFilterList] = useState([]);
  let [alphabetical, setAlphabetical] = useState([]);
  let [activeSeeks, setActiveSeeks] = useState([]);
  let [inactiveSeeks, setInactiveSeeks] = useState([]);

  useEffect(() => {
      setList([...seeksList]);
      setFilterList([...searchList]);
      setFilter(false);
  },[searchList,seeksList]);

  useEffect(() => {
    if(listMode == 'list'){
      setActiveSeeks(
        list.filter((item) => {
          return item.status;
        })
      );
    }else{
      setActiveSeeks(
        filterList.filter((item) => {
          return item.status;
        })
      );
    }
  }, [list, filterList]);

  useEffect(() => {
    if(listMode == 'list'){
      setInactiveSeeks(
        list.filter((item) => {
          return !item.status;
        })
      );
    }else{
      setInactiveSeeks(
        filterList.filter((item) => {
          return !item.status;
        })
      );
    }   
  }, [list, filterList]);
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
              setSearch(e.currentTarget.value);
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
              if(listMode == 'list'){
                if (e.currentTarget.value == "all") {
                  setSeeksList(list);
                }
                if (e.currentTarget.value == "active") {
                  setSeeksList(activeSeeks);
                } else if (e.currentTarget.value == "expired") {
                  setSeeksList(inactiveSeeks);
                }
              }else{
                if (e.currentTarget.value == "all") {
                  setSearchList(list);
                }
                if (e.currentTarget.value == "active") {
                  setSearchList(activeSeeks);
                } else if (e.currentTarget.value == "expired") {
                  setSearchList(inactiveSeeks);
                }
              }
              
            }}
          >
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='expired'>Expired</option>
          </select>
          &nbsp;&nbsp;&nbsp;
          <select className='filter-field2 font-sm' style={{ width: "auto" }}>
            <option value=''>Active period</option>
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
                    if(listMode == 'list'){
                      setAlphabetical(
                        list.sort((a, b) =>
                          a.firstDescription.localeCompare(b.firstDescription)
                        )
                      );
                      setSeeksList(list);
                    }else{
                      setAlphabetical(
                        filterList.sort((a, b) =>
                          a.firstDescription.localeCompare(b.firstDescription)
                        )
                      );
                      setSearchList(filterList);
                    }
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

export default SeeksSubNav;
