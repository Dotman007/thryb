import React from "react";

const MoreList = ({ item, userId, setUserId }) => {
  let amount = item.amount ?? 0;
  let date = item.transactionDate || "unknown";
  let transactionType = item.transactionType || "unknown";
  let transactionMedium = item.transationMedium || "";
  let status = item.status;

  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <div className='d-flex align-items-center'>
            <div className='withdrawal-div'>
              <img
                src={`${
                  transactionType.toLowerCase() == "withdrawal"
                    ? "./assets/images/withdrawal-arrow.svg"
                    : "./assets/images/fund-icon.svg"
                }`}
                className='img-fluid'
                alt='withdrawal'
              />
            </div>
            <span className='f-weight-600 ml-2'>{transactionType}</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            {/* <div className='master-card-div'>
              <img
                src='./assets/images/master-card-icon.svg'
                className='img-fluid'
                alt=''
              />
            </div> */}
            <div className='ml-2'>
              {/* <h5 className='font-sm mb-0 f-weight-600'>My Master card</h5>
              <p className='font-xs mb-0'>0924 ******* 5675</p> */}
              <p className='mb-0 f-weight-600'>
                <span className='mr-2'>{transactionMedium}</span>
              </p>
            </div>
          </div>
        </td>
        <td>
          <p className='mb-0 f-weight-600'>
            <span className='mr-2'>{date}</span>
          </p>
        </td>
        <td>
          <div
            className={`${
              status == "success"
                ? "successful-status"
                : status == "failed"
                ? "failed-status"
                : ""
            }`}
          >
            {status}
          </div>
        </td>
        <td>
          <h5>{amount}</h5>
        </td>
      </tr>
    </>
  );
};

export default MoreList;
