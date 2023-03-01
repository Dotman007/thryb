import React from "react";
import Analytics from "./Analytics";
import PlanInfo from "./PlanInfo";

const SinglePlanMain = ({
  setPlansPage,
  planInfo,
  setPlanInfo,
  activityList,
  setActivityList,
  subscribers,
  setSubscribers,
  renewed,
  setRenewed,
  expiringSoon,
  setExpiringSoon,
}) => {
  return (
    <>
      <div className='row mt-3 mb-3'>
        <PlanInfo planInfo={planInfo} />
        <Analytics
          setPlansPage={setPlansPage}
          planInfo={planInfo}
          activityList={activityList}
          setActivityList={setActivityList}
          subscribers={subscribers}
          setSubscribers={setSubscribers}
          renewed={renewed}
          setRenewed={setRenewed}
          expiringSoon={expiringSoon}
          setExpiringSoon={setExpiringSoon}
        />
      </div>
    </>
  );
};

export default SinglePlanMain;
