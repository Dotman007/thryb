import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";

let TuesdayChart = () => {
  let [display, setDisplay]= useState(false);
  let [tuesdayData, setTuesdayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  let [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [tuesdayData.androidCount, tuesdayData.iosCount],
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
  let tuesdayDate = new Date();
  if (currentDay == 0) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 5);
  }
  if (currentDay == 1) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 6);
  }
  if (currentDay == 2) {
    tuesdayDate = tuesdayDate;
  }
  if (currentDay == 3) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 1);
  }
  if (currentDay == 4) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 2);
  }
  if (currentDay == 5) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 3);
  }
  if (currentDay == 6) {
    tuesdayDate.setDate(tuesdayDate.getDate() - 4);
  }
  useEffect(() => {
    let fetchTuesdayDownloads = async () => {
      try {
        let response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            tuesdayDate.getMonth() + 1
          }/${tuesdayDate.getDate()}/${tuesdayDate.getFullYear()}`
        );
        setTuesdayData(tuesdayDate);
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
      } catch (err) {
        console.log(err);
      }
    };
    fetchTuesdayDownloads();
  },[]);
  return (
    <>
    {display && <div className='col-lg-8'>
      {tuesdayData.androidCount && tuesdayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{tuesdayData.androidCount + tuesdayData.iosCount} </h5>
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

export default TuesdayChart;
