import React from "react";
import UsersBreadCrumb from "./UsersBreadCrumb";
import UsersListContainer from "./UsersListContainer";
import UsersStatArea from "./UsersStatArea";
import UsersSubNav from "./UsersSubNav";
import { useState, useEffect } from "react";
import UsersOverlay from "./UsersOverlay";
import { ClickAwayListener } from '@mui/base';

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [userAction, setUserAction] = useState({
    type : '',
    id : ''
  });
  return (
    <div className='main-content'>
      <div className='container-fluid'>

      {showOverlay && <UsersOverlay 
      setShowOverlay = {setShowOverlay}
      userAction = {userAction}
      setUserAction = {setUserAction}
      />}

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
          setShowOverlay = {setShowOverlay}
          setUserAction = {setUserAction}
        />
      </div>
    </div>
  );
};

export default UsersMain;
