import React from "react";
import TalksBreadCrumb from "./TalksBreadCrumb";
import TalksListContainer from "./TalksListContainer";
import TalksStatArea from "./TalksStatArea";
import TalksSubNav from "./TalksSubNav";

const TalksMain = ({
  page,
  setPage,
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
  search,
  setSearch
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <TalksBreadCrumb
          showBtn={showBtn}
          page={page}
          setPage={setPage}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          thrybeTalks={thrybeTalks}
          setThrybeTalks={setThrybeTalks}
          setShowSpinner={setShowSpinner}
        />
        <TalksSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          thrybeTalks={thrybeTalks}
          setThrybeTalks={setThrybeTalks}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <TalksStatArea
          allTalks={allTalks}
          setAllTalks={setAllTalks}
          activeTalks={activeTalks}
          setActiveTalks={setActiveTalks}
          pendingTalks={pendingTalks}
          setPendingTalks={setPendingTalks}
          inActiveTalks={inActiveTalks}
          setInActiveTalks={setInActiveTalks}
        />

        <TalksListContainer
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          thrybeTalks={thrybeTalks}
          setThrybeTalks={setThrybeTalks}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          talkId={talkId}
          setTalkId={setTalkId}
          setFilter={setFilter}
          singleTalkInfo={singleTalkInfo}
          setSingleTalkInfo={setSingleTalkInfo}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default TalksMain;
