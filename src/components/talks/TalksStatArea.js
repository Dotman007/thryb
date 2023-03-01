import React from "react";
import ActiveTalks from "./ActiveTalks";
import AllTalks from "./AllTalks";
import InActiveTalks from "./InActiveTalks";
import PendingTalks from "./PendingTalks";

const TalksStatArea = ({
  allTalks,
  setAllTalks,
  activeTalks,
  setActiveTalks,
  pendingTalks,
  setPendingTalks,
  inActiveTalks,
  setInActiveTalks,
}) => {
  return (
    <div className='row mt-3'>
      <AllTalks allTalks={allTalks} setAllTalks={setAllTalks} />
      <ActiveTalks activeTalks={activeTalks} setActiveTalks={setActiveTalks} />
      <PendingTalks
        pendingTalks={pendingTalks}
        setPendingTalks={setPendingTalks}
      />
      <InActiveTalks
        inActiveTalks={inActiveTalks}
        setInActiveTalks={setInActiveTalks}
      />
    </div>
  );
};

export default TalksStatArea;
