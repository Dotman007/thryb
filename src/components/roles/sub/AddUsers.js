import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../config/fetchDataWithAxios";
import { useState, useEffect } from "react";
import UsersList from "../../users/UsersList";
import Users from "./Users";

const AddUsers = ({
  rolesPage,
  setRolesPage,
  usersList,
  setUsersList,
  roleSelectedUsers,
  setRoleSelectedUsers,
  userSearch,
  setUserSearch,
}) => {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-5'>
          <div className='col-md-6 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div
                className='circle purple d-flex justify-content-center align-item-center'
                onClick={() => {
                  setRolesPage("addnew-1");
                }}
              >
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2'>
                <span>2</span>
              </div>
              <h6 className='mt-2 ml-2'>Select Users</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setRolesPage("addnew-3");
                }}
              >
                <span>3</span>
              </div>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => {
                  setRolesPage("addnew-4");
                }}
              >
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='custom-card col-md-6 ml-3'>
            <form className='add-user-form'>
              <div className='search-user position-relative w-100 mb-4 mt-2'>
                <input
                  type='text'
                  className='search-user-field w-100'
                  placeholder='Search'
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.currentTarget.value)}
                />
                <button
                  className='btn position-absolute'
                  style={{ right: "2px", top: "0" }}
                >
                  <img
                    src='./assets/images/searchIcon.svg'
                    style={{ height: "24px", width: "24px" }}
                    alt=''
                  />
                </button>
              </div>
              <div className='d-flex flex-column'>
                {usersList.length >= 1 &&
                  usersList.map((item, index) => (
                    <Users
                      key={index}
                      item={item}
                      usersList={usersList}
                      setUsersList={setUsersList}
                      roleSelectedUsers={roleSelectedUsers}
                      setRoleSelectedUsers={setRoleSelectedUsers}
                      userSearch={userSearch}
                      rolesPage={rolesPage}
                    />
                  ))}
              </div>

              <div
                className='form-group mt-4'
                onClick={() => {
                  setRolesPage("addnew-3");
                }}
              >
                <label htmlFor='submit'></label>
                <input
                  type='submit'
                  className='btn btn-continue'
                  value='Continue'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
