import React from "react";
import { useNavigate } from "react-router-dom";

const FewActivities = ({ setPlansPage, item }) => {
  const content = item?.content ?? "Not Available";
  const navigate = useNavigate();
  return (
    <>
      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
        <div className='position-absolute green-circle'></div>
        <div className='col-lg-3 col-3'>
          <span className='font-sm2 f-weight-600'>00 :09</span>
        </div>
        <div className='col-lg-9 col-9'>
          <p className='mb-0 notifs-content font-sm2'>{content}</p>
        </div>
      </div>
    </>
  );
};

export default FewActivities;
