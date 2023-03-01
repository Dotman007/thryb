import React, { Component, useState, useEffect } from "react";
import BarChart from "./barchart/BarChart";
import DoughnutChart from "./doughnut/Doughnut";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/base";

const Charts = ({ page, setBarChartSection }) => {
  let myDate = new Date();
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [showResult, setShowResult] = useState(false);
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [5000, 12000],
        backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
        borderWidth: 1,
      },
    ],
  });
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });
  const [dailyAppUsage, setDailyAppUsage] = useState({
    dailyAppUsage: [],
  });
  let [dailyAppUsageLabels, setDailyAppUsageLabels] = useState("");
  let [dailyAppUsageHits, setDailyAppUsageHits] = useState("");
  let [dailyAppUsageVisitors, setDailyAppUsageVisitors] = useState("");
  let [monthlyDownloads, setMonthlyDownloads] = useState("");
  const [barChartData, setBarChartData] = useState({
    labels: [...dailyAppUsageLabels],
    datasets: [
      {
        label: null,
        data: [...dailyAppUsageHits],
        backgroundColor: "#842A83",
        borderWidth: 1,
      },
      {
        label: null,
        data: [...dailyAppUsageVisitors],
        backgroundColor: "rgba(132, 42, 131, 0.45)",
        borderWidth: 1,
      },
    ],
  });
  const [barChartOptions, setBarChartOptions] = useState({
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 0,
        max: 10,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  });
  const [doughnutChartMode, setDoughnutChartMode] = useState(
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
  useEffect(() => {
    setToken(
      localStorage.getItem("token") || sessionStorage.getItem("token") || " "
    );
  }, [page]);
  useEffect(() => {
    if (token && token != " ") {
      fetchDailyAppUsage().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchDailyAppUsage() {
    let results = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/GetDailyAppUsage",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    results = await results.json();
    setDailyAppUsage(results);
    setBarChartSection(true);
  }

  useEffect(() => {
    let labels = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.time;
    });
    let hits = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.hitCount;
    });
    let visitors = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.visitorCount;
    });
    let min = Math.min(...visitors, ...hits);
    let max = Math.max(...visitors, ...hits);
    setDailyAppUsageLabels(labels);
    setDailyAppUsageHits(hits);
    setDailyAppUsageVisitors(visitors);
    setBarChartData({
      labels: [...labels],
      datasets: [
        {
          label: null,
          data: [...visitors],
          backgroundColor: "#842A83",
          borderWidth: 1,
        },
        {
          label: null,
          data: [...hits],
          backgroundColor: "rgba(132, 42, 131, 0.45)",
          borderWidth: 1,
        },
      ],
    });
    setBarChartOptions({
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: false,
          min: 0,
          max: max,
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, [dailyAppUsage]);

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='row mt-3'>
            <BarChart
              barChartData={barChartData}
              barChartOptions={barChartOptions}
              dailyAppUsage={dailyAppUsage}
            />

            <DoughnutChart
              doughnutChartData={doughnutChartData}
              doughnutChartOptions={doughnutChartOptions}
              doughnutChartMode={doughnutChartMode}
              setDoughnutChartMode={setDoughnutChartMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
