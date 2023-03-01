import React from "react";
import Header from "../dashboard/main/header/Header";
import SettingsBreadCrumb from "./SettingsBreadCrumb";
import SettingsMain from "./SettingsMain";

const SettingsMainContainer = ({ page, setPage, showNav, setShowNav, userPicture,setUserPicture }) => {
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

      {/* main content */}
      <div className='main-content'>
        <div className='container-fluid'>
          <SettingsBreadCrumb page={page} setPage={setPage} />

          <SettingsMain  userPicture={userPicture} setUserPicture={setUserPicture}/> 
        </div>
      </div>
    </main>
  );
};

export default SettingsMainContainer;
