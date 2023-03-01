import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../../api/base";

const Talks = ({ page, setPage, setTalksSection }) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [showResult, setShowResult] = useState(false);
  let [result, setResult] = useState("...");

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
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
  //     "https://thrybe.azurewebsites.net/api/BackofficeUser/AllTalks",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   results = await results.json();
  //   setResult(results);
  //   setTalksSection(true);
  // }

  useEffect(() => {
    const fetchTotalTalks = async () => {
      try {
        const response = await api.post("/AllTalks");
        setResult(response.data);
        setTalksSection(true);
      } catch (err) {
        console.log(err);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 500);
      }
    };
    fetchTotalTalks();
  });
  return (
    <div className='col-xl-3 col-md-6 mb-3'>
      <div className='custom-card'>
        <div className='d-flex align-items-center'>
          <img
            src='./assets/images/allTalksIcon.svg'
            className='img-fluid'
            alt='Talks'
          />
          <div className='ml-4'>
            <h6 className='font-sm2 f-weight-500'>ALL TALKS</h6>
            <h4 className='f-weight-600 mb-0'>{result}</h4>
          </div>
        </div>
        <div className='trend-div mt-3'>
          <img
            src='./assets/images/allTalkChartImg.png'
            className='img-fluid'
            alt=''
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Talks;
