import React from "react";

const RoomsMembers = ({ data }) => {
  // const dataImg=[...data.]
  return (
    <div>
      {data && data.length == 1 && (
        <div>
          <img
            className='img-fluid h-75 w-25 talks-speakers-single talks-img'
            src={data[0].memberImage || "assets/images/unknown.jpg"}
            alt='talkauthorPic'
          />
          <span className='font-sm f-weight-700 w-75 mb-4 talks-sm'>
            {data[0].speakerName || "unknown"}
          </span>
        </div>
      )}
      {data.length > 1 &&
        data.length < 4 &&
        data.map((item, index) => (
          <img
            src={item.memberImage || "assets/images/unknown.jpg"}
            alt='membericon'
            className='talks-img'
            key={index}
          />
        ))}
      {data.length > 3 && (
        <div className='ml-3'>
          <img
            src={data[0].memberImage || "assets/images/unknown.jpg"}
            alt='membericon'
            className='talks-data-multiple talks-img talks-speakers-multiple'
          />
          <img
            src={data[1].memberImage || "assets/images/unknown.jpg"}
            alt='membericon'
            className='talks-data-multiple talks-img talks-speakers-multiple'
          />
          <img
            src={data[2].memberImage || "assets/images/unknown.jpg"}
            alt='membericon'
            className='talks-data-multiple talks-img talks-speakers-multiple'
          />
          <img
            src={data[3].memberImage || "assets/images/unknown.jpg"}
            alt='membericon'
            className='talks-data-multiple talks-img talks-speakers-multiple'
          />
        </div>
      )}
    </div>
  );
};

export default RoomsMembers;
