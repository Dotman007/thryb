import React from "react";

const SubscribersList = ({
  setPlansPage,
  subscribers,
  setSubscribers,
  renewed,
  setRenewed,
  expiringSoon,
  setExpiringSoon,
  activityList,
  setActivityList,
}) => {
  return (
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
          <div className='row mt-4'>
            <div className='col-lg-4'>
              <div className='d-flex align-items-center'>
                <img
                  src='./assets/images/subscribers-icon.svg'
                  className='img-fluid'
                  alt='User'
                />
                <div className='ml-3'>
                  <h6 className='font-sm2 f-weight-500'>SUBSCRIBERS</h6>
                  <h6 className='f-weight-600 mb-0'>{subscribers}</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex align-items-center'>
                <img
                  src='./assets/images/expiring-soon-icon.svg'
                  className='img-fluid'
                  alt='User'
                />
                <div className='ml-3'>
                  <h6 className='font-sm2 f-weight-500'>EXPIRING SOON</h6>
                  <h6 className='f-weight-600 mb-0'>{expiringSoon}</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex align-items-center'>
                <img
                  src='./assets/images/renewed-icon.svg'
                  className='img-fluid'
                  alt='User'
                />
                <div className='ml-3'>
                  <h6 className='font-sm2 f-weight-500'>RENEWED</h6>
                  <h6 className='f-weight-600 mb-0'>{renewed}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='users-table-div mt-4'>
            {/* <div className='d-flex justify-content-between align-items-center'>
              <h6 className='mb-0'>Yesterday</h6>
            </div> */}
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
              {activityList.map((item, index) => (
                <div
                  className='row mb-3 justify-content-between mb-3 position-relative align-items-center'
                  key={index}
                >
                  <div className='position-absolute green-circle'></div>
                  <div className='col-lg-3 col-3'>
                    <span className='font-sm2 f-weight-600'>00 :09</span>
                  </div>
                  <div className='col-lg-9 col-9'>
                    <p className='mb-0 notifs-content font-sm2'>
                      {item?.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className='users-table-div mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='mb-0'>Yesterday</h6>
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
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
                    <span className='purple-bold-text'>Farouk Asmaya</span>
                    renewed her
                    <span className='purple-bold-text'>Base Membership</span>
                    Subscription
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SubscribersList;
