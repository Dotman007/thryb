import React, { useState } from "react";
import RoomConversations from "./RoomConversations";
import RoomDescAndRules from "./RoomDescAndRules";
import RoomMembers from "./RoomMembers";
import RoomNav from "./RoomNav";
import RoomTitle from "./RoomTitle";
import SingleRoomBreadCrumb from "./SingleRoomBreadCrumb";
import RoomsBreadCrumb from "../../RoomsBreadCrumb";

const SingleRoom = ({
  page,
  setPage,
  roomsPage,
  setRoomsPage,
  singleRoomInfo,
  setSingleRoomInfo,
  showBtn,
  setShowBtn,
  showSpinner,
  setRoomsList,
  setShowSpinner,
}) => {
  const [singlePage, setSinglePage] = useState("convo");

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <RoomsBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          setRoomsList={setRoomsList}
          singleRoomInfo={singleRoomInfo}
          setSingleRoomInfo={setSingleRoomInfo}
        />
        <div className='row mt-3'>
          <div className='col-xl-12 col-12 mb-3'>
            <div className='custom-card pb-0 p-0'>
              <RoomTitle
                singlePage={singlePage}
                setSinglePage={setSinglePage}
                singleRoomInfo={singleRoomInfo}
                setSingleRoomInfo={setSingleRoomInfo}
              />
              <RoomNav singlePage={singlePage} setSinglePage={setSinglePage} />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='custom-card py-3'>
              <div className='tab-content' id='myTabContent'>
                {singlePage == "convo" && (
                  <RoomConversations singleRoomInfo={singleRoomInfo} />
                )}
                {singlePage == "members" && (
                  <RoomMembers singleRoomInfo={singleRoomInfo} />
                )}
                {singlePage == "desc" && <RoomDescAndRules />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
