import React from "react";

const ProfileSubmission = () => {
  return (
    <div className='col-md-6 col-lg-4 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>PROFILE SUBMISSION</h6>
            <h5 className='f-weight-600 mb-0 text-success'>+42%</h5>
          </div>
          <div className=''>
            <h6 className='font-sm2 f-weight-500 text-right'>TOTAL</h6>
            <h5 className='f-weight-600 mb-0 text-success text-right'>
              94032 - ₦116K
            </h5>
          </div>
        </div>
        <div className='trend-div mt-4'>
          <img
            src='./assets/images/green-chart.svg'
            className='img-fluid'
            alt=''
            style={{ minHeight: "145px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSubmission;
