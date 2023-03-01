import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";
let FridayChart = () => {
  let [display, setDisplay]= useState(false);
  let [fridayData, setFridayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  let [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [fridayData.androidCount, fridayData.iosCount],
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
  let fridayDate = new Date();
  if (currentDay == 0) {
    fridayDate.setDate(fridayDate.getDate() - 2);
  }
  if (currentDay == 1) {
    fridayDate.setDate(fridayDate.getDate() - 3);
  }
  if (currentDay == 2) {
    fridayDate.setDate(fridayDate.getDate() - 4);
  }
  if (currentDay == 3) {
    fridayDate.setDate(fridayDate.getDate() - 5);
  }
  if (currentDay == 4) {
    fridayDate.setDate(fridayDate.getDate() - 6);
  }
  if (currentDay == 5) {
    fridayDate = fridayDate;
  }
  if (currentDay == 6) {
    fridayDate.setDate(fridayDate.getDate() - 1);
  }


  useEffect(() => {
    let fetchFridayDownloads = async () => {
      try {
        let response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            fridayDate.getMonth() + 1
          }/${fridayDate.getDate()}/${fridayDate.getFullYear()}`
        );
        setFridayData(response.data);
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
    fetchFridayDownloads();
  },[]);
  return (
    <>
    {display && <div className='col-lg-8'>
      {fridayData.androidCount && fridayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{fridayData.androidCount + fridayData.iosCount} </h5>
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

export default FridayChart;
