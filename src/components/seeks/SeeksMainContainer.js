import React from "react";
import Header from "../dashboard/main/header/Header";
import AddNewSeekOne from "./sub/AddNewSeekOne";
import AddNewSeekTwo from "./sub/AddNewSeekTwo";
import AddNewSeekThree from "./sub/AddNewSeekThree";
import SeeksMain from "./SeeksMain";
import SingleSeek from "./sub/singleseek/SingleSeek";
import { useState } from "react";

const SeeksMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  seeksPage,
  setSeeksPage,
  seekInfo,
  setSeekInfo,
  userPicture,
  setUserPicture
}) => {
  const [seekerKeyInfoInputs, setSeekerKeyInfoInputs] = useState([1, 2]);
  const [interestedPersonInputs, setInterestedPersonInputs] = useState([1, 2]);
  const [seekerKeyInfo, setSeekerKeyInfo] = useState([]);
  const [interestedPersonKeyInfo, setInterestedPersonKeyInfo] = useState([]);
  const [aboutSeeker, setAboutSeeker] = useState("");
  const [search,setSearch]= useState('');
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
      {seeksPage == "mgt" && (
        <SeeksMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seekInfo={seekInfo}
          setSeekInfo={setSeekInfo}
          search={search}
          setSearch={setSearch}
        />
      )}
      {seeksPage == "addnew-1" && (
        <AddNewSeekOne
          page={page}
          setPage={setPage}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seekerKeyInfoInputs={seekerKeyInfoInputs}
          setSeekerKeyInfoInputs={setSeekerKeyInfoInputs}
          seekerKeyInfo={seekerKeyInfo}
          setSeekerKeyInfo={setSeekerKeyInfo}
          aboutSeeker={aboutSeeker}
          setAboutSeeker={setAboutSeeker}
        />
      )}
      {seeksPage == "addnew-2" && (
        <AddNewSeekTwo
          page={page}
          setPage={setPage}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          interestedPersonInputs={interestedPersonInputs}
          setInterestedPersonInputs={setInterestedPersonInputs}
          interestedPersonKeyInfo={interestedPersonKeyInfo}
          setInterestedPersonKeyInfo={setInterestedPersonKeyInfo}
        />
      )}
      {seeksPage == "addnew-3" && (
        <AddNewSeekThree
          page={page}
          setPage={setPage}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seekerKeyInfo={seekerKeyInfo}
          interestedPersonKeyInfo={interestedPersonKeyInfo}
          aboutSeeker={aboutSeeker}
        />
      )}
      {seeksPage == "single" && (
        <SingleSeek
          page={page}
          setPage={setPage}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seekInfo={seekInfo}
          setSeekInfo={setSeekInfo}
        />
      )}
    </main>
  );
};

export default SeeksMainContainer;
