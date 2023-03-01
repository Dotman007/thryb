import React,{useState, useEffect} from "react";
import GamesImg from "./GamesImg";

const GamesList = ({ showBtn, setShowBtn, gamesPage, setGamesPage, item, search, setSearch, singleGame, setSingleGame }) => {
  let banner = item?.banner || "assets/images/unknown.jpg";
  let datePublished = item?.datePublished || "assets/images/unknown.jpg";
  let type = item?.type || "unknown";
  let name = item?.name || "unknown";
  let status = item?.status;
  let participants = item?.participants || [];
  let remainingParticipants =
    participants.length < 4 ? 0 : participants.length - 4;
  const [display, setDisplay] = useState('');
  let id = item?.id || -1;

  useEffect(() => {
    if (search !== "" && name !== "unknown") {
      if (search !== "") {
        if (name?.toLowerCase()?.includes(search?.toLowerCase())) {
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
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }} className={`${!display && 'hide'}`}  onClick={()=>{
        setSingleGame({
          banner,
          datePublished,
          type,
          name,
          status,
          participants,
          id
        });
      }}>
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
        <td>
          <img
            src={banner}
            alt='Game Banner'
            className={`banner-img ${!status && "blur"}`}
          />
        </td>
        <td onClick={() => setGamesPage("single")}>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='font-sm2 f-weight-700 mt-2'>{name}</h6>
            <div className='d-flex align-items-center'>
              <img
                className='img-fluid'
                src='./assets/images/calender-icon.svg'
                alt='calendar icon'
                style={{ height: "16px", width: "16px" }}
              />
              <span className='font-sm ml-2'>Published on {datePublished}</span>
            </div>
          </div>
        </td>
        <td>
          <h6 className='mb-0 f-weight-600 font-sm2'>{type}</h6>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            <div>
              <GamesImg data={participants} />
            </div>
            <span className='font-xs f-weight-700'>
              {remainingParticipants > 0 && remainingParticipants}
              {remainingParticipants > 0 && "+"}
            </span>
          </div>
        </td>
        <td>
          <div className='successful-status'>
            <span
              className={`${status ? "successful-status" : "expired-status"}`}
            >
              {status ? "Active" : "Expired"}
            </span>
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
    </>
  );
};

export default GamesList;
