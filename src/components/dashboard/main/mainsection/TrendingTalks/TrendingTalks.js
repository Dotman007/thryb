import React, { useState } from "react";
import TrendingTalksList from "./TrendingTalksList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/base";
const TrendingTalks = ({ page, setTrendingTalksSection }) => {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(true);
  let [token, setToken] = useState(" ");
  let [trendingTalks, setTrendingTalks] = useState([]);
  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    const fetchTrendingTalksList = async () => {
      try {
        const response = await api.get("/TrendingTalks");
        setTrendingTalks(response.data);
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
    fetchTrendingTalksList();
  });

  return (
    <>
      <div className='col-xl-4 col-md-12 mb-3 d-flex flex-column flex-grow-1'>
        <div className='custom-card h-100'>
          <div className='d-flex justify-content-between'>
            <h5>Trending Talks</h5>
            <a href='#'>
              <img
                src='./assets/images/right-pointer.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
          <ul className='p-0 mt-3' style={{ listStyleType: "none" }}>
            {trendingTalks.length >= 1 ? (
              trendingTalks
                .slice(0, 5)
                .map((item, index) => (
                  <TrendingTalksList key={index} item={item} />
                ))
            ) : (
              <div className='spinner bg'></div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrendingTalks;
