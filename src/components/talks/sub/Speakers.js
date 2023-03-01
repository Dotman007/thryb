import React from "react";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";

const Speakers = ({
  usersList,
  setUsersList,
  item,
  talksSelectedSpeakers,
  setTalksSelectedSpeakers,
  setSpeakerSearch,
  speakerSearch,
  talksPage,
}) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  let userId = item?.userId ?? -1;
  const [userAvatar, setUserAvatar] = useState("");
  let userImg = userAvatar?.avatar ?? "./assets/images/unknown.jpeg";
  let fullName = userAvatar?.fullName ?? "Loading";
  const [show, setShow] = useState(true);
  useEffect(() => {
    const fetchThrybeUsers = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/UserAvatar?id=${userId}`
        );
        setUserAvatar(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (userId !== -1) fetchThrybeUsers();
  }, []);

  useEffect(() => {
    if (talksSelectedSpeakers.includes(userId)) {
      setChecked(true);
    }
  }, [talksPage]);
  const updateSpeakers = () => {
    let myArray = talksSelectedSpeakers.filter((item) => item !== userId);
    if (!checked) {
      setTalksSelectedSpeakers([...myArray]);
    } else {
      setTalksSelectedSpeakers([...myArray, userId]);
    }
  };
  useEffect(() => {
    if (speakerSearch !== "" && fullName !== "Loading") {
      if (speakerSearch !== "") {
        if (fullName?.toLowerCase()?.includes(speakerSearch?.toLowerCase())) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
      if (speakerSearch == "") {
        setShow(true);
      }
    }
    if (speakerSearch == "") {
      setShow(true);
    }
  }, [speakerSearch]);

  useEffect(() => {
    updateSpeakers();
  }, [checked]);

  return (
    <div
      className={`form-group d-flex justify-content-between align-item-end card-group mb-3 px-3 ${
        !show && "hide"
      }`}
    >
      <div>
        <img src={userImg} className='add-user-img' alt='' />
        <span className='font-sm2 f-weight-600 ml-2'>{fullName}</span>
      </div>
      <input
        type='checkbox'
        className='mr-3 mt-3'
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default Speakers;
