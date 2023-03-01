import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActivitiesList = ({ item, singleUserInfo }) => {
  const navigate = useNavigate();
  let activity = item.activity ?? "unknown";
  let profileImage = singleUserInfo.avatar ?? "./assets/images/unknown.jpeg";
  let type = item.type ?? "unknown";
  let dateCreated = item.dateCreated ?? "unknown";
  let date = item.dateCreated.substring(0,item.dateCreated.indexOf('T')) || "unknown";
  let time = item.dateCreated.substring(item.dateCreated.lastIndexOf('T') + 1,item.dateCreated.lastIndexOf('T') + 8) || "unknown";
  let userId = item.userId ?? -1;
  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <img
            src={profileImage}
            className='img-fluid activities-banner'
            alt='profile-image'
          />
        </td>
        <td>
          <p className='mb-0'>
            <span className='f-weight-600'>{activity}</span>
          </p>
        </td>
        <td>
          <span className='f-weight-600'>
            <i
              className={`fa ${
                type.toLowerCase().includes("gift")
                  ? "fa-gift"
                  : type.toLowerCase().includes("match")
                  ? "fa-heart"
                  : type.toLowerCase().includes("like")
                  ? "fa-heart-o"
                  : type.toLowerCase().includes("messages")
                  ? "fa-solid fa-message"
                  : ""
              }`}
            ></i>
            &nbsp;&nbsp; {type}
          </span>
        </td>
        <td>
          <p className='mb-0 f-weight-600'>
            <span> {date} {time}</span>&nbsp;&nbsp;
          </p>
        </td>
        <td>
          <a href='#' className='text-dark f-weight-600'>
            View Activity
          </a>
        </td>
      </tr>
    </>
  );
};

export default ActivitiesList;
