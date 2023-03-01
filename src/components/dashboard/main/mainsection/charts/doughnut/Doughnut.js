import React,{useState} from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import MondayChart from "./MondayChart";
import TuesdayChart from "./TuesdayChart";
import SundayChart from "./SundayChart";
import WednesdayChart from "./WednesdayChart";
import ThursdayChart from "./ThursdayChart";
import FridayChart from "./FridayChart";
import SaturdayChart from "./SaturdayChart";
import YearlyAppDownloads from "./YearlyAppDownloads";
import MonthlyAppDownloads from "./MonthlyAppDownloads";

const DoughnutChart = ({
  doughnutChartData,
  doughnutChartOptions,
  doughnutChartMode,
  setDoughnutChartMode,
}) => {
  const [showSpinner, setShowspinner]= useState(true);
  return (
    <div className='col-xl-5 col-12 d-flex flex-column flex-grow-1 mb-3 '>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>App Downloads</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
            />
          </a>
        </div>
        <div className='chart-area mt-4 d-flex flex-column justify-content-center'>
          <div className='row align-items-center'>
            {doughnutChartMode == "monday" && <MondayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "tuesday" && <TuesdayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "wednesday" && <WednesdayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "thursday" && <ThursdayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "friday" && <FridayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "saturday" && <SaturdayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "sunday" && <SundayChart showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "yearly" && <YearlyAppDownloads showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {doughnutChartMode == "monthly" && <MonthlyAppDownloads showSpinner={showSpinner} setShowspinner={setShowspinner}/>}
            {/* {showSpinner && <div className='spinner bg'></div>} */}
            {<div className='col-lg-4'>
              <div className='d-flex flex-column'>
                <div className='visitors align-items-center mb-2'>
                  <div style={{ height: "25px", width: "25px" }}></div>
                  &nbsp;&nbsp;
                  <h6 className='mb-0'>Android</h6>
                </div>
                <div className='hits align-items-center mb-2'>
                  <div style={{ height: "25px", width: "25px" }}></div>
                  &nbsp;&nbsp;
                  <h6 className='mb-0'>IOS</h6>
                </div>
              </div>
            </div>}
          </div>
          {doughnutChartMode != "monthly" && doughnutChartMode != "yearly" && (
            <div className='row mt-3 mb-4'>
              <div className='col-12'>
                <ul className='nav nav-tabs pie-days'>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("monday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "monday" && "active"
                      }`}
                    >
                      Mon
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("tuesday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "tuesday" && "active"
                      }`}
                    >
                      Tue
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("wednesday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "wednesday" && "active"
                      }`}
                    >
                      Wed
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("thursday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "thursday" && "active"
                      }`}
                    >
                      Thu
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("friday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "friday" && "active"
                      }`}
                    >
                      Fri
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("saturday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "saturday" && "active"
                      }`}
                    >
                      Sat
                    </p>
                  </li>
                  <li
                    className='nav-item'
                    onClick={(e) => {
                      e.preventDefault();
                      setDoughnutChartMode("sunday");
                    }}
                  >
                    <p
                      className={`nav-link ${
                        doughnutChartMode == "sunday" && "active"
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
            <li
              className='nav-item'
              onClick={(e) => {
                e.preventDefault();
                setDoughnutChartMode("monday");
              }}
            >
              <p
                className={`nav-link ${
                  doughnutChartMode != "yearly" &&
                  doughnutChartMode != "monthly" &&
                  "active"
                }`}
                href='#'
              >
                Week
              </p>
            </li>
            <li
              className='nav-item'
              onClick={(e) => {
                e.preventDefault();
                setDoughnutChartMode("monthly");
              }}
            >
              <p
                className={`nav-link ${
                  doughnutChartMode == "monthly" && "active"
                }`}
                href='#'
              >
                Month
              </p>
            </li>
            <li
              className='nav-item'
              onClick={(e) => {
                e.preventDefault();
                setDoughnutChartMode("yearly");
              }}
            >
              <p
                className={`nav-link ${
                  doughnutChartMode == "yearly" && "active"
                }`}
                href='#'
              >
                Year
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
