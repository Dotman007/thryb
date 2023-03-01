import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagementNav = ({ page, setPage, myArray }) => {
  let navigate = useNavigate();
  const [showNavList, setShowNavList] = useState(true);
  let usersTextColor = "";
  page == "users" ? (usersTextColor = "#842a83") : (usersTextColor = "#555555");
  let usersFontWeight = "";
  page == "users" ? (usersFontWeight = "600") : (usersFontWeight = "500");
  let talksTextColor = "";
  page == "talks" ? (talksTextColor = "#842a83") : (talksTextColor = "black");
  let talksFontWeight = "";
  page == "talks" ? (talksFontWeight = "600") : (talksFontWeight = "500");
  let seeksTextColor = "";
  page == "seeks" ? (seeksTextColor = "#842a83") : (seeksTextColor = "black");
  let seeksFontWeight = "";
  page == "seeks" ? (seeksFontWeight = "600") : (seeksFontWeight = "500");
  let roomsTextColor = "";
  page == "rooms" ? (roomsTextColor = "#842a83") : (roomsTextColor = "black");
  let roomsFontWeight = "";
  page == "rooms" ? (roomsFontWeight = "600") : (roomsFontWeight = "500");
  let storeTextColor = "";
  page == "store" ? (storeTextColor = "#842a83") : (storeTextColor = "black");
  let storeFontWeight = "";
  page == "store" ? (storeFontWeight = "600") : (storeFontWeight = "500");
  let gamesTextColor = "";
  page == "games" ? (gamesTextColor = "#842a83") : (gamesTextColor = "black");
  let gamesFontWeight = "";
  page == "games" ? (gamesFontWeight = "600") : (gamesFontWeight = "500");
  // const pages = userDetails.userPermission.map((page) => page.pageName)

  return (
    <>
      <div
        className='d-flex justify-content-between mt-4 menu-header'
        onClick={() => setShowNavList(!showNavList)}
      >
        Management
        <i
          className={`fa ${showNavList ? "fa-angle-down" : "fa-angle-right"}`}
        ></i>
      </div>
      <ul className={`nav-menu mt-3 ${!showNavList && "not-show"}`}>
        {myArray.includes("Seeks") && (
          <li
            className={`nav-item ${page == "seeks" && "active"}`}
            onClick={() => {
              navigate("/seeks");
              setPage("seeks");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.3892 5.25171L19.6636 5.25171L19.6636 12.5425'
                    stroke={seeksTextColor}
                    strokeWidth='2'
                  />
                  <line
                    y1='-1'
                    x2='10.1647'
                    y2='-1'
                    transform='matrix(-0.70631 0.707903 -0.70631 -0.707903 18.687 4.69897)'
                    stroke={seeksTextColor}
                    strokeWidth='2'
                  />
                  <path
                    d='M19.671 15.7381V20.5928L4.26416 20.5928V5.33969L8.88638 5.3396'
                    stroke={seeksTextColor}
                    strokeWidth='2'
                  />
                </svg>
              </i>
              <span
                className='pl-4'
                style={{ color: seeksTextColor, fontWeight: seeksFontWeight }}
              >
                Seeks
              </span>
            </div>
          </li>
        )}
        {myArray.includes("Talks") && (
          <li
            className={`nav-item ${page == "talks" && "active"}`}
            onClick={() => {
              navigate("/talks");
              setPage("talks");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='9'
                    y='1.48828'
                    width='6'
                    height='14'
                    rx='3'
                    stroke={talksTextColor}
                    strokeWidth='2'
                  />
                  <path
                    d='M5 9.98828V12.4883C5 16.3543 8.13401 19.4883 12 19.4883V19.4883C15.866 19.4883 19 16.3543 19 12.4883V9.98828'
                    stroke={talksTextColor}
                    // fill= {`${page =='talks'? '#842a83': 'none'}`}
                    strokeWidth='2'
                  />
                  <path
                    d='M12 19.4883V23.4883'
                    stroke={talksTextColor}
                    // fill= {`${page =='talks'? '#842a83': 'none'}`}
                    strokeWidth='2'
                  />
                  <path
                    d='M16 23.4883H8'
                    stroke={talksTextColor}
                    strokeWidth='2'
                  />
                </svg>
              </i>
              <span
                className='pl-4'
                style={{ color: talksTextColor, fontWeight: talksFontWeight }}
              >
                Talks
              </span>
            </div>
          </li>
        )}
        {myArray.includes("Store") && (
          <li
            className={`nav-item ${page == "store" && "active"}`}
            onClick={() => {
              navigate("/store");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='20'
                  height='25'
                  viewBox='0 0 20 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.9205 23.4858L18.4601 7.2219C18.4202 6.77775 18.048 6.43754 17.6021 6.43754H14.5904V5.07924C14.5904 2.54779 12.531 0.488281 9.99969 0.488281C7.46847 0.488281 5.40931 2.54779 5.40931 5.07924V6.43754H2.39557C1.9497 6.43754 1.57745 6.77775 1.53759 7.2219L0.0714376 23.5498C0.0498444 23.7908 0.130474 24.0295 0.293686 24.208C0.456898 24.3865 0.687646 24.4882 0.929421 24.4882H19.0684C19.069 24.4882 19.07 24.4882 19.0707 24.4882C19.5465 24.4882 19.9321 24.1025 19.9321 23.6267C19.932 23.5788 19.9281 23.5316 19.9205 23.4858ZM7.13217 5.07924C7.13217 3.49777 8.41857 2.21114 9.99981 2.21114C11.5812 2.21114 12.8677 3.49777 12.8677 5.07924V6.43754H7.13217V5.07924ZM1.87171 22.7654L3.18315 8.1604H5.40931V9.70087C5.40931 10.1766 5.79489 10.5623 6.27074 10.5623C6.74659 10.5623 7.13217 10.1766 7.13217 9.70087V8.1604H12.8677V9.70087C12.8677 10.1766 13.2533 10.5623 13.7291 10.5623C14.205 10.5623 14.5905 10.1766 14.5905 9.70087V8.1604H16.8146L18.1261 22.7654H1.87171Z'
                    fill='black'
                    stroke={storeTextColor}
                  />
                </svg>
              </i>
              <span
                className='pl-4'
                style={{ color: storeTextColor, fontWeight: storeFontWeight }}
              >
                Store
              </span>
            </div>
          </li>
        )}
        {myArray.includes("Games") && (
          <li
            className={`nav-item ${page == "games" && "active"}`}
            onClick={() => navigate("/games")}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='30'
                  height='31'
                  viewBox='0 0 30 31'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.0931 8.11615H15.8837V4.99987C15.8837 4.46499 15.4651 4.04639 14.9303 4.04639C14.3954 4.04639 13.9768 4.46499 13.9768 4.99987V8.11615H10.907C5.72096 8.11615 1.4884 12.3255 1.4884 17.5115C1.4884 22.6975 5.6977 26.9301 10.8837 26.9301L19.0698 26.9534C24.2558 26.9534 28.4884 22.7441 28.4884 17.558C28.5117 12.3487 24.3024 8.11615 19.0931 8.11615ZM19.0698 25.0464L10.8837 25.0231C6.74422 25.0231 3.37212 21.651 3.39538 17.4882C3.39538 13.3487 6.76747 9.97662 10.9303 9.99987L19.0931 10.0231C23.2326 10.0231 26.6047 13.3952 26.5814 17.5348C26.5582 21.6743 23.2093 25.0464 19.0698 25.0464Z'
                    fill='black'
                    stroke={gamesTextColor}
                  />
                  <path
                    d='M10.6978 16.6046H9.60473V15.5116C9.60473 14.9767 9.18613 14.5581 8.65125 14.5581C8.11636 14.5581 7.69776 14.9767 7.69776 15.5116V16.6046H6.60473C6.06985 16.6046 5.65125 17.0232 5.65125 17.5581C5.65125 18.093 6.06985 18.5116 6.60473 18.5116H7.69776V19.6046C7.69776 20.1395 8.11636 20.5581 8.65125 20.5581C9.18613 20.5581 9.60473 20.1395 9.60473 19.6046V18.5116H10.6978C11.2326 18.5116 11.6512 18.093 11.6512 17.5581C11.6512 17.0232 11.2326 16.6046 10.6978 16.6046Z'
                    fill='black'
                    stroke={gamesTextColor}
                  />
                  <path
                    d='M19.6744 17.5349C20.5221 17.5349 21.2093 16.8477 21.2093 16C21.2093 15.1523 20.5221 14.4651 19.6744 14.4651C18.8267 14.4651 18.1395 15.1523 18.1395 16C18.1395 16.8477 18.8267 17.5349 19.6744 17.5349Z'
                    fill='black'
                    stroke={gamesTextColor}
                  />
                  <path
                    d='M22.7442 20.6044C23.5919 20.6044 24.2791 19.9172 24.2791 19.0696C24.2791 18.2219 23.5919 17.5347 22.7442 17.5347C21.8965 17.5347 21.2094 18.2219 21.2094 19.0696C21.2094 19.9172 21.8965 20.6044 22.7442 20.6044Z'
                    fill='black'
                    stroke={gamesTextColor}
                  />
                </svg>{" "}
              </i>
              <span
                className='pl-4'
                style={{ color: gamesTextColor, fontWeight: gamesFontWeight }}
              >
                Games
              </span>
            </div>
          </li>
        )}
        {myArray.includes("Rooms") && (
          <li
            className={`nav-item ${page == "rooms" && "active"}`}
            onClick={() => {
              navigate("/rooms");
              setPage("rooms");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 6.48828H9.75'
                    stroke={roomsTextColor}
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 9.48828H7.5'
                    stroke={roomsTextColor}
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.75 2.73828C2.925 2.73828 2.25 3.41328 2.25 4.23828V13.2383V16.9883L8.025 13.2383H14.25C15.075 13.2383 15.75 12.5633 15.75 11.7383V4.23828C15.75 3.41328 15.075 2.73828 14.25 2.73828H3.75Z'
                    stroke={roomsTextColor}
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.75 7.98828H20.25C21.075 7.98828 21.75 8.66328 21.75 9.48828V22.2383L15.975 18.4883H9.75C8.925 18.4883 8.25 17.8133 8.25 16.9883V13.2383'
                    stroke={roomsTextColor}
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </i>
              <span
                className='pl-4'
                style={{ color: roomsTextColor, fontWeight: roomsFontWeight }}
              >
                Rooms
              </span>
            </div>
          </li>
        )}
        {myArray.includes("Users") && (
          <li
            className={`nav-item ${page == "users" || page == 'User' && "active"}`}
            onClick={() => {
              navigate("/users");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className='nav-link'>
              <i className=''>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.5 22.7413V21.3688C3.5 19.7904 4.42964 18.3558 5.94519 17.915C7.51773 17.4575 9.69317 16.9883 12 16.9883C14.3068 16.9883 16.4823 17.4575 18.0548 17.915C19.5704 18.3558 20.5 19.7904 20.5 21.3688V22.6423'
                    stroke={usersTextColor}
                    fill={`${page == "users" ? "#842a83" : "#fff"}`}
                    strokeWidth='2'
                  />
                  <path
                    d='M12 12.4883C14.7614 12.4883 17 10.2497 17 7.48828C17 4.72686 14.7614 2.48828 12 2.48828C9.23858 2.48828 7 4.72686 7 7.48828C7 10.2497 9.23858 12.4883 12 12.4883Z'
                    stroke={usersTextColor}
                    fill={`${page == "users" ? "#842a83" : "#fff"}`}
                    strokeWidth='2'
                  />
                </svg>
              </i>
              <span
                className='pl-4'
                style={{ color: usersTextColor, fontWeight: usersFontWeight }}
              >
                Users
              </span>
            </div>
          </li>
        )}
      </ul>
    </>
  );
};

export default ManagementNav;
