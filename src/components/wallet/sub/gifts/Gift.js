import React from "react";
import GiftsBreadCrumb from "./GiftsBreadCrumb";
import GiftsListContainer from "./GiftsListContainer";
import GiftsPurchases from "./GiftsPurchases";
import GiftsResales from "./GiftsResales";
import GiftsSubNav from "./GiftsSubNav";

const Gift = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <GiftsBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />

        {walletPage == "gift-list" && (
          <>
            <div className='row'>
              <div className='col-lg-11'>
                <div className='row'>
                  <GiftsPurchases />
                  <GiftsResales />
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-11'>
                <div className='custom-card'>
                  <GiftsSubNav />
                  <GiftsListContainer
                    page={page}
                    setPage={setPage}
                    showBtn={showBtn}
                    setShowBtn={setShowBtn}
                    walletPage={walletPage}
                    setWalletPage={setWalletPage}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {walletPage == "gift-single" && (
          <div className='row mt-3 mb-3'>
            <div className='col-lg-6 d-flex flex-column flex-grow-1'>
              <div className='custom-card h-100'>
                <div className='wallet-balance-card mt-2'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <h5 className='d-flex align-items-center text-light'>
                          ₦
                        </h5>
                        <h3 className='text-light mt-2 f-weight-600'>12,000</h3>
                        <p className='text-light font-sm f-weight-500'>
                          Transaction Amount
                        </p>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='d-flex flex-column align-items-end'>
                        <h5 className='d-flex align-items-center text-light'>
                          ₦
                        </h5>
                        <h3 className='text-light mt-2 f-weight-600'>940K</h3>
                        <p className='text-light font-sm f-weight-500'>
                          New Balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5 table-responsive'>
                  <table className='table table-borderless table-singleGift-summary'>
                    <tbody>
                      <tr>
                        <td>
                          <p className='mb-0 table-wallet'>Transaction Type</p>
                        </td>
                        <td className='text-right f-weight-600'>
                          Gift Purchase
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className='mb-0 table-wallet'>Status</p>
                        </td>
                        <td className='text-right'>
                          <div className='d-flex justify-content-end'>
                            <div className='successful-status'>Successful</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className='mb-0 table-wallet'>
                            Transaction Channel
                          </p>
                        </td>
                        <td>
                          <div className='d-flex align-items-center justify-content-end'>
                            <div className='master-card-div'>
                              <img
                                src='./assets/images/master-card-icon.svg'
                                className='img-fluid'
                                alt=''
                              />
                            </div>
                            <div className='ml-2'>
                              <h5 className='font-sm mb-0 f-weight-600'>
                                My Master card
                              </h5>
                              <p className='font-xs mb-0'>0924 ******* 5675</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=''>
                          <p className='table-wallet mb-0'>Date and Time</p>
                        </td>
                        <td className='text-right f-weight-600'>
                          05.01.2020&nbsp; 01:39 PM
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='px-3 mb-4 mt-4'>
                  <div className='custom-card px-0'>
                    <div className='px-3'>
                      <h6 className='f-weight-600'>User</h6>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                          <img
                            src='./assets/images/user-avatar.svg'
                            className='img-fluid'
                            alt=''
                          />
                          &nbsp;&nbsp;
                          <div>
                            <h6 className='f-weight-600'>Nusaiba Sabiu</h6>
                            <p className='font-sm mb-0'>
                              nusaiba.sabiu@gmail.com
                            </p>
                          </div>
                        </div>
                        <a href='#'>
                          <i className='fa fa-angle-right text-dark'></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-end px-3'>
                      <a href='#' className='text-dark font-sm2 f-weight-600'>
                        Blacklist Nusaiba
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
                        src='./assets/images/smartFone.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>
                          DEVICE PLATFORM
                        </h6>
                        <h6 className='f-weight-600 mb-0 font-sm2'>Android</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/attemptsIcon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>ATTEMPTS</h6>
                        <h6 className='f-weight-600 mb-0 font-sm2'>
                          6 Attempts
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/errorsIcon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>ERRORS</h6>
                        <h6 className='f-weight-600 mb-0 font-sm2'>0 Errors</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>USAGE</h6>
                    <a href='#' className='f-weight-600 font-sm2 text-dark'>
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
                          worth 1049 Tokens -
                          <span className='text-success'>Successful</span>
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute red-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens -
                          <span className='text-danger'>Canceled</span>
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute red-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>Ret SILO</span>
                          purchased
                          <span className='purple-bold-text'>7 gifts</span>{" "}
                          worth 1049 Tokens -{" "}
                          <span className='text-danger'>Failed</span>
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

export default Gift;
