import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import MondayChart from "./MondayChart";
import FridayChart from "./FridayChart";
import SaturdayChart from "./SaturdayChart";
import SundayChart from "./SundayChart";
import ThursdayChart from "./ThursdayChart";
import TuesdayChart from "./TuesdayChart";
import WednesdayChart from "./WednesdayChart";
import YearlyChart from "./YearlyChartData";
import MonthlyChart from "./MonthlyChart";

const DoughnutChart = ({
  doughnutChartData,
  doughnutChartOptions,
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const myDate = new Date();
  const [mode, setMode] = useState(
    myDate.getDay() == 0
      ? "sunday"
      : myDate.getDay() == 1
      ? "monday"
      : myDate.getDay() == 2
      ? "tuesday"
      : myDate.getDay() == 3
      ? "wednesday"
      : myDate.getDay() == 4
      ? "thursday"
      : myDate.getDay() == 5
      ? "friday"
      : myDate.getDay() == 6
      ? "saturday"
      : ""
  );
  return (
    <div className='col-xl-5 col-12 d-flex flex-column flex-grow-1 mb-4'>
      <div className='h-100'>
        <div className='d-flex justify-content-between'>
          <h5>GIFTS PURCHASE</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
              onClick={(e) => {
                e.preventDefault();
                setWalletPage("gift-list");
              }}
            />
          </a>
        </div>
        <div className='chart-area mt-4 d-flex flex-column justify-content-center'>
          {mode == "monday" && <MondayChart />}
          {mode == "tuesday" && <TuesdayChart />}
          {mode == "wednesday" && <WednesdayChart />}
          {mode == "thursday" && <ThursdayChart />}
          {mode == "friday" && <FridayChart />}
          {mode == "saturday" && <SaturdayChart />}
          {mode == "sunday" && <SundayChart />}
          {mode == "monthly" && <MonthlyChart />}
          {mode == "yearly" && <YearlyChart />}
          {mode != "monthly" && mode != "yearly" && (
            <div className='row mt-3 mb-4'>
              <div className='col-12'>
                <ul className='nav nav-tabs pie-days'>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("monday");
                    }}
                  >
                    <p className={`nav-link ${mode == "monday" && "active"}`}>
                      Mon
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("tuesday");
                    }}
                  >
                    <p className={`nav-link ${mode == "tuesday" && "active"}`}>
                      Tue
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("wednesday");
                    }}
                  >
                    <p
                      className={`nav-link ${mode == "wednesday" && "active"}`}
                    >
                      Wed
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("thursday");
                    }}
                  >
                    <p
                      className={`nav-link ${mode == "thursday" && "active"} 
                      `}
                    >
                      Thu
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("friday");
                    }}
                  >
                    <p className={`nav-link ${mode == "friday" && "active"}`}>
                      Fri
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("saturday");
                    }}
                  >
                    <p
                      className={`nav-link ${mode == "saturday" && "active"}
                      `}
                    >
                      Sat
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setMode("sunday");
                    }}
                  >
                    <p className={`nav-link ${mode == "sunday" && "active"}`}>
                      Sun
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className='period-filter mt-4'>
          <ul className='nav nav-pills period-filter-links'>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  mode != "monthly" &&
                  mode != "yearly" &&
                  mode != "daily" &&
                  "active"
                }`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setMode("monday");
                }}
              >
                Week
              </a>
            </li>
            <li className={`nav-item `}>
              <a
                className={`nav-link ${mode == "monthly" && "active"}`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setMode("monthly");
                }}
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${mode == "yearly" && "active"}`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setMode("yearly");
                }}
              >
                Year
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
