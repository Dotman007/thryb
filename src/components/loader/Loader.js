import React from "react";

const Loader = () => {
  return (
    <div className='loader-overlay'>
      <img
        src='./assets/images/loader-img.svg'
        className='loader-img'
        alt='img'
      />
    </div>
  );
};

export default Loader;
