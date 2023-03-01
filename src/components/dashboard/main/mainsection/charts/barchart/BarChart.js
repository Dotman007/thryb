import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import EmptyChart from "../EmptyChart";
import MonthlyAppUsage from "./MonthlyAppUsage";
import YearlyAppUsage from "./YearlyAppUsage";
import DailyAppUsage from "./DailyAppUsage";
const BarChart = ({ barChartData, barChartOptions, dailyAppUsage }) => {
  const [chartMode, setChartMode] = useState("daily");
  return (
    <div className='col-xl-7 col-12 d-flex flex-column flex-grow-1 mb-3 charts'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>App Usage</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
            />
          </a>
        </div>
        <div className='mt-3 d-flex align-items-center'>
          <div className='bgColored-header'>All transactions</div>
          <div className='hits ml-3'>
            <div></div>
            <h6 className='mb-0'>Hits</h6>
          </div>
          <div className='visitors ml-3'>
            <div></div>
            <h6 className='mb-0'>Visitors</h6>
          </div>
        </div>
        <div className='chart-area mt-3'>
          {chartMode == "daily" && <DailyAppUsage />}
          {chartMode == "monthly" && <MonthlyAppUsage />}
          {chartMode == "yearly" && <YearlyAppUsage />}
        </div>
        <div className='period-filter mt-4'>
          <ul className='nav nav-pills period-filter-links'>
            <li className='nav-item' onClick={() => setChartMode("daily")}>
              <p className={`nav-link ${chartMode == "daily" && "active"}`}>
                Day
              </p>
            </li>
            {/* <li className='nav-item' onClick={() => setChartMode("monday")}>
              <p
                className={`nav-link ${
                  chartMode != "monthly" &&
                  chartMode != "yearly" &&
                  chartMode != "daily" &&
                  "active"
                }`}
              >
                Week
              </p>
            </li> */}
            <li className='nav-item' onClick={() => setChartMode("monthly")}>
              <p className={`nav-link ${chartMode == "monthly" && "active"}`}>
                Month
              </p>
            </li>
            <li className='nav-item' onClick={() => setChartMode("yearly")}>
              <p className={`nav-link ${chartMode == "yearly" && "active"}`}>
                Year
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
