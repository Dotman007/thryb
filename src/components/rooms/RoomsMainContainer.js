import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import AddNewRoomOne from "./sub/AddNewRoomOne";
import AddNewRoomFour from "./sub/AddNewRoomFour";
import AddNewRoomTwo from "./sub/AddNewRoomTwo";
import SingleRoom from "./sub/singleroom/SingleRoom";
import RoomsMain from "./RoomsMain";
import AddNewRoomThree from "./sub/AddNewRoomThree";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";

const RoomsMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
  singleRoomInfo,
  setSingleRoomInfo,
  userPicture,
  setUserPicture
}) => {
  const [search, setSearch] = useState("");
  const [roomsList, setRoomsList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [filter, setFilter] = useState(false);
  const [roomBanner, setRoomBanner] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomPrivacy, setRoomPrivacy] = useState("public");
  const [roomDate, setRoomDate] = useState("");
  const [roomCreator, setRoomCreator] = useState("");
  const [roomMembers, setRoomMembers] = useState([]);
  const [creatorSearch, setCreatorSearch] = useState("");
  const [roomName, setRoomName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const [invitedSpeaker, setInvitedSpeaker] = useState("");
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [speakerSearch, setSpeakerSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/UserList");
        setUsersList(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchUsersNumber();
  }, [page]);

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
      {roomsPage == "mgt" && (
        <RoomsMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          singleRoomInfo={singleRoomInfo}
          setSingleRoomInfo={setSingleRoomInfo}
          roomsList={roomsList}
          setShowSpinner={setShowSpinner}
          showSpinner={showSpinner}
          setRoomsList={setRoomsList}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
      )}
      {roomsPage == "addnew-1" && (
        <AddNewRoomOne
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          roomBanner={roomBanner}
          setRoomBanner={setRoomBanner}
          roomDescription={roomDescription}
          setRoomDescription={setRoomDescription}
          roomPrivacy={roomPrivacy}
          setRoomPrivacy={setRoomPrivacy}
          roomDate={roomDate}
          setRoomDate={setRoomDate}
          roomName={roomName}
          setRoomName={setRoomName}
        />
      )}
      {roomsPage == "addnew-2" && (
        <AddNewRoomTwo
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          usersList={usersList}
          setUsersList={setUsersList}
          invitedSpeaker={invitedSpeaker}
          setInvitedSpeaker={setInvitedSpeaker}
          setSpeakerSearch={setSpeakerSearch}
          speakerSearch={speakerSearch}
        />
      )}
      {roomsPage == "addnew-3" && (
        <AddNewRoomThree
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          userSearch={userSearch}
          setUserSearch={setUserSearch}
          usersList={usersList}
          setUsersList={setUsersList}
          setInvitedUsers={setInvitedUsers}
          invitedUsers={invitedUsers}
        />
      )}
      {roomsPage == "addnew-4" && (
        <AddNewRoomFour
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          roomBanner={roomBanner}
          setRoomBanner={setRoomBanner}
          roomDescription={roomDescription}
          setRoomDescription={setRoomDescription}
          roomPrivacy={roomPrivacy}
          setRoomPrivacy={setRoomPrivacy}
          roomDate={roomDate}
          setRoomDate={setRoomDate}
          roomName={roomName}
          setRoomName={setRoomName}
          invitedSpeaker={invitedSpeaker}
          invitedUsers={invitedUsers}
        />
      )}
      {roomsPage == "single" && (
        <SingleRoom
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
          singleRoomInfo={singleRoomInfo}
          setSingleRoomInfo={setSingleRoomInfo}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsList={roomsList}
          showSpinner={setShowSpinner}
          setRoomsList={setRoomsList}
          setShowSpinner={setShowSpinner}
        />
      )}
    </main>
  );
};

export default RoomsMainContainer;
