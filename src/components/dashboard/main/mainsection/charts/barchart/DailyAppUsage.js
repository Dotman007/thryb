import React, { Component, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import api from "../../../../../api/base";
import EmptyChart from "../EmptyChart";

const DailyAppUsage = () => {
  let [display, setDisplay]= useState(false);
  let myDate = new Date();
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  const [dailyAppUsage, setDailyAppUsage] = useState({
    dailyAppUsage: [],
  });
  let [dailyAppUsageLabels, setDailyAppUsageLabels] = useState("");
  let [dailyAppUsageHits, setDailyAppUsageHits] = useState("");
  let [dailyAppUsageVisitors, setDailyAppUsageVisitors] = useState("");
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

  useEffect(() => {
    setToken(
      localStorage.getItem("token") || sessionStorage.getItem("token") || " "
    );
  }, []);

  //   }
  useEffect(() => {
    const fetchMonthlyAppUsage = async () => {
      try {
        const response = await api.post(
          `/GetDailyAppUsage?date=${
            myDate.getMonth() + 1
          }/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setDailyAppUsage(response.data);
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMonthlyAppUsage();
  }, []);

  useEffect(() => {
    let labels = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.time || [];
    });
    let hits = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.hitCount || "";
    });
    let visitors = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.visitorCount || "";
    });
    //   let min = Math.min(...visitors, ...hits);
    let max = Math.max(...visitors, ...hits) || 0;
    setDailyAppUsageLabels(labels);
    setDailyAppUsageHits(hits);
    setDailyAppUsageVisitors(visitors);
    setBarChartData({
      labels: [...labels] || "",
      datasets: [
        {
          label: null,
          data: [...visitors] || 0,
          backgroundColor: "#842A83",
          borderWidth: 1,
        },
        {
          label: null,
          data: [...hits] || 0,
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
    <>
      {display && <>
        {dailyAppUsage.dailyAppUsage > 1 ? (
          <Bar data={barChartData} options={barChartOptions} />
        ) : (
          <EmptyChart />
        )}
      </>}
      {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default DailyAppUsage;
