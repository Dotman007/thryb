import React, { useState } from "react";
import ActivitiesList from "./ActivitiesList";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";
const Activities = ({ userId, setUserId, page, singleUserInfo }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetchDataWithAxios(
        "get",
        `/GetActivityDetails?id=${userId}`
      );
      setActivitiesList(response.data);
      setShowSpinner(false);
    } catch (err) {
    }
  };
  useEffect(() => {
    fetchData();
  });
  const [pageNumber, setPageNumber] = useState(0);
  const activitiesPerPage = 10;
  const pagesVisited = pageNumber * activitiesPerPage;
  const displayActivities = activitiesList.slice(
    pagesVisited,
    pagesVisited + activitiesPerPage
  );
  const pageCount = Math.ceil(activitiesList.length / activitiesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='activities'
        role='tabpanel'
        aria-labelledby='activities-tab'
      >
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-5 mt-3 mb-3'>
            <div className='d-flex align-items-center'>
              <h5 className='mb-0'>Activities</h5>&nbsp;&nbsp;
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
                    src='/assets/images/searchIcon.svg'
                    style={{ height: "24px", width: "24px" }}
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-5 mt-3 mb-3'>
            <div
              className='align-items-center justify-content-end'
              id='users-filter'
            >
              <label htmlFor='filter' className='font-sm mb-0'>
                Filter by:
              </label>
              &nbsp;&nbsp;&nbsp;
              <select
                className='filter-field2 font-sm'
                style={{ width: "auto" }}
              >
                <option value=''>Date and time range</option>
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
                  <img
                    src='/assets/images/filter-icon.svg'
                    alt='notification'
                  />
                </button>
                <div
                  className={`dropdown-menu mt-3 ${showDropDown && "block"}`}
                  aria-labelledby='dropdownMenuButton'
                >
                  <div className='position-relative drop-down-menu-inner'>
                    <div className='position-absolute dropdown-pointer'>
                      <i className='fa fa-caret-up'></i>
                    </div>
                    <a className='dropdown-item' href='#'>
                      Action
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
            <div className='align-items-center' id='users-actions'>
              <button className='btn btn-danger'>
                Delete selected &nbsp; &nbsp;{" "}
                <img src='./assets/images/delete-icon.svg' alt='delete' />
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className='btn btn-suspend'>
                Suspend selected &nbsp; &nbsp;{" "}
                <img src='/assets/images/suspend-icon.svg' alt='delete' />
              </button>
            </div>
          </div>
        </div>
        <div className='users-table-div table-responsive'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th></th>
                <th>Activity</th>
                <th>Type</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayActivities.length >= 1 &&
                displayActivities.map((item, index) => (
                  <ActivitiesList
                    key={index}
                    item={item}
                    singleUserInfo={singleUserInfo}
                  />
                ))}
            </tbody>
          </table>
          {showSpinner && <div className='spinner'></div>}
          {/* {!showSpinner && activitiesList.length == 0 && <EmptyChart />} */}
        </div>
      </div>
      {activitiesList.length > 0 && (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </>
  );
};

export default Activities;
