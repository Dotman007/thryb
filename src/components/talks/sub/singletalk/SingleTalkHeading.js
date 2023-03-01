import React from "react";

const SingleTalkHeading = () => {
  return (
    <div className='d-flex justify-content-between members-header mb-2'>
      <div className='d-flex'>
        <h3 className='f-weight-500 pr-3'>All Member</h3>
        <div className='search-div position-relative pl-2 pb-2'>
          <input
            type='text'
            className='w-100'
            placeholder='Search'
            id='member-search-field'
          />
          <img
            src='./assets/images/searchIcon.svg'
            className='position-absolute member-search-icon'
            alt='Search'
          />
        </div>
      </div>
      <div className='member-sort p-2 d-flex'>
        <span className='font-sm'>Sort By</span>
        <img
          src='./assets/images/filter-icon.svg'
          className='img-fluid'
          alt='filter'
        />
      </div>
    </div>
  );
};

export default SingleTalkHeading;
