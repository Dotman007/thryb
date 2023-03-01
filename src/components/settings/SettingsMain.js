import React from "react";
import AccountSetting from "./AccountSetting";
import ContactSetting from "./ContactSetting";
import PasswordSetting from "./PasswordSetting";

const SettingsMain = ({userPicture,setUserPicture}) => {
  return (
    <div className='row'>
      <div className='custom-card col-xl-5 col-md-8 ml-3'>
        <AccountSetting userPicture={userPicture} setUserPicture={setUserPicture}/>
        <ContactSetting />
        <PasswordSetting />
      </div>
    </div>
  );
};

export default SettingsMain;
