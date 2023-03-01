import React, { Component, useState } from "react";
import BarChart from "./barchart/BarChart";
import DoughnutChart from "./doughnut/DoughnutChart";
const WalletCharts = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const [barChartData, setBarChartData] = useState({
    labels: [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
    ],
    datasets: [
      {
        label: null,
        data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
        backgroundColor: "#842A83",
        borderWidth: 1,
      },
      {
        label: null,
        data: [8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000],
        backgroundColor: "#633062",
        borderWidth: 1,
      },
      {
        label: null,
        data: [15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000],
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
        min: 100,
        max: 16000,
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
  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='row mt-3'>
            <BarChart
              barChartData={barChartData}
              barChartOptions={barChartOptions}
              page={page}
              setPage={setPage}
              showBtn={showBtn}
              setShowBtn={setShowBtn}
              walletPage={walletPage}
              setWalletPage={setWalletPage}
            />
            <DoughnutChart
              doughnutChartData={doughnutChartData}
              doughnutChartOptions={doughnutChartOptions}
              page={page}
              setPage={setPage}
              showBtn={showBtn}
              setShowBtn={setShowBtn}
              walletPage={walletPage}
              setWalletPage={setWalletPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCharts;
