import React from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";

const MonthlyChart = () => {
  const [subscriptions, setSubscriptions] = useState(0);
  const [seeks, setSeeks] = useState(0);
  const [boosts, setBoosts] = useState(0);
  const [barChartData, setBarChartData] = useState({
    labels: ["Monthly"],
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
  let [display, setDisplay]= useState(false);

  useEffect(() => {
    let myDate = new Date();
    const fetchMonthlyData = async () => {
      try {
        const response = await api.get(
          `/GetMonthlyPaymentTransaction?date=${
            myDate.getMonth() + 1
          }/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setBoosts(response.data.boostedProfile);
        setSubscriptions(response.data.subscription);
        setSeeks(response.data.thrybeSeek);
        setBarChartData({
          labels: [response.data.duration],
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
    fetchMonthlyData();
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

export default MonthlyChart;
