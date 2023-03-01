import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import RolesMain from "./RolesMain";
import AddNewRole from "./sub/AddNewRole";
import RoleMembers from "./sub/singlerole/RoleMembers";
const RolesMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
  userPicture,
  setUserPicture
}) => {
  const [search, setSearch] = useState("");

  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        userPicture={userPicture}
          setUserPicture={setUserPicture}
      />
      {rolesPage == "mgt" && (
        <RolesMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
          search={search}
          setSearch={setSearch}
        />
      )}

      {rolesPage == "single" && (
        <RoleMembers
          page={page}
          setPage={setPage}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      )}
      {(rolesPage == "addnew-1" ||
        rolesPage == "addnew-2" ||
        rolesPage == "addnew-4" ||
        rolesPage == "addnew-3") && (
        <AddNewRole
          page={page}
          setPage={setPage}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      )}
    </main>
  );
};

export default RolesMainContainer;
