import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import TalksMainContainer from "./TalksMainContainer";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
import { toast } from "react-toastify";
const Talks = ({ page, setPage, showNav, setShowNav,permissions, setPermissions, userPicture, setUserPicture }) => {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(true);
  const [talksPage, setTalksPage] = useState("talks");
  let [token, setToken] = useState(" ");
  let [allTalks, setAllTalks] = useState("...");
  let [activeTalks, setActiveTalks] = useState("...");
  let [pendingTalks, setPendingTalks] = useState("...");
  let [inActiveTalks, setInActiveTalks] = useState("...");
  let [thrybeTalks, setThrybeTalks] = useState([]);
  let [allTalksSection, setAllTalksSection] = useState(false);
  let [activeTalksSection, setActiveTalksSection] = useState(false);
  let [pendingTalksSection, setPendingTalksSection] = useState(false);
  const [inActiveTalksSection, setInActiveTalksSection] = useState(false);
  let [thrybeTalksSection, setThrybeTalksSection] = useState(false);
  let [filter, setFilter] = useState(false);
  let [showSpinner, setShowSpinner] = useState(true);
  let [talkId, setTalkId] = useState("");
  let [singleTalkInfo, setSingleTalkInfo] = useState("");
  useEffect(() => {
    document.title = "Talks";
    setPage("talks");
  });
  useEffect(() => {
    setTalksPage("talks");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);
  
  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Games')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Talks') && <>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <TalksMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
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
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Talks;
