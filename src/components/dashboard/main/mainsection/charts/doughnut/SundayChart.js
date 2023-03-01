import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";

let SundayChart = () => {
  let [display, setDisplay]= useState(false);
  let [sundayData, setSundayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  let [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [sundayData.androidCount, sundayData.iosCount],
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
  let sundayDate = new Date();
  if (currentDay == 0) {
    sundayDate = sundayDate;
  }
  if (currentDay == 1) {
    sundayDate.setDate(sundayDate.getDate() - 1);
  }
  if (currentDay == 2) {
    sundayDate.setDate(sundayDate.getDate() - 2);
  }
  if (currentDay == 3) {
    sundayDate.setDate(sundayDate.getDate() - 3);
  }
  if (currentDay == 4) {
    sundayDate.setDate(sundayDate.getDate() - 4);
  }
  if (currentDay == 5) {
    sundayDate.setDate(sundayDate.getDate() - 5);
  }
  if (currentDay == 6) {
    sundayDate.setDate(sundayDate.getDate() - 6);
  }

  useEffect(() => {
    let fetchSundayDownloads = async () => {
      try {
        let response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            sundayDate.getMonth() + 1
          }/${sundayDate.getDate()}/${sundayDate.getFullYear()}`
        );
        setSundayData(response.data);
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
    fetchSundayDownloads();
  },[]);
  return (
    <>
      {display && <div className='col-lg-8'>
      {sundayData.androidCount && sundayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{sundayData.androidCount + sundayData.iosCount} </h5>
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

export default SundayChart;
