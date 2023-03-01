import React from "react";
import { fetchDataWithAxios } from "../../../../../config/fetchDataWithAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TrendingTalksList = ({ item }) => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState("");
  const [creatorImage, setCreatorImg] = useState("");
  let id = item?.creatorId || -1;
  let src = creatorImage?.image?.substring(8) || "./assets/images/unknown.jpeg";
  let author = creator?.userName || "unknown";
  let date = item.datePublished || "unknown";
  let topic = item.topic || "unknown";
  const [display, setDisplay]= useState(false);


  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorUserName?id=${id}`
        );
        setCreator(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id !== -1) fetchCreatorImage();
  }, [id]);
  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorImage?id=${id}`
        );
        setCreatorImg(response.data);
        setDisplay(true);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id !== -1) fetchCreatorImage();
  }, [id]);
  return (
    <>
      <li className={`row justify-content-between align-items-center ${!display && 'display-none'}`}>
        <div className='col-9'>
          <span className='talks-author'>
            <img
              src={`data:image/png;base64, ${src}`}
              alt=''
              className='avatar'
            />
            &nbsp;&nbsp;By {author}
          </span>
          <h4 className='talk-topic mt-2'>{topic}</h4>
          <span className='talks-date mt-2'>
            <img src='./assets/images/calender-icon.svg' alt='' />
            &nbsp;&nbsp;Published on {date}
          </span>
        </div>
        <div className='col-3'>
          <div className='dropdown ml-4'>
            <button
              className='btn'
              type='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
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
      </li>
    </>
  );
};

export default TrendingTalksList;
