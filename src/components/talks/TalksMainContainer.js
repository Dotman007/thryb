import React from "react";
import Header from "../dashboard/main/header/Header";
import AddNewTalkOne from "./sub/AddNewTalkOne";
import AddNewTalkTwo from "./sub/AddNewTalkTwo";
import AddNewTalkThree from "./sub/AddNewTalkThree";
import TalksMain from "./TalksMain";
import SingleTalk from "./sub/singletalk/SingleTalk";
import AddNewTalkFour from "./sub/AddNewTalkFour";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";

const TalksMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  talksPage,
  setTalksPage,
  allTalks,
  setAllTalks,
  activeTalks,
  setActiveTalks,
  pendingTalks,
  setPendingTalks,
  inActiveTalks,
  setInActiveTalks,
  thrybeTalks,
  setThrybeTalks,
  filter,
  setFilter,
  showSpinner,
  setShowSpinner,
  talkId,
  setTalkId,
  singleTalkInfo,
  setSingleTalkInfo,
  userPicture,
  setUserPicture
}) => {
  const [search, setSearch] = useState('');
  const [talkTitle, setTalkTitle] = useState("");
  const [talkDescription, setTalkDescription] = useState("");
  const [talkDate, setTalkDate] = useState("");
  const [talkPrivacy, setTalkPrivacy] = useState("Open");
  const [usersList, setUsersList] = useState([]);
  const [talksSelectedSpeakers, setTalksSelectedSpeakers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [speakerSearch, setSpeakerSearch] = useState("");
  const [usersSearch, setUsersSearch] = useState("");
  const navigate = useNavigate();
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
  }, []);

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
      {talksPage == "talks" && (
        <TalksMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          allTalks={allTalks}
          setAllTalks={setAllTalks}
          activeTalks={activeTalks}
          setActiveTalks={setActiveTalks}
          pendingTalks={pendingTalks}
          setPendingTalks={setPendingTalks}
          inActiveTalks={inActiveTalks}
          setInActiveTalks={setInActiveTalks}
          thrybeTalks={thrybeTalks}
          setThrybeTalks={setThrybeTalks}
          filter={filter}
          setFilter={setFilter}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          talkId={talkId}
          setTalkId={setTalkId}
          singleTalkInfo={singleTalkInfo}
          setSingleTalkInfo={setSingleTalkInfo}
          search={search}
          setSearch={setSearch}
        />
      )}
      {talksPage == "addnew-1" && (
        <AddNewTalkOne
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          talkDate={talkDate}
          setTalkDate={setTalkDate}
          talkDescription={talkDescription}
          setTalkDescription={setTalkDescription}
          talkTitle={talkTitle}
          setTalkTitle={setTalkTitle}
          talkPrivacy={talkPrivacy}
          setTalkPrivacy={setTalkPrivacy}
        />
      )}
      {talksPage == "addnew-2" && (
        <AddNewTalkTwo
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          usersList={usersList}
          setUsersList={setUsersList}
          talksSelectedSpeakers={talksSelectedSpeakers}
          setTalksSelectedSpeakers={setTalksSelectedSpeakers}
          speakerSearch={speakerSearch}
          setSpeakerSearch={setSpeakerSearch}
        />
      )}
      {talksPage == "addnew-3" && (
        <AddNewTalkThree
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          usersSearch={usersSearch}
          setUsersSearch={setUsersSearch}
          usersList={usersList}
          setUsersList={setUsersList}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
      )}
      {talksPage == "addnew-4" && (
        <AddNewTalkFour
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          talkDate={talkDate}
          setTalkDate={setTalkDate}
          talkDescription={talkDescription}
          setTalkDescription={setTalkDescription}
          talkTitle={talkTitle}
          setTalkTitle={setTalkTitle}
          talkPrivacy={talkPrivacy}
          setTalkPrivacy={setTalkPrivacy}
          selectedUsers={selectedUsers}
          talksSelectedSpeakers={talksSelectedSpeakers}
        />
      )}
      {talksPage == "single" && (
        <SingleTalk
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          talkId={talkId}
          setTalkId={setTalkId}
          singleTalkInfo={singleTalkInfo}
          setSingleTalkInfo={setSingleTalkInfo}
        />
      )}
    </main>
  );
};

export default TalksMainContainer;
