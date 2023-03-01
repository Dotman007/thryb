import React, { useState, useEffect } from "react";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import { ClickAwayListener } from '@mui/base';

const SeeksList = ({
  showBtn,
  setShowBtn,
  seeksPage,
  setSeeksPage,
  item,
  seekInfo,
  setSeekInfo,
  search,
  setSearch
}) => {
  let navigate = useNavigate();
  const [display, setDisplay]= useState('');
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);
  let cost = item.cost || "unknown";
  let authorImage = userImage?.image?.includes("pic")
  ? userImage?.image?.substring(8)
  : userImage?.image?.includes("data")
  ? userImage?.image?.substring(22)
  : "./assets/images/user-avatar.svg";
  let creatorName = userName.userName || "unknown";
  let duration = item.duration || "unknown";
  let startDate = item.startTime.substring(0,item.startTime.indexOf('T')) || "unknown";
  let startTime = item.startTime.substring(item.startTime.lastIndexOf('T') + 1,item.startTime.lastIndexOf('T') + 8) || "unknown";
  let firstDescription = item.firstDescription || "unknown";
  let secondDescription = item.secondDescription || "unknown";
  let status = item.status;
  let userId = item.userId ?? -1;
  let seekId = item.seekId ?? -1;
  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorImage?id=${10005}`
        );
        setUserImage(response.data);
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
  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorUserName?id=${userId}`
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
  useEffect(() => {
    if (search !== "" && firstDescription !== "unknown") {
      if (search !== "") {
        if (firstDescription?.toLowerCase()?.includes(search?.toLowerCase()) || secondDescription?.toLowerCase()?.includes(search?.toLowerCase())) {
          setDisplay(true);
        } else {
          setDisplay(false);
        }
      }
      if (search == "") {
        setDisplay(true);
      }
    }
    if (search == "") {
      setDisplay(true);
    }
  }, [search]);


  return (
    <>
      <tr
        className={`${!display && 'hide'}`}
        style={{ backgroundColor: "white" }}
      >
        <td>
          <input
            type='checkbox'
            id='check'
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setShowBtn(false);
              } else {
                setShowBtn(true);
              }
            }}
          />
        </td>
        <td 
        colSpan='2' 
        onClick={() => {
          setSeekInfo({
            cost,
            authorImage,
            creatorName,
            duration,
            startTime,
            startDate,
            firstDescription,
            secondDescription,
            status,
            userId,
            seekId,
          });
          setSeeksPage("single");
        }}>
          <div className='d-flex align-items-center'>
            <div>
              <h6 className='f-weight-600'>
                {`${firstDescription}`} <br />
                <span className='sm-txt-seeks'>{`Seeker Info: ${secondDescription}`}</span>
              </h6>
              <span className='talks-author'>
                <img
                  src={`data:image/png;base64,${authorImage}`}
                  alt=''
                  className='talks-img'
                />
                &nbsp;&nbsp;Author - {creatorName}
              </span>
            </div>
          </div>
        </td>
        <td 
        onClick={() => {
          setSeekInfo({
            cost,
            authorImage,
            creatorName,
            duration,
            startTime,
            startDate,
            firstDescription,
            secondDescription,
            status,
            userId,
            seekId,
          });
          setSeeksPage("single");
        }}>
          <p className='mb-0 f-weight-600'>
            <span className="sm-time">{startDate} <br /> {startTime}</span>&nbsp;&nbsp;
          </p>
        </td>
        <td 
        onClick={() => {
          setSeekInfo({
            cost,
            authorImage,
            creatorName,
            duration,
            startTime,
            startDate,
            firstDescription,
            secondDescription,
            status,
            userId,
            seekId,
          });
          setSeeksPage("single");
        }}>
          <p className='mb-0 f-weight-600'>{cost} Tokens</p>
        </td>
        <td 
        onClick={() => {
          setSeekInfo({
            cost,
            authorImage,
            creatorName,
            duration,
            startTime,
            startDate,
            firstDescription,
            secondDescription,
            status,
            userId,
            seekId,
          });
          setSeeksPage("single");
        }}>
          <p className='mb-0 f-weight-600'>{duration}</p>
        </td>
        <td 
        onClick={() => {
          setSeekInfo({
            cost,
            authorImage,
            creatorName,
            duration,
            startTime,
            startDate,
            firstDescription,
            secondDescription,
            status,
            userId,
            seekId,
          });
          setSeeksPage("single");
        }}>
          <div className={`${status ? "successful-status" : "expired-status"}`}>
            {status ? "Active" : "Expired"}
          </div>
        </td>
        <td>
        <ClickAwayListener onClickAway={() => setShowOverlayMenu(false)} mouseEvent={'onMouseDown'}>
          <div className='dropdown position-relative ml-4'>
            <button
              className='btn'
              type='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false' 
              onClick={()=>{
                setShowOverlayMenu(true);
              }}
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
              className={`dropdown-menu mt-3 ${showOverlayMenu && 'show-overlay-menu'}`}
              aria-labelledby='dropdownMenuButton'
            >
              <div className='drop-down-menu-inner'>
                <a className='dropdown-item' href='#'>
                  Suspend
                </a>
                <a className='dropdown-item' href='#'>
                  Delete
                </a>
                <a className='dropdown-item' href='#'>
                  Update
                </a>
              </div>
            </div>
          </div>
          </ClickAwayListener>
        </td>
      </tr>
    </>
  );
};

export default SeeksList;
