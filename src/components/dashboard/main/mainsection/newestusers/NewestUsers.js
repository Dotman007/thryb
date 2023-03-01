import React, { useState, useEffect } from "react";
import NewestUsersList from "./NewestUsersList";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/base";

const NewestUsers = ({ page, setPage, setNewestUsersSection }) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([]);
  let [showResult, setShowResult] = useState(0);

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    const fetchNewestUsersList = async () => {
      try {
        const response = await api.get("/NewestUser");
        setResult(response.data);
        setNewestUsersSection(true);
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
    fetchNewestUsersList();
  });

  return (
    <div className='col-xl-3 col-lg-6 col-md-12 px-0 p-custom col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>Newest Users</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
            />
          </a>
        </div>
        {
          <ul className='p-0 mt-3' style={{ listStyleType: "none" }}>
            {result.length >= 1 ? (
              result
                .slice(0, 6)
                .map((item, index) => (
                  <NewestUsersList key={index} index={index} item={item} showResult={showResult} setShowResult={setShowResult} />
                ))
            ) : (
              <div className='spinner bg'></div>
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export default NewestUsers;
