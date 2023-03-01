import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";

const MondayChart = () => {
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
    const fetchMondayData = async () => {
      try {
        const response = await api.get(
          `/GetWeeklyTokenTransaction?date=${
            mondayDate.getMonth() + 1
          }/${mondayDate.getDate()}/${mondayDate.getFullYear()}`
        );
        setPurchases(response.data.purchase);
        setExchanges(response.data.exchange);
        setDisplay(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMondayData();
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

export default MondayChart;
