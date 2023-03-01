import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";
let SaturdayChart = () => {
  let [display, setDisplay]= useState(false);
  let [saturdayData, setSaturdayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  let [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [saturdayData.androidCount, saturdayData.iosCount],
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

  let saturdayDate = new Date();
  if (currentDay == 0) {
    saturdayDate.setDate(saturdayDate.getDate() - 1);
  }
  if (currentDay == 1) {
    saturdayDate.setDate(saturdayDate.getDate() - 2);
  }
  if (currentDay == 2) {
    saturdayDate.setDate(saturdayDate.getDate() - 3);
  }
  if (currentDay == 3) {
    saturdayDate.setDate(saturdayDate.getDate() - 4);
  }
  if (currentDay == 4) {
    saturdayDate.setDate(saturdayDate.getDate() - 5);
  }
  if (currentDay == 5) {
    saturdayDate.setDate(saturdayDate.getDate() - 6);
  }
  if (currentDay == 6) {
    saturdayDate = saturdayDate;
  }
  useEffect(() => {
    let fetchSaturdayDownloads = async () => {
      try {
        let response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            saturdayDate.getMonth() + 1
          }/${saturdayDate.getDate()}/${saturdayDate.getFullYear()}`
        );
        setSaturdayData(response.data);
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
    fetchSaturdayDownloads();
  },[]);
  return (
   <> 
    {display && <div className='col-lg-8'>
      {saturdayData.androidCount && saturdayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{saturdayData.androidCount + saturdayData.iosCount} </h5>
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

export default SaturdayChart;
