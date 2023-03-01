import React, { useState } from "react";
import GiftsList from "./GiftsList";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Gifts = ({ userId, setUserId, page }) => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  const [giftsList, setGiftsList] = useState([]);
  const [showGiftsSpinner, setShowGiftsSpinner] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetchDataWithAxios(
        "get",
        `/GetUserGiftts?id=${userId}`
      );
      setGiftsList(response.data);
      setShowGiftsSpinner(false);
    } catch (err) {
    }
  };
  useEffect(() => {
    fetchData();
  });
  const [pageNumber, setPageNumber] = useState(0);
  const giftsPerPage = 10;
  const pagesVisited = pageNumber * giftsPerPage;
  const displayGifts = giftsList.slice(
    pagesVisited,
    pagesVisited + giftsPerPage
  );
  const pageCount = Math.ceil(giftsList.length / giftsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='gifts'
        role='tabpanel'
        aria-labelledby='gifts-tab'
      >
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-5 mt-3 mb-3'>
            <div className='d-flex align-items-center'>
              <h5 className='mb-0'>User's Gifts</h5>&nbsp;&nbsp;
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
          </div>
          <div className='col-lg-5 mt-3 mb-3'>
            <div
              className='align-items-center justify-content-end'
              id='users-filter'
            >
              <label htmlFor='filter' className='font-sm mb-0'>
                Filter by:
              </label>
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
          <table className='table table-borderless users-table table-gift'>
            <thead>
              <tr>
                <th></th>
                <th>Gift Name</th>
                <th>Description</th>
                <th>Gift Value</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayGifts.length >= 1 &&
                displayGifts.map((item, index) => (
                  <GiftsList key={index} item={item} />
                ))}
            </tbody>
          </table>
          {showGiftsSpinner && <div className='spinner'></div>}
        </div>
      </div>
      {giftsList.length > 0 && (
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

export default Gifts;
