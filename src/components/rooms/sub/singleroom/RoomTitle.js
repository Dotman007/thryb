import React from "react";

const RoomTitle = ({ singleRoomInfo, setSingleRoomInfo }) => {
  let id = singleRoomInfo.creatorId ?? -1;
  let banner = singleRoomInfo.banner || "assets/images/unknown.jpg";
  let roomTitle = singleRoomInfo.roomTitle || "unknown";
  let dateCreated = singleRoomInfo.dateCreated || "unknown";
  let date = singleRoomInfo.date || "unknown";
  let time = singleRoomInfo.time || "unknown";
  let status = singleRoomInfo.status;
  let creatorImg = singleRoomInfo?.creatorImg || "assets/images/unknown.jpg";
  let creatorName = singleRoomInfo?.creatorName || "unknown";
  let members = singleRoomInfo?.memberDto || [];
  let roomDescription = singleRoomInfo.roomDescription || "unknown";
  return (
    <div className='row justify-content-start align-singleRoomInfos-center pl-3'>
      <div className='col-xl-4 col-lg-6 py-3'>
        <img className='img-fluid room-banner' src={banner} alt='' />
      </div>
      <div className='col-lg-6 pt-5'>
        <h4 className='f-weight-700'>{roomTitle}</h4>
        <p className='mb-0'>{roomDescription}</p>
        <div className='d-flex talk-authors mb-3 mr-5'>
          <div className='pt-1 mr-3'>
            <img
              src={`data:image/png;base64, ${creatorImg}`}
              alt='talkauthorPic'
              className='h-100 author-img'
              style={{ marginLeft: "-23px" }}
            />
            <span className='font-sm f-weight-600'>Author - {creatorName}</span>
          </div>
          <div className='pt-4 mr-3'>
            <img
              src='./assets/images/calender-icon.svg'
              alt='calendar'
              className='h-25 pr-2'
            />
            <span className='font-sm f-weight-600'> {date} {time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTitle;
