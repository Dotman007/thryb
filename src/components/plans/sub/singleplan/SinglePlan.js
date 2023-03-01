import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SinglePlanBreadcrumb from "./SinglePlanBreadcrumb";
import SinglePlanMain from "./SinglePlanMain";
import SubscribersList from "./SubscribersList";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";

const SinglePlan = ({
  page,
  setPage,
  plansPage,
  setPlansPage,
  planInfo,
  setPlanInfo,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activities");
  const [showDropDown, setShowDropDown] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [subscribers, setSubscribers] = useState("");
  const [renewed, setRenewed] = useState("");
  const [expiringSoon, setExpiringSoon] = useState("");
  let id = planInfo.id ?? -1;
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetActivityList?id=${id}`
        );
        setActivityList(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id) fetchThrybeTalks();
  }, []);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SinglePlanBreadcrumb
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
        {plansPage == "single" && (
          <SinglePlanMain
            setPlansPage={setPlansPage}
            planInfo={planInfo}
            setPlanInfo={setPlanInfo}
            activityList={activityList}
            setActivityList={setActivityList}
            subscribers={subscribers}
            setSubscribers={setSubscribers}
            renewed={renewed}
            setRenewed={setRenewed}
            expiringSoon={expiringSoon}
            setExpiringSoon={setExpiringSoon}
          />
        )}

        {plansPage == "single-2" && (
          <SubscribersList
            setPlansPage={setPlansPage}
            planInfo={planInfo}
            setPlanInfo={setPlanInfo}
            subscribers={subscribers}
            setSubscribers={setSubscribers}
            renewed={renewed}
            setRenewed={setRenewed}
            expiringSoon={expiringSoon}
            setExpiringSoon={setExpiringSoon}
            activityList={activityList}
            setActivityList={setActivityList}
          />
        )}
      </div>
    </div>
  );
};

export default SinglePlan;
