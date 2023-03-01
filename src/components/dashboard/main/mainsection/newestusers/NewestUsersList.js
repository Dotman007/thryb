import React from "react";
import { fetchDataWithAxios } from "../../../../../config/fetchDataWithAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewestUsersList = ({ index, item, showResult, setShowResult }) => {
  const [display, setDisplay]= useState(false);
  const navigate = useNavigate();
  let [userImage, setUserImage] = useState("");
  let [user, setUser] = useState("");
  let id = item?.id ?? -1;
  let name = user?.fullName || "Unknown";
  let email = user?.email || "Unknown";
  let src = userImage?.image?.includes("pic")
    ? userImage?.image?.substring(8)
    : userImage?.image?.includes("data")
    ? userImage?.image?.substring(22)
    : "./assets/images/user-avatar.svg";

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorImage?id=${id}`
        );
        setUserImage(response.data);
        setDisplay(true);
        setShowResult(showResult + 1)
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id !== -1) fetchUserImage();
  }, [id]);
  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetRoomCreatorUserName?id=${id}`
        );
        setUser(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id !== -1) fetchUserImage();
  }, [id]);

  return (
    <>
      <li className={`d-flex align-items-center justify-content-between mb-3 ${!display && 'display-none'}`}>
        <div className='d-flex align-items-center'>
          <span className='font-sm'>{index + 1}</span>&nbsp;
          <div>
            <img
              src={src}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt=''
            />
          </div>
          &nbsp;
          <div>
            <h5 className='font-sm2 f-weight-600'>{name}</h5>
            <p className='font-sm mb-0'>{email}</p>
          </div>
        </div>
        <a href=''>
          <i className='fa fa-angle-right text-dark'></i>
        </a>
      </li>
    </>
  );
};

export default NewestUsersList;
