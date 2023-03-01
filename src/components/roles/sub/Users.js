import React from "react";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";

const Users = ({
  usersList,
  setUsersList,
  item,
  roleSelectedUsers,
  setRoleSelectedUsers,
  setUserSearch,
  userSearch,
  rolesPage,
}) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  let userId = item?.userId ?? -1;
  let userImg = item?.image ?? "./assets/images/unknown.jpeg";
  let fullName = item?.name ?? "Loading";
  const [show, setShow] = useState(true);
  let usersId = roleSelectedUsers.map(item => item.id) || [];

  useEffect(() => {
    if (usersId.includes(userId)) {
      setChecked(true);
    }
  }, [rolesPage]);
  const updateSpeakers = () => {
    let myArray = roleSelectedUsers.filter((item) => item.id !== userId);
    let newObj= {
        image: userImg,
        id:userId,
        name: fullName
    }
    if (!checked) {
        setRoleSelectedUsers([...myArray]);
    } else {
        setRoleSelectedUsers([...myArray, newObj]);
    }
  };
  useEffect(() => {
    if (userSearch !== "" && fullName !== "Loading") {
      if (userSearch !== "") {
        if (fullName?.toLowerCase()?.includes(userSearch?.toLowerCase())) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
      if (userSearch == "") {
        setShow(true);
      }
    }
    if (userSearch == "") {
      setShow(true);
    }
  }, [userSearch]);

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

export default Users;
