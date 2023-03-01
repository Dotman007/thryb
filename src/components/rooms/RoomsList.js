import React from "react";
import RoomsMembers from "./RoomsMembers";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import { ClickAwayListener } from '@mui/base';

const RoomsList = ({
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
  item,
  singleRoomInfo,
  setSingleRoomInfo,
  search,
  setSearch
}) => {
  const navigate = useNavigate();
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);
  let id = item.creatorId ?? -1;
  let roomId = item.roomId ?? -1;
  let banner = item.banner || "assets/images/unknown.jpg";
  let roomTitle = item.roomTitle || "unknown";
  const [roomCreatorImg, setRoomCreatorImg] = useState("");
  let dateCreated = item.dateCreated || "unknown";
  let date = item.dateCreated.substring(0,item.dateCreated.indexOf('T')) || "unknown";
  let time = item.dateCreated.substring(item.dateCreated.lastIndexOf('T') + 1,item.dateCreated.lastIndexOf('T') + 8) || "unknown";
  let status = item.status;
  let creatorImg =
    roomCreatorImg?.image?.substring(8) || "assets/images/unknown.jpg";
  const [roomCreator, setRoomCreator] = useState("");
  let creatorName = roomCreator?.userName || "unknown";
  const [roomMembers, setRoomMembers] = useState("");
  let members = item?.memberDto || [];
  let roomDescription = item.description || "unknown";
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const fetchCreatorImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorImage?id=${id}`
        );
        setRoomCreatorImg(response.data);
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
          `/GetRoomCreatorUserName?id=${id}`
        );
        setRoomCreator(response.data);
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
          `/ThrybeRoomMember?roomId=${roomId}`
        );
        setRoomMembers(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (roomId !== -1) fetchCreatorImage();
  }, [roomId]);

  useEffect(() => {
    if (search !== "" && roomTitle !== "unknown") {
      if (search !== "") {
        if (roomTitle?.toLowerCase()?.includes(search?.toLowerCase())) {
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
        style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}
        className={`${!display && 'hide'}`}
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
        <td colSpan='2' 
        onClick={() => {
          setSingleRoomInfo({
            roomTitle,
            banner,
            dateCreated,
            status,
            creatorImg,
            creatorName,
            roomMembers,
            roomDescription,
            roomId,
            time,
            date
          });
          setRoomsPage("single");
        }}>
          <div className='d-flex align-items-start'>
            <img
              src={banner}
              alt=''
              className={`banner-img ${
                status.toLowerCase() == "inactive" && "blur"
              }`}
            />
          </div>
        </td>
        <td onClick={() => {
          setSingleRoomInfo({
            roomTitle,
            banner,
            dateCreated,
            status,
            creatorImg,
            creatorName,
            roomMembers,
            roomDescription,
            roomId,
            time,
            date
          });
          setRoomsPage("single");
        }}>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='font-sm f-weight-700 mt-2'>{roomTitle}</h6>
            <div>
              <img
                className='img-fluid h-50 w-25 rooms-img'
                src={`data:image/png;base64, ${creatorImg}`}
                alt='talkauthorPic'
              />
              <span className='font-sm w-75 ml-1 mb-4'>
                Author - {creatorName}
              </span>
            </div>
          </div>
        </td>
        <td onClick={() => {
          setSingleRoomInfo({
            roomTitle,
            banner,
            dateCreated,
            status,
            creatorImg,
            creatorName,
            roomMembers,
            roomDescription,
            roomId,
            time,
            date
          });
          setRoomsPage("single");
        }}>
          <div>
            <span className='f-weight-600'> {date} <br /> {time}</span>
          </div>
        </td>
        <td onClick={() => {
          setSingleRoomInfo({
            roomTitle,
            banner,
            dateCreated,
            status,
            creatorImg,
            creatorName,
            roomMembers,
            roomDescription,
            roomId,
            time,
            date
          });
          setRoomsPage("single");
        }}>
          <div className='d-flex align-items-center'>
            <div>
              <RoomsMembers data={roomMembers} />
            </div>
          </div>
        </td>
        <td onClick={() => {
          setSingleRoomInfo({
            roomTitle,
            banner,
            dateCreated,
            status,
            creatorImg,
            creatorName,
            roomMembers,
            roomDescription,
            roomId,
            time,
            date
          });
          setRoomsPage("single");
        }}>
          <div
            className={`${
              status.toLowerCase() == "active"
                ? "successful"
                : status.toLowerCase() == "inactive"
                ? "failed"
                : status.toLowerCase() == "pending"
                ? "pending"
                : ""
            }-status`}
          >
            <span className='font-xs'>{status}</span>
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
              aria-expanded='true'
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

export default RoomsList;
