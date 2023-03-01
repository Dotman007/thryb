import React from "react";

const ProfileBoost = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>PROFILE BOOST</h6>
            <h5 className='f-weight-600 mb-0 text-blueee'>-300%</h5>
          </div>
          <div className=''>
            <h6 className='font-sm2 f-weight-500 text-right'>
              TOTAL AMOUNT MADE
            </h6>
            <h5 className='f-weight-600 mb-0 text-blueee text-right'>
              304930 - ₦197K
            </h5>
          </div>
        </div>
        <div className='trend-div mt-4'>
          <img
            src='./assets/images/blue-chart.svg'
            className='img-fluid w-100'
            alt=''
            style={{ maxHeight: "145px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBoost;
