import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import Charts from "./charts/Charts";
import NewestUsers from "./newestusers/NewestUsers";
import Stats from "./stats/Stats";
import Transactions from "./transactions/Transactions";
import TrendingTalks from "./TrendingTalks/TrendingTalks";

const MainSection = ({
  page,
  setPage,
  setTrendingTalksSection,
  setNewestUsersSection,
  setBarChartSection,
  setUsersSection,
  setGiftsSection,
  setTalksSection,
  setRoomsSection,
}) => {
  const navigate = useNavigate;

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <BreadCrumb />
        <Stats
          page={page}
          setPage={setPage}
          setUsersSection={setUsersSection}
          setGiftsSection={setGiftsSection}
          setTalksSection={setTalksSection}
          setRoomsSection={setRoomsSection}
        />
        <Charts setBarChartSection={setBarChartSection} />
        <div className='row'>
          <Transactions page={page} />
          <NewestUsers
            page={page}
            setPage={setPage}
            setNewestUsersSection={setNewestUsersSection}
          />
          <TrendingTalks
            page={page}
            setTrendingTalksSection={setTrendingTalksSection}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
