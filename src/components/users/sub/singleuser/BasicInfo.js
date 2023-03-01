import React from "react";
import { useEffect } from "react";
const BasicInfo = ({ basicInfo, basicInfoSpinner, fetchBasicInfo }) => {
  useEffect(() => {
    fetchBasicInfo();
  });
  let religion = basicInfo.religion || "Not Available";
  let drinking = basicInfo.drinking ? "Yes" : "No" ;
  let horoscope = basicInfo.horoscope || "Not Available";
  let interestedIn = basicInfo.interestedIn || "Not Available";
  let seeking = basicInfo.seeking  || "Not Available";
  let smoking = basicInfo?.smoking ? "Yes" : "No";
  let wantsKid = basicInfo.wantsKid ? "Yes" : "No";
  let education = basicInfo.education || "Not Available";
  let location = basicInfo.location || "Not Available";
  return (
    <>
      {!basicInfoSpinner && (
        <div
          className='tab-pane fade show active'
          id='v-pills-bInfo'
          role='tabpanel'
          aria-labelledby='v-pills-bInfo-tab'
          style={{ opacity: "1" }}
        >
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/industry-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Religion
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {religion} <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/horoscope-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Horoscope
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {horoscope} <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/interestedIn-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Interested in
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {interestedIn} <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm d-flex align-items-center'>
              <i
                className='fa fa-heart-o mr-2'
                style={{ fontSize: "18px" }}
              ></i>
              Seeking
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {seeking}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/kids-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Wants Kids
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {wantsKid}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/smoking-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Smoking
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {smoking}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/beerIcon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Drinking
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {drinking}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/education-icon.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Education
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {education}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <span className='font-sm'>
              <img
                src='/assets/images/Location.svg'
                className='img-fluid mr-2'
                alt='industry'
              />
              Location
            </span>
            <a href='#' className='font-sm text-dark f-weight-600'>
              {location}
              <i className='fa fa-angle-right ml-2'></i>
            </a>
          </div>
        </div>
      )}
      {basicInfoSpinner && <div className='spinner'></div>}
    </>
  );
};

export default BasicInfo;
