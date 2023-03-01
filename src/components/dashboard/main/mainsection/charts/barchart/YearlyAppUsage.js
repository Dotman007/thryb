import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import EmptyChart from "../EmptyChart";
import api from "../../../../../api/base";

const YearlyAppUsage = () => {
  let [display, setDisplay]= useState(false);
  let myDate = new Date();
  const [yearlyAppUsage, setYearlyAppUsage] = useState({
    duration: "",
    visitorCount: 0,
    hitCount: 0,
  });
  //   const max = Math.max(yearlyAppUsage.hitCount, yearlyAppUsage.visitorCount);
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
    const fetchyearlyAppUsage = async () => {
      try {
        const response = await api.post(
          `/GetYearlyAppUsage?date=${
            myDate.getMonth() + 1
          }/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setYearlyAppUsage({
          duration: response.data.duration,
          visitorCount: response.data.visitorCount,
          hitCount: response.data.hitCount,
        });
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchyearlyAppUsage();
  },[]);

  useEffect(() => {
    setBarChartData({
      labels: [yearlyAppUsage.duration],
      datasets: [
        {
          label: null,
          data: [yearlyAppUsage.hitCount],
          backgroundColor: "#842A83",
          borderWidth: 1,
        },
        {
          label: null,
          data: [yearlyAppUsage.visitorCount],
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
          max: Math.max(yearlyAppUsage.hitCount, yearlyAppUsage.visitorCount),
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
  }, [yearlyAppUsage]);
  return (
    <>
      {display && <>
        {yearlyAppUsage.hitCount && yearlyAppUsage.visitorCount ? (
          <Bar data={barChartData} options={barChartOptions} />
        ) : (
          <EmptyChart />
        )}
      </>}
      {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default YearlyAppUsage;
