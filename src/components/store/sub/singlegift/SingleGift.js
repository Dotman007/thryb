import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";

const SingleGift = ({
  page,
  setPage,
  storePage,
  setStorePage,
  giftId,
  setGiftId,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  let cost = giftId?.cost || "unknown";
  let authorImage = giftId?.authorImage || "assets/images/unknown.jpg";
  let giftName = giftId?.giftName || "unknown";
  let description = giftId?.description || "unknown";
  let giftImage = giftId?.giftImage || "assets/images/unknown.jpg";
  let token = giftId?.token || "unknown";
  let nairaEquivalent = giftId?.nairaEquivalent || "unknown";
  let status = giftId?.status;
  let giftid = giftId?.giftId ?? -1;

  const deleteGift = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchDataWithAxios(
        "get",
        `/Suspend?id=${giftid}&what=STORE`
      );
      if (response.data){
        setStorePage('mgt');
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mt-5 mb-3'>
            <ul className='myBreadcrumb p-0'>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <i className='fa fa-home text-darkGrey'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                    Home
                  </span>
                </a>
              </li>
              <li
                className=''
                onClick={(e) => {
                  e.preventDefault();
                  setStorePage("mgt");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Thrybe Store
                  </span>
                </a>
              </li>
              <li className='active'>
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    {giftName}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {storePage == "single" && (
          <div className='row mt-3 mb-3'>
            <div className='col-lg-6 d-flex flex-column flex-grow-1'>
              <div className='custom-card h-100'>
                <div className='row align-items-center justify-content-around'>
                  <div className='col-md-3'>
                    <img
                      src={giftImage}
                      className='img-fluid giftImage-img'
                      alt=''
                    />
                  </div>
                  <div className='col-md-7'>
                    <h6 className='f-weight-600'>{giftName}</h6>
                    <p className='mt-3 font-sm'>{description}</p>
                    <span className='talks-author'>
                      <img src='./assets/images/user-avatar.svg' alt='' />
                      &nbsp;&nbsp;Author - Farouk Asmaya
                    </span>
                  </div>
                </div>
                <div className='mt-5 table-responsive'>
                  <table className='table table-borderless table-giftId-summary'>
                    <tbody>
                      <tr>
                        <td>Price Value</td>
                        <td className='text-right'>₦{nairaEquivalent}</td>
                      </tr>
                      <tr>
                        <td>Token Value</td>
                        <td className='text-right'>{token}</td>
                      </tr>
                      <tr>
                        <td>Date Created</td>
                        <td className='text-right'>2020-09-29&nbsp;12:22:21</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td className='text-right'>{`${
                          status ? "Active" : "Inactive"
                        }`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='px-3 mb-4 mt-4'>
                  <div className='row'>
                    <div
                      className='col-4'
                      style={{ borderRight: "1px solid #f2f2f2" }}
                    >
                      <a href='' className='d-flex align-items-center'>
                        <img
                          src='./assets/images/Edit.svg'
                          className='img-fluid'
                          alt='Edit'
                        />
                        <span className='ml-2 text-dark font-sm2 f-weight-600'>
                          Edit
                        </span>
                      </a>
                    </div>
                    <div
                      className='col-4'
                      style={{ borderRight: "1px solid #f2f2f2" }}
                      onClick={(e)=>{
                        deleteGift(e);
                      }}
                    >
                      <a href='' className='d-flex align-items-center'>
                        <img
                          src='./assets/images/suspend-icon-black.svg'
                          className='img-fluid'
                          alt='Suspend'
                        />
                        <span className='ml-2 text-dark font-sm2 f-weight-600'>
                          Suspend
                        </span>
                      </a>
                    </div>
                    <div className='col-4' onClick={(e)=>{
                        deleteGift(e);
                      }}>
                      <a href='' className='d-flex align-items-center'>
                        <img
                          src='./assets/images/delete-icon-black.svg'
                          className='img-fluid'
                          alt='Delete'
                        />
                        <span className='ml-2 text-dark font-sm2 f-weight-600'>
                          Delete
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 d-flex flex-column flex-grow-1'>
              <div className='store-analytics-div h-100 mb-0'>
                <div style={{ borderBottom: "1px solid #f2f2f2" }}>
                  <h6
                    className='mb-0 pb-2'
                    style={{ borderBottom: "2px solid #178972", width: "25%" }}
                  >
                    Analytics
                  </h6>
                </div>
                <div className='row mt-4'>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/store-usage-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-4'>
                        <h6 className='font-sm2 f-weight-500'>USAGE</h6>
                        <h6 className='f-weight-600 mb-0'>1299</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/store-exchange-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-4'>
                        <h6 className='font-sm2 f-weight-500'>EXCHANGES</h6>
                        <h6 className='f-weight-600 mb-0'>320</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/store-purchase-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-4'>
                        <h6 className='font-sm2 f-weight-500'>PURCHASES</h6>
                        <h6 className='f-weight-600 mb-0'>129</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>USAGE</h6>
                    <a
                      href='#'
                      className='f-weight-600 font-sm2 text-dark'
                      onClick={(e) => {
                        e.preventDefault();
                        setStorePage("single-2");
                      }}
                    >
                      View all
                    </a>
                  </div>
                  <div className='activity-timeline position-relative mt-4'>
                    <div
                      className='demarcator position-absolute'
                      style={{
                        width: "2px",
                        height: "100%",
                        top: "0",
                        left: "18%",
                        backgroundColor: "#e6e6e6",
                      }}
                    ></div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {storePage == "single-2" && (
          <div className='row mt-3 mb-3'>
            <div className='col-lg-6 d-flex flex-column flex-grow-1'>
              <div className='store-analytics-div h-100 mb-0'>
                <div style={{ borderBottom: "1px solid #f2f2f2" }}>
                  <h6
                    className='mb-0 pb-2'
                    style={{ borderBottom: "2px solid #178972", width: "25%" }}
                  >
                    Analytics
                  </h6>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>Today</h6>
                  </div>
                  <div className='activity-timeline position-relative mt-4'>
                    <div
                      className='demarcator position-absolute'
                      style={{
                        width: "2px",
                        height: "100%",
                        top: "0",
                        left: "18%",
                        backgroundColor: "#e6e6e6",
                      }}
                    ></div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>Today</h6>
                  </div>
                  <div className='activity-timeline position-relative mt-4'>
                    <div
                      className='demarcator position-absolute'
                      style={{
                        width: "2px",
                        height: "100%",
                        top: "0",
                        left: "18%",
                        backgroundColor: "#e6e6e6",
                      }}
                    ></div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>
                          worth 1049 Tokens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleGift;
