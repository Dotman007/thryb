import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";

const SubmittedProfilesList = ({ item }) => {
  const navigate = useNavigate();
  const submitterId = item?.profileSubmiterId ?? -1;
  const seekCreatorId = item?.thrybeSeekCreatorId ?? -1;
  const seekId = item?.thrybeSeekId ?? -1;
  const seekCreatorName = item?.thrybeSeekCreatorName || "Not Available";
  const profileSubmitterName = item?.profileSubmiterName || "Not Available";
  const profileSubmitterId = item?.profileSubmiterId || "Not Available";
  const userId = item?.id ?? -1;
  const dateCreated = item?.dateCreated || "Not Available";
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const userImage = userImg?.image?.includes("pic")
  ? userImg?.image?.substring(8)
  : userImg?.image?.includes("data")
  ? userImg?.image?.substring(22)
  : "./assets/images/user-avatar.svg";
  const username = userName?.userName || "Not Available";
  const email = userName?.email || "Not Available";
  const fullName = userName?.fullName || "Not Available";
  const location = userName?.location || "Not Available";
  const status = userName?.status || "Inactive";
  const isVerified = userName?.isVerified || "Not Available";
  let flag = "https://countryflagsapi.com/png/" + location;

  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorImage?id=${profileSubmitterId}`
        );
        setUserImg(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (userId !== -1) fetchCreatorImage();
  }, [userId]);
  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorUserName?id=${profileSubmitterId}`
        );
        setUserName(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (userId !== -1) fetchCreatorImage();
  }, [userId]);

  return (
    <tr style={{ backgroundColor: "white" }} onClick={()=>{
      navigate(`/user/${profileSubmitterId}`);
    }}>
      <td colSpan='2'>
        <div className='d-flex align-items-center'>
          <img
            src={`data:image/png;base64, ${userImage}`}
            alt=''
            className='avatar'
          />
          <div>
            <h6>{profileSubmitterName}</h6>
            <span>
              YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
              {isVerified && (
                <img src='/assets/images/Verified-user.svg' alt='Verified' />
              )}
            </span>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        <span>
          <img src={"./assets/images/Location.svg"} alt='Location' />
          &nbsp;&nbsp; {location} &nbsp;&nbsp;
          <img src={flag} alt='Flag' className='img-location' />
        </span>
      </td>
      <td>
        <div className={`${status.toLowerCase()}-status`}>{status}</div>
      </td>
      <td>
        <div className='dropdown position-relative ml-4'>
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
            className='dropdown-menu mt-3'
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
      </td>
    </tr>
  );
};

export default SubmittedProfilesList;
