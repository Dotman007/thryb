import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTalkBreadCrumb = ({
  setPage,
  setTalksPage,
  talkTitle,
  date,
  time,
  status,
  authorImg,
  author,
  speakers,
  members,
}) => {
  const navigate = useNavigate();
  return (
    <div className='row mb-3'>
      <div className='col-12 mt-5'>
        <div className='d-flex align-item-center'>
          <ul className='d-flex'>
            <li
              className='mr-2'
              onClick={() => {
                setPage("login");
                navigate("/");
              }}
            >
              <i className='fa fa-home'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
            </li>
            <li className='mr-2' onClick={() => setTalksPage("talks")}>
              <i className='fa fa-chevron-right font-xs'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1'>
                Thrybe Talk
              </span>
            </li>
            <li className='mr-2'>
              <i className='fa fa-chevron-right font-xs'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1'>
                <strong>{talkTitle}</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-12 p-3'>
        <div className='d-flex flex-column custom-card position-relative'>
          <h3 className='f-weight-600'>{talkTitle}</h3>
          <p className='font-sm2 mt-3'>
            How to date Chinese women with easeLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent volutpat, quam eu scelerisque
            vestibulum, nulla magna gravida risus, vitae rhoncus libero lectus
            et dolor. Donec elementum magna ac dui imperdiet luctus. Phasellus
            mattis libero metus, ac scelerisque augue tempor ac.
          </p>
          <div className='d-flex talk-authors mb-3'>
            <div className='pt-1 mr-3'>
              <img
                src='./assets/images/author-pic.svg'
                alt='talkauthorPic'
                className='h-100'
              />
              <span className='font-sm'>Author - {author}</span>

              <div className='inner-card green mb-2'>
                <span className='font-sm mr-2'>Active</span>
              </div>
            </div>
            <div className='pt-4 mr-3'>
              <img
                src='./assets/images/calender-icon.svg'
                alt='calendar'
                className='h-25 pr-2'
              />
              <span className='font-sm'> {date} {time}</span>
            </div>
            <div className='pt-4 mr-3'>
              <img
                src='./assets/images/allTalksIcon.svg'
                alt='talkauthorPic'
                className='h-25 pr-2'
              />
              <span className='font-sm'>{speakers?.length} Speakers</span>
            </div>
            <div className='pt-4 mr-3'>
              <img
                src='./assets/images/profile-icon.svg'
                alt='talkauthorPic'
                className='h-25 pr-2'
              />
              <span className='font-sm'>{members?.length} Attendees</span>
            </div>
          </div>
          <div className='talk-media d-flex justify-content-between w-100'>
            <div className='media-player pt-1 pl-3'>
              <img
                className='pr-2'
                src='./assets/images/rewind-icon.svg'
                alt='rewind'
              />
              <img
                className='pr-2'
                src='./assets/images/pause-icon.svg'
                alt='pause'
              />
              <img
                className='pr-2'
                src='./assets/images/play-icon.svg'
                alt='play'
              />
              <img
                className='pr-2'
                src='./assets/images/forward-icon.svg'
                alt='forward'
              />
              <img
                className='pr-2'
                src='./assets/images/speaker-icon.svg'
                alt='forward'
              />
            </div>
            <div className='dropdown position-relative ml-4'>
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
                      fill='black'
                    ></path>
                    <path
                      d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                      fill='black'
                    ></path>
                    <path
                      d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                      fill='black'
                    ></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_1251_27914'>
                      <rect width='12' height='12' fill='white'></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div
                className='dropdown-menu mt-3 my---dropdown'
                aria-labelledby='dropdownMenuButton'
                x-placement='top-start'
                style={{
                  position: "absolute",
                  willChange: "transform",
                  top: "0px",
                  left: "0px",
                  transform: "translate3d(-95px, -134px, 0px)",
                }}
              >
                <div className='drop-down-menu-inner'>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTalkBreadCrumb;
