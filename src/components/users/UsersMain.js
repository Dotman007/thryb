import React from "react";
import UsersBreadCrumb from "./UsersBreadCrumb";
import UsersListContainer from "./UsersListContainer";
import UsersStatArea from "./UsersStatArea";
import UsersSubNav from "./UsersSubNav";
import { useState, useEffect } from "react";
const UsersMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
  usersNumber,
  showSpinner,
  setShowSpinner,
  filter,
  setFilter,
  setUsersList,
  userId,
  setUserId,
  singleUserInfo,
  setSingleUserInfo,
  search,
  setSearch
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <UsersBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          setUsersList={setUsersList}
          setShowSpinner={setShowSpinner}
        />
        <UsersSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersList={usersList}
          setUsersList={setUsersList}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <UsersStatArea usersNumber={usersNumber} />
        <UsersListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          setUsersList={setUsersList}
          showSpinner={showSpinner}
          userId={userId}
          setUserId={setUserId}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
          setShowSpinner={setShowSpinner}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default UsersMain;
