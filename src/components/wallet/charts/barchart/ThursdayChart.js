import React from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";

const ThursdayChart = () => {
  let [display, setDisplay]= useState(false);
  const [subscriptions, setSubscriptions] = useState(0);
  const [seeks, setSeeks] = useState(0);
  const [boosts, setBoosts] = useState(0);
  const [barChartData, setBarChartData] = useState({
    labels: ["Monday"],
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
        backgroundColor: "#633062",
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
        max: 0,
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
    let myDate = new Date();
    let currentDate = myDate.getDate();
    let currentDay = myDate.getDay();
    let thursdayDate = new Date();
    if (currentDay == 0) {
      thursdayDate.setDate(thursdayDate.getDate() - 3);
    }
    if (currentDay == 1) {
      thursdayDate.setDate(thursdayDate.getDate() - 4);
    }
    if (currentDay == 2) {
      thursdayDate.setDate(thursdayDate.getDate() - 5);
    }
    if (currentDay == 3) {
      thursdayDate.setDate(thursdayDate.getDate() - 6);
    }
    if (currentDay == 4) {
      thursdayDate = thursdayDate;
    }
    if (currentDay == 5) {
      thursdayDate.setDate(thursdayDate.getDate() - 1);
    }
    if (currentDay == 6) {
      thursdayDate.setDate(thursdayDate.getDate() - 2);
    }

    const fetchThursdayData = async () => {
      try {
        const response = await api.get(
          `/GetWeeklyPaymentTransaction?date=${
            thursdayDate.getMonth() + 1
          }/${thursdayDate.getDate()}/${thursdayDate.getFullYear()}`
        );
        setBoosts(response.data.boostedProfile);
        setSubscriptions(response.data.subscription);
        setSeeks(response.data.thrybeSeek);
        setBarChartData({
          labels: ["Thursday"],
          datasets: [
            {
              label: null,
              data: [response.data.boostedProfile],
              backgroundColor: "#842A83",
              borderWidth: 1,
            },
            {
              label: null,
              data: [response.data.thrybeSeek],
              backgroundColor: "#633062",
              borderWidth: 1,
            },
            {
              label: null,
              data: [response.data.subscription],
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
              max: Math.max(
                response.data.boostedProfile || 0,
                response.data.thrybeSeek || 0,
                response.data.subscription || 0
              ),
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
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchThursdayData();
  },[]);
  return (
    <>
      {display && <>
        {seeks > 0 || boosts > 0 || subscriptions > 0 ? (
          <Bar data={barChartData} options={barChartOptions} />
        ) : (
          <EmptyChart />
        )}
      </>}
      {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default ThursdayChart;
