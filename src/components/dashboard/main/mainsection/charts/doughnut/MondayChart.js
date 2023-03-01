import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../EmptyChart";

const MondayChart = () => {
  let [display, setDisplay]= useState(false);
  const [mondayData, setMondayData] = useState({
    androidCount: 0,
    iosCount: 0,
  });
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [mondayData.androidCount, mondayData.iosCount],
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
  let mondayDate = new Date();
  if (currentDay == 0) {
    mondayDate.setDate(mondayDate.getDate() - 6);
  }
  if (currentDay == 1) {
    mondayDate = mondayDate;
  }
  if (currentDay == 2) {
    mondayDate.setDate(mondayDate.getDate() - 1);
  }
  if (currentDay == 3) {
    mondayDate.setDate(mondayDate.getDate() - 2);
  }
  if (currentDay == 4) {
    mondayDate.setDate(mondayDate.getDate() - 3);
  }
  if (currentDay == 5) {
    mondayDate.setDate(mondayDate.getDate() - 4);
  }
  if (currentDay == 6) {
    mondayDate.setDate(mondayDate.getDate() - 5);
  }
  useEffect(() => {
    const fetchMondayDownloads = async () => {
      try {
        const response = await api.post(
          `/GetWeeklyAppDownloadInfo?day=${
            mondayDate.getMonth() + 1
          }/${mondayDate.getDate()}/${mondayDate.getFullYear()}`
        );
        setMondayData(response.data);
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
    fetchMondayDownloads();
  },[]);
  return (
    <>
    {display && <div className='col-lg-8'>
      {mondayData.androidCount && mondayData.iosCount ? (
        <div className='p-3 position-relative'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{mondayData.androidCount + mondayData.iosCount} </h5>
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

export default MondayChart;
