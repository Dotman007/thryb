import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutSingleSeekNav from "./AboutSingleSeekNav";
import SeekInfo from "./SeekInfo";
import SingleSeekBreadCrumb from "./SingleSeekBreadCrumb";
import SubmittedProfilesNav from "./SubmittedProfilesNav";

const SingleSeek = ({ page, setPage, setSeeksPage, seekInfo, setSeekInfo }) => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("about");
  let seekId = seekInfo.seekId ?? -1;
  let userId = seekInfo.userId ?? -1;

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SingleSeekBreadCrumb setPage={setPage} setSeeksPage={setSeeksPage} seekInfo={seekInfo}/>

        <SeekInfo
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          seekInfo={seekInfo}
          setSeekInfo={setSeekInfo}
        />
        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='custom-card'>
              <div className='tab-content' id='myTabContent'>
                {activeNav == "about" && (
                  <AboutSingleSeekNav
                    seekId={seekId}
                    userId={userId}
                    page={page}
                  />
                )}
                {activeNav == "profiles" && (
                  <SubmittedProfilesNav
                    seekId={seekId}
                    userId={userId}
                    page={page}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSeek;
