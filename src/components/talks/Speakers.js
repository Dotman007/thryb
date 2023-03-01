import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
const Speakers = ({ id, speakers, setSpeakers }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/ThrybeTalkSpeakers?id=${id}`
        );
        setSpeakers(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchThrybeTalks();
  }, []);
  return (
    <>
      <div>
        {speakers && speakers.length == 1 && (
          <div>
            <img
              className='img-fluid h-75 w-25 talks-speakers-single talks-img'
              src={speakers[0].speakerImage || "assets/images/unknown.jpg"}
              alt='talkauthorPic'
            />
            <span className='font-sm f-weight-700 w-75 mb-4 talks-sm'>
              {speakers[0].speakerName || "not available"}
            </span>
          </div>
        )}
        {speakers.length > 1 &&
          speakers.length < 4 &&
          speakers.map((item, index) => (
            <img
              src={item.speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-img'
              key={index}
            />
          ))}
        {speakers.length > 3 && (
          <div className='ml-3'>
            <img
              src={speakers[0].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-speakers-multiple'
            />
            <img
              src={speakers[1].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-speakers-multiple'
            />
            <img
              src={speakers[2].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-speakers-multiple'
            />
            <img
              src={speakers[3].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-speakers-multiple'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Speakers;
