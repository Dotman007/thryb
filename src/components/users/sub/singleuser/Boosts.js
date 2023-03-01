import React, { useState } from "react";
import BoostsList from "./BoostsList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import ReactPaginate from "react-paginate";

const Boosts = ({ userId, setUserId, page }) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  let [state, setState] = useState("");
  const [boostList, setBoostList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const boostsPerPage = 10;
  const pagesVisited = pageNumber * boostsPerPage;
  const displayBoosts = boostList.slice(
    pagesVisited,
    pagesVisited + boostsPerPage
  );
  const pageCount = Math.ceil(boostList.length / boostsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchThrybeUsers = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetBoosts?id=${userId}`
        );
        setBoostList(response.data);
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (userId !== -1) fetchThrybeUsers();
  }, [userId]);
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='boosts'
        role='tabpanel'
        aria-labelledby='boosts-tab'
      >
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-4 mt-3'>
            <h5 className='mb-0'>Profile Boosts</h5>
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
              <select
                className='filter-field2 font-sm'
                style={{ width: "auto" }}
              >
                <option value=''>Duration</option>
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
                    src='./assets/images/filter-icon.svg'
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
          </div>
        </div>

        <div className='users-table-div table-responsive mt-4 mb-3'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th></th>
                <th>Boost Duration</th>
                <th>Amount Spent</th>
                <th>Appearance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayBoosts.length >= 1 &&
                displayBoosts.map((item, index) => (
                  <BoostsList key={index} item={item} boostList={boostList} />
                ))}
            </tbody>
          </table>
          {showSpinner && <div className='spinner'></div>}
        </div>
      </div>
      {boostList.length > 1 && (
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

export default Boosts;
