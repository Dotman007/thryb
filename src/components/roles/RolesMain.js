import React from "react";
import RolesBreadCrumb from "./RolesBreadCrumb";
import RolesListContainer from "./RolesListContainer";
import RolesSubNav from "./RolesSubNav";

const RolesMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
  search,
  setSearch
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <RolesBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
        <RolesSubNav showBtn={showBtn} setShowBtn={setShowBtn}  search={search} setSearch={setSearch}/>
        <RolesListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default RolesMain;
