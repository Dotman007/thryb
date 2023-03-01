import React, { useState } from "react";
import RoomsBreadCrumb from "./RoomsBreadCrumb";
import RoomsListContainer from "./RoomsListContainer";
import RoomsStatArea from "./RoomsStatArea";
import RoomsSubNav from "./RoomsSubNav";

const RoomsMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
  singleRoomInfo,
  setSingleRoomInfo,
  roomsList,
  showSpinner,
  setRoomsList,
  filter,
  setFilter,
  setShowSpinner,
  search,
  setSearch
}) => {
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
        <RoomsSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsList={roomsList}
          setRoomsList={setRoomsList}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <RoomsStatArea />
        <RoomsListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          roomsList={roomsList}
          setRoomsList={setRoomsList}
          filter={filter}
          setFilter={setFilter}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          singleRoomInfo={singleRoomInfo}
          setSingleRoomInfo={setSingleRoomInfo}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default RoomsMain;
