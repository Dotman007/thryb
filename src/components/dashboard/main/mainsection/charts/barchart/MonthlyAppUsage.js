import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import EmptyChart from "../EmptyChart";
import api from "../../../../../api/base";

const MonthlyAppUsage = () => {
  let [display, setDisplay]= useState(false);
  let myDate = new Date();
  const [monthlyAppUsage, setMonthlyAppUsage] = useState({
    duration: "",
    visitorCount: 0,
    hitCount: 0,
  });
  //   const max = Math.max(monthlyAppUsage.hitCount, monthlyAppUsage.visitorCount);
  const [barChartData, setBarChartData] = useState({
    labels: [""],
    datasets: [
      {
        label: null,
        data: [0],
        backgroundColor: "#842A83",
        borderWidth: 1,
      },
      {
        label: null,
        data: [0],
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
    const fetchMonthlyAppUsage = async () => {
      try {
        const response = await api.post(
          `/GetMonthlyAppUsage?date=${
            myDate.getMonth() + 1
          }/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setMonthlyAppUsage({
          duration: response.data.duration,
          visitorCount: response.data.visitorCount,
          hitCount: response.data.hitCount,
        });
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMonthlyAppUsage();
  }, []);
  useEffect(() => {
    setBarChartData({
      labels: [monthlyAppUsage.duration],
      datasets: [
        {
          label: null,
          data: [monthlyAppUsage.hitCount],
          backgroundColor: "#842A83",
          borderWidth: 1,
        },
        {
          label: null,
          data: [monthlyAppUsage.visitorCount],
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
          max: Math.max(monthlyAppUsage.hitCount, monthlyAppUsage.visitorCount),
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
  }, [monthlyAppUsage]);
  return (
    <>
      {display && <>
        {monthlyAppUsage.hitCount || monthlyAppUsage.visitorCount ? (
          <Bar data={barChartData} options={barChartOptions} />
        ) : (
          <EmptyChart />
        )}
      </>}
      {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default MonthlyAppUsage;
