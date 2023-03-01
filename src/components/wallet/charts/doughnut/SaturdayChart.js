import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";

const SaturdayChart = () => {
  let [display, setDisplay]= useState(false);
  const [purchases, setPurchases] = useState(0);
  const [exchanges, setExchanges] = useState(0);
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Purchases", "Exchanges"],
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
    const fetchSaturdayData = async () => {
      try {
        const response = await api.get(
          `/GetWeeklyTokenTransaction?date=${
            saturdayDate.getMonth() + 1
          }/${saturdayDate.getDate()}/${saturdayDate.getFullYear()}`
        );
        setPurchases(response.data.purchase);
        setExchanges(response.data.exchange);
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSaturdayData();
  },[]);
  useEffect(() => {
    setDoughnutChartData({
      labels: ["Purchases", "Exchanges"],
      datasets: [
        {
          label: null,
          data: [purchases, exchanges],
          backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
          borderWidth: 1,
        },
      ],
    });
  }, [purchases, exchanges]);
  return (
    <>
      {display && <div className='row align-items-center mt-4'>
        <div className='col-lg-7'>
          <div className='p-3 position-relative'>
            {purchases > 0 || exchanges > 0 ? (
              <Doughnut
                data={doughnutChartData}
                options={doughnutChartOptions}
              />
            ) : (
              <EmptyChart />
            )}
          </div>
        </div>
        <div className='col-lg-5'>
          <div>
            <p className='f-weight-600 font-sm mb-0'>ALL TOKEN TRANSACTIONS</p>
            <h3 className='f-weight-600'>{purchases + exchanges}</h3>

            <hr />
          </div>
          <div className='d-flex flex-column'>
            <div className='visitors align-items-center mb-2'>
              <div style={{ height: "25px", width: "25px" }}></div>
              &nbsp;&nbsp;
              <h6 className='mb-0'>Purchases</h6>
            </div>
            <div className='hits align-items-center mb-2'>
              <div style={{ height: "25px", width: "25px" }}></div>
              &nbsp;&nbsp;
              <h6 className='mb-0'>Exchanges</h6>
            </div>
          </div>
        </div>
      </div>}
      {!display && <div className='spinner bg'></div>}
    </>
  );
};

export default SaturdayChart;
