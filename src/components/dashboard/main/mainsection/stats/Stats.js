import React from "react";
import Users from "./Users";
import Talks from "./Talks";
import Rooms from "./Rooms";
import Gifts from "./Gifts";

const Stats = ({
  page,
  setPage,
  setUsersSection,
  setGiftsSection,
  setTalksSection,
  setRoomsSection,
}) => {
  return (
    <div className='row'>
      <Users page={page} setPage={setPage} setUsersSection={setUsersSection} />
      <Talks page={page} setPage={setPage} setTalksSection={setTalksSection} />
      <Rooms page={page} setPage={setPage} setRoomsSection={setRoomsSection} />
      <Gifts page={page} setPage={setPage} setGiftsSection={setGiftsSection} />
    </div>
  );
};

export default Stats;
