import React from "react";
import TransactionsCard from "./TransactionsCard";
import TransactionsList from "./TransactionsList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/base";
const Transactions = ({ page }) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [lastTransactions, setLastTransactions] = useState([]);
  let [testing, setTesting] = useState("testing axios");
  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      navigate("/login");
    }
  }, [page]);
  // useEffect(() => {
  //   if (token && token != " ") {
  //     fetchData().catch((error) => {
  //       console.error(error);
  //       setTimeout(() => {
  //         sessionStorage.removeItem("token");
  //         sessionStorage.removeItem("img");
  //         sessionStorage.removeItem("pages");
  //         navigate("/login");
  //       }, 1500);
  //     });
  //   }
  // }, [page, token]);

  // async function fetchData() {
  //   let results = await fetch(
  //     "https://thrybe.azurewebsites.net/api/BackofficeUser/LastTransactions",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   results = await results.json();
  //   setLastTransactions(results);
  // }

  useEffect(() => {
    const fetchLastTransactionsList = async () => {
      try {
        const response = await api.get("/LastTransactions");
        setLastTransactions(response.data);
      } catch (err) {
        console.log(err);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      }
    };
    fetchLastTransactionsList();
  });

  return (
    <div className='col-xl-5 col-lg-6 col-md-12 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>Last transaction</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
            />
          </a>
        </div>
        <TransactionsCard />
        {lastTransactions.map((item, index) => (
          <TransactionsList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
