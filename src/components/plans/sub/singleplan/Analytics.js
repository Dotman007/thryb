import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import FewActivities from "./FewActivities";

const Analytics = ({
  setPlansPage,
  planInfo,
  activityList,
  setActivityList,
  subscribers,
  setSubscribers,
  renewed,
  setRenewed,
  expiringSoon,
  setExpiringSoon,
}) => {
  let id = planInfo.id ?? -1;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/SubscriberList?id=${id}`
        );
        setSubscribers(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id) fetchThrybeTalks();
  }, []);
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/ExpiringSubscriberList?id=${id}`
        );
        setExpiringSoon(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id) fetchThrybeTalks();
  }, []);
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/RenewedSubscriberList?id=${id}`
        );
        setRenewed(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (id) fetchThrybeTalks();
  }, []);

  return (
    <div className='col-lg-6 d-flex flex-column flex-grow-1'>
      <div className='store-analytics-div h-100 mb-0'>
        <div style={{ borderBottom: "1px solid #f2f2f2" }}>
          <h6
            className='mb-0 pb-2'
            style={{
              borderBottom: "2px solid #178972",
              width: "25%",
            }}
          >
            Analytics
          </h6>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-4'>
            <div className='d-flex align-items-center'>
              <img
                src='./assets/images/subscribers-icon.svg'
                className='img-fluid'
                alt='User'
              />
              <div className='ml-3'>
                <h6 className='font-sm2 f-weight-500'>SUBSCRIBERS</h6>
                <h6 className='f-weight-600 mb-0'>{subscribers}</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='d-flex align-items-center'>
              <img
                src='./assets/images/expiring-soon-icon.svg'
                className='img-fluid'
                alt='User'
              />
              <div className='ml-3'>
                <h6 className='font-sm2 f-weight-500'>EXPIRING SOON</h6>
                <h6 className='f-weight-600 mb-0'>{expiringSoon}</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='d-flex align-items-center'>
              <img
                src='./assets/images/renewed-icon.svg'
                className='img-fluid'
                alt='User'
              />
              <div className='ml-3'>
                <h6 className='font-sm2 f-weight-500'>RENEWED</h6>
                <h6 className='f-weight-600 mb-0'>{renewed}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='users-table-div mt-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <h6 className='mb-0'>USAGE</h6>
            <a
              href='#'
              className='f-weight-600 font-sm2 text-dark'
              onClick={(e) => {
                e.preventDefault();
                setPlansPage("single-2");
              }}
            >
              View all
            </a>
          </div>
          <div className='activity-timeline position-relative mt-4'>
            <div
              className='demarcator position-absolute'
              style={{
                width: "2px",
                height: "100%",
                top: "0",
                left: "18%",
                backgroundColor: "#e6e6e6",
              }}
            ></div>
            {activityList.map((item, index) => (
              <FewActivities
                setPlansPage={setPlansPage}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
