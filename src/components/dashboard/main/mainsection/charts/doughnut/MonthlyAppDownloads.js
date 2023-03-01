import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import EmptyChart from "../EmptyChart";
import api from "../../../../../api/base";

const MonthlyAppDownloads = () => {
  let [display, setDisplay]= useState(false);
  let [monthlyDownloads, setMonthlyDownloads] = useState("");
  let myDate = new Date();
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
  useEffect(() => {
    const fetchMonthlyDownloads = async () => {
      try {
        const response = await api.post(
          `/GetMonthlyAppDownloadInfo?day=${
            myDate.getMonth() + 1
          }/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setMonthlyDownloads(response.data);
        setDoughnutChartData({
          labels: ["Android", "IOS"],
          datasets: [
            {
              label: null,
              data: [response.data.androidCount, response.data.iosCount],
              backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
              borderWidth: 1,
            },
          ],
        });
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMonthlyDownloads();
  },[]);
  return (
    <>
    {display && <div className='col-lg-8'>
      {monthlyDownloads.androidCount && monthlyDownloads.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{monthlyDownloads.androidCount + monthlyDownloads.iosCount}</h5>
            <p>ALL DOWNLOADS</p>
          </div>
        </div>
      ) : (
        <EmptyChart />
      )}
    </div>}
    {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default MonthlyAppDownloads;
