import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import EmptyChart from "../EmptyChart";
import api from "../../../../../api/base";

const YearlyAppDownloads = ({showSpinner, setShowspinner}) => {
  let [display, setDisplay]= useState(false);
  let [yearlyDownloads, setYearlyDownloads] = useState("");
  let myDate = new Date();
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [0, 0],
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
    const fetchYearlyDownloads = async () => {
      try {
        const response = await api.post(
          `/GetYearlyAppDownloadInfo?day=${myDate.getMonth()}/${myDate.getDate()}/${myDate.getFullYear()}`
        );
        setYearlyDownloads(response.data);
        setDoughnutChartData({
          labels: ["Android", "IOS"],
          datasets: [
            {
              label: null,
              data: [response?.data?.androidCount || 0, response?.data?.iosCount || 0],
              backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
              borderWidth: 1,
            },
          ],
        });
      setShowspinner(false);
      setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYearlyDownloads();
  },[]);
  return (
    <>
    {display && <div className={`col-lg-8`}>
      {(yearlyDownloads.androidCount || yearlyDownloads.iosCount) ? (
        <div className='p-3 position-relative'>
          
          <>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='position-absolute no-of-downloads'>
            <h5>{yearlyDownloads.androidCount + yearlyDownloads.iosCount} </h5>
            <p>ALL DOWNLOADS</p>
          </div>
          </>
        </div>
      ) : (
        <EmptyChart />
      )}
    </div>}
    {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default YearlyAppDownloads;
