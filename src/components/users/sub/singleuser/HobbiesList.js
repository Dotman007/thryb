import React from "react";

const HobbiesList = ({ item }) => {
  const hobbyName = item.name || "unknown";
  return (
    <div className='col-xl-4 col-mb-6 mb-3'>
      <div href='#' className='custom-card-sm'>
        {/* <img
          src='./assets/images/photography-icon.svg'
          className='img-fluid mr-3'
          alt='Photography'
        /> */}
        <p className='mb-0 font-sm2 f-weight-600'>{hobbyName}</p>
      </div>
    </div>
  );
};

export default HobbiesList;
