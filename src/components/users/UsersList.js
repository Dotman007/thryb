import React from "react";
import { useState, useEffect } from "react";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import { ClickAwayListener } from '@mui/base';

const UsersList = ({
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  item,
  userId,
  setUserId,
  singleUserInfo,
  setSingleUserInfo,
  search,
  setSearch
}) => {
  let navigate = useNavigate();
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);
  const [userAvatarName, setUserAvatarName] = useState("");
  let status = item.status || "unknown";
  let email = item.email || "unknown";
  let userid = item.userId ?? -1;
  let flag = "https://countryflagsapi.com/png/" + item.location;
  let avatar = userAvatarName.avatar || "./assets/images/unknown.jpeg";
  let fullName = userAvatarName.fullName || "unknown";
  let profession = userAvatarName.profession || "unknown";
  let age = userAvatarName.age || "unknown";
  let isVerified = item.isVerified || null;
  let location = item.location ?? "not available";
  const [display, setDisplay] = useState('');

  
  useEffect(() => {
    const fetchThrybeUsers = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/UserAvatar?id=${userid}`
        );
        setUserAvatarName(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (userid !== -1) fetchThrybeUsers();
  }, [userid]);

  useEffect(() => {
    if (search !== "" && fullName !== "unknown") {
      if (search !== "") {
        if (fullName?.toLowerCase()?.includes(search?.toLowerCase()) || email?.toLowerCase()?.includes(search?.toLowerCase()) || location?.toLowerCase()?.includes(search?.toLowerCase())) {
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
        className={`${status == "pending" ? "pending" : "white"} ${
          status == "suspended" && "blur"
        } ${!display && 'hide'}`}
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
            setUserId(userid);
            setSingleUserInfo({
              status,
              email,
              userid,
              flag,
              avatar,
              fullName,
              profession,
              age,
              isVerified,
              location,
            });
            setUsersPage("single");
          }}
        >
          <div
            className='d-flex align-items-center gap-10'
            onClick={() => {
              setUserId(userid);
              setSingleUserInfo({
                status,
                email,
                userid,
                flag,
                avatar,
                fullName,
                profession,
                age,
                isVerified,
                location,
              });
              setUsersPage("single");
            }}
          >
            <img src={avatar} alt='' className='avatar' />
            <div>
              <h6>{fullName}</h6>
              <span>
                {profession} &nbsp;&nbsp; {age} &nbsp;&nbsp;
                {isVerified && (
                  <img src='./assets/images/Verified-user.svg' alt='Verified' />
                )}
              </span>
            </div>
          </div>
        </td>
        <td  onClick={() => {
            setUserId(userid);
            setSingleUserInfo({
              status,
              email,
              userid,
              flag,
              avatar,
              fullName,
              profession,
              age,
              isVerified,
              location,
            });
            setUsersPage("single");
          }}>{email}</td>
        <td  onClick={() => {
            setUserId(userid);
            setSingleUserInfo({
              status,
              email,
              userid,
              flag,
              avatar,
              fullName,
              profession,
              age,
              isVerified,
              location,
            });
            setUsersPage("single");
          }}>
          <span>
            <img src='./assets/images/Location.svg' alt='Location' />
            &nbsp;&nbsp; {item.location} &nbsp;&nbsp;
            <img src={flag} alt='Flag' className='img-location' />
          </span>
        </td>
        <td  onClick={() => {
            setUserId(userid);
            setSingleUserInfo({
              status,
              email,
              userid,
              flag,
              avatar,
              fullName,
              profession,
              age,
              isVerified,
              location,
            });
            setUsersPage("single");
          }}>
          <div className={`${status.toLowerCase()}-status`}>{status}</div>
        </td>
        <td>
        <ClickAwayListener onClickAway={() => setShowOverlayMenu(false)} mouseEvent={'onMouseDown'}>
          <div className='dropdown position-relative ml-4 showOnHover'>
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
                {/* <a className='dropdown-item' href='#'>
                  Something else here
                </a> */}
              </div>
            </div>
          </div>
        </ClickAwayListener>
        </td>
      </tr>
    </>
  );
};

export default UsersList;
