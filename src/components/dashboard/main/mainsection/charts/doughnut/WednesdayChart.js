import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";

const WednesdayChart = () => {
  let [display, setDisplay]= useState(false);
  const [wednesdayData, setWednesdayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [wednesdayData.androidCount, wednesdayData.iosCount],
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
  let myDate = new Date();
  const currentDate = myDate.getDate();
  const currentDay = myDate.getDay();
  let wednesdayDate = new Date();
  if (currentDay == 0) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 4);
  }
  if (currentDay == 1) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 5);
  }
  if (currentDay == 2) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 6);
  }
  if (currentDay == 3) {
    wednesdayDate = wednesdayDate;
  }
  if (currentDay == 4) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 1);
  }
  if (currentDay == 5) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 2);
  }
  if (currentDay == 6) {
    wednesdayDate.setDate(wednesdayDate.getDate() - 3);
  }
  useEffect(() => {
    const fetchWednesdayDownloads = async () => {
      try {
        const response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            wednesdayDate.getMonth() + 1
          }/${wednesdayDate.getDate()}/${wednesdayDate.getFullYear()}`
        );
        setWednesdayData(response.data);
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
    fetchWednesdayDownloads();
  },[]);
  return (
    <>
    {display && <div className='col-lg-8'>
      {wednesdayData.androidCount && wednesdayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{wednesdayData.androidCount + wednesdayData.iosCount} </h5>
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

export default WednesdayChart;
