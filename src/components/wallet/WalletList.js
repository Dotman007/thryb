import React from "react";

const WalletList = ({ item }) => {
  let accountOwner = item?.accountOwner || "unknown";
  let amount = item?.amount || 0;
  let cardType = item?.cardType || "unknown";
  let date = item?.date || "unknown";
  let image = item?.image || "assets/images/unknown.jpg";
  let transactionType = item?.transactionType || "unknown";
  let transsactionMedium = item?.transactionMedium;
  let status = item.status;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <div className='d-flex align-items-center mb-3'>
            {(transactionType.toLowerCase() == "gift purchase" ||
              transactionType.toLowerCase() == "top up" ||
              transactionType.toLowerCase() == "deposit") && (
              <div className='funding-div'>
                {transactionType.toLowerCase() == "top up" ? (
                  <img
                    src='./assets/images/fund-icon.svg'
                    className='img-fluid'
                    alt='withdrawal'
                  />
                ) : (
                  <i className='fa fa-gift text-success'></i>
                )}
              </div>
            )}
            {(transactionType.toLowerCase() == "withdrawal" ||
              transactionType.toLowerCase() == "gift sale" ||
              transactionType.toLowerCase() == "exchange") && (
              <div className='withdrawal-div'>
                {transactionType.toLowerCase() == "withdrawal" && (
                  <img
                    src='./assets/images/withdrawal-arrow.svg'
                    className='img-fluid'
                    alt='withdrawal'
                  />
                )}
                {transactionType.toLowerCase() == "exchange" && (
                  <img
                    src='./assets/images/exchange-icon.svg'
                    className='img-fluid'
                    alt='withdrawal'
                  />
                )}
                {transactionType.toLowerCase() == "gift sale" && (
                  <i className='fa fa-gift text-danger'></i>
                )}
              </div>
            )}
            <span className='f-weight-600 ml-2'>{transactionType}</span>
          </div>
          <span className='talks-author'>
            <img src={image} alt='' className="tiny-img"/>
            &nbsp;&nbsp;By {accountOwner}
          </span>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            {cardType.toLowerCase() == "mastercard" && (
              <div className='master-card-div'>
                <img
                  src='./assets/images/master-card-icon.svg'
                  className='img-fluid'
                  alt=''
                />
              </div>
            )}
            {cardType.toLowerCase() == "visa" && (
              <div className='visa-card-div bg-visa-blue'>
                <img
                  src='./assets/images/visa-logo.svg'
                  className='img-fluid'
                  alt=''
                />
              </div>
            )}
            <div className='ml-2'>
              <h5 className='font-sm mb-0 f-weight-600'>{cardType}</h5>
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
            className={`
              ${
                status
                  ? "successful-status"
                  : status == null
                  ? "pending-status"
                  : status == false
                  ? "failed-status"
                  : ""
              }
            `}
          >
            {!status
              ? "Pending"
              : status.toLowerCase() == "success"
              ? "Successful"
              : status.toLowerCase() == "settled"
              ? "Settled"
              : status == null
              ? "Pending"
              : ""}
          </div>
        </td>
        <td>
          <h5>
            <span>
              {transactionType.toLowerCase() == "withdrawal" ? "-" : "+"}
            </span>
            {formatter.format(amount)}
          </h5>
        </td>
      </tr>
    </>
  );
};

export default WalletList;
