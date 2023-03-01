import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";

const RoomMembersList = ({ item }) => {
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  let email = userDetails.email || "";
  let isVerified = userDetails.isVerified || false;
  let status = userDetails.status || "";
  let location = userDetails.location || "";
  let age = item.age ?? "";
  let profession = item.profession || "not available";
  let image = item.memberImage || "assets/images/unknown.jpg";
  let name = item.memberName || "unknown";
  let memberId = item.memberId ?? -1;
  let flag = "https://countryflagsapi.com/png/" + location;
  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorUserName?id=${memberId}`
        );
        setUserDetails(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (memberId !== -1) fetchCreatorImage();
  }, [memberId]);
  return (
    <tr
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.65)",
      }}
      onClick={()=>{
        navigate(`/user/${memberId}`);
      }}
    >
      <td colSpan='2'>
        <div className='d-flex justify-content-start'>
          <img
            className='img-fluid room-member'
            src={image}
            alt='members-avatar room-member'
          />
          <div className='d-flex flex-column align-items-start'>
            <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>{name}</h6>
            <div className='ml-5'>
              <span className='font-sm w-75 ml-1 mb-4'>{profession},</span>
              <span className='font-sm w-75 ml-1 mb-4'>{age}</span>
              {isVerified && (
                <img
                  src='./assets/images/verified-icon.svg'
                  alt='verified-icon'
                />
              )}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className='d-flex align-items-center'>
          <p className='f-weight-700'>{email}</p>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <img src='./assets/images/Location.svg' alt='Location' />
          <span className='p-2'>{location}</span>
          <img src={flag} alt='' className='img-location' />
        </div>
      </td>
      <td>
        <div className={`${status.toLowerCase()}-status`}>
          <span className='font-xs'>{status}</span>
        </div>
      </td>
      <td>
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
      </td>
    </tr>
  );
};

export default RoomMembersList;
