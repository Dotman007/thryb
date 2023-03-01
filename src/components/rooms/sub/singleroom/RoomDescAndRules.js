import React from "react";

const RoomDescAndRules = () => {
  return (
    <div
      className='tab-pane fade show active'
      id='description-rules'
      role='tabpanel'
      aria-labelledby='description-rules-tab'
    >
      <div className='custom-card mb-2'>
        <h4 className='f-weight-800 mb-3'>About Room</h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          enim sequi maiores amet culpa unde quaerat quasi necessitatibus sunt
          expedita eveniet fugiat asperiores soluta quis consequatur, quibusdam
          labore aliquid quos?
        </p>

        <div className='px-2 ml-3'>
          <div className='p-2'>
            <div className='mb-2'>
              <img
                src='./assets/images/Lock-black-icon.svg'
                alt='Lock-black-icon'
              />
              <span className='f-weight-600 ml-2 pt-2'>Room Privacy</span>
            </div>
            <p className='font-sm'>
              Only members can see who's in the room and what they post in it
            </p>
          </div>
          <div className='p-2'>
            <div className='mb-2'>
              <img
                src='./assets/images/View-password-icon.svg'
                alt='View-password-icon'
              />
              <span className='f-weight-600 ml-2 pt-2'>Room Visibility</span>
            </div>
            <p className='font-sm'>Anyone can find this room</p>
          </div>
          <div className='p-2'>
            <div className='mb-2'>
              <img
                src='./assets/images/calender-icon.svg'
                alt='calender-icon'
              />
              <span className='f-weight-600 ml-2 pt-2'>Room History</span>
            </div>
            <p className='font-sm'>Room created on Jan 24th, 2022</p>
          </div>
        </div>
      </div>
      <div className='custom-card'>
        <h4 className='f-weight-800 mb-3'>Room rules from the Admin</h4>

        <div className='px-2 ml-3'>
          <div className='p-2'>
            <h6 className='f-weight-600'>1. Be Kind and courteous</h6>
            {/* <p className='font-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              eveniet veniam quas
            </p> */}
          </div>
          <div className='p-2'>
            <h6 className='f-weight-600'>2. No Hate speech or bullying</h6>
            {/* <p className='font-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              eveniet veniam quas
            </p> */}
          </div>
          <div className='p-2'>
            <h6 className='f-weight-600'>3. No Promotion or Spam</h6>
            {/* <p className='font-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              eveniet veniam quas
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDescAndRules;
