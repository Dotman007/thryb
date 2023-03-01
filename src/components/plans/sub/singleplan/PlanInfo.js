import React from "react";

const PlanInfo = ({ planInfo }) => {
  let name = planInfo?.name ?? "Not Available";
  let planId = planInfo?.planTypeId ?? "";
  let planType = planInfo?.planTypes ?? "Not Available";
  let amount = planInfo?.amount ?? "Not Available";
  let status = planInfo?.status ?? "Not Available";
  let duration = planInfo?.duration ?? "Not Available";
  let id = planInfo?.id ?? "";
  let date = planInfo?.dateCreated ?? "Not Available";
  return (
    <div className='col-lg-6 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='row align-items-center justify-content-around'>
          <div
            className='col-md-3 h-100'
            style={{
              backgroundColor: "#842a83",
              borderRadius: "10px",
            }}
          >
            <div className='w-100 p-2'>
              <img src='./assets/images/naira-icon.svg' alt='naira-icon' />
              <p
                className='text-white m-0 pt-1 f-weight-800'
                style={{ fontSize: "20px" }}
              >
                {amount}
              </p>
              <p className='text-white font-sm m-0 pt-1'>Price</p>
            </div>
          </div>
          <div className='col-md-7 pt-4 mt-2 d-flex flex-column'>
            <h6 className='f-weight-600 m-0'>{name}</h6>
            <p className='mt-2 font-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat, quam eu scelerisque vestibulum, nulla Praesent volutpat,
              quam eu scelerisque vestibulum, nulla
            </p>
          </div>
        </div>
        <div className='mt-5 table-responsive'>
          <table className='table table-borderless table-singleGift-summary'>
            <tbody>
              <tr>
                <td>Subscription Type</td>
                <td className='text-right'>{planType}</td>
              </tr>
              <tr>
                <td>Subscription Duration</td>
                <td className='text-right'>{duration}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td className='text-right'>{status}</td>
              </tr>
              <tr>
                <td>Background Color</td>
                <td className='text-right'>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='px-3 mb-4 mt-4'>
          <div className='row'>
            <div className='col-4' style={{ borderRight: "1px solid #f2f2f2" }}>
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
            <div className='col-4' style={{ borderRight: "1px solid #f2f2f2" }}>
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
            <div className='col-4'>
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
  );
};

export default PlanInfo;
