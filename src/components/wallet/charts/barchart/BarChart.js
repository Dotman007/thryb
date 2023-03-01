import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import MondayChart from "./MondayChart";
import TuesdayChart from "./TuesdayChart";
import WednesdayChart from "./WednesdayChart";
import ThursdayChart from "./ThursdayChart";
import FridayChart from "./FridayChart";
import SaturdayChart from "./SaturdayChart";
import SundayChart from "./SundayChart";
import MonthlyChart from "./MonthlyChart";
import YearlyChart from "./YearlyChartData";
const BarChart = ({
  barChartData,
  barChartOptions,
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const myDate = new Date();
  const [barChartMode, setBarChartMode] = useState(
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
    <div className='col-xl-7 col-12 d-flex flex-column flex-grow-1 mb-3'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>PAYMENTS & TRANSACTIONS</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
              onClick={(e) => {
                e.preventDefault();
                setWalletPage("transactions-list");
              }}
            />
          </a>
        </div>
        <div className='mt-3 d-flex align-items-center'>
          <div className='bgColored-header'>All transactions</div>
          <div className='hits ml-3'>
            <div></div>
            <h6 className='mb-0'>Profile Boost</h6>
          </div>
          <div className='visitors ml-3'>
            <div></div>
            <h6 className='mb-0'>Thrybe Seek</h6>
          </div>
          <div className='subscription ml-3'>
            <div></div>
            <h6 className='mb-0'>Subscription</h6>
          </div>
        </div>
        <div className='chart-area mt-3'>
          {barChartMode == "monday" && <MondayChart />}
          {barChartMode == "tuesday" && <TuesdayChart />}
          {barChartMode == "wednesday" && <WednesdayChart />}
          {barChartMode == "thursday" && <ThursdayChart />}
          {barChartMode == "friday" && <FridayChart />}
          {barChartMode == "saturday" && <SaturdayChart />}
          {barChartMode == "sunday" && <SundayChart />}
          {barChartMode == "monthly" && <MonthlyChart />}
          {barChartMode == "yearly" && <YearlyChart />}
          {barChartMode != "monthly" && barChartMode != "yearly" && (
            <div className='row mt-3 mb-4'>
              <div className='col-12'>
                <ul className='nav nav-tabs pie-days'>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("monday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "monday" && "active"
                      }`}
                    >
                      Mon
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("tuesday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "tuesday" && "active"
                      }`}
                    >
                      Tue
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("wednesday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "wednesday" && "active"
                      }`}
                    >
                      Wed
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("thursday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "thursday" && "active"
                      } 
                      `}
                    >
                      Thu
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("friday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "friday" && "active"
                      }`}
                    >
                      Fri
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("saturday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "saturday" && "active"
                      }
                      `}
                    >
                      Sat
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setBarChartMode("sunday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        barChartMode == "sunday" && "active"
                      }`}
                    >
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
                  barChartMode != "monthly" &&
                  barChartMode != "yearly" &&
                  barChartMode != "daily" &&
                  "active"
                }`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setBarChartMode("monday");
                }}
              >
                Week
              </a>
            </li>
            <li className={`nav-item `}>
              <a
                className={`nav-link ${barChartMode == "monthly" && "active"}`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setBarChartMode("monthly");
                }}
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${barChartMode == "yearly" && "active"}`}
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setBarChartMode("yearly");
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

export default BarChart;
