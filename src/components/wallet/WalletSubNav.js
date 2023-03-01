import React, { useState, useEffect } from "react";
import api from "../api/base";
import { dateSetter } from "../seeks/dateSetter";

const WalletSubNav = ({
  showBtn,
  setShowBtn,
  setFilter,
  transactionList,
  setTransactionList,
  filter,
  setShowSpinner,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  let [list, setList] = useState([]);
  let [alphabetical, setAlphabetical] = useState([]);
  let [successfulTransactions, setSuccessfulTransactions] = useState([]);
  let [settledTransactions, setSettledTransactions] = useState([]);
  let [pendingTransactions, setPendingTransactions] = useState([]);
  const [startDate, setStartDate] = useState(dateSetter());
  const [endDate, setEndDate] = useState(dateSetter());

  const fetchDateRange = async () => {
    setShowSpinner(true);
    setTransactionList([]);
    try {
      const response = await api.get(
        `/FilterThrybeTransactionByDate?dateFrom=${
          startDate.getMonth() + 1
        }%2F${startDate.getDate()}%2F${startDate.getFullYear()}&dateTo=${
          endDate.getMonth() + 1
        }%2F${endDate.getDate()}%2F${endDate.getFullYear()}`
      );
      setTransactionList(response.data);
      setShowSpinner(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (filter) {
      setList([...transactionList]);
      setFilter(false);
    }
  }, [transactionList]);
  useEffect(() => {
    setSuccessfulTransactions(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "success";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setSettledTransactions(
      list.filter((item) => {
        if (item.status) {
          return item.status.toLowerCase() == "settled";
        }
      })
    );
  }, [list]);
  useEffect(() => {
    setPendingTransactions(
      list.filter((item) => {
        return !item.status;
      })
    );
  }, [list]);
  return (
    <div className='row justify-content-between align-items-center'>
      <a
        href='#'
        className={`btn btn-primary margin-left ${!showBtn ? "not-show" : ""}`}
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
          let myDate = new Date();
          let fullYear = e.target.value.substring(0, 4);
          let month = e.target.value.substring(5, 7);
          let day = e.target.value.substring(8, 10);
          myDate.setDate(day);
          myDate.setMonth(month - 1);
          myDate.setFullYear(fullYear);
          setStartDate(myDate);
        }}
      />
      <span className='to'>to</span>
      <input
        type='date'
        className='date-search-input'
        value={endDate}
        onChange={(e) => {
          let myDate = new Date();
          let fullYear = e.target.value.substring(0, 4);
          let month = e.target.value.substring(5, 7);
          let day = e.target.value.substring(8, 10);
          myDate.setDate(day);
          myDate.setMonth(month - 1);
          myDate.setFullYear(fullYear);
          setEndDate(myDate);
        }}
      />
      <br />
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
            <select
              className='filter-field2 font-sm'
              style={{ width: "auto" }}
              onChange={(e) => {
                if (e.currentTarget.value == "all") {
                  setTransactionList(list);
                } else if (e.currentTarget.value == "success") {
                  setTransactionList(successfulTransactions);
                } else if (e.currentTarget.value == "settled") {
                  setTransactionList(settledTransactions);
                } else if (e.currentTarget.value == "pending") {
                  setTransactionList(pendingTransactions);
                }
              }}
            >
              <option value='all'>All</option>
              <option value='settled'>Settled</option>
              <option value='success'>Successful</option>
              <option value='pending'>Pending</option>
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
                      list.sort((a, b) =>
                        a.transactionType.localeCompare(b.transactionType)
                      )
                    );
                    setTransactionList(list);
                  }}
                >
                  Alphabetical Order
                </a>
                <a className='dropdown-item' href='#'>
                  Date Registered
                </a>
                <a className='dropdown-item' href='#'>
                  Active Wallet
                </a>
                <a className='dropdown-item' href='#'>
                  Suspended Wallet
                </a>
                <a className='dropdown-item' href='#'>
                  Pending Review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='align-items-center' id='users-actions'>
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

export default WalletSubNav;
