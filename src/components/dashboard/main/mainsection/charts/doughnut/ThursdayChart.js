import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";

let ThursdayChart = () => {
  let [display, setDisplay]= useState(false);
  let [thursdayData, setThursdayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  let [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [thursdayData.androidCount, thursdayData.iosCount],
        backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
        borderWidth: 1,
      },
    ],
  });
  let [doughnutChartOptions, setDoughnutChartOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });
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

  useEffect(() => {
    let fetchThursdayDownloads = async () => {
      try {
        let response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            thursdayDate.getMonth() + 1
          }/${thursdayDate.getDate()}/${thursdayDate.getFullYear()}`
        );
        setThursdayData(response.data);
        localStorage.setItem("date", thursdayDate);
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
    fetchThursdayDownloads();
  },[]);
  return (
    <>
      {display && <div className='col-lg-8'>
        {thursdayData.androidCount && thursdayData.iosCount ? (
          <div className='p-3 position-relative'>
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
            <div className='position-absolute no-of-downloads'>
              <h5>{thursdayData.androidCount + thursdayData.iosCount} </h5>
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

export default ThursdayChart;
