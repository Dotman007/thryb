import React from "react";
import { useNavigate } from "react-router-dom";

const SpeakersList = ({ singleTalkInfo, setSingleTalkInfo, item }) => {
  const navigate = useNavigate();
  let name = item?.speakerName || "Unknown";
  let img = item?.speakerImage || "assets/images/unknown.jpg";
  let profession = item?.profession || "Not Available";
  let speakerId = item?.speakerId 
  let age = item?.age ?? "";
  return (
    <>
      <div className='col-xl-2 col-md-4 mb-3' onClick={()=>{
      navigate(`/user/${speakerId}`);
    }}>
        <div className='position-relative talk-images'>
          <img className='img-fluid' src={img} alt='' />
          <div className='position-absolute w-100 inner-image2'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='text-white pl-2 font-sm2 f-weight-700 mb-0'>
                {name}, {age}
              </h6>
              <button
                className='btn'
                type='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_1251_27914)'>
                    <path
                      d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                      fill='white'
                    ></path>
                    <path
                      d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                      fill='white'
                    ></path>
                    <path
                      d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                      fill='white'
                    ></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_1251_27914'>
                      <rect width='12' height='12' fill='white'></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <span className='text-white pl-2 font-sm f-weight-600 mb-5'>
              {profession}
            </span>
          </div>
          <div
            className='position-absolute'
            style={{ top: "15px", right: "15px" }}
          >
            <img src='./assets/images/mutemic-icon.svg' alt='mutemic-icon' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersList;
