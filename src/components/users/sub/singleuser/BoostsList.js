import React from "react";

const BoostsList = ({ item }) => {
  let appearance = item.appearance || "";
  let boostDuration = item.boostDuration || "not available";
  let endDate = item.endDate || "not available";
  let startDate = item.startDate || "not available";
  let nairaSpent = item.nairaSpent ?? "not available";
  let tokenSpent = item.tokenSpent ?? "not available";
  let status = item.status || "";
  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <img
            src='./assets/images/boostPieChart.svg'
            className='img-fluid'
            alt=''
          />
        </td>
        <td>
          <div>
            <h5 className='font-sm2 mb-0 f-weight-600'>
              {boostDuration} {boostDuration > 1 ? 'hours' : 'hour'}
            </h5>
            <div className='d-flex mt-3'>
              <div className='d-flex mr-3'>
                <img
                  src='./assets/images/icon-cal.svg'
                  className='img-fluid'
                  alt=''
                />
                <span className='ml-2 font-sm f-weight-600'>{startDate}</span>
              </div>
              <div className='d-flex'>
                <img
                  src='./assets/images/icon-cal.svg'
                  className='img-fluid'
                  alt=''
                />
                <span className='ml-2 font-sm f-weight-600'>{endDate}</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <h5 className='font-sm2 mb-0 f-weight-600'>{tokenSpent} Tokens</h5>
            <div className='mt-3'>
              <span className='font-sm'>≈ ₦{nairaSpent}</span>
            </div>
          </div>
        </td>
        <td>
          <p className='mb-0 f-weight-600'>{appearance} times</p>
        </td>
        <td>
          <div
            className={`${
              status.toLowerCase() == "active"
                ? "successful-status"
                : "failed-status"
            }`}
          >
            {status}
          </div>
        </td>
        <td>
          <img src='./assets/images/Stats.svg' className='img-fluid' alt='' />
        </td>
      </tr>
    </>
  );
};

export default BoostsList;
