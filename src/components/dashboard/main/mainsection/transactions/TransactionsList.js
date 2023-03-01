import React from "react";

const TransactionsList = ({ item }) => {
  let amount = item.amount || 0;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <>
      <div className='row justify-content-between mt-2'>
        <div className='col-4 mb-2'>
          <div className='d-flex align-items-center'>
            <div className='funding-div'>
              <img
                src='./assets/images/fund-icon.svg'
                className='img-fluid transactions-img'
                alt='withdrawal'
              />
            </div>
            <div className='ml-2'>
              <h5 className='font-sm mb-0 f-weight-600'>
                {item.transactionType}
              </h5>
              <p className='font-xs mb-0'>05.01.2020</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='d-flex justify-content-end'>
            <h5>{formatter.format(amount)}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionsList;
